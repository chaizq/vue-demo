<template>
  <a-layout-sider id="layouts-sider" v-model="collapsed" collapsible>
    <div class="logo"></div>
    <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Landing Page</span>
        <router-link to="/landing"></router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Config</span>
        <router-link to="/configuration" ></router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="user" />
            <span>User</span>
          </span>
        <a-menu-item key="3">
          User Management
          <router-link :to="{path:'/user/user-management'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="4">
          Menu Management
          <router-link :to="{path:'/user/menu-management'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="5">
          Alex
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub-menu-service">
          <span slot="title">
            <a-icon type="menu-unfold" />
            <span>Service</span>
          </span>
        <a-menu-item key="service-register">
          Service Register
          <router-link :to="{path:'/service/register'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="service-monitor">
          Service Monitor
          <router-link :to="{path:'/service/monitor'}" ></router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="team" /><span>Team</span></span>
        <a-menu-item key="6">
          Team 1
        </a-menu-item>
        <a-menu-item key="8">
          Team 2
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      };
    },
    name: "Sider",
  }
</script>

<style scoped>
  #layouts-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>