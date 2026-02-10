import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getHexagramById, getAllHexagrams } from "@/data/hexagrams";
import { HexagramDetail } from "@/components/hexagram";
import { generateHexagramMetadata, generateHexagramJsonLd } from "@/lib/seo/hexagram";
import { JsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const hexagrams = getAllHexagrams();
  return hexagrams.map((hexagram) => ({
    id: hexagram.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hexagram = getHexagramById(id);

  if (!hexagram) {
    return {
      title: "卦象未找到",
    };
  }

  return generateHexagramMetadata(hexagram);
}

export default async function HexagramPage({ params }: Props) {
  const { id } = await params;
  const hexagram = getHexagramById(id);

  if (!hexagram) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <JsonLd data={generateHexagramJsonLd(hexagram)} id={`json-ld-${hexagram.id}`} />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <HexagramDetail hexagram={hexagram} />
        </div>
      </div>
    </div>
  );
}
