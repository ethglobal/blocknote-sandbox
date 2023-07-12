/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const moduleExports = {
  // Your existing module.exports
  staticPageGenerationTimeout: 120,
  reactStrictMode: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.resolve.fallback = { fs: false, net: false, tls: false };

    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
};
