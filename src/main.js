// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import VueRouter from 'vue-router'
import moment from 'moment'
import FastClick from 'fastclick'
import routes from './router'
import store from './store'
import './filter/time'


Vue.use(VueRouter)
Vue.use(MuseUI)

VueRouter.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


Vue.config.productionTip = false



//router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
//  mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
      } else {
        if (from.meta.keepAlive) {
          from.meta.savedPosition = document.body.scrollTop;
        }
          return { x: 0, y: to.meta.savedPosition ||0}
      }
    }
})




/* eslint-disable no-new */
new Vue({
    router,
    store,
}).$mount('#app')