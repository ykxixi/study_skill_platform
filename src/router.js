import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/first',
        name: '进入页面',
        component: () => import('./views/user/FirstPage.vue'),
        meta: {
            title: 'study&skill'
        }
    },
    {
        path: '/register',
        name: '注册',
        component: () => import('./views/user/Register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/home',
        name: '首页',
        component: () => import('./views/user/Home.vue'),
        meta: {
            title: 'study&skill首页'
        },
        children:[
            {
                path: '/info',
                name: '信息',
                component: () => import('./views/user/Info.vue'),
                meta: {
                    title: '信息'
                }
            },
            {
                path: '/course-list',
                name: '课程列表',
                component: () => import('./views/user/CourseList.vue'),
                meta: {
                    title: '课程商城'
                }
            },
            {
                path: '/shopping-mall',
                name: '积分商城',
                component: () => import('./views/user/ShoppingMall.vue'),
                meta: {
                    title: '积分商城'
                }
            },
        ]
    },
    {
        path: '/my-course',
        name: '学生_我的课程',
        component: () => import('./views/user/MyCourse'),
        meta: {
            title: '我的课程'
        }
    },
    {
        path: '/user-info',
        name: '个人信息',
        component: () => import('./views/user/UserInfo'),
        meta: {
            title: '个人信息'
        }
    },


];
export default new Router({
        routes
})

