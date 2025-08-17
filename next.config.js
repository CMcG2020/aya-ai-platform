/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Export as static site for GitHub Pages
  output: 'export',
  // Ensure all asset links work under the GitHub Pages subpath
  basePath: isProd ? '/aya-ai-platform' : '',
  // Remove assetPrefix as it can interfere with basePath for static assets
  // assetPrefix: isProd ? '/aya-ai-platform/' : '',
  // Disable image optimization for static hosting (GitHub Pages)
  images: {
    unoptimized: true,
    // If you switch back to optimized images, add remotePatterns/domains here
  },
  // Optional but often helpful for GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig