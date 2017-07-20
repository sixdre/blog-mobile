// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
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



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})