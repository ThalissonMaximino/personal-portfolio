import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './locales/pt/translantion.json'
import en from './locales/en/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en }
  },
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
