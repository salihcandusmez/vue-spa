import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from '../components/Posts'
import Login from '../components/Login'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    { path: '/posts/:id', component: Posts, name: 'posts' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/', redirect: '/posts/front-end' },
    { path: '*', component: NotFound}
  ]
})

export default router
