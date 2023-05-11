import AppBefore from '../AppBefore.vue'
import '../styles/app.css';
window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = false;
import { createApp } from 'vue'


createApp(AppBefore).mount('#before')