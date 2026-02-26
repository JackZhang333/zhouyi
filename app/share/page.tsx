import type { Metadata } from "next";
import SharePageClient from "./SharePageClient";

export const metadata: Metadata = {
  title: "【周易学习】分享卦象",
  description: "探索易经智慧，分享卦象解读",
};

export default function SharePage() {
  return <SharePageClient />;
}
