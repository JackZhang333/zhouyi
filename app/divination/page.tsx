"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DivinationRitual } from "@/components/divination";
import { YaoType, getOriginalHexagram, getChangedHexagram, getChangingLinePositions } from "@/lib/utils/divination";
import { Hexagram } from "@/types";
import { useDivinationStore } from "@/stores/divinationStore";

export default function DivinationPage() {
  const router = useRouter();
  const { startDivination, addLine, setQuestion, addToHistory } = useDivinationStore();
  const [isComplete, setIsComplete] = useState(false);
  const [savedRecordId, setSavedRecordId] = useState<string | null>(null);

  const handleComplete = useCallback(async (
    lines: YaoType[],
    original: Hexagram,
    changed: Hexagram | null,
    changingLines: number[]
  ) => {
    setIsComplete(true);

    // 1. 自动保存到历史记录
    let recordId = "";
    try {
      recordId = await addToHistory({
        id: crypto.randomUUID(),
        lines,
        original_hexagram_id: original.id,
        changed_hexagram_id: changed?.id || null,
        changing_lines: changingLines,
        question: "", // 初始为空，用户可以在结果页补充
        ai_interpretation: "",
        notes: "",
        tags: [],
        is_public: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      setSavedRecordId(recordId);
    } catch (error) {
      console.error("Failed to auto-save history:", error);
    }

    // 2. 构建跳转参数 (保留URL参数以便分享或无状态访问)
    const params = new URLSearchParams();
    params.set("lines", JSON.stringify(lines));
    params.set("original", original.id);
    if (changed) {
      params.set("changed", changed.id);
    }
    params.set("changing", JSON.stringify(changingLines));
    if (recordId) {
      params.set("id", recordId);
    }

    // 3. 准备跳转函数
    // 使用 ref 或直接跳转? 这里 DivinationRitual 需要一个点击回调
    // 我们可以直接返回一个函数给 handleShowInterpretation
  }, [addToHistory]);

  // 跳转函数
  const handleShowInterpretation = useCallback((
    lines: YaoType[],
    original: Hexagram,
    changed: Hexagram | null,
    changingLines: number[]
  ) => {
    // 如果已有自动保存的记录，应该怎么传递 ID？
    // 由于 handleShowInterpretation 是在 DivinationRitual 中调用的，
    // 它无法直接访问 handleComplete 中生成的 recordId。
    // 这是一个问题。

    // 解决方案：
    // 实际上 handleComplete 中的逻辑只会执行一次作为 onComplete 回调。
    // 而 DivinationRitual 中的 onShowInterpretation 按钮是在结果展示后点击的。
    // 我们应该在 handleComplete 中就直接设置 resultPath 或者执行跳转？
    // 不，设计是：摇卦完成 -> onComplete (自动保存) -> 用户看动画 -> 用户点击"查看解卦" -> handleShowInterpretation

    // 我们可以在 handleComplete 中保存 recordId 到 state，
    // 然后 handleShowInterpretation 从 state 中读取?
    // 或者，由 DivinationRitual 的 onShowInterpretation 回调其实不需要参数，
    // 而是应该直接复用 handleComplete 计算出的结果？

    // 回退一步：
    // DivinationRitual 的 props 定义是：
    // onComplete: (...) => void
    // onShowInterpretation: (lines, original, changed, changing) => void

    // 现在的 handleComplete 只是保存了数据，没有做跳转。
    // 跳转是完全由 handleShowInterpretation 负责的。

    // 问题是 recordId 只有在 handleComplete 中才产生。
    // 我们需要一个 state 来存储它。

    // 让我们加回 recordId state。
    const params = new URLSearchParams();
    params.set("lines", JSON.stringify(lines));
    params.set("original", original.id);
    if (changed) {
      params.set("changed", changed.id);
    }
    params.set("changing", JSON.stringify(changingLines));

    if (savedRecordId) {
      params.set("id", savedRecordId);
    }

    router.push(`/divination/result?${params.toString()}`);
  }, [router, savedRecordId]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-serif text-stone-800 mb-4">
              诚心起卦
            </h1>
            <p className="text-stone-600">
              静心凝神，默念所求之事，六次摇卦以成卦象
            </p>
          </motion.div>

          {/* Divination Ritual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg border border-stone-200 p-8"
          >
            <DivinationRitual
              onComplete={handleComplete}
              onShowInterpretation={(lines, original, changed, changing) =>
                handleShowInterpretation(lines, original, changed, changing)
              }
            />
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center text-sm text-stone-500 space-y-2"
          >
            <p>铜钱投掷规则：</p>
            <p>三枚铜钱同时抛掷，正面（字）为3，反面（背）为2</p>
            <p>三枚总和为6（老阴）、7（少阳）、8（少阴）、9（老阳）</p>
            <p>老阴和老阳为变爻，会转化为相反的爻</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
