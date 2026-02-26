import { getAllHexagrams, getHexagramById } from "@/data/hexagrams";
import SharePageClient from "./SharePageClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  // 解码 URL 编码的 ID（如 l%C3%BC -> lü）
  const decodedId = decodeURIComponent(id);
  const hexagram = getHexagramById(decodedId);

  if (!hexagram) {
    return {
      title: "卦象未找到",
    };
  }

  return {
    title: `【周易学习】${hexagram.name}卦分享`,
    description: `探索${hexagram.name}卦的智慧：${hexagram.original.guaCi}`,
    openGraph: {
      title: `${hexagram.name}卦 - 周易智慧分享`,
      description: hexagram.original.guaCi,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const hexagrams = getAllHexagrams();
  return hexagrams.map((hexagram) => ({
    id: hexagram.id,
  }));
}

export default function SharePage() {
  return <SharePageClient />;
}
