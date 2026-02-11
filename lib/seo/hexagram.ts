import { Hexagram } from "@/types";
import { Metadata } from "next";

export function generateHexagramMetadata(hexagram: Hexagram): Metadata {
    return {
        title: `${hexagram.name}卦 (${hexagram.symbol}) - 周易六十四卦详解 | 问卦 AI`,
        description: `${hexagram.name}卦象征${hexagram.vernacular.guaCi.substring(0, 100)}... 包含卦辞、彖传、象传原文及白话解析。`,
        keywords: [
            hexagram.name,
            `${hexagram.name}卦`,
            hexagram.pinyin,
            "周易",
            "易经",
            "六十四卦",
            "占卜",
            "易经解读",
        ],
        openGraph: {
            title: `${hexagram.name}卦详解`,
            description: hexagram.vernacular.guaCi.substring(0, 160),
            type: "article",
            url: `https://timeandzone.cn/hexagrams/${hexagram.id}`,
            siteName: "问卦 AI",
            images: [
                {
                    url: `/images/hexagrams/${hexagram.id}.png`, // 假设有图片
                    width: 1200,
                    height: 630,
                    alt: `${hexagram.name}卦`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${hexagram.name}卦详解`,
            description: hexagram.vernacular.guaCi.substring(0, 160),
        },
    };
}

export function generateHexagramJsonLd(hexagram: Hexagram) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${hexagram.name}卦详解 - 周易智慧`,
        "description": hexagram.vernacular.guaCi,
        "image": `https://timeandzone.cn/images/hexagrams/${hexagram.id}.png`,
        "author": {
            "@type": "Organization",
            "name": "问卦 AI",
            "url": "https://timeandzone.cn"
        },
        "publisher": {
            "@type": "Organization",
            "name": "问卦 AI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://timeandzone.cn/logo.png"
            }
        },
        "datePublished": "2024-01-01T00:00:00+08:00",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://timeandzone.cn/hexagrams/${hexagram.id}`
        }
    };
}
