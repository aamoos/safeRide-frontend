import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/views/LoginPage.vue'
import FcmPage from '../components/views/FcmPage.vue'
import MainPage from '../components/views/MainPage.vue'
import Oauth2Redirect from "../components/views/Oauth2Redirect.vue";
import SettingPage from '../components/views/SettingPage.vue'
import UserJoinPage from '../components/views/UserJoinPage.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/fcm',
        name: 'fcm',
        component: FcmPage
    },
    {
        path: '/main',
        name: 'main',
        component: MainPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/join',
        name: 'join',
        component: UserJoinPage,
        meta: { requiresAuth: true }
    },
    // oauth2 redirect page
    {
        path: '/oauth2/redirect',
        name: "oauth2-redirect",
        component: Oauth2Redirect,
        meta: { requiresAuth: false },
    }
    // 다른 라우터 추가
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('accessToken');

    //accessToken이 있고 로그인페이지일경우 main 페이지로
    if (isAuthenticated && to.path == "/") {
        next('/main');
    }

    // If the route requires authentication and there's no token, redirect to home
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;