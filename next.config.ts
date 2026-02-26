import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 只在构建时启用静态导出，开发模式禁用以避免动态路由问题
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
