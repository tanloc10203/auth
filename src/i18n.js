import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Tài khoản": "Username",
          "Mật khẩu": "Password",
          "Ngôn ngữ": "Language",
        }
      },
      vi: {
        translations: {
          "Tài khoản": "Tài khoản",
          "Mật khẩu": "Mật khẩu",
          "Ngôn ngữ": "Ngôn ngữ"
        }
      },
      jp: {
        translations: {
          "Tài khoản": "アカウント",
          "Mật khẩu": "パスワード",
          "Ngôn ngữ": "言語"
        }
      },
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
