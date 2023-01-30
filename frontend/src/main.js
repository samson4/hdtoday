import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { loadFonts } from './plugins/webfontloader'

axios.defaults.baseURL = 'http://localhost:3000'
loadFonts()

createApp(App)
  .use(router,axios)
  .use(vuetify)
  .mount('#app')
