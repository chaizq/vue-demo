/**
 * RouteView
 * @type {{name: string, render: (function(*): *)}}
 */
import  UserLayout  from '@/layouts/UserLayout'

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
      {
        component: UserLayout,
        path: "/user",
        name: "login",
        children: [
          {
            path: '/user/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "user" */ '@/views/login/Login')
          },
        ],
      },
      {
        path: "/landing",
        name: "landing",
        component: () => import(/* webpackChunkName: "user" */ '@/views/landing/Landing')
      },
      {
        path: "/home",
        name: "home",
        redirect: '/api/monitor',   // 重定向home页到指定路由
        component: () => import(/* webpackChunkName: "home" */ '@/layouts/BasicLayout'),
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
                path: '/user/menu-management',
                name: 'Menu Management',
                component: () => import(/* webpackChunkName: "user" */ '@/views/user/MenuManagement'),
              }
            ]
          },
          {
            path: "/service",
            name: "service",
            component: RouteView,
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
              }
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
                component: () => import(/* webpackChunkName: "service" */ '@/views/service/ServiceMonitor'),
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