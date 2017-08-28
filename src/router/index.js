import App from '../App'
import home from '@/pages/home/home'
import article from '@/pages/article/article'

export default [{
    path: '/',
    component: App,         //顶层路由，对应index.html
    children: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: { keepAlive: true }
        },
        {
           path: '/article/:articleId',
           name: 'article',
           component: article
        }
    ]



}]

