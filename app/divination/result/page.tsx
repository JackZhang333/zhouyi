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
import { ArrowLeft, Share2, Save, Loader2, RotateCcw, Lock } from "lucide-react";
import { ZenMarkdown } from "@/components/divination/ZenMarkdown";
import { createClient } from "@/lib/supabase/client";
import { getDivinationRecordById } from "@/lib/supabase/db";

function DivinationResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToHistory, history } = useDivinationStore();

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

  const [user, setUser] = useState<any>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [recordCreatedAt, setRecordCreatedAt] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setIsLoadingUser(false);
    };
    checkUser();

    const fetchRecord = async () => {
      const idParam = searchParams.get("id");
      const linesParam = searchParams.get("lines");
      const originalParam = searchParams.get("original");
      const changedParam = searchParams.get("changed");
      const changingParam = searchParams.get("changing");
      const questionParam = searchParams.get("question");
      const interpretationParam = searchParams.get("interpretation");

      // 1. 如果有 ID，尝试从数据库或本地历史获取
      if (idParam) {
        setSavedRecordId(idParam);
        setIsSaved(true);

        // 尝试从本地 store 查找
        const localRecord = history.find(r => r.id === idParam);
        if (localRecord) {
          setLines(localRecord.lines as YaoType[]);
          setOriginalHexagram(getHexagramById(localRecord.original_hexagram_id) || null);
          if (localRecord.changed_hexagram_id) {
            setChangedHexagram(getHexagramById(localRecord.changed_hexagram_id) || null);
          }
          setChangingLines(localRecord.changing_lines);
          setQuestion(localRecord.question);
          setAiInterpretation(localRecord.ai_interpretation || "");
          setRecordCreatedAt(localRecord.created_at);
          return;
        }

        // 尝试从 Supabase 查找
        try {
          const remoteRecord = await getDivinationRecordById(idParam);
          if (remoteRecord) {
            setLines(remoteRecord.lines as YaoType[]);
            setOriginalHexagram(getHexagramById(remoteRecord.original_hexagram_id) || null);
            if (remoteRecord.changed_hexagram_id) {
              setChangedHexagram(getHexagramById(remoteRecord.changed_hexagram_id) || null);
            }
            setChangingLines(remoteRecord.changing_lines);
            setQuestion(remoteRecord.question);
            setAiInterpretation(remoteRecord.ai_interpretation || "");
            setRecordCreatedAt(remoteRecord.created_at);
            return;
          }
        } catch (error) {
          console.error("Failed to fetch remote record:", error);
        }
      }

      // 2. 回退到 URL 参数逻辑
      if (linesParam && originalParam) {
        try {
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
          const createdAtParam = searchParams.get("createdAt");
          if (createdAtParam) {
            setRecordCreatedAt(decodeURIComponent(createdAtParam));
          }
        } catch (e) {
          console.error("Error parsing URL params:", e);
        }
      }
    };

    fetchRecord();
  }, [searchParams, history]);

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

      // 如果用户已登录，自动保存/更新记录
      if (user) {
        await saveRecord(data.interpretation);
      }
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "获取解读失败，请稍后重试");
    } finally {
      setIsLoadingAi(false);
    }
  };

  const [savedRecordId, setSavedRecordId] = useState<string | null>(null);

  // 保存记录
  const saveRecord = async (newInterpretation?: string) => {
    if (!originalHexagram) return;

    setIsSaving(true);

    try {
      const currentRecordId = savedRecordId || crypto.randomUUID();

      const record = {
        id: currentRecordId,
        question: question.trim(),
        lines,
        original_hexagram_id: originalHexagram.id,
        changed_hexagram_id: changedHexagram?.id || null,
        changing_lines: changingLines,
        ai_interpretation: newInterpretation !== undefined ? newInterpretation : aiInterpretation,
        notes: "",
        tags: [],
        is_public: true, // Default to public for sharing
        // 如果是新记录，设置 created_at，否则在 DB 中由默认值处理或保持不变
        created_at: recordCreatedAt || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const id = await addToHistory(record);
      setSavedRecordId(id);
      if (!recordCreatedAt) {
        setRecordCreatedAt(record.created_at);
      }
      setIsSaved(true);

      // 3秒后重置状态（但保留 ID 供分享）
      setTimeout(() => setIsSaved(false), 3000);
      return id;
    } catch (error) {
      console.error("保存失败:", error);
      setAiError("保存记录失败，请手动点击保存");
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
                  <img src="/logo.png" alt="logo" className="h-5 w-5 object-contain" />
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
                          {!isLoadingUser && !user ? (
                            <div className="flex flex-col items-center gap-3">
                              <p className="text-stone-400 text-sm">
                                <Lock className="h-3 w-3 inline mr-1" />
                                登录后即可使用 AI 解读功能
                              </p>
                              <Link href={`/auth/login?redirect=/divination/result?${searchParams.toString()}`}>
                                <Button className="bg-stone-800 hover:bg-stone-700">
                                  立即登录
                                </Button>
                              </Link>
                            </div>
                          ) : (
                            <Button
                              onClick={() => setShowAiInput(true)}
                              className="bg-stone-800 hover:bg-stone-700"
                              disabled={isLoadingUser}
                            >
                              获取 AI 解读
                            </Button>
                          )}
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
                          更新解读
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
              onClick={() => saveRecord()}
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
              user
                ? (savedRecordId
                  ? `/share/${savedRecordId}`
                  : `/share/${originalHexagram.id}?lines=${encodeURIComponent(JSON.stringify(lines))}&question=${encodeURIComponent(question)}`)
                : `/auth/login?redirect=/divination/result?id=${savedRecordId || ""}&lines=${encodeURIComponent(JSON.stringify(lines))}&original=${originalHexagram.id}&changed=${changedHexagram?.id || ""}&changing=${JSON.stringify(changingLines)}&question=${encodeURIComponent(question)}`
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
