import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { constantRouterMap } from '@/config/router.config'
/*import HelloWorld from "../src/components/HelloWorld";
import UserManagement from "../src/pages/user/UserManagement";
import MenuManagement from "../src/pages/user/MenuManagement";
import Configuration from "../src/pages/configuration/Configuration";
import Home from "../src/pages/home/Home";
import ServiceRegister from "../src/pages/service/ServiceRegister";
import ServiceMonitor from "../src/pages/service/ServiceMonitor";
import ApiManagement from "../src/pages/gateway/ApiManagement";
import Login from "../src/pages/login/Login";*/
Vue.use(VueRouter);
// Vue.component(VueRouter.name, VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  /*routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/landing",
      name: "landing",
      component: HelloWorld,
    },
    {
      path: "/",
      redirect: '/landing',   // 重定向landing页
      component: HelloWorld,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children:[
        {
          path: "/configuration",
          name: "Configuration",
          component: Configuration,
        },
        {
          path: "/user",
          name: "user",
          component: { render: h => h("router-view") },
          children:[
            {
              path: '/user/user-management',
              name: 'User Management',
              component: UserManagement
            },
            {
              path: '/user/menu-management',
              name: 'Menu Management',
              component: MenuManagement
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
              component: ServiceRegister
            },
            {
              path: '/service/monitor',
              name: 'Service Monitor',
              component: ServiceMonitor
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
              component: ApiManagement
            },
            {
              path: '/api/monitor',
              name: 'Api Monitor',
              component: ServiceMonitor
            }, {
              path: '/api/pluginManagement',
              name: 'Plugin Management',
              component: ServiceMonitor
            },
            {
              path: '/api/grayPub',
              name: 'Gray Publish',
              component: ServiceMonitor
            },
          ]
        },
      ]
    },

  ],*/
  routes: constantRouterMap,
})

// 路由守卫特效
router.beforeEach((before, to, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;