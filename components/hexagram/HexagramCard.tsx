"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hexagram } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

interface HexagramCardProps {
  hexagram: Hexagram;
  index?: number;
}

export function HexagramCard({ hexagram, index = 0 }: HexagramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/hexagrams/${hexagram.id}`}>
        <Card className="group cursor-pointer hover:shadow-lg transition-all duration-500 border-stone-200 hover:border-stone-300 bg-stone-50/50 hover:bg-stone-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              {/* 卦象符号 */}
              <div className="flex flex-col-reverse text-stone-700 text-lg leading-tight">
                {hexagram.lines.map((line, i) => (
                  <span key={i}>
                    {line === 7 || line === 9 ? "━━━" : "━ ━"}
                  </span>
                ))}
              </div>

              {/* 卦名信息 */}
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-serif text-stone-800">
                    {hexagram.name}
                  </span>
                  <span className="text-sm text-stone-500">
                    {hexagram.pinyin}
                  </span>
                </div>
                <p className="text-xs text-stone-400 mt-1">
                  第{hexagram.sequence}卦 · {hexagram.symbol}
                </p>
              </div>

              {/* 卦辞摘要 */}
              <div className="hidden sm:block text-right max-w-[150px]">
                <p className="text-xs text-stone-500 truncate">
                  {hexagram.original.guaCi.slice(0, 20)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
