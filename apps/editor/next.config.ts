import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/types", "@repo/lib", "@repo/ui"],
};

export default nextConfig;
