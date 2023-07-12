const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp"],
    localePath: path.resolve("./public/locales"),
    reloadOnPrerender: true,
  },
};
