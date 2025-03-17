// eslint-disable-next-line @typescript-eslint/no-require-imports
const languages = require("./src/config/languages.json");

module.exports = {
  i18n: {
    locales: languages.map((el) => el.shortKey),
    defaultLocale: "en",
    localeDetection: false,
  },
  returnObjects: true,
};
