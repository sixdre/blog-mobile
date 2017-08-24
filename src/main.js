// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import moment from 'moment'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
// import '../static/js/rem'
import './filter/time'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// router.beforeEach((to,from,next)=>{
//     console.log(to)
//     next()
// })

Vue.config.productionTip = false

Vue.directive('goback', (el) => {
    el.addEventListener('click', function() {
        router.go(-1);
    })
})

// const history = window.sessionStorage;
// let historyCount = history.getItem('count') * 1;
// router.beforeEach(function (to, from, next) {

//   const toIndex = history.getItem(to.path);
//   const fromIndex = history.getItem(from.path);

//   if (toIndex) {
//     if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//       store.commit('UPDATE_DIRECTION', {direction: 'forward'})
//     } else {
//       store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
//     }
//   } else {
//     ++historyCount;
//     history.setItem('count', historyCount);
//     to.path !== '/' && history.setItem(to.path, historyCount);
//     store.commit('UPDATE_DIRECTION', {direction: 'forward'})
//   }
//   if (/\/http/.test(to.path)) {
//     let url = to.path.split('http')[1];
//     window.location.href = `http${url}`
//   } else {
//     next()
//   }
// });


VueRouter.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}



//router.beforeEach((to, from, next)=>{
//	
//	next()
//})






/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})