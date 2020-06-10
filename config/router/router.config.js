import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import HelloWorld from "../../src/components/HelloWorld";
import User from "../../src/views/user/User";
import UserManagement from "../../src/views/user/UserManagement";
import MenuManagement from "../../src/views/user/MenuManagement";
import Home from "../../src/views/home/Home";
Vue.use(VueRouter);
// Vue.component(VueRouter.name, VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/landing",
      name: "HelloWorld",
      component: HelloWorld,
      // children: [
      //   // dashboard
      //   {
      //     path: "/home",
      //     redirect: "/home"
      //   }
      // ]
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/user",
      name: "User",
      component: User,
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
    }
  ]
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