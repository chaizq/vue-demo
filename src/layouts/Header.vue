<template>
  <a-layout-header id="layouts-header">
    <div class="logo"></div>
    Header Title Info
  </a-layout-header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  #layouts-header{
    text-align: left;
    background: #fff;
    padding: 0;

  }
  #layouts-header .logo {
    width: 120px;
    height: 31px;
    background: rgba(0, 165, 238, 0.2);
    margin: 16px 28px 16px 10px;
    float: left;
  }
</style>