import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import home from '../xyj/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'home',
      component: home
    }
  ]
})

