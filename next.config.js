// eslint-disable-next-line @typescript-eslint/no-require-imports
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["static-cms.teamlab.info"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/:path*.aspx',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/app-server',
        destination: '/docspace',
        permanent: true,
      },
      {
        source: '/cloud-office',
        destination: '/docspace',
        permanent: true,
      },
      {
        source: '/free-alternative-to-microsoft-office',
        destination: '/desktop',
        permanent: true,
      },
      {
        source: '/survey-workspace',
        destination: '/docspace',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
