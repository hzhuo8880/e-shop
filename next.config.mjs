const nextConfig = {
  experimental: {
    inlineCss: true,
    useCache: true,
    clientSegmentCache: true,
    reactCompiler: true, // Enable React Compiler
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
  // Remove the invalid generateStaticParams option
};

export default nextConfig;
