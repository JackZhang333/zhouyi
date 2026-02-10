"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hexagram, YaoType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getHexagramRelations } from "@/lib/utils/hexagram";
import { HexagramDisplay } from "@/components/divination/YaoInkAnimation";
import { Comments } from "./Comments";
import { ScrollReveal } from "@/components/divination/ScrollReveal";

interface HexagramDetailProps {
  hexagram: Hexagram;
}

export function HexagramDetail({ hexagram }: HexagramDetailProps) {
  const relations = getHexagramRelations(hexagram);

  const relationCards = [
    { title: "错卦", hexagram: relations.cuoGua, desc: "阴阳全变" },
    { title: "综卦", hexagram: relations.zongGua, desc: "上下颠倒" },
    { title: "交卦", hexagram: relations.jiaoGua, desc: "上下交换" },
    { title: "互卦", hexagram: relations.huGua, desc: "234爻为下，345爻为上" },
  ];

  return (
    <div className="space-y-8">
      {/* 头部信息 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-4">
          <span className="text-5xl font-calligraphy text-stone-800">
            {hexagram.name}
          </span>
          <span className="text-xl text-stone-500 font-serif">{hexagram.pinyin}</span>
        </div>
        <p className="text-stone-400">第 {hexagram.sequence} 卦 · {hexagram.symbol}</p>
      </motion.div>

      {/* 卦象展示 */}
      <ScrollReveal>
        <Card className="bg-stone-50 border-stone-200 shadow-sm">
          <CardContent className="p-8">
            <div className="flex justify-center">
              <HexagramDisplay
                lines={hexagram.lines}
                revealedCount={6}
                showChanging={false}
              />
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 卦辞 */}
      <ScrollReveal delay={0.2}>
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-calligraphy text-stone-800">卦辞</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 bg-stone-50 rounded-lg">
              <p className="text-stone-800 font-serif text-lg leading-relaxed">
                {hexagram.original.guaCi}
              </p>
            </div>
            <p className="text-stone-600 leading-relaxed pl-2 border-l-4 border-stone-200">
              {hexagram.vernacular.guaCi}
            </p>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 彖传 */}
      <ScrollReveal delay={0.3}>
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-calligraphy text-stone-800">彖传</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 bg-stone-50 rounded-lg">
              <p className="text-stone-800 leading-relaxed font-serif">
                {hexagram.original.tuanCi}
              </p>
            </div>
            <p className="text-stone-600 leading-relaxed pl-2 border-l-4 border-stone-200">
              {hexagram.vernacular.tuanCi}
            </p>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 大象 */}
      <ScrollReveal delay={0.4}>
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-calligraphy text-stone-800">大象</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-6 bg-stone-50 rounded-lg">
              <p className="text-stone-800 font-serif leading-relaxed">
                {hexagram.original.xiangCi}
              </p>
            </div>
            <p className="text-stone-600 leading-relaxed pl-2 border-l-4 border-stone-200">
              {hexagram.vernacular.xiangCi}
            </p>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 爻辞 */}
      <ScrollReveal delay={0.5}>
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-calligraphy text-stone-800">爻辞</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {hexagram.original.yaoCi.map((yao, index) => {
                const positions = ["初", "二", "三", "四", "五", "上"];
                const isYang = hexagram.lines[index] === 7 || hexagram.lines[index] === 9;
                const yaoName = `${positions[index]}${isYang ? "九" : "六"}`;

                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-stone-100 font-serif">
                        {yaoName}
                      </Badge>
                      <Separator className="flex-1" />
                    </div>

                    <div className="p-4 bg-stone-50 rounded-lg">
                      <p className="text-stone-800 font-serif text-lg mb-2">{yao}</p>
                      {hexagram.vernacular.yaoCi[index] && (
                        <p className="text-stone-600 text-sm border-t border-stone-200 pt-2 mt-2">
                          {hexagram.vernacular.yaoCi[index]}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 关系卦 */}
      <ScrollReveal delay={0.6}>
        <Card className="border-stone-200">
          <CardHeader>
            <CardTitle className="text-xl font-calligraphy text-stone-800">关系卦</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relationCards.map((relation, index) => (
                relation.hexagram ? (
                  <Link
                    key={index}
                    href={`/hexagrams/${relation.hexagram.id}`}
                  >
                    <Card className="cursor-pointer hover:shadow-md transition-shadow border-stone-200 h-full">
                      <CardContent className="p-4 text-center">
                        <p className="text-sm text-stone-500 mb-2">{relation.title}</p>
                        <div className="w-12 h-12 mx-auto mb-2 bg-stone-100 rounded-full flex items-center justify-center text-xl font-serif">
                          {relation.hexagram.name}
                        </div>
                        <p className="text-xs text-stone-400">{relation.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ) : null
              ))}
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* 学习笔记/评论区 */}
      <ScrollReveal delay={0.7}>
        <Comments hexagramId={hexagram.id} />
      </ScrollReveal>
    </div>
  );
}
