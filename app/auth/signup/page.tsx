"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();
    const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    const redirect = searchParams?.get("redirect") || "/";
    const supabase = createClient();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            setMessage("注册成功！请查收邮件以确认您的账号。");
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-160px)] p-4 md:p-8">
            <Card className="w-full max-w-[400px] border-stone-200 shadow-xl bg-white/70 backdrop-blur-md overflow-hidden">
                <CardHeader className="text-center pt-8 px-4 sm:px-6">
                    <CardTitle className="text-2xl font-serif">注 册</CardTitle>
                    <CardDescription>开启您的周易智慧之旅</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                    <form onSubmit={handleSignup} className="space-y-4">
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
                        {message && <p className="text-sm text-green-600">{message}</p>}
                        <Button
                            type="submit"
                            className="w-full bg-stone-800 hover:bg-stone-700 text-white"
                            disabled={loading}
                        >
                            {loading ? "注册中..." : "注 册"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2 text-center text-sm text-stone-500 pb-8 px-4 sm:px-6">
                    <p>
                        已有账号？{" "}
                        <Link href={`/auth/login?redirect=${encodeURIComponent(redirect)}`} className="text-stone-800 hover:underline">
                            立即登录
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
