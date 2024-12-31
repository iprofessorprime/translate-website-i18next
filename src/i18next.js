import i18n from "i18next";
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import hiTranslation from './locales/hi/translation.json';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: "en",
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      hi: { translation: hiTranslation },
    },
  });
