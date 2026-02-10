"use client";

import { motion } from "framer-motion";
import { YaoType, getYaoDisplayType } from "@/lib/utils/divination";

interface YaoInkAnimationProps {
  line: YaoType;
  position: number; // 1-6，从下到上
  isRevealed: boolean;
  isChanging?: boolean;
}

export function YaoInkAnimation({
  line,
  position,
  isRevealed,
  isChanging = false,
}: YaoInkAnimationProps) {
  const displayType = getYaoDisplayType(line);
  const isYang = displayType === "yang" || displayType === "changing-yang";

  // 爻位名称
  const positionNames = ["初", "二", "三", "四", "五", "上"];
  const positionName = positionNames[position - 1];

  return (
    <motion.div
      className="flex items-center gap-4 py-2"
      initial={{ opacity: 0, y: 20 }}
      animate={
        isRevealed
          ? { opacity: 1, y: 0 }
          : { opacity: 0.3, y: 10 }
      }
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: isRevealed ? 0 : 0.5,
      }}
    >
      {/* 爻位标识 */}
      <div className="w-8 text-stone-500 text-sm font-serif">
        {positionName}爻
      </div>

      {/* 爻象绘制 */}
      <div className="flex-1 flex justify-center">
        <svg
          width="120"
          height="24"
          viewBox="0 0 120 24"
          className="overflow-visible"
        >
          <defs>
            {/* 水墨渐变 */}
            <linearGradient id={`inkGradient-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#292524" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1c1917" stopOpacity="1" />
              <stop offset="100%" stopColor="#292524" stopOpacity="0.8" />
            </linearGradient>
            {/* 变爻标记渐变 */}
            <radialGradient id={`changingGradient-${position}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="1" />
              <stop offset="100%" stopColor="#991b1b" stopOpacity="0.8" />
            </radialGradient>
          </defs>

          {isYang ? (
            // 阳爻 —
            <motion.line
              x1="10"
              y1="12"
              x2="110"
              y2="12"
              stroke={`url(#inkGradient-${position})`}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isRevealed
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2,
              }}
            />
          ) : (
            // 阴爻 - -
            <>
              <motion.line
                x1="10"
                y1="12"
                x2="50"
                y2="12"
                stroke={`url(#inkGradient-${position})`}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isRevealed
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.2,
                }}
              />
              <motion.line
                x1="70"
                y1="12"
                x2="110"
                y2="12"
                stroke={`url(#inkGradient-${position})`}
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isRevealed
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.4,
                }}
              />
            </>
          )}

          {/* 变爻标记 */}
          {isChanging && isRevealed && (
            <motion.circle
              cx="60"
              cy="12"
              r="6"
              fill={`url(#changingGradient-${position})`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.8,
              }}
            />
          )}
        </svg>
      </div>

      {/* 爻名 */}
      <div className="w-12 text-stone-600 text-sm">
        {isYang ? "九" : "六"}
      </div>
    </motion.div>
  );
}

// 六爻整体展示组件
interface HexagramDisplayProps {
  lines: YaoType[];
  revealedCount?: number; // 已揭示的爻数
  showChanging?: boolean;
}

export function HexagramDisplay({
  lines,
  revealedCount = 6,
  showChanging = true,
}: HexagramDisplayProps) {
  return (
    <div className="flex flex-col-reverse">
      {" "}
      {/* 从下到上显示，但数组是从上到下 */}
      {lines.map((line, index) => {
        // index 0 是初爻，index 5 是上爻
        const position = index + 1;
        const isRevealed = index < revealedCount;
        const isChanging = showChanging && (line === 6 || line === 9);

        return (
          <YaoInkAnimation
            key={index}
            line={line}
            position={position}
            isRevealed={isRevealed}
            isChanging={isChanging}
          />
        );
      })}
    </div>
  );
}
