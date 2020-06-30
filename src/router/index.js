import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { constantRouterMap } from '@/config/router.config'
Vue.use(VueRouter);
// Vue.component(VueRouter.name, VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
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