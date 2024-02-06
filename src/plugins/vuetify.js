import { aliases, mdi } from 'vuetify/iconsets/mdi'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createVuetify } from 'vuetify'

// Translations provided by Vuetify
import { en, ru } from 'vuetify/locale'

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  components,
  directives,

  // Icon Fonts
  // https://vuetifyjs.com/en/features/icon-fonts
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },

  // Internationalization (i18n)
  // https://vuetifyjs.com/en/features/internationalization/#internationalization-i18n
  locale: {
    locale: 'ru',
    fallback: 'en',
    messages: {
      ru, en
    }
  },

  // Theme
  // https://vuetifyjs.com/en/features/theme/
  theme: {
    defaultTheme: 'light'
  }
})
