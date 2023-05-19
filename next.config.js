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
  // I don't want it to run when compiling as I trust the CI stage of the pipeline and Husky.
  ignoreDuringBuilds: true,
};

module.exports = nextConfig;
