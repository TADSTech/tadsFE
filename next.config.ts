import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /* Export static */
  output: 'export',
  reactCompiler: true,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
  /* Export static */
};

export default nextConfig;
