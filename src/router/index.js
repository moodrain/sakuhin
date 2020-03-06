import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
let mobile = window.navigator.userAgent.indexOf('Mobile') >= 0

const routes = [
    {
        path: '/',
        component: Home,
        props: {mobile}
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
