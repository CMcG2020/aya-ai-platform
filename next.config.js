/** @app/lib/types.ts {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/aya-ai-platform',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
