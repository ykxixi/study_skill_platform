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
        component: () => import('./views/user/user/Register.vue'),
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

        ]
    },
    {
        path: '/index',
        name: '搜索',
        component: () => import('./views/user/user/Index.vue'),
        meta: {
            title: '搜索'
        }
    },
    {
        path: '/course-list',
        name: '推荐课程列表',
        component: () => import('./views/user/course/CourseList.vue'),
        meta: {
            title: '推荐课程列表'
        }
    },
    {
        path: '/teacher-list',
        name: '推荐教师列表',
        component: () => import('./views/user/course/CourseList.vue'),
        meta: {
            title: '推荐教师列表'
        }
    },
    {
        path: '/personal-center',
        name: '个人中心',
        component: () => import('./views/user/user/PersonalCenter.vue'),
        meta: {
            title: '个人中心'
        },
        children: [
            {
                path: '/user-info',
                name: '个人信息',
                component: () => import('./views/user/user/UserInfo.vue'),
                meta: {
                    title: '个人信息'
                }
            },
            {
                path: '/gather-info',
                name: '采集信息',
                component: () => import('./views/user/user/GatherInfo.vue'),
                meta: {
                    title: '采集信息'
                }
            },
            {
                path: '/my-course',
                name: '我的课程',
                component: () => import('./views/user/user/MyCourse.vue'),
                meta: {
                    title: '我的课程'
                }
            },
            {
                path: '/temp-demand',
                name: '临时需求',
                component: () => import('./views/user/user/TempDemand.vue'),
                meta: {
                    title: '我的课程'
                }
            },
        ]
    },
    {
        path: '/shopping-mall',
        name: '积分商城',
        component: () => import('./views/user/user/ShoppingMall.vue'),
        meta: {
            title: '积分商城'
        }
    },
    {
        path: '/info',
        name: '管理员-发布信息',
        component: () => import('./views/user/admin/Info.vue'),
        meta: {
            title: '信息'
        }
    },


];
export default new Router({
        routes
})

