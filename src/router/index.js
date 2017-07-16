import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import article from '../pages/article/article'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    // history: true,
    routes: [{
            path: '/',
            name: 'home',
            component: home,
            meta: { keepAlive: true },
        },
        {
            path: '/article/:articleId',
            name: 'article',
            component: article
        }
    ]
})