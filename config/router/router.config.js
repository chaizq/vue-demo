import Vue from "vue";
import VueRouter from "vue-router";
// import NProgress from "nprogress";
import "nprogress/nprogress.css";
import HelloWorld from "../../src/components/HelloWorld";
import User from "../../src/views/user/User";
Vue.use(VueRouter);
// Vue.component(VueRouter.name, VueRouter)
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
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
      path: "/user",
      name: "User",
      component: User,
    }
  ]
})
export default router;