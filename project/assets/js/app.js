import App from '../App.vue'
import '../styles/app.css';
import { createApp } from 'vue'
window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = false;

createApp(App).mount('#app')