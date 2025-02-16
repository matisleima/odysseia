import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import VueGtag from 'vue-gtag';

const app = createApp(App);

// Configure Google Analytics
// app.use(VueGtag, {
//     config: { id: 'G-YLXBHW1Z39' }
// }, router);

app.use(router);
app.mount('#app');
