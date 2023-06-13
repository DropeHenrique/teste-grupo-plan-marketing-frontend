import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

// Defina a base URL para todas as requisições
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// Adicione o Axios à instância do Vue
app.config.globalProperties.$axios = axios;

app.use(router).use(store).mount('#app');
