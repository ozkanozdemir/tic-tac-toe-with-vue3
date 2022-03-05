import { createApp } from 'vue'
import App from './App.vue'

// store
import store from './store'

// create app
const app = createApp(App);

// inject store
app.use(store);

// mount app component to #app dom
app.mount('#app');
