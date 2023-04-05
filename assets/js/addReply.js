import '../styles/app.css';
import AddReply from "../AddReply.vue";
import { createApp } from 'vue';
window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = false;


const app = createApp({});

app.component('add-reply', AddReply);

app.mount('#reply');
