"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ServiceAgreement() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            {/* Texture Overlay */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-repeat z-0" style={{ backgroundImage: "url('/images/rice-paper.png')" }} />

            <div className="container mx-auto px-4 pt-8 max-w-2xl relative z-10">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-6 text-stone-500 hover:text-stone-800 -ml-2"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    返回
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8 text-stone-700 leading-relaxed font-serif"
                >
                    <div className="text-center space-y-2 border-b border-stone-100 pb-8">
                        <h1 className="text-3xl font-bold text-stone-900">用户服务协议</h1>
                        <p className="text-stone-400 text-sm italic">生效日期：2026年3月3日</p>
                    </div>

                    <div className="space-y-6">
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">1. 服务说明</h2>
                            <p>
                                “周易易观”（以下简称”本产品”）是一款旨在弘扬中国传统易学文化，提供卦意解析、哲学参考及研究工具的应用。本产品提供的所有内容，包括但不限于卦象解读、AI 分析结论、历史典籍、运势参考等，均基于传统文化研究。
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900 text-red-800">2. 特别免责声明（重要）</h2>
                            <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 space-y-3">
                                <p className="font-bold text-red-900 underline">请您务必仔细阅读以下条款：</p>
                                <ul className="list-disc pl-5 space-y-2 text-red-900 text-sm">
                                    <li><strong>文化娱乐属性：</strong>本产品提供的内容仅供传统文化研究、学术参考及休闲娱乐之用。易经解读具有高度的主观性和哲学性，不能作为您处理事务的唯一准则。</li>
                                    <li><strong>非专业建议：</strong>本产品不提供任何医疗、法律、财务或专业心理咨询建议。若您面临健康、生命、重大利益决定或法律纠纷，请务必咨询持有相关资质的专业人士。</li>
                                    <li><strong>AI 局限性：</strong>应用内的 AI 解读是基于大语言模型生成的逻辑推演，并不代表某种超自然力量或对未来的确定性预测，请科学理性看待生成内容。</li>
                                    <li><strong>决策责任：</strong>用户依据本产品提供的信息所做出的任何决定，其后果均由用户自行承担。本产品及其开发者对因使用本产品而产生的任何直接、间接损失不承担法律责任。</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">3. 用户守则</h2>
                            <p>您在使用本服务时，应遵守国家法律法规：</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>不得利用本产品传播迷信思潮、谣言或任何违反社会公德的信息；</li>
                                <li>不得利用本产品从事任何形式的非法集资、诈骗等违法活动；</li>
                                <li>不得对本产品进行恶意篡改、反向工程或干扰正常运行。</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">4. 知识产权</h2>
                            <p>
                                本产品内的所有视觉设计、代码及生成的独特解析内容版权均归开发者所有。用户生成的卦象记录归用户所有，但我们在为您提供服务时会进行必要的数据存储。
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-stone-100 pt-8">
                            <h2 className="text-xl font-bold text-stone-900">5. 联系我们</h2>
                            <p>
                                如果您对本协议有任何疑问或需要支持，请通过以下方式与我们联系：
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>网站：</strong>https://www.timeandzone.cn</li>
                                <li><strong>电子邮件：</strong>support@timeandzone.cn</li>
                            </ul>
                        </section>
                    </div>
                </motion.div>

                <p className="text-center text-stone-300 text-xs tracking-widest uppercase mt-12 mb-8">
                    周易易观 · 君子居则观其象而玩其辞
                </p>
            </div>
        </div>
    );
}
