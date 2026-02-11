"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CoinAnimation } from "./CoinAnimation";
import { OfflineCoinSelector } from "./OfflineCoinSelector";
import { HexagramDisplay } from "./YaoInkAnimation";
import { useSound } from "@/hooks/useSound";
import {
  tossCoinsDetailed,
  YaoType,
  getYaoName,
  getOriginalHexagram,
  getChangedHexagram,
  getChangingLinePositions,
} from "@/lib/utils/divination";
import type { CoinFace } from "@/lib/utils/divination";
import { useDivinationStore } from "@/stores/divinationStore";
import { Hexagram } from "@/types";

type RitualPhase = "preparation" | "divining" | "result";
type RitualMode = "standard" | "offline";

interface DivinationRitualProps {
  onComplete?: (
    lines: YaoType[],
    original: Hexagram,
    changed: Hexagram | null,
    changingLines: number[]
  ) => void;
  onShowInterpretation?: (
    lines: YaoType[],
    original: Hexagram,
    changed: Hexagram | null,
    changingLines: number[]
  ) => void;
}

export function DivinationRitual({ onComplete, onShowInterpretation }: DivinationRitualProps) {
  const [phase, setPhase] = useState<RitualPhase>("preparation");
  const [mode, setMode] = useState<RitualMode>("standard");
  const [currentStep, setCurrentStep] = useState(0);
  const [lines, setLines] = useState<YaoType[]>([]);
  const [isTossing, setIsTossing] = useState(false);
  const [lastResult, setLastResult] = useState<YaoType | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [coinFaces, setCoinFaces] = useState<[CoinFace, CoinFace, CoinFace] | undefined>(undefined);

  // 线下模式零时状态
  const [pendingOfflineResult, setPendingOfflineResult] = useState<{
    coins: [CoinFace, CoinFace, CoinFace];
    yaoType: YaoType;
  } | null>(null);
  const [isOfflineResetting, setIsOfflineResetting] = useState(false);

  // 音效
  const playStart = useSound("/sounds/bell.mp3", { volume: 0.5 });
  const playToss = useSound("/sounds/coins.mp3", { volume: 0.5 });
  const playDrop = useSound("/sounds/drop.mp3", { volume: 0.4 });
  const playComplete = useSound("/sounds/gong.mp3", { volume: 0.6 });

  const startDivination = useCallback((selectedMode: RitualMode = "standard") => {
    playStart();
    setPhase("divining");
    setMode(selectedMode);
    setCurrentStep(0);
    setLines([]);
    setIsTossing(false);
    setLastResult(null);
    setShowResult(false);
    setPendingOfflineResult(null);
    setIsOfflineResetting(false);
  }, [playStart]);

  const handleToss = useCallback(() => {
    if (isTossing || currentStep >= 6) return;

    if (mode === "offline") {
      if (!pendingOfflineResult || isOfflineResetting) return;
      const { coins, yaoType } = pendingOfflineResult;

      setIsOfflineResetting(true);
      playDrop();
      setCoinFaces(coins);
      setLastResult(yaoType);
      setShowResult(true);

      const newLines = [...lines, yaoType];
      setLines(newLines);

      // 给 1s 的反馈动画时间
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setIsOfflineResetting(false);
        setShowResult(false);

        // 检查是否完成
        if (newLines.length === 6) {
          setTimeout(() => {
            playComplete();
            const original = getOriginalHexagram(newLines);
            const changed = getChangedHexagram(newLines);
            const changingLines = getChangingLinePositions(newLines);

            if (original) {
              setPhase("result");
              onComplete?.(newLines, original, changed ?? null, changingLines);
            }
          }, 1000);
        }
      }, 1000);
      return;
    }

    playToss();
    setIsTossing(true);
    setShowResult(false);

    // 生成结果（含每枚铜钱的正反面）
    const { coins, yaoType } = tossCoinsDetailed();
    setCoinFaces(coins);
    setLastResult(yaoType);

    // 动画完成后处理结果 (3200ms 动画 + 200ms 缓冲)
    setTimeout(() => {
      playDrop();
      setIsTossing(false);
      setShowResult(true);

      const newLines = [...lines, yaoType];
      setLines(newLines);
      setCurrentStep((prev) => prev + 1);

      // 检查是否完成
      if (newLines.length === 6) {
        setTimeout(() => {
          playComplete();
          const original = getOriginalHexagram(newLines);
          const changed = getChangedHexagram(newLines);
          const changingLines = getChangingLinePositions(newLines);

          if (original) {
            setPhase("result");
            onComplete?.(newLines, original, changed ?? null, changingLines);
          }
        }, 2000);
      }
    }, 3400);
  }, [isTossing, currentStep, lines, mode, pendingOfflineResult, onComplete, playToss, playDrop, playComplete]);

  const handleOfflineResultChange = useCallback((coins: [CoinFace, CoinFace, CoinFace], yaoType: YaoType) => {
    setPendingOfflineResult({ coins, yaoType });
  }, []);

  const getStepPrompt = (step: number) => {
    const prompts = [
      "第一爻 - 诚心默念所求之事",
      "第二爻 - 心诚意正",
      "第三爻 - 保持专注",
      "第四爻 - 勿生杂念",
      "第五爻 - 即将完成",
      "第六爻 - 卦象将成",
    ];
    return prompts[step] || "";
  };

  const handleViewInterpretation = () => {
    if (!onShowInterpretation || lines.length !== 6) return;

    const original = getOriginalHexagram(lines);
    const changed = getChangedHexagram(lines);
    const changingLines = getChangingLinePositions(lines);

    if (original) {
      onShowInterpretation(lines, original, changed ?? null, changingLines);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {/* 准备阶段 */}
        {phase === "preparation" && (
          <motion.div
            key="preparation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center space-y-8"
          >
            {/* 水墨晕染背景 */}
            <motion.div
              className="absolute inset-0 -z-10 opacity-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="w-full h-full bg-gradient-radial from-stone-400 via-transparent to-transparent rounded-full blur-3xl" />
            </motion.div>

            <div className="space-y-4">
              <motion.h2
                className="text-2xl font-serif text-stone-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                静心凝神
              </motion.h2>
              <motion.p
                className="text-stone-600 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                诚心起卦，心诚则灵
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => startDivination("standard")}
                className="px-8 py-6 text-lg bg-stone-800 hover:bg-stone-700 text-stone-50 rounded-full shadow-lg transition-all duration-500 hover:shadow-xl"
              >
                在线摇卦
              </Button>
              <Button
                onClick={() => startDivination("offline")}
                variant="outline"
                className="px-8 py-6 text-lg border-stone-300 hover:bg-stone-50 text-stone-700 rounded-full shadow-md transition-all duration-500"
              >
                线下录入
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* 摇卦阶段 */}
        {phase === "divining" && (
          <motion.div
            key="divining"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div className="flex justify-center py-8 min-h-[220px]">
              {mode === "standard" ? (
                <CoinAnimation isTossing={isTossing} coins={coinFaces} />
              ) : (
                <OfflineCoinSelector
                  onResultChange={handleOfflineResultChange}
                  isResetting={isOfflineResetting}
                />
              )}
            </div>

            {/* 提示文字 */}
            <motion.div
              className="text-center space-y-2"
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-stone-500 text-sm">第 {currentStep + 1} / 6 爻</p>
              <p className="text-stone-700 text-lg font-serif">
                {getStepPrompt(currentStep)}
              </p>
            </motion.div>

            <div className="flex justify-center">
              <Button
                onClick={handleToss}
                disabled={(mode === "standard" && isTossing) || (mode === "offline" && isOfflineResetting) || currentStep >= 6}
                className={`
                  px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-500
                  ${((mode === "standard" && isTossing) || (mode === "offline" && isOfflineResetting))
                    ? "bg-stone-400 cursor-not-allowed"
                    : "bg-stone-800 hover:bg-stone-700 hover:shadow-xl"
                  }
                  text-stone-50
                `}
              >
                {mode === "standard"
                  ? (isTossing ? "铜钱飞旋..." : currentStep >= 6 ? "卦成" : "点击抛掷")
                  : (isOfflineResetting ? "记录中..." : currentStep >= 6 ? "卦成" : "确认此爻结果")
                }
              </Button>
            </div>

            {/* 当前结果 */}
            {showResult && lastResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <span className="inline-block px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm">
                  得{getYaoName(lastResult)}
                </span>
              </motion.div>
            )}

            {/* 已得爻象 */}
            {lines.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 pt-8 border-t border-stone-200"
              >
                <HexagramDisplay
                  lines={[...lines, ...Array(6 - lines.length).fill(7)]}
                  revealedCount={lines.length}
                  showChanging={true}
                />
              </motion.div>
            )}
          </motion.div>
        )}

        {/* 结果阶段 */}
        {phase === "result" && lines.length === 6 && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-stone-500 text-sm mb-2">卦象已成</p>
              <h3 className="text-xl font-serif text-stone-800">六爻完整呈现</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-stone-50 rounded-2xl p-6 shadow-inner"
            >
              <HexagramDisplay lines={lines} revealedCount={6} showChanging={true} />
            </motion.div>

            {/* 引导查看按钮 */}
            {/* 引导查看按钮 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center pt-4"
            >
              <Button
                onClick={handleViewInterpretation}
                disabled={!onShowInterpretation}
                className="px-10 py-6 text-xl bg-stone-800 hover:bg-stone-700 text-amber-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                查看解卦
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Button>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
