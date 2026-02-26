"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HexagramDisplay } from "@/components/divination/YaoInkAnimation";
import { getHexagramById } from "@/data/hexagrams";
import { YaoType } from "@/lib/utils/divination";
import { Hexagram } from "@/types";
import { ArrowLeft, Download, Share2, Loader2, Lock } from "lucide-react";
import html2canvas from "html2canvas-pro";

function SharePageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<YaoType[]>([]);
  const [originalHexagram, setOriginalHexagram] = useState<Hexagram | null>(null);
  const [question, setQuestion] = useState("");
  const [interpretation, setInterpretation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    // Get user session
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setIsLoadingUser(false);
    };
    checkUser();

    const fetchRecord = async () => {
      // 解码 URL 编码的 ID（如 l%C3%BC -> lü）
      const id = decodeURIComponent(params.id as string);

      // Try fetching as a record UUID first
      if (id.length > 20) { // Simple check for UUID-like string
        const supabase = createClient();
        const { data, error } = await supabase
          .from("divination_records")
          .select("*")
          .eq("id", id)
          .single();

        if (data && !error) {
          const hexagram = getHexagramById(data.original_hexagram_id);
          setOriginalHexagram(hexagram || null);
          setLines(data.lines as YaoType[]);
          setQuestion(data.question);
          setInterpretation(data.ai_interpretation);
          return;
        }
      }

      // Fallback to hexagram ID and query params
      const hexagram = getHexagramById(id);
      if (hexagram) {
        setOriginalHexagram(hexagram);

        const linesParam = searchParams.get("lines");
        const questionParam = searchParams.get("question");
        const interpretationParam = searchParams.get("interpretation");

        if (linesParam) {
          try {
            setLines(JSON.parse(linesParam));
          } catch (e) {
            setLines(hexagram.lines);
          }
        } else {
          setLines(hexagram.lines);
        }

        if (questionParam) {
          setQuestion(decodeURIComponent(questionParam));
        }

        if (interpretationParam) {
          setInterpretation(decodeURIComponent(interpretationParam));
        }
      }
    };

    fetchRecord();
  }, [params.id, searchParams]);

  // 生成分享图片
  const generateImage = async () => {
    if (!cardRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#fafaf9",
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `周易-${originalHexagram?.name || "卦象"}-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("生成图片失败:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // 复制链接
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error("复制失败:", error);
    }
  };

  if (!originalHexagram) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-stone-400" />
          <p className="text-stone-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-between"
          >
            <Link href="/divination">
              <Button variant="ghost" className="text-stone-600">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回
              </Button>
            </Link>
          </motion.div>

          {/* 分享卡片 - 可下载 */}
          <div ref={cardRef} className="bg-stone-50 p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <p className="text-stone-400 text-sm mb-2">周易学习</p>
              <h1 className="text-3xl font-serif text-stone-800">
                {originalHexagram.name}卦
              </h1>
              <p className="text-stone-500 mt-1">{originalHexagram.pinyin}</p>
            </div>

            <div className="flex justify-center mb-8">
              <HexagramDisplay
                lines={lines}
                revealedCount={6}
                showChanging={true}
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-stone-500 mb-1">卦辞</p>
                <p className="text-stone-800 font-serif">{originalHexagram.original.guaCi}</p>
              </div>

              {question && (
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-stone-500 mb-1">所求</p>
                  <p className="text-stone-800">{question}</p>
                </div>
              )}

              {interpretation && (
                <div className="bg-white p-4 rounded-lg relative overflow-hidden">
                  <p className="text-sm text-stone-500 mb-1">AI 解读</p>
                  {!isLoadingUser && !user ? (
                    <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
                      <div className="bg-stone-100 p-2 rounded-full">
                        <Lock className="h-4 w-4 text-stone-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-stone-600 text-sm font-medium">卦解内容仅登录用户可见</p>
                        <p className="text-stone-400 text-xs">登录后探索更深层的易经智慧</p>
                      </div>
                      <Link href={`/auth/login?redirect=/share/${params.id}`}>
                        <Button size="sm" variant="outline" className="mt-2 text-xs">
                          立即登录
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <p className={`text-stone-700 text-sm ${isLoadingUser ? "blur-sm" : "line-clamp-4"}`}>
                      {interpretation}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center mt-8 space-y-2">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-stone-100">
                <img src="/QRCode.png" alt="QR Code" className="w-24 h-24 object-contain" />
              </div>
              <div className="text-center text-stone-400 text-xs">
                <p>{new Date().toLocaleDateString("zh-CN")}</p>
                <p className="mt-1">扫码开启周易智慧</p>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button
              onClick={generateImage}
              disabled={isGenerating}
              className="bg-stone-800 hover:bg-stone-700 gap-2"
            >
              {isGenerating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {isGenerating ? "生成中..." : "保存图片"}
            </Button>

            <Button
              variant="outline"
              onClick={copyLink}
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              {isCopied ? "已复制链接" : "复制链接"}
            </Button>
          </motion.div>

          {/* 提示 */}
          <p className="mt-8 text-center text-stone-500 text-sm">
            保存图片后可以分享到社交媒体或发送给朋友
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SharePageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-stone-400" />
          <p className="text-stone-600">加载中...</p>
        </div>
      </div>
    }>
      <SharePageContent />
    </Suspense>
  );
}
