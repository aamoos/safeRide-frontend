import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axiosInstance from './axios.js';
import vuetify from './plugins/vuetify' // ✅ Vuetify 추가

// 앱 생성
const app = createApp(App);

// router를 먼저 설정
app.use(router);
app.use(vuetify) // ✅ Vuetify 적용

// Axios 인스턴스를 전역으로 등록
app.config.globalProperties.$axios = axiosInstance;

// 앱 마운트
app.mount('#app');