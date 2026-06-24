import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import catalyst from 'zcatalyst-sdk-node'

const app = createApp(App)

app.use(router)

app.mount('#app')


catalyst.auth().signIn(document.getElementById("login"));

console.log("Login trying to render");