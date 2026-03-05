"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100"
    >
      <div className="container mx-auto px-4 py-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left"
          >
            <p className="text-stone-600 text-sm"
            >
              周易学习 - 探索易经智慧
            </p>
            <p className="text-stone-400 text-xs mt-1"
            >
              传承中华文化，领悟易理精髓
            </p>
          </div>

          <div className="flex items-center gap-6"
          >
            <Link href="/hexagrams" className="text-stone-500 hover:text-stone-700 text-sm transition-colors"
            >
              六十四卦
            </Link>
            <Link href="/divination" className="text-stone-500 hover:text-stone-700 text-sm transition-colors"
            >
              在线摇卦
            </Link>
            <Link href="/privacy" className="text-stone-500 hover:text-stone-700 text-sm transition-colors"
            >
              隐私政策
            </Link>
            <Link href="/terms" className="text-stone-500 hover:text-stone-700 text-sm transition-colors"
            >
              服务协议
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-stone-200 text-center"
        >
          <p className="text-stone-400 text-xs"
          >
            © {new Date().getFullYear()} 周易学习. 仅供学习研究使用.
          </p>
        </div>
      </div>
    </footer>
  );
}
