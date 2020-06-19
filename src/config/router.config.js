/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "user" */ '@/views/login/Login')
  },
  {
    path: "/landing",
    name: "landing",
    component: () => import(/* webpackChunkName: "user" */ '@/components/HelloWorld')
  },
  {
    path: "/",
    redirect: '/landing',   // 重定向landing页
    component: () => import(/* webpackChunkName: "user" */ '@/components/HelloWorld')
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home'),
    children:[
      {
        path: "/configuration",
        name: "Configuration",
        component: () => import(/* webpackChunkName: "home" */ '@/views/configuration/Configuration'),
      },
      {
        path: "/user",
        name: "user",
        component: { render: h => h("router-view") },
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
        component: { render: h => h("router-view") },
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
        component: { render: h => h("router-view") },
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