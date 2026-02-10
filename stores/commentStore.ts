import { create } from "zustand";
import { getHexagramComments, addHexagramComment, deleteComment } from "@/lib/supabase/db";
import { createClient } from "@/lib/supabase/client";

// 评论/笔记 (Client-side structure)
export interface HexagramComment {
  id: string;
  hexagramId: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  userId?: string;
}

interface CommentState {
  comments: Record<string, HexagramComment[]>; // Map hexagramId to comments
  isLoading: boolean;
  error: string | null;
}

interface CommentStore extends CommentState {
  // 动作
  fetchComments: (hexagramId: string) => Promise<void>;
  addComment: (hexagramId: string, content: string) => Promise<void>;
  removeComment: (id: string, hexagramId: string) => Promise<void>;
  clearError: () => void;
}

export const useCommentStore = create<CommentStore>((set, get) => ({
  comments: {},
  isLoading: false,
  error: null,

  fetchComments: async (hexagramId: string) => {
    set({ isLoading: true, error: null });
    try {
      const dbComments = await getHexagramComments(hexagramId);

      const formattedComments: HexagramComment[] = (dbComments || []).map((c: any) => ({
        id: c.id,
        hexagramId: c.hexagram_id,
        content: c.content,
        // If user email exists, use it as author, otherwise '访客'
        author: c.auth?.users?.email?.split("@")[0] || "用户",
        createdAt: c.created_at,
        updatedAt: c.updated_at,
        userId: c.user_id,
      }));

      set((state) => ({
        comments: {
          ...state.comments,
          [hexagramId]: formattedComments
        },
        isLoading: false
      }));
    } catch (error) {
      console.error("Fetch comments error:", error);
      set({ isLoading: false, error: "加载评论失败" });
    }
  },

  addComment: async (hexagramId: string, content: string) => {
    set({ isLoading: true, error: null });

    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        throw new Error("请先登录");
      }

      await addHexagramComment(hexagramId, content, user.id);

      // Refresh comments
      await get().fetchComments(hexagramId);

    } catch (error: any) {
      console.error("Add comment error:", error);
      set({
        isLoading: false,
        error: error.message || "添加评论失败"
      });
    }
  },

  removeComment: async (id: string, hexagramId: string) => {
    try {
      await deleteComment(id);

      // Optimistic update
      set((state) => ({
        comments: {
          ...state.comments,
          [hexagramId]: state.comments[hexagramId]?.filter(c => c.id !== id) || []
        }
      }));
    } catch (error) {
      console.error("Delete comment error:", error);
      // Re-fetch to ensure sync
      get().fetchComments(hexagramId);
    }
  },

  clearError: () => set({ error: null }),
}));
