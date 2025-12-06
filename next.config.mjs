/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply headers to all widget routes to allow iframe embedding
        source: '/widget/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: '', // Remove the default DENY to allow embedding
          },
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors *;', // Allow embedding from any origin
          },
        ],
      },
    ];
  },
};

export default nextConfig;
