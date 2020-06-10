<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
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
  import Sider from "../../layouts/Sider";
  import Footer from "../../layouts/Footer";
  import Header from "../../layouts/Header";
  export default {
    components: {Header, Footer, Sider},
    data() {
      return {
        collapsed: false,
      };
    },
  };
</script>

<style>
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
