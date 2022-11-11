import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/apis',
    name: 'apis',
    component: () => import(/* webpackChunkName: "apis" */ '../views/ApisView.vue')
  },
  {
    path: '/apis/:id',
    name: 'api',
    props: true,
    component: () => import(/* webpackChunkName: "api" */ '../views/ApiView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
