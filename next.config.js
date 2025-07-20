const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: process.env.NEXT_OUTPUT_MODE || 'export', // Add 'export' as default
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true }, 
  
  // Add these for GitHub Pages deployment:
  basePath: '/aya-ai-platform',
  assetPrefix: '/aya-ai-platform/',
  trailingSlash: true, // Helps with GitHub Pages routing
};

module.exports = nextConfig;
