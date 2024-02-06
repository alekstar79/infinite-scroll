import { createStore } from 'vuex'

import page from './modules/page.js'

const store = createStore({
  modules: {
    page
  }
})

export default store
