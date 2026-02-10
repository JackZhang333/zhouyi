"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CoinAnimationProps {
  isTossing: boolean;
  onTossComplete?: () => void;
  result?: "head" | "tail";
}

export function CoinAnimation({
  isTossing,
  onTossComplete,
  result,
}: CoinAnimationProps) {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (isTossing) {
      setShowParticles(true);
      const timer = setTimeout(() => {
        setShowParticles(false);
        onTossComplete?.();
      }, 1900);
      return () => clearTimeout(timer);
    }
  }, [isTossing, onTossComplete]);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* 粒子效果 */}
      <AnimatePresence>
        {isTossing && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                initial={{
                  x: "50%",
                  y: "50%",
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: [
                    "50%",
                    `${50 + (Math.random() - 0.5) * 100}%`,
                    `${50 + (Math.random() - 0.5) * 200}%`,
                  ],
                  y: [
                    "50%",
                    `${50 - Math.random() * 100}%`,
                    `${50 - Math.random() * 200}%`,
                  ],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                }}
                style={{
                  left: 0,
                  top: 0,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* 三枚铜钱 */}
      <div className="relative flex gap-4">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ y: 0, rotateX: 0, rotateY: 0 }}
            animate={
              isTossing
                ? {
                  y: [-20, -80, -20, 0],
                  rotateX: [0, 360 * 3, 360 * 6, 360 * 6],
                  rotateY: [0, 180, 360, 360],
                }
                : {
                  y: [0, -5, 0],
                  rotateX: 0,
                  rotateY: 0,
                }
            }
            transition={
              isTossing
                ? {
                  duration: 1.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.05,
                }
                : {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: index * 0.2,
                }
            }
          >
            <div
              className={`
                w-14 h-14 rounded-full border-2
                ${result === "head"
                  ? "bg-amber-100 border-amber-600"
                  : result === "tail"
                    ? "bg-amber-200 border-amber-700"
                    : "bg-amber-100 border-amber-600"
                }
                shadow-lg flex items-center justify-center
                relative overflow-hidden
              `}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* 铜钱正面 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-amber-800 font-serif text-lg font-bold">
                  通
                </span>
              </div>
              {/* 铜钱边缘纹理 */}
              <div className="absolute inset-1 rounded-full border border-amber-300/50" />
              <div className="absolute inset-2 rounded-full border border-amber-400/30" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* 光晕效果 */}
      <motion.div
        className="absolute inset-0 rounded-full bg-amber-200/20 blur-xl"
        animate={{
          scale: isTossing ? [1, 1.2, 1] : [1, 1.05, 1],
          opacity: isTossing ? [0.3, 0.5, 0.3] : [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: isTossing ? 1.9 : 2,
          ease: "easeInOut",
          repeat: isTossing ? 0 : Infinity,
        }}
      />
    </div>
  );
}
