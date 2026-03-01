import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出仅在明确设置 STATIC_EXPORT=true 时启用（用于 iOS 构建）
  // Vercel 部署时需要服务端渲染以支持 API Routes
  output: process.env.STATIC_EXPORT === "true" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
