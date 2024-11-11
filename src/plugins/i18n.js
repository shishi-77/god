import { createI18n } from 'vue-i18n'

// Import translation files
import en from './locales/en.json'
import vi from './locales/vi.json'

const messages = {
  en,
  vi
}

const i18n = createI18n({
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback language
  messages
})

export default i18n