"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { CoinFace, YaoType } from "@/lib/utils/divination";
import { getYaoName } from "@/lib/utils/divination";

interface OfflineCoinSelectorProps {
    onResultChange: (coins: [CoinFace, CoinFace, CoinFace], yaoType: YaoType) => void;
    isResetting?: boolean;
}

export function OfflineCoinSelector({ onResultChange, isResetting }: OfflineCoinSelectorProps) {
    const [coins, setCoins] = useState<[CoinFace, CoinFace, CoinFace]>(["head", "head", "head"]);

    const toggleCoin = (index: number) => {
        const newCoins = [...coins] as [CoinFace, CoinFace, CoinFace];
        newCoins[index] = newCoins[index] === "head" ? "tail" : "head";
        setCoins(newCoins);
    };

    const calculateYao = (currentCoins: [CoinFace, CoinFace, CoinFace]): YaoType => {
        const sum = currentCoins.reduce((acc, face) => acc + (face === "head" ? 3 : 2), 0);
        return sum as YaoType;
    };

    useEffect(() => {
        onResultChange(coins, calculateYao(coins));
    }, [coins, onResultChange]);

    // 处理重置逻辑
    useEffect(() => {
        if (isResetting) {
            const timer = setTimeout(() => {
                setCoins(["head", "head", "head"]);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isResetting]);

    const currentYao = calculateYao(coins);

    return (
        <motion.div
            className="flex flex-col items-center space-y-8"
            animate={isResetting ? {
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1]
            } : {}}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="flex gap-6">
                {coins.map((face, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                        <motion.div
                            className="relative w-20 h-20 cursor-pointer"
                            style={{ transformStyle: "preserve-3d", perspective: "800px" }}
                            animate={{ rotateX: face === "tail" ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            onClick={() => toggleCoin(index)}
                        >
                            {/* 正面（字面 — 顺治通宝） */}
                            <div
                                className="absolute inset-0 rounded-full flex items-center justify-center"
                                style={{
                                    backfaceVisibility: "hidden",
                                    background: "radial-gradient(circle, #433016 0%, #5c4424 45%, #c9933a 50%, #8b6914 100%)",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                                    border: "1px solid #7a5810",
                                }}
                            >
                                {/* 中心方孔 */}
                                <div className="w-3.5 h-3.5 bg-stone-950 border border-amber-900/40 z-10" />

                                {/* 四字布局：上顺、下治、右通、左宝 */}
                                <span className="absolute top-1 text-[11px] text-[#e8c86a] font-serif font-bold select-none" style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}>顺</span>
                                <span className="absolute bottom-1 text-[11px] text-[#e8c86a] font-serif font-bold select-none" style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}>治</span>
                                <span className="absolute right-1 text-[11px] text-[#e8c86a] font-serif font-bold select-none" style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}>通</span>
                                <span className="absolute left-1 text-[11px] text-[#e8c86a] font-serif font-bold select-none" style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}>宝</span>
                            </div>

                            {/* 反面（背面 — 满文） */}
                            <div
                                className="absolute inset-0 rounded-full flex items-center justify-center"
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateX(180deg)",
                                    background: "radial-gradient(ellipse at 35% 30%, #e8c86a 0%, #b07e28 50%, #7a5810 100%)",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                    border: "2px solid #8a6218",
                                }}
                            >
                                <div className="w-3.5 h-3.5 bg-stone-900/95 border border-amber-800/60" />
                                <span className="absolute left-2 text-[10px] text-amber-800/60 font-serif select-none">ᡤ</span>
                                <span className="absolute right-2 text-[10px] text-amber-800/60 font-serif select-none">ᡥ</span>
                            </div>
                        </motion.div>
                        <span className="text-stone-400 text-xs">{face === "head" ? "字 (3)" : "背 (2)"}</span>
                    </div>
                ))}
            </div>

            <motion.div
                key={currentYao}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-6 py-2 bg-amber-50 border border-amber-200 rounded-full shadow-sm"
            >
                <span className="text-amber-800 font-serif text-lg">
                    当前组合：{getYaoName(currentYao)}
                </span>
            </motion.div>

            <p className="text-stone-400 text-sm italic">点击铜钱切换正反面</p>
        </motion.div>
    );
}
