import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  // history: true,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
