<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <Sider></Sider>
    <a-layout>
      <Header></Header>
      <!--router-view 根据router.config.js的配置,不同路由对应右侧展示-->
      <router-view></router-view>

      <Footer></Footer>
    </a-layout>
  </a-layout>
</template>
<script>
  import Sider from "./Sider";
  import Footer from "./Footer";
  import Header from "./Header";
  export default {
    name:'BasicLayout',
    components: {Header, Footer, Sider},
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>

<style lang="less">
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
