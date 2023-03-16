/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["naver.github.io"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
