/** @type {import('next').NextConfig} */
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require("@sentry/nextjs");
const { i18n } = require("./next-i18next.config.js");

const moduleExports = {
  // Your existing module.exports
  staticPageGenerationTimeout: 120,
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      "imgur.com",
      "i.imgur.com",
      "pbs.twimg.com",
    ],
  },
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
  async redirects() {
    return [
      {
        source: "/careers",
        destination: "https://jobs.lever.co/ETHGlobal",
        permanent: true,
      },
      {
        source: "/tokyo",
        destination: "https://ethglobal.com/events/tokyo",
        permanent: false,
      },
      {
        source: "/taipei",
        destination: "https://ethglobal.com/events/taipei-meetup",
        permanent: false,
      },
      {
        source: "/scaling",
        destination: "https://ethglobal.com/events/scaling2023",
        permanent: false,
      },
      {
        source: "/lisbon",
        destination: "https://ethglobal.com/events/lisbon",
        permanent: false,
      },
      {
        source: "/polygonzk",
        destination: "https://ethglobal.com/events/polygon-zk-summit",
        permanent: false,
      },
      {
        source: "/autonomous",
        destination: "https://ethglobal.com/events/autonomous",
        permanent: false,
      },
      {
        source: "/waterloo",
        destination: "https://ethglobal.com/events/waterloo2023",
        permanent: false,
      },
      {
        source: "/paris",
        destination: "https://ethglobal.com/events/paris2023",
        permanent: false,
      },
      {
        source: "/zk",
        destination: "https://ethglobal.com/events/circuitbreaker",
        permanent: false,
      },
    ];
  },
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
