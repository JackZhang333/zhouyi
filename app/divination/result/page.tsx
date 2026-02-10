"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { HexagramDisplay } from "@/components/divination/YaoInkAnimation";
import { getHexagramById } from "@/data/hexagrams";
import { YaoType } from "@/lib/utils/divination";
import { Hexagram } from "@/types";
import { useDivinationStore } from "@/stores/divinationStore";
import { ArrowLeft, Share2, Save, Sparkles, Loader2, RotateCcw } from "lucide-react";
import { ZenMarkdown } from "@/components/divination/ZenMarkdown";

function DivinationResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToHistory } = useDivinationStore();

  const [lines, setLines] = useState<YaoType[]>([]);
  const [originalHexagram, setOriginalHexagram] = useState<Hexagram | null>(null);
  const [changedHexagram, setChangedHexagram] = useState<Hexagram | null>(null);
  const [changingLines, setChangingLines] = useState<number[]>([]);

  // AI解读状态
  const [showAiInput, setShowAiInput] = useState(false);
  const [question, setQuestion] = useState("");
  const [aiInterpretation, setAiInterpretation] = useState("");
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiError, setAiError] = useState("");

  // 保存状态
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // 标签状态
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    const tag = tagInput.trim();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  useEffect(() => {
    const linesParam = searchParams.get("lines");
    const originalParam = searchParams.get("original");
    const changedParam = searchParams.get("changed");
    const changingParam = searchParams.get("changing");
    const questionParam = searchParams.get("question");
    const interpretationParam = searchParams.get("interpretation");
    const idParam = searchParams.get("id");

    if (linesParam && originalParam) {
      const parsedLines = JSON.parse(linesParam) as YaoType[];
      setLines(parsedLines);
      setOriginalHexagram(getHexagramById(originalParam) || null);
      if (changedParam) {
        setChangedHexagram(getHexagramById(changedParam) || null);
      }
      if (changingParam) {
        setChangingLines(JSON.parse(changingParam));
      }
      if (questionParam) {
        setQuestion(decodeURIComponent(questionParam));
      }
      if (interpretationParam) {
        setAiInterpretation(decodeURIComponent(interpretationParam));
      }
      if (idParam) {
        setSavedRecordId(idParam);
        setIsSaved(true);
      }
    }
  }, [searchParams]);

  // 获取AI解读
  const fetchAiInterpretation = async () => {
    if (!question.trim() || !originalHexagram) return;

    setIsLoadingAi(true);
    setAiError("");

    try {
      const response = await fetch("/api/interpret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hexagram: {
            name: originalHexagram.name,
            guaCi: originalHexagram.original.guaCi,
            yaoCi: originalHexagram.original.yaoCi,
          },
          changedHexagram: changedHexagram ? {
            name: changedHexagram.name,
            guaCi: changedHexagram.original.guaCi,
          } : null,
          question: question.trim(),
          changingLines,
        }),
      });

      if (!response.ok) {
        throw new Error("获取解读失败");
      }

      const data = await response.json();
      setAiInterpretation(data.interpretation);

      // 更新URL参数 - 移除，避免 URL 过长导致 431 错误
      // const params = new URLSearchParams(searchParams.toString());
      // params.set("question", encodeURIComponent(question.trim()));
      // params.set("interpretation", encodeURIComponent(data.interpretation));
      // router.replace(`/divination/result?${params.toString()}`);
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "获取解读失败，请稍后重试");
    } finally {
      setIsLoadingAi(false);
    }
  };

  const [savedRecordId, setSavedRecordId] = useState<string | null>(null);

  // 保存记录
  const saveRecord = async () => {
    if (!originalHexagram) return;

    setIsSaving(true);

    try {
      const record = {
        id: crypto.randomUUID(),
        question: question.trim(),
        lines,
        original_hexagram_id: originalHexagram.id,
        changed_hexagram_id: changedHexagram?.id || null,
        changing_lines: changingLines,
        ai_interpretation: aiInterpretation,
        notes: "",
        tags,
        is_public: true, // Default to public for sharing
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      // 如果已有 ID，则是更新
      if (savedRecordId) {
        record.id = savedRecordId;
      }

      const id = await addToHistory(record);
      setSavedRecordId(id);
      setIsSaved(true);

      // 3秒后重置状态（但保留 ID 供分享）
      setTimeout(() => setIsSaved(false), 3000);
    } catch (error) {
      console.error("保存失败:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // 重新开始
  const restart = () => {
    router.push("/divination");
  };

  if (!originalHexagram || lines.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-stone-400" />
          <p className="text-stone-600">加载中...</p>
        </div>
      </div>
    );
  }

  const hasChangingLines = changingLines.length > 0;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 flex items-center justify-between"
          >
            <Button variant="ghost" className="text-stone-600" onClick={restart}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              重新摇卦
            </Button>

            <Button variant="ghost" className="text-stone-600" onClick={restart}>
              <RotateCcw className="mr-2 h-4 w-4" />
              再占一卦
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl font-serif text-stone-800 mb-2">
              卦象已成
            </h1>
            <p className="text-stone-500">
              {new Date().toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>

          {/* Hexagram Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="mb-8 border-stone-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Hexagram Lines */}
                  <div className="flex-1">
                    <HexagramDisplay
                      lines={lines}
                      revealedCount={6}
                      showChanging={true}
                    />
                  </div>

                  {/* Hexagram Info */}
                  <div className="flex-1 text-center md:text-left">
                    <Badge variant="outline" className="mb-4">
                      本卦
                    </Badge>
                    <h2 className="text-2xl font-serif text-stone-800 mb-2">
                      {originalHexagram.name}卦
                    </h2>
                    <p className="text-stone-500 mb-4">
                      {originalHexagram.pinyin} · {originalHexagram.symbol}
                    </p>
                    <p className="text-stone-600 text-sm">
                      {originalHexagram.vernacular.guaCi.slice(0, 100)}...
                    </p>
                    <Link href={`/hexagrams/${originalHexagram.id}`}>
                      <Button variant="link" className="mt-4">
                        查看详解
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Changed Hexagram (if any) */}
          {hasChangingLines && changedHexagram && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="mb-8 border-stone-200 bg-stone-50/50">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <HexagramDisplay
                        lines={changedHexagram.lines}
                        revealedCount={6}
                        showChanging={false}
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <Badge variant="outline" className="mb-4 border-amber-400 text-amber-700">
                        变卦
                      </Badge>
                      <h2 className="text-2xl font-serif text-stone-800 mb-2">
                        {changedHexagram.name}卦
                      </h2>
                      <p className="text-stone-500 mb-4">
                        {changedHexagram.pinyin} · {changedHexagram.symbol}
                      </p>
                      <p className="text-stone-600 text-sm">
                        变爻位置：{changingLines.map((pos) => `第${pos}爻`).join("、")}
                      </p>
                      <Link href={`/hexagrams/${changedHexagram.id}`}>
                        <Button variant="link" className="mt-4">
                          查看详解
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* AI Interpretation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-lg font-serif flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-500" />
                  AI 解读
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {!aiInterpretation ? (
                    <motion.div
                      key="input"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      {!showAiInput ? (
                        <div className="text-center py-4">
                          <p className="text-stone-600 mb-4">
                            想获得针对您所求之事的 AI 解读吗？
                          </p>
                          <Button
                            onClick={() => setShowAiInput(true)}
                            className="bg-stone-800 hover:bg-stone-700"
                          >
                            获取 AI 解读
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm text-stone-600 mb-2">
                              您想询问什么？（如：事业发展、感情状况、健康等）
                            </label>
                            <Textarea
                              value={question}
                              onChange={(e) => setQuestion(e.target.value)}
                              className="w-full min-h-[100px]"
                              placeholder="请输入您的问题..."
                            />
                          </div>
                          {aiError && (
                            <p className="text-red-500 text-sm">{aiError}</p>
                          )}
                          <div className="flex gap-2">
                            <Button
                              onClick={fetchAiInterpretation}
                              disabled={!question.trim() || isLoadingAi}
                              className="bg-stone-800 hover:bg-stone-700"
                            >
                              {isLoadingAi ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  解读中...
                                </>
                              ) : (
                                "提交解读"
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setShowAiInput(false)}
                              disabled={isLoadingAi}
                            >
                              取消
                            </Button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      {question && (
                        <div className="p-4 bg-stone-50 rounded-lg">
                          <p className="text-sm text-stone-500 mb-1">您的问题：</p>
                          <p className="text-stone-800">{question}</p>
                        </div>
                      )}
                      <div className="bg-white/50 p-6 rounded-lg border border-stone-100 shadow-sm">
                        <ZenMarkdown content={aiInterpretation} />
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setAiInterpretation("");
                            setShowAiInput(true);
                          }}
                        >
                          重新提问
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tags Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <Card className="border-stone-200">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-sm text-stone-500 mr-2">标签：</span>
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1 px-2 py-0.5 bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors">
                      {tag}
                      <button onClick={() => removeTag(tag)} className="ml-1 hover:text-stone-900">
                        ×
                      </button>
                    </Badge>
                  ))}
                  <div className="flex gap-2 items-center ml-2">
                    <Input
                      value={tagInput}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTagInput(e.target.value)}
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                      placeholder="添加标签..."
                      className="h-8 w-24 text-xs bg-transparent border-dashed border-stone-200 focus:border-stone-400"
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={addTag}
                      className="h-8 px-2 text-stone-400 hover:text-stone-600"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              variant="outline"
              className="gap-2"
              onClick={saveRecord}
              disabled={isSaving || isSaved}
            >
              {isSaving ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : isSaved ? (
                <>
                  <Save className="h-4 w-4" />
                  已保存
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  保存记录
                </>
              )}
            </Button>

            <Link href={
              savedRecordId
                ? `/share/${savedRecordId}`
                : `/share/${originalHexagram.id}?lines=${encodeURIComponent(JSON.stringify(lines))}&question=${encodeURIComponent(question)}&interpretation=${encodeURIComponent(aiInterpretation)}`
            }>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                分享卦象
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function DivinationResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-stone-400" />
          <p className="text-stone-600">加载中...</p>
        </div>
      </div>
    }>
      <DivinationResultContent />
    </Suspense>
  );
}
