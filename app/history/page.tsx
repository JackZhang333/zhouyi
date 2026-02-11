"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useDivinationStore } from "@/stores/divinationStore";
import { getHexagramById } from "@/data/hexagrams";
import { DivinationRecord } from "@/types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import {
  Trash2,
  ExternalLink,
  Search,
  Download,
  Upload,
  X,
  FileJson,
  AlertTriangle,
  Eye,
} from "lucide-react";

export default function HistoryPage() {
  const { history, removeFromHistory, clearHistory, addToHistory, syncWithSupabase } = useDivinationStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isConfirmingClear, setIsConfirmingClear] = useState(false);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [importData, setImportData] = useState("");
  const [importError, setImportError] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/auth/login?redirect=/history");
        return;
      }
      setUser(user);
      setIsLoadingUser(false);
    };
    checkUser();
  }, [router]);

  // 获取所有唯一标签
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    history.forEach((record) => {
      record.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [history]);

  // 过滤记录
  const filteredHistory = useMemo(() => {
    if (!searchQuery.trim() && !selectedTag) return history;

    const query = searchQuery.toLowerCase();
    return history.filter((record) => {
      // 标签过滤
      if (selectedTag && (!record.tags || !record.tags.includes(selectedTag))) {
        return false;
      }

      if (!query) return true;

      const originalHexagram = getHexagramById(record.original_hexagram_id);
      const changedHexagram = record.changed_hexagram_id
        ? getHexagramById(record.changed_hexagram_id)
        : null;

      return (
        record.question?.toLowerCase().includes(query) ||
        originalHexagram?.name.includes(query) ||
        originalHexagram?.pinyin.toLowerCase().includes(query) ||
        changedHexagram?.name.includes(query) ||
        record.ai_interpretation?.toLowerCase().includes(query)
      );
    });
  }, [history, searchQuery]);

  // 导出记录
  const exportRecords = () => {
    const dataStr = JSON.stringify(history, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `周易记录-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // 导入记录
  const importRecords = () => {
    setImportError("");
    try {
      const records = JSON.parse(importData) as DivinationRecord[];

      if (!Array.isArray(records)) {
        throw new Error("数据格式错误：应为数组");
      }

      // 验证记录格式
      records.forEach((record, index) => {
        if (!record.id || !record.original_hexagram_id || !record.lines) {
          throw new Error(`第 ${index + 1} 条记录格式错误`);
        }
      });

      // 合并记录（避免重复）
      const existingIds = new Set(history.map((r) => r.id));
      const newRecords = records.filter((r) => !existingIds.has(r.id));

      newRecords.forEach((record) => addToHistory(record));

      setShowImportDialog(false);
      setImportData("");
      alert(`成功导入 ${newRecords.length} 条记录`);
    } catch (error) {
      setImportError(error instanceof Error ? error.message : "导入失败");
    }
  };

  if (isLoadingUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-stone-400" />
          <p className="text-stone-600">加载中...</p>
        </div>
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl font-serif text-stone-800 mb-4">
                历史记录
              </h1>
              <p className="text-stone-600 mb-8">
                您还没有保存任何摇卦记录
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/divination">
                  <Button className="bg-stone-800 hover:bg-stone-700">
                    去摇卦
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => setShowImportDialog(true)}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  导入记录
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 导入对话框 */}
        {showImportDialog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">导入记录</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowImportDialog(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                  className="w-full h-48 p-3 border border-stone-200 rounded-lg font-mono text-sm"
                  placeholder="粘贴 JSON 格式的记录数据..."
                />
                {importError && (
                  <p className="text-red-500 text-sm">{importError}</p>
                )}
                <div className="flex gap-2">
                  <Button
                    onClick={importRecords}
                    disabled={!importData.trim()}
                    className="bg-stone-800 hover:bg-stone-700"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    导入
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowImportDialog(false);
                      setImportData("");
                      setImportError("");
                    }}
                  >
                    取消
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-serif text-stone-800 mb-2">
                  历史记录
                </h1>
                <p className="text-stone-500">
                  共 {history.length} 条记录
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={async () => {
                  setIsSyncing(true);
                  await syncWithSupabase();
                  setIsSyncing(false);
                }} disabled={isSyncing} className="gap-2">
                  <span className={isSyncing ? "animate-spin" : ""}>↻</span>
                  {isSyncing ? "同步中" : "同步"}
                </Button>
                <Button
                  variant="outline"
                  onClick={exportRecords}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  导出
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowImportDialog(true)}
                  className="gap-2"
                >
                  <Upload className="h-4 w-4" />
                  导入
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    isConfirmingClear ? clearHistory() : setIsConfirmingClear(true)
                  }
                  className={`gap-2 ${isConfirmingClear
                    ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                    : "text-stone-600"
                    }`}
                >
                  <Trash2 className="h-4 w-4" />
                  {isConfirmingClear ? "确认清空" : "清空"}
                </Button>
              </div>
            </div>

            {/* Tags Filter */}
            {allTags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge
                  variant={selectedTag === null ? "default" : "outline"}
                  className="cursor-pointer hover:bg-stone-800 hover:text-white transition-colors"
                  onClick={() => setSelectedTag(null)}
                >
                  全部
                </Badge>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer hover:bg-stone-800 hover:text-white transition-colors"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative mb-6"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
            <Input
              type="text"
              placeholder="搜索卦名、问题、解读..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </motion.div>

          {/* Records */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredHistory.map((record, index) => (
                <RecordCard
                  key={record.id}
                  record={record}
                  index={index}
                  onDelete={removeFromHistory}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500">
                未找到匹配的记录
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 导入对话框 */}
      {showImportDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">导入记录</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowImportDialog(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <textarea
                  value={importData}
                  onChange={(e) => setImportData(e.target.value)}
                  className="w-full h-48 p-3 border border-stone-200 rounded-lg font-mono text-sm"
                  placeholder="粘贴 JSON 格式的记录数据..."
                />
                {importError && (
                  <p className="text-red-500 text-sm">{importError}</p>
                )}
                <div className="flex gap-2">
                  <Button
                    onClick={importRecords}
                    disabled={!importData.trim()}
                    className="bg-stone-800 hover:bg-stone-700"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    导入
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowImportDialog(false);
                      setImportData("");
                      setImportError("");
                    }}
                  >
                    取消
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// 记录卡片组件
interface RecordCardProps {
  record: DivinationRecord;
  index: number;
  onDelete: (id: string) => void;
}

function RecordCard({ record, index, onDelete }: RecordCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const originalHexagram = getHexagramById(record.original_hexagram_id);
  const changedHexagram = record.changed_hexagram_id
    ? getHexagramById(record.changed_hexagram_id)
    : null;

  if (!originalHexagram) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="border-stone-200 hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* 头部信息 */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-sm text-stone-400">
                  {new Date(record.created_at).toLocaleDateString("zh-CN")}
                </span>
                {record.changing_lines.length > 0 && (
                  <Badge variant="outline" className="text-amber-600 border-amber-300">
                    变卦
                  </Badge>
                )}
                {record.ai_interpretation && (
                  <Badge variant="outline" className="text-blue-600 border-blue-300">
                    AI解读
                  </Badge>
                )}
                {record.tags && record.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-stone-100 text-stone-500">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* 卦象信息 */}
              <h3 className="text-lg font-serif text-stone-800 mb-2">
                {originalHexagram.name}卦
                {changedHexagram && ` → ${changedHexagram.name}卦`}
              </h3>

              {/* 问题 */}
              {record.question && (
                <p className="text-stone-600 text-sm mb-2">
                  <span className="text-stone-400">问：</span>
                  {record.question}
                </p>
              )}

              {/* 展开的内容 */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-4 border-t border-stone-100 mt-4">
                      {/* 六爻展示 */}
                      <div className="flex justify-center py-2">
                        <div className="flex flex-col-reverse text-stone-700">
                          {record.lines.map((line, i) => (
                            <span key={i} className="text-lg leading-tight">
                              {line === 7 || line === 9 ? "━━━" : "━ ━"}
                              {line === 6 || line === 9 ? " ●" : ""}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* AI解读 */}
                      {record.ai_interpretation && (
                        <div className="bg-stone-50 p-4 rounded-lg">
                          <p className="text-sm text-stone-500 mb-1">AI解读</p>
                          <p className="text-stone-700 text-sm whitespace-pre-wrap">
                            {record.ai_interpretation}
                          </p>
                        </div>
                      )}

                      {/* 笔记 */}
                      {record.notes && (
                        <div>
                          <p className="text-sm text-stone-500 mb-1">笔记</p>
                          <p className="text-stone-700 text-sm">{record.notes}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 展开/收起按钮 */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-stone-500"
              >
                {isExpanded ? "收起" : "展开详情"}
              </Button>
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-col gap-2">
              <Link
                href={`/divination/result?id=${record.id}`}
              >
                <Button variant="ghost" size="icon" className="text-stone-400 hover:text-stone-600">
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(record.id)}
                className="text-stone-400 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
