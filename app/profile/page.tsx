"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { LogOut, Shield, MessageSquare, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger
} from "@/components/ui/dialog";

export default function ProfilePage() {
    const [user, setUser] = useState<SupabaseUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showFinalConfirm, setShowFinalConfirm] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const supabase = createClient();
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);

            if (!user) {
                router.push("/auth/login");
            }
        };

        getUser();
    }, [supabase, router]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/");
        router.refresh();
    };

    const handleDeleteAccount = async () => {
        try {
            setIsDeleting(true);
            const { error } = await supabase.rpc('delete_user_own_account');

            if (error) throw error;

            try {
                await supabase.auth.signOut();
            } catch (e) {
                console.warn("Sign out after deletion returned error (expected):", e);
            }

            router.push("/");
            router.refresh();
        } catch (error) {
            console.error("Error deleting account:", error);
            alert("注销失败，请稍后重试");
        } finally {
            setIsDeleting(false);
            setShowFinalConfirm(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-stone-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stone-800" />
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            {/* Texture Overlay */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-repeat" style={{ backgroundImage: "url('/images/rice-paper.png')" }} />

            <div className="container mx-auto px-4 pt-8 max-w-2xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {/* User Info Card */}
                    <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center text-stone-600 text-2xl font-serif border-4 border-white shadow-lg">
                                    {user.email?.charAt(0).toUpperCase()}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h1 className="text-xl font-serif text-stone-800 truncate">
                                    {user.email?.split('@')[0]}
                                </h1>
                                <p className="text-stone-400 text-sm font-mono truncate">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Group */}
                    <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
                        <div className="divide-y divide-stone-100">
                            <MenuItem
                                icon={MessageSquare}
                                label="帮助与反馈"
                                onClick={() => setShowFeedback(true)}
                            />
                            <MenuItem
                                icon={Shield}
                                label="服务协议"
                                onClick={() => router.push("/terms")}
                            />
                            <MenuItem
                                icon={Shield}
                                label="隐私政策"
                                onClick={() => router.push("/privacy")}
                            />
                        </div>
                    </div>

                    {/* Logout Button */}
                    <Button
                        variant="ghost"
                        className="w-full py-6 rounded-2xl bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-800 flex items-center justify-center gap-2 font-serif text-base shadow-sm"
                        onClick={handleLogout}
                    >
                        <LogOut className="h-5 w-5" />
                        退出登录
                    </Button>

                    {/* Delete Account */}
                    <div className="text-center">
                        <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
                            <DialogTrigger asChild>
                                <button className="text-stone-400 text-sm hover:text-red-500 transition-colors">
                                    注销账号
                                </button>
                            </DialogTrigger>
                            <DialogContent className="font-serif">
                                <DialogHeader>
                                    <DialogTitle className="text-xl">确定要注销账号吗？</DialogTitle>
                                    <DialogDescription asChild>
                                        <div className="pt-4 space-y-2 text-stone-500 leading-relaxed">
                                            注销账号将导致以下后果：
                                            <ul className="list-disc pl-5 space-y-1 text-red-500/80">
                                                <li>永久删除您的所有摇卦历史记录</li>
                                                <li>遗失所有 AI 解读结果</li>
                                                <li>无法恢复已保存的学习笔记</li>
                                            </ul>
                                            此操作不可撤销，请谨慎操作。
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <Button variant="outline" onClick={() => setShowDeleteConfirm(false)} className="flex-1">
                                        我再想想
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => {
                                            setShowDeleteConfirm(false);
                                            setTimeout(() => setShowFinalConfirm(true), 300);
                                        }}
                                        className="flex-1"
                                    >
                                        确认注销
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Dialog open={showFinalConfirm} onOpenChange={setShowFinalConfirm}>
                            <DialogContent className="font-serif">
                                <DialogHeader>
                                    <DialogTitle className="text-xl text-red-600">最后一次确认</DialogTitle>
                                    <DialogDescription asChild>
                                        <div className="pt-4 text-stone-600">
                                            您即将在数据库中永久删除您的账户及其关联的所有数据。
                                            <strong className="block mt-2 font-bold text-red-500">此操作不可恢复！</strong>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <Button variant="outline" onClick={() => setShowFinalConfirm(false)} className="flex-1">
                                        取消
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={handleDeleteAccount}
                                        disabled={isDeleting}
                                        className="flex-1 relative"
                                    >
                                        {isDeleting ? "正在删除..." : "彻底删除"}
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>

                    {/* Feedback Dialog */}
                    <Dialog open={showFeedback} onOpenChange={setShowFeedback}>
                        <DialogContent className="font-serif">
                            <DialogHeader>
                                <DialogTitle className="text-xl">帮助与反馈</DialogTitle>
                                <DialogDescription>
                                    如果您在使用过程中遇到任何问题，或有任何建议，欢迎联系我们：
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-3 py-4">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                                    <div className="p-2 rounded-xl bg-white text-stone-400 shadow-sm">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 uppercase font-bold">电子邮件</p>
                                        <p className="text-stone-800 text-sm">zxs301470@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100">
                                    <div className="p-2 rounded-xl bg-white text-stone-400 shadow-sm">
                                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M8.337 3.753c-.767.126-1.558.45-2.115.867l-1.071.748c-.613.43-.84.6-1.127 1.055-.476.757-.591 1.638-.309 2.37.128.333.313.585.556.764.122.09.431.252.688.36a10.978 10.978 0 0 0 5.483.911c.731-.035 1.543-.193 2.222-.444.331-.122.617-.291.801-.475.249-.249.467-.714.512-1.096.062-.516-.145-1.025-.56-1.353-.298-.236-.61-.397-.977-.512a4.93 4.93 0 0 0-3.085-.022 5.064 5.064 0 0 1-1.201.21z" />
                                            <path d="M11.666 4.673c-1.32.138-2.61.644-3.578 1.458-.456.384-.814.832-1.045 1.307-.152.311-.19.46-.196.81-.008.49.076.77.348 1.15.215.301.554.542.885.642.155.048.243.056.634.056.417.001.464-.001.564-.029.255-.07.502-.271.696-.566.084-.127.1-.19.141-.563.033-.306.035-.327.135-.558.204-.47.625-.859 1.144-1.055.228-.086.44-.131.695-.147.168-.01.523-.004.664.011l.244.027c.489.068.966.305 1.303.655.45.467.635 1.055.514 1.64-.084.408-.344.819-.714 1.134l-.451.385c-.477.406-.838.74-1.114 1.031l-.226.237c-.328.347-.577.674-.757.994-.176.313-.243.488-.289.761-.06.353-.058.694.004.978.049.224.128.435.225.596.223.369.6.58 1.033.58.45 0 .82-.206 1.066-.59.081-.127.152-.371.187-.633.021-.157.02-.34-.002-.51-.019-.142-.058-.281-.126-.445l-.046-.111-.035-.113c-.004-.015-.034-.131-.067-.258-.231-.885-.011-1.748.604-2.36l.24-.239.117-.116c.325-.323.702-.633.916-.757 1.041-.606 1.693-1.637 1.706-2.695.008-.66-.145-1.285-.45-1.84-.572-1.041-1.66-1.748-2.906-1.884-.27-.03-1.06-.017-1.332.02z" />
                                            <path d="M22 10.5c0 5.247-4.477 9.5-10 9.5a10.942 10.942 0 0 1-5.181-1.29L2 20l1.29-4.819A9.458 9.458 0 0 1 2 10.5C2 5.253 6.477 1 12 1s10 4.253 10 9.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs text-stone-400 uppercase font-bold">微信 ID</p>
                                        <p className="text-stone-800 text-sm">Johnny13221059243</p>
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={() => setShowFeedback(false)} className="w-full">
                                    关闭
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Footer */}
                    <p className="text-center text-stone-300 text-xs tracking-widest uppercase pt-8">
                        周易易观 · 易经智慧传承
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

function MenuItem({ icon: Icon, label, onClick }: { icon: React.ComponentType<{ className?: string }>, label: string, onClick?: () => void }) {
    return (
        <button
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-stone-50 transition-colors group"
            onClick={onClick}
        >
            <div className="flex items-center gap-4">
                <div className="p-2 rounded-xl bg-stone-50 text-stone-400 group-hover:text-stone-600 transition-colors">
                    <Icon className="h-5 w-5" />
                </div>
                <span className="font-serif text-stone-700">{label}</span>
            </div>
            <ChevronRight className="h-4 w-4 text-stone-300 group-hover:text-stone-400 transition-colors" />
        </button>
    );
}
