import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/": ["./posts/**/*"],
    "/blog": ["./posts/**/*"],
    "/blog/[slug]": ["./posts/**/*"],
  },
};

export default nextConfig;
