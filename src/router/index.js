import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';

const whiteListRouters = ['/login']

Vue.use(Router)

import aboutRouter from './modules/aboutRouter'

const routes = [
    ...aboutRouter,
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/views/404.vue')
    }
]
const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach(async (to, from, next) => {

    const token = store.getters['user/token'];

    if (token) {
        if (to.path === '/login') {
            setTimeout(() => {
                store.dispatch('user/logout');
            });
        }
        next();
        return;
    } else {
        /* white list router */
        if (whiteListRouters.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    }
});

export default router