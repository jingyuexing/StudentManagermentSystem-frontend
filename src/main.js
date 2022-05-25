import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import Router from './router'
let Root = createApp(App);
Root.use(Antd);
Root.use(Router);
Root.mount('#app');
