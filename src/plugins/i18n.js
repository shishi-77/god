import { createI18n } from 'vue-i18n'

// Import translation files
import en from '@/locales/en.json'
import vi from '@/locales/vi.json'

const messages = {
  en,
  vi
}

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en', // Default language
  fallbackLocale: 'en', // Fallback language
  globalInjection: true, // Inject i18n instance to all components
  messages
})

export default i18n