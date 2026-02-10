"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { HexagramCard } from "@/components/hexagram";
import { getAllHexagrams, searchHexagrams } from "@/data/hexagrams";
import { Search } from "lucide-react";

export default function HexagramsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const allHexagrams = useMemo(() => getAllHexagrams(), []);

  const filteredHexagrams = useMemo(() => {
    if (!searchQuery.trim()) {
      return allHexagrams;
    }
    return searchHexagrams(searchQuery);
  }, [searchQuery, allHexagrams]);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-serif text-stone-800 mb-4">
              六十四卦
            </h1>
            <p className="text-stone-600 max-w-xl mx-auto">
              周易六十四卦，每一卦都蕴含着深刻的哲理。点击任意卦象查看详细解释。
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-md mx-auto mb-12"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
            <Input
              type="text"
              placeholder="搜索卦名、拼音..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 rounded-full border-stone-200 focus:border-stone-400 focus:ring-stone-400"
            />
          </motion.div>

          {/* Hexagram Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid gap-4"
          >
            {filteredHexagrams.length > 0 ? (
              filteredHexagrams.map((hexagram, index) => (
                <HexagramCard
                  key={hexagram.id}
                  hexagram={hexagram}
                  index={index}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-stone-500">
                  未找到匹配的卦象，请尝试其他关键词
                </p>
              </div>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-sm text-stone-400"
          >
            共 {filteredHexagrams.length} 卦
            {searchQuery && `（搜索 "${searchQuery}"）`}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
