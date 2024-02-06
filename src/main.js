import { createApp } from 'vue'
import App from './App'

import vuetify from './plugins/vuetify'
import store from './store'

import './assets/main.scss'

const app = createApp(App)

app.use(vuetify)
app.use(store)

app.mount('#app')
