/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `${process.env.NEXT_PUBLIC_DEV_WIZARD_URL}:path*`,
    },
  ],

  reactStrictMode: true,
};

module.exports = nextConfig;
