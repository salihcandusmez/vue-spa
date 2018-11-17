import '../styles/main.scss'

import Vue from 'vue'
import store from '../store/index'
import App from '../components/App.vue'
import router from './router'

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
