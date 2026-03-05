"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
                        <h1 className="text-3xl font-bold text-stone-900">隐私政策</h1>
                        <p className="text-stone-400 text-sm italic">生效日期：2026年3月3日 | 最后更新：2026年3月4日</p>
                    </div>

                    <div className="space-y-6">
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">1. 引言</h2>
                            <p>
                                欢迎使用「周易易观」（以下简称「本产品」）。我们深知个人信息对您的重要性，并会尽力保护您的个人信息安全可靠。
                                本隐私政策说明我们如何收集、使用和保护您的信息。使用本产品即表示您同意本政策的条款。
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">2. 我们如何收集和使用信息</h2>
                            <p>为了向您提供基本服务，我们会收集以下信息：</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>账号信息：</strong>当您注册账号时，我们会收集您的电子邮箱地址，用于创建账户及身份验证。密码由 Supabase 加密存储，我们无法查看。</li>
                                <li><strong>学习记录：</strong>您保存的卦象记录、学习笔记等数据，用于提供历史记录查询功能。</li>
                                <li><strong>问题内容：</strong>您输入的求卦问题，仅用于生成 AI 解读，不会被用于其他目的。</li>
                                <li><strong>设备信息：</strong>为了优化产品体验，我们可能会收集设备型号、操作系统版本、应用崩溃日志等非识别性信息。</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">3. 第三方服务与 SDK</h2>
                            <p>本产品集成了以下第三方服务以实现相关功能：</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Supabase：</strong>用于用户身份验证、数据库存储和数据加密。数据存储在阿里云服务器（中国境内）。</li>
                                <li><strong>Kimi AI (Moonshot AI)：</strong>用于提供卦象文本的 AI 辅助解读服务。用户问题会发送到 Moonshot AI 进行处理。</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">4. 数据安全</h2>
                            <p>我们采取以下措施保护您的数据安全：</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>所有数据传输均采用 HTTPS 加密协议</li>
                                <li>用户密码使用 bcrypt 算法加密存储</li>
                                <li>数据库访问受身份验证保护</li>
                                <li>定期备份数据以防止丢失</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">5. 数据保留与删除</h2>
                            <p>
                                我们仅在为您提供服务所必需的期间内保留您的个人信息。您可以随时注销账号，
                                注销后我们将在 30 天内删除您的个人数据，法律法规另有规定的除外。
                                您也可以单独删除某条卦象记录，删除后将无法恢复。
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">6. 您的权利</h2>
                            <p>按照相关法律、法规、标准，我们保障您对自己的个人信息行使以下权利：</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>访问和更正：</strong>您可以在「个人资料」页面查看并修改您的邮箱等信息。</li>
                                <li><strong>数据导出：</strong>您可以导出您的学习记录数据。</li>
                                <li><strong>删除与注销：</strong>您可以在应用设置中直接注销账号。注销后，我们将停止为您提供产品或服务，并删除您的个人信息。</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-stone-900">7. 未成年人保护</h2>
                            <p>
                                本产品不直接面向未成年人。如果我们发现在未获得可证实的父母同意的情况下收集了未成年人的个人信息，
                                我们会设法尽快删除相关数据。
                            </p>
                        </section>

                        <section className="space-y-3 border-t border-stone-100 pt-8">
                            <h2 className="text-xl font-bold text-stone-900">8. 联系我们</h2>
                            <p>
                                如果您对本隐私政策有任何疑问、意见或建议，请通过以下方式与我们联系：
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>网站：</strong>https://www.timeandzone.cn</li>
                                <li><strong>电子邮件：</strong>support@timeandzone.cn</li>
                            </ul>
                            <p className="text-sm text-stone-500 mt-4">
                                我们将在收到您的反馈后 15 个工作日内回复。
                            </p>
                        </section>
                    </div>
                </motion.div>

                <p className="text-center text-stone-300 text-xs tracking-widest uppercase mt-12 mb-8">
                    周易易观 · 易经智慧传承
                </p>
            </div>
        </div>
    );
}
