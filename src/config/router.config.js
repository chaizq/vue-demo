/**
 * RouteView
 * @type {{name: string, render: (function(*): *)}}
 */
import UserLayout from '@/layouts/UserLayout'
// import EmptyLayout from '@/layouts/EmptyLayout'
// import BasicLayout from '@/layouts/BasicLayout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const constantRouterMap = [
  {
    path: "/",
    redirect: '/landing',   // 重定向landing页
    component: () => import(/* webpackChunkName: "home" */ '@/layouts/EmptyLayout'),
    children: [
      /*{
        component: BasicLayout,
        path: '/list',
        meta: { title: '列表', keepAlive: true, },
        children: [
          {
            path: '/',
            name: 'list',
            component: () => import(/!* webpackChunkName: "list" *!/ '@/views/list/CardList'),
            meta: { title: '服务列表', keepAlive: true, }
          },
        ],
      },*/
      {
        component: UserLayout,
        path: "/login",
        children: [
          {
            path: '/',
            name: 'login',
            component: () => import(/* webpackChunkName: "user" */ '@/views/login/Login')
          },
        ],
      },
      {
        path: "/landing",
        name: "landing",
        component: () => import(/* webpackChunkName: "landing" */ '@/views/landing/Landing')
      },
      {
        path: "/home",
        name: "home",
        redirect: '/api/monitor',   // 重定向home页到指定路由
        component: () => import(/* webpackChunkName: "home" */ '@/layouts/BasicLayout'),
        meta: { title: '主页', keepAlive: true, },
        children:[
          {
            path: "/configuration",
            name: "Configuration",
            component: () => import(/* webpackChunkName: "home" */ '@/views/configuration/Configuration'),
          },
          /*{
            path: "/dashboard",
            name: "Dashboard",
            component: () => import(/!* webpackChunkName: "home" *!/ '@/views/dashboard/Analysis'),
          },*/
          {
            path: "/user",
            name: "user",
            component: RouteView,
            children:[
              {
                path: '/user/user-management',
                name: 'User Management',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/UserManagement'),
              },
              {
                path: '/user/settings',
                name: 'Settings',
                meta: { title: '个人设置', hideHeader: true, permission: [ 'user' ] },
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/Settings'),
              }
            ]
          },
          {
            path: "/service",
            name: "service",
            component: RouteView,
            meta: { title: '服务', keepAlive: true, },
            children:[
              {
                path: '/service/register',
                name: 'Service Register',
                component: () => import(/* webpackChunkName: "service" */ '@/views/service/ServiceRegister'),
              },
              {
                path: '/service/monitor',
                name: 'Service Monitor',
                component: () => import(/* webpackChunkName: "service" */ '@/views/service/ServiceMonitor'),
              },
              {
                path: '/service/list',
                name: 'Service List',
                component: () => import(/* webpackChunkName: "list" */ '@/views/list/CardList'),
                meta: { title: '服务列表', keepAlive: true, }
              },
            ]
          },
          {
            path: "/api",
            name: "api",
            component: RouteView,
            children:[
              {
                path: '/api/management',
                name: 'Api Management',
                component: () => import(/* webpackChunkName: "gateway" */ '@/views/gateway/ApiManagement'),
              },
              {
                path: '/api/monitor',
                name: 'Api Monitor',
                component: () => import(/* webpackChunkName: "gateway" */ '@/views/gateway/ApiMonitor'),
              }, {
                path: '/api/pluginManagement',
                name: 'Plugin Management',
                component: () => import(/* webpackChunkName: "service" */ '@/views/service/ServiceMonitor'),
              },
              {
                path: '/api/grayPub',
                name: 'Gray Publish',
                component: () => import(/* webpackChunkName: "service" */ '@/views/service/ServiceMonitor'),
              },
            ]
          },
        ]
      },
    ]
  },
]