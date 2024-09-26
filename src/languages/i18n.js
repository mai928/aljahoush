import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './en.json';
import arTranslation from './ar.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set default language explicitly
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });


  i18n.on('languageChanged', (lng) => {
    console.log('Language changed to:', lng);
  });

export default i18n;
