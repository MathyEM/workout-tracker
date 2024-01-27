import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Vuetify
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = new createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark'
    },
    // icons: {
    //     defaultSet: 'fa',
    //     aliases,
    //     sets: {
    //         mdi,
    //         fa
    //     }
    // },
})

const app = createApp(App)
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')
