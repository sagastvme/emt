import '../styles/app.css';
import PostsByCategories from "../components/Forum/PostsByCategories.vue";
import { createApp } from 'vue';

window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = false;



const app = createApp({});

app.component('by-categories', PostsByCategories);

app.mount('#categories');


