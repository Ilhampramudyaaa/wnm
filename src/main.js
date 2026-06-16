import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

// Impor router yang baru saja dibuat
import router from './router.js'

const app = createApp(App)

// Pasang router ke dalam aplikasi Vue
app.use(router)

app.mount('#app')