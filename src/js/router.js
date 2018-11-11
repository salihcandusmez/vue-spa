import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from '../components/Posts.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Posts },
    { path: '/login', component: Login }
  ]
})

export default router
