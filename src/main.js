import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// make sure to also import the coresponding css
const vuetify = new createVuetify({
    components,
    directives,
    options: {
        customProperties: true,
    },
    theme: {
        defaultTheme: 'dark',
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
})

const app = createApp(App)
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')
