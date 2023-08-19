/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  images: {
    domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_DEV_WIZARD_URL}:path*`,
      },
    ];
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
