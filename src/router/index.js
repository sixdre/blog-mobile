import App from '../App'
import Home from '@/pages/home/home'
import Login from '@/pages/login/login'
import Article from '@/pages/article/article'

export default [{
    path: '/',
    component: App,         //顶层路由，对应index.html
    children: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { keepAlive: true }
        },
        {
           path: '/article/:articleId',
           name: 'article',
           component: Article
        }
    ]



}]

