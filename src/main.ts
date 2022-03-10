import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/tailwind.css'
import VueGtag from "vue-gtag";


createApp(App).use(VueGtag, {
   config:{ id: 'UA-125028226-2',}
}).mount('#app')
