"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, History, User, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

const navItems = [
  { href: "/", label: "首页", icon: null },
  { href: "/divination", label: "摇卦", icon: () => <img src="/logo.png" alt="logo" className="h-4 w-4 object-contain" /> },
  { href: "/hexagrams", label: "六十四卦", icon: BookOpen },
  { href: "/history", label: "历史", icon: History },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-8 w-8 object-contain" />
          <span className="text-2xl font-serif text-stone-800">问卦</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 ${pathname === item.href ? "text-stone-900" : ""
                    }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-800"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="h-6 w-[1px] bg-stone-200 mx-2" />

          {user ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-stone-500 truncate max-w-[120px]">
                {user.email}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                title="退出登录"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Link href="/auth/login">
              <Button variant="outline" size="sm" className="border-stone-200">
                登录
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-stone-50">
            <nav className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-2 ${pathname === item.href
                      ? "bg-stone-200 text-stone-900"
                      : "text-stone-600"
                      }`}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="my-2 border-t border-stone-200" />
              {user ? (
                <>
                  <div className="px-4 py-2 text-sm text-stone-500 truncate">
                    {user.email}
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 text-stone-600"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    退出登录
                  </Button>
                </>
              ) : (
                <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2 text-stone-600"
                  >
                    <User className="h-4 w-4" />
                    登录 / 注册
                  </Button>
                </Link>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header >
  );
}
