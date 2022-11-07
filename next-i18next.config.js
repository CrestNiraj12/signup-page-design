const { initReactI18next } = require("react-i18next");

module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
  fallbackLng: {
    default: ["en"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  serializeConfig: false,
  use: [initReactI18next], // very important to add
};
