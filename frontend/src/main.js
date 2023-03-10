import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import axios from 'axios'
import { loadFonts } from './plugins/webfontloader'

axios.defaults.baseURL = 'http://localhost:8008'
loadFonts()

createApp(App)
  .use(router,axios)
  .use(vuetify)
  .use(store)
  .mount('#app')
