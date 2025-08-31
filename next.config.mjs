const nextConfig = {
  /* config options here */
  experimental: {
    inlineCss: true,
    useCache: true,
    clientSegmentCache: true,
    // Fix for Next.js 15 useSearchParams Suspense boundary issue
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zylq-002.dx.commercecloud.salesforce.com',
      },
      {
        protocol: 'https',
        hostname: 'edge.disstg.commercecloud.salesforce.com',
      },
    ],
  },
};

export default nextConfig;
