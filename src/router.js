import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: '登录',
        component: () => import('./views/user/Login.vue'),
        meta: {
            title: 'study&skill登录'
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

        ]
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
        path: '/course-search',
        name: '搜索课程列表',
        component: () => import('./views/user/course/CourseSearch.vue'),
        meta: {
            title: '搜索课程列表'
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
                path: '/select-interest',
                name: '完善信息',
                component: () => import('./views/user/user/SelectInterest.vue'),
                meta: {
                    title: '完善信息'
                }
            },
            {
                path: '/temp-demand',
                name: '临时需求',
                component: () => import('./views/user/user/TempDemand.vue'),
                meta: {
                    title: '发布临时需求'
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
                path: '/my-income',
                name: '我的收益',
                component: () => import('./views/user/user/MyIncome.vue'),
                meta: {
                    title: '我的收益'
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
        },
        children:[
            {
                path:'/gifts',
                name:'商城礼品',
                component:()=>import('./views/user/user/Gifts.vue'),
                meta:{
                    title:'商城礼品'
                }
            },
            {
                path:'/coupon-record',
                name:'积分明细',
                component:()=>import('./views/user/user/CouponRecord.vue'),
                meta:{
                    title:'积分明细'
                }
            }
        ]
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
    mode: 'history',
    routes
})

