const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/aya-ai-platform',
  images: {
    unoptimized: true
  }
}

module.exports = withBundleAnalyzer(nextConfig)
