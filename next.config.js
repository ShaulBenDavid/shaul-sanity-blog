/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  images: {
    domains: ['cdn.sanity.io'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
