import '../styles/app.css';
import UserDetails from "../components/Forum/UserDetails.vue";
import { createApp } from 'vue';

window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = false;



const app = createApp({});

app.component('add-user-details', UserDetails);

app.mount('#userDetails');


