import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const mapLanguageCode = (lng: string): string => {
  if (lng.startsWith('en')) {
    return 'en';
  } else if (lng.startsWith('fr')) {
    return 'fr';
  }
  return 'en'; // default to 'en' if no match
}


// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(HttpBackend) // Load translation files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to React
  .init({
    lng: mapLanguageCode('en'), // Call mapLanguageCode function with 'en' parameter
    fallbackLng: 'en', // Default language
    debug: true, // Enable logging in development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',// Path to translation files
    },
  });

export default i18n;
