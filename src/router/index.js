import path from 'path'
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import article from '@/pages/article/article'
import discovery from '@/pages/discovery'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    // mode: 'history',
    // base: path.join(__dirname,'../../'),
    // history: true,
    routes: [{
            path: '/',
            name: 'home',
            component: home,
            children: [{
                path: 'article/:articleId', //文章详情页
                component: article,
                meta: { keepAlive: false }
            }], 
            meta: { keepAlive: true }
        },
        {
            path: '/discovery',
            component: discovery,
            meta: { keepAlive: true},
        },
        // {
        //     path: '/article/:articleId',
        //     name: 'article',
        //     component: article
        // }
    ]
})