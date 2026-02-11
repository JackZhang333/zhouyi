"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Share2 } from "lucide-react";
import { ScrollReveal } from "@/components/divination";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-7xl font-serif text-stone-800 mb-6 tracking-tighter">
                探索易经智慧
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-serif italic">
                “ 天行健，君子以自强不息 ”
                <br />
                <span className="text-stone-400">“ 地势坤，君子以厚德载物 ”</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link href="/divination">
                <Button
                  size="lg"
                  className="px-10 py-7 text-xl bg-stone-800 hover:bg-stone-700 text-stone-50 rounded-full shadow-2xl hover:shadow-stone-400/50 transition-all duration-500 transform hover:-translate-y-1"
                >
                  <img src="/logo_revert.png" alt="logo" className="mr-2 h-6 w-6 object-contain" />
                  开启摇卦
                </Button>
              </Link>
              <Link href="/hexagrams">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-7 text-xl border-stone-300 hover:bg-stone-100 rounded-full transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  <BookOpen className="mr-2 h-6 w-6" />
                  查阅六十四卦
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-stone-100/30 backdrop-blur-sm border-y border-stone-200/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: () => <img src="/logo_revert.png" alt="logo" className="h-8 w-8 object-contain" />,
                title: "仪式摇卦",
                description: "模拟三枚铜钱摇卦，结合3D动效与粒子拖尾，还原最真实的起卦仪式。",
              },
              {
                icon: BookOpen,
                title: "六十四卦详解",
                description: "深度剖析每一卦的卦辞、爻辞。支持错、综、交、互等多重关系解读。",
              },
              {
                icon: Share2,
                title: "智能解读与分享",
                description: "集成 Kimi AI 智者，为你提供多维度的局势分析与极具智慧的行为建议。",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} className="h-full">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-stone-100 hover:border-stone-300 transition-all duration-500 h-full group">
                  <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-stone-300">
                    <feature.icon className="h-8 w-8 text-stone-50" />
                  </div>
                  <h3 className="text-2xl font-serif text-stone-800 mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <ScrollReveal className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-12 h-12 border-t-2 border-stone-300 mx-auto" />
            <blockquote className="text-3xl md:text-5xl font-serif text-stone-700 leading-tight tracking-tighter">
              “ 易有太极，是生两仪，<br className="hidden md:block" />两仪生四象，四象生八卦 ”
            </blockquote>
            <p className="text-xl text-stone-400 font-serif tracking-widest">— 《周易·系辞上》</p>
            <div className="w-12 h-12 border-b-2 border-stone-300 mx-auto" />
          </div>
        </div>
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="/logo_revert.png" alt="logo" className="w-full h-full rotate-12 object-contain" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-tight">
            开启您的智慧之旅
          </h2>
          <p className="text-stone-400 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">
            卦象不仅是预测，更是一种审视内心与局势的哲学。
            立即开始正式摇卦，获得属于你的当下启示。
          </p>
          <Link href="/divination">
            <Button
              size="lg"
              variant="outline"
              className="px-12 py-8 text-xl border-stone-700 text-stone-900 hover:bg-stone-800 hover:border-stone-500 rounded-full transition-all duration-700 shadow-2xl"
            >
              立刻起卦
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
