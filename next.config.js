// eslint-disable-next-line @typescript-eslint/no-require-imports
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;