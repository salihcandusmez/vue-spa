import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts from '../components/Posts.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Posts }
  ]
})

export default router
