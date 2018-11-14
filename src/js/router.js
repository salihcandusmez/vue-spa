import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from '../components/Posts.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {

  },
  routes: [
    { path: '/', component: Posts, name: 'home' },
    { path: '/login', component: Login, name: 'login' }
  ]
})

export default router
