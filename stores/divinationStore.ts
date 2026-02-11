import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DivinationState, YaoType, DivinationRecord } from "@/types";
import { saveDivinationRecord, deleteDivinationRecord, getDivinationRecords } from "@/lib/supabase/db";

interface DivinationStore extends DivinationState {
  // 动作
  startDivination: () => void;
  addLine: (line: YaoType) => void;
  resetDivination: () => void;
  setQuestion: (question: string) => void;
  setAiInterpretation: (interpretation: string) => void;
  setRecordId: (id: string) => void;
  // 历史记录
  history: DivinationRecord[];
  addToHistory: (record: DivinationRecord) => Promise<string>;
  removeFromHistory: (id: string) => Promise<void>;
  clearHistory: () => void;
  syncWithSupabase: () => Promise<void>;
}

const initialState: DivinationState = {
  currentLines: [],
  currentStep: 0,
  isDivining: false,
  question: "",
  aiInterpretation: "",
  recordId: undefined,
};

export const useDivinationStore = create<DivinationStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      history: [],

      startDivination: () => {
        set({
          isDivining: true,
          currentStep: 0,
          currentLines: [],
          question: "",
          aiInterpretation: "",
          recordId: undefined,
        });
      },

      addLine: (line: YaoType) => {
        const { currentLines, currentStep } = get();
        if (currentStep < 6) {
          set({
            currentLines: [...currentLines, line],
            currentStep: currentStep + 1,
          });
        }
      },

      resetDivination: () => {
        set({
          ...initialState,
          history: get().history,
        });
      },

      setQuestion: (question: string) => {
        set({ question });
      },

      setAiInterpretation: (interpretation: string) => {
        set({ aiInterpretation: interpretation });
      },

      setRecordId: (id: string) => {
        set({ recordId: id });
      },

      addToHistory: async (record: DivinationRecord) => {
        const { history } = get();

        // 检查是否已存在该 ID 的记录
        const existingIndex = history.findIndex((r) => r.id === record.id);
        let newHistory;

        if (existingIndex >= 0) {
          // 更新现有记录
          newHistory = [...history];
          newHistory[existingIndex] = record;
        } else {
          // 添加新记录
          newHistory = [record, ...history].slice(0, 100);
        }

        // 保存到本地
        set({
          history: newHistory,
        });

        // 尝试同步到 Supabase
        try {
          const savedData = await saveDivinationRecord(record);
          if (savedData && savedData.id) {
            return savedData.id;
          }
          // 如果返回 null (比如没登录)，仍然返回本地 ID
          return record.id;
        } catch (error) {
          console.error("Failed to sync to Supabase:", error);
          // 重新抛出错误，让调用者知道远程保存失败了
          throw error;
        }
      },

      removeFromHistory: async (id: string) => {
        const { history } = get();
        set({
          history: history.filter((r) => r.id !== id),
        });

        try {
          await deleteDivinationRecord(id);
        } catch (error) {
          console.warn("Failed to delete from Supabase:", error);
        }
      },

      clearHistory: () => {
        set({ history: [] });
      },

      syncWithSupabase: async () => {
        try {
          const records = await getDivinationRecords();
          if (records && records.length > 0) {
            set({ history: records });
          }
        } catch (error) {
          console.error("Error syncing with Supabase:", error);
        }
      },
    }),
    {
      name: "divination-storage",
      partialize: (state) => ({ history: state.history }),
    }
  )
);
