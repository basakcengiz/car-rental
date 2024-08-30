import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './en/en.json';
import trJson from './tr/tr.json';
export const languages = ['tr', 'en'];
export const defaultLanguage = 'en';

const languageKey = 'i18nextLng';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: localStorage.getItem(languageKey) || defaultLanguage,
    fallbackLng: defaultLanguage,
    supportedLngs: languages,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      en: {
        translation: enJson
      },
      tr: {
        translation: trJson
      }
    }
  });

export default i18n;

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  localStorage.setItem(languageKey, lng); // Store language preference in local storage
};
