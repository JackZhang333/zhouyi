"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useCommentStore } from "@/stores/commentStore";
import { createClient } from "@/lib/supabase/client";
import { MessageSquare, Trash2, Edit2, X, Check, User, Loader2 } from "lucide-react";
import Link from "next/link";

interface CommentsProps {
  hexagramId: string;
}

export function Comments({ hexagramId }: CommentsProps) {
  const { comments, fetchComments, addComment, removeComment, isLoading, error } =
    useCommentStore();

  const hexagramComments = comments[hexagramId] || [];

  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchComments(hexagramId);

    // Check auth status
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, [hexagramId, fetchComments]);

  const handleSubmit = async () => {
    if (!newComment.trim() || !user) return;

    setIsSubmitting(true);
    await addComment(hexagramId, newComment);
    setNewComment("");
    setIsSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("确定要删除这条笔记吗？")) {
      await removeComment(id, hexagramId);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <Card className="border-stone-200">
        <CardHeader>
          <CardTitle className="text-lg font-serif flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-stone-500" />
            学习笔记
            <span className="text-sm font-normal text-stone-400">
              ({hexagramComments.length})
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 添加新评论表单 */}
          <div className="space-y-3 p-4 bg-stone-50 rounded-lg">
            {user ? (
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center">
                    <User className="h-4 w-4 text-stone-500" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="text-sm text-stone-500">
                    以 {user.email?.split("@")[0]} 的身份发表
                  </div>
                  <Textarea
                    placeholder="记录您对这卦的理解、感悟或疑问..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[100px] bg-white border-stone-200 resize-none"
                  />
                  <div className="flex justify-end gap-2">
                    {error && <span className="text-red-500 text-sm self-center">{error}</span>}
                    <Button
                      onClick={handleSubmit}
                      disabled={!newComment.trim() || isSubmitting}
                      className="bg-stone-800 hover:bg-stone-700"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          提交中...
                        </>
                      ) : (
                        "添加笔记"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 text-stone-500">
                <p className="mb-4">登录后即可发表笔记和参与讨论</p>
                <div className="flex gap-4 justify-center">
                  <Link href="/auth/login">
                    <Button variant="outline">登录</Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button>注册</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 评论列表 */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {hexagramComments.map((comment) => (
                <motion.div
                  key={comment.id}
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 border border-stone-100 rounded-lg hover:bg-stone-50/50 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-stone-500" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-stone-700">
                          {comment.author}
                        </span>
                        <span className="text-xs text-stone-400">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>

                      <p className="text-stone-700 whitespace-pre-wrap">
                        {comment.content}
                      </p>

                      {user && (user.id === comment.userId || user.email?.split("@")[0] === comment.author) && (
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => handleDelete(comment.id)}
                            className="text-xs text-stone-400 hover:text-red-600 flex items-center gap-1"
                          >
                            <Trash2 className="h-3 w-3" />
                            删除
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {hexagramComments.length === 0 && (
              <div className="text-center py-8 text-stone-400">
                <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-30" />
                <p>暂无笔记</p>
                <p className="text-sm mt-1">添加您的第一条学习笔记</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
