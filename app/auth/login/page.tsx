"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const redirect = searchParams?.get("redirect") || "/";
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push(redirect);
            router.refresh();
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-160px)] p-4 md:p-8">
            <Card className="w-full max-w-[400px] border-stone-200 shadow-xl bg-white/70 backdrop-blur-md overflow-hidden">
                <CardHeader className="text-center pt-8 px-4 sm:px-6">
                    <CardTitle className="text-2xl font-serif">登 录</CardTitle>
                    <CardDescription>欢迎回到周易学习空间</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600">邮箱</label>
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-white/50 border-stone-200 focus:ring-stone-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-600">密码</label>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-white/50 border-stone-200 focus:ring-stone-400"
                            />
                        </div>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <Button
                            type="submit"
                            className="w-full bg-stone-800 hover:bg-stone-700 text-white"
                            disabled={loading}
                        >
                            {loading ? "登录中..." : "登 录"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2 text-center text-sm text-stone-500 pb-8 px-4 sm:px-6">
                    <p>
                        还没有账号？{" "}
                        <Link href={`/auth/signup?redirect=${encodeURIComponent(redirect)}`} className="text-stone-800 hover:underline">
                            立即注册
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
