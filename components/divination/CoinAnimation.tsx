"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import type { CoinFace } from "@/lib/utils/divination";

// 动画阶段
type AnimationPhase = "idle" | "shake" | "throw" | "spin" | "land" | "reveal";

// 每阶段时长 (ms)
const PHASE_DURATIONS = {
  shake: 600,
  throw: 500,
  spin: 800,
  land: 700,
  reveal: 600,
} as const;

interface CoinAnimationProps {
  isTossing: boolean;
  onTossComplete?: () => void;
  coins?: [CoinFace, CoinFace, CoinFace];
}

// 单枚铜钱落地后的偏移 — 散开效果
const LAND_OFFSETS = [
  { x: -48, y: 12, rotate: -15 },
  { x: 4, y: -6, rotate: 8 },
  { x: 52, y: 16, rotate: 22 },
];

export function CoinAnimation({
  isTossing,
  onTossComplete,
  coins,
}: CoinAnimationProps) {
  const [phase, setPhase] = useState<AnimationPhase>("idle");

  // 用 useMemo 为每次 toss 生成随机散落参数
  const scatterParams = useMemo(() => {
    if (!isTossing) return LAND_OFFSETS;
    return [
      { x: -44 - Math.random() * 16, y: 8 + Math.random() * 16, rotate: -(10 + Math.random() * 20) },
      { x: -4 + Math.random() * 8, y: -(2 + Math.random() * 12), rotate: 5 + Math.random() * 15 },
      { x: 40 + Math.random() * 20, y: 6 + Math.random() * 18, rotate: 15 + Math.random() * 20 },
    ];
  }, [isTossing]);

  useEffect(() => {
    if (!isTossing) {
      setPhase("idle");
      return;
    }

    setPhase("shake");
    const t1 = setTimeout(() => setPhase("throw"), PHASE_DURATIONS.shake);
    const t2 = setTimeout(() => setPhase("spin"), PHASE_DURATIONS.shake + PHASE_DURATIONS.throw);
    const t3 = setTimeout(() => setPhase("land"), PHASE_DURATIONS.shake + PHASE_DURATIONS.throw + PHASE_DURATIONS.spin);
    const t4 = setTimeout(() => setPhase("reveal"), PHASE_DURATIONS.shake + PHASE_DURATIONS.throw + PHASE_DURATIONS.spin + PHASE_DURATIONS.land);
    const t5 = setTimeout(() => {
      onTossComplete?.();
    }, PHASE_DURATIONS.shake + PHASE_DURATIONS.throw + PHASE_DURATIONS.spin + PHASE_DURATIONS.land + PHASE_DURATIONS.reveal);

    return () => {
      [t1, t2, t3, t4, t5].forEach(clearTimeout);
    };
  }, [isTossing, onTossComplete]);

  const getCoinAnimation = (index: number) => {
    const stagger = index * 0.04;

    switch (phase) {
      case "idle":
        return {
          animate: { y: [0, -4, 0], x: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 },
          transition: { duration: 2, ease: "easeInOut" as const, repeat: Infinity, delay: index * 0.2 },
        };
      case "shake":
        return {
          animate: {
            x: [0, -3, 4, -5, 3, -2, 4, -3, 0],
            y: [0, -2, 1, -3, 2, -1, 2, -2, 0],
            rotateZ: [0, -4, 6, -8, 5, -3, 6, -4, 0],
            rotateX: [0, 10, -10, 15, -8, 5, -12, 8, 0],
          },
          transition: { duration: PHASE_DURATIONS.shake / 1000, ease: "easeInOut" as const },
        };
      case "throw":
        return {
          animate: { y: -90 - index * 15, x: (index - 1) * 8, rotateX: 180 + index * 60, rotateZ: (index - 1) * 12, scale: 0.9 },
          transition: { duration: PHASE_DURATIONS.throw / 1000, ease: [0.33, 1, 0.68, 1] as [number, number, number, number], delay: stagger },
        };
      case "spin":
        return {
          animate: { y: -110 - index * 10, rotateX: 360 * 4 + index * 120, rotateZ: (index - 1) * 20, scale: 0.85 },
          transition: { duration: PHASE_DURATIONS.spin / 1000, ease: "linear" as const, delay: stagger },
        };
      case "land":
        return {
          animate: {
            y: [null, scatterParams[index].y + 6, scatterParams[index].y - 3, scatterParams[index].y + 1, scatterParams[index].y],
            x: scatterParams[index].x,
            rotateX: coins?.[index] === "tail" ? 180 : 0,
            rotateZ: scatterParams[index].rotate,
            scale: 1,
          },
          transition: {
            duration: PHASE_DURATIONS.land / 1000,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay: stagger * 2,
            y: { duration: PHASE_DURATIONS.land / 1000, times: [0, 0.5, 0.7, 0.85, 1], ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
          },
        };
      case "reveal":
        return {
          animate: {
            x: scatterParams[index].x,
            y: scatterParams[index].y,
            rotateX: coins?.[index] === "tail" ? 180 : 0,
            rotateZ: scatterParams[index].rotate,
            scale: [1, 1.08, 1],
          },
          transition: {
            duration: PHASE_DURATIONS.reveal / 1000,
            ease: "easeOut" as const,
            scale: { duration: 0.4, ease: "easeOut" as const },
          },
        };
      default:
        return { animate: {}, transition: {} };
    }
  };

  return (
    <div className="relative w-64 h-56 flex items-center justify-center">
      {/* 粒子效果 */}
      <AnimatePresence>
        {(phase === "land" || phase === "reveal") && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: "50%",
                  top: "60%",
                  background: i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#d97706" : "#f59e0b",
                  boxShadow: "0 0 6px rgba(251,191,36,0.5)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], x: (Math.random() - 0.5) * 160, y: -(Math.random() * 60 + 10) }}
                transition={{ duration: 0.8, ease: "easeOut" as const, delay: i * 0.03 }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* 铜钱 */}
      <div className="relative" style={{ perspective: "800px" }}>
        {[0, 1, 2].map((index) => {
          const { animate, transition } = getCoinAnimation(index);
          const coinFace = coins?.[index];
          const isRevealed = phase === "reveal" || phase === "land";

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                transformStyle: "preserve-3d",
                left: `${(index - 1) * 16}px`,
                top: 0,
                zIndex: phase === "land" || phase === "reveal" ? index : 2 - index,
              }}
              animate={animate}
              transition={transition}
            >
              <div className="relative w-16 h-16" style={{ transformStyle: "preserve-3d" }}>
                {/* 正面 — 顺治通宝 */}
                <div
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    background: "radial-gradient(circle, #433016 0%, #5c4424 45%, #c9933a 50%, #8b6914 100%)",
                    boxShadow: `0 4px 10px rgba(0,0,0,0.3), 0 0 ${isRevealed && coinFace === "head" ? "16px" : "0px"} rgba(251,191,36,0.5)`,
                    border: "1px solid #7a5810",
                  }}
                >
                  <div className="absolute w-[10px] h-[10px] bg-stone-950 border border-amber-900/40" style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }} />
                  {["顺", "治", "通", "宝"].map((txt, i) => (
                    <span
                      key={txt}
                      className="absolute text-[#e8c86a] font-serif font-bold select-none text-[11px]"
                      style={{
                        textShadow: "1px 1px 0px rgba(0,0,0,0.5)",
                        ...(i === 0 && { top: "5px", left: "50%", transform: "translateX(-50%)" }),
                        ...(i === 1 && { bottom: "5px", left: "50%", transform: "translateX(-50%)" }),
                        ...(i === 2 && { right: "5px", top: "50%", transform: "translateY(-50%)" }),
                        ...(i === 3 && { left: "5px", top: "50%", transform: "translateY(-50%)" }),
                      }}
                    >
                      {txt}
                    </span>
                  ))}
                </div>

                {/* 反面 — 满文 */}
                <div
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateX(180deg)",
                    background: "radial-gradient(ellipse at 35% 30%, #e8c86a 0%, #b07e28 50%, #7a5810 100%)",
                    boxShadow: `0 4px 12px rgba(0,0,0,0.3), 0 0 ${isRevealed && coinFace === "tail" ? "16px" : "0px"} rgba(217,119,6,0.5)`,
                    border: "2px solid #8a6218",
                  }}
                >
                  <div className="absolute w-[10px] h-[10px] bg-stone-800/80 border border-amber-800/60" style={{ transform: "translate(-50%, -50%)", left: "50%", top: "50%" }} />
                  <span className="absolute left-[10px] text-amber-800/50 font-serif text-[8px] select-none">ᡤ</span>
                  <span className="absolute right-[10px] text-amber-800/50 font-serif text-[8px] select-none">ᡥ</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 光晕效果 */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)", filter: "blur(20px)" }}
        animate={{
          scale: phase === "reveal" ? [1, 1.3, 1.1] : phase === "spin" ? [1, 1.15, 1] : [1, 1.05, 1],
          opacity: phase === "reveal" ? [0.3, 0.6, 0.4] : phase === "spin" ? [0.2, 0.4, 0.2] : [0.15, 0.25, 0.15],
        }}
        transition={{ duration: phase === "idle" ? 2 : 0.8, ease: "easeInOut" as const, repeat: phase === "idle" ? Infinity : 0 }}
      />
    </div>
  );
}
