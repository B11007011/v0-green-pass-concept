/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Consider enabling this for production builds
    // ignoreDuringBuilds: true,
  },
  typescript: {
    // Consider enabling this for production builds
    // ignoreBuildErrors: true,
  },
  images: {
    // Enable image optimization for production
    unoptimized: false,
    // Add domains if you're using external image sources
    domains: [],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Add production source maps for better debugging
  productionBrowserSourceMaps: false,
  // Configure page and asset caching
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Enable server components optimization
    serverComponentsExternalPackages: [],
    // Enable server actions
    serverActions: true,
  },
}

export default nextConfig