import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/tailwind.css'
import VueGtag from "vue-gtag";


createApp(App).use(VueGtag, {
    id: '303765259',
}).mount('#app')
