<template>
  <a-layout-sider class="layouts-sider" v-model="collapsed" :collapsible=true>
    <div class="logo"></div>
    <a-menu
        theme="dark"
        :defaultOpenKeys="subMenuKey"
        :default-selected-keys="[this.$route.path]"
        :selectedKeys="[this.$route.path]"
        @openChange="onOpenChange"
        :openKeys="openKeys"
        mode="inline"
    >
      <a-menu-item key="/home" class="side-menu-label">
        <a-icon type="pie-chart" />
        <span>Home Page</span>
        <router-link to="/home"></router-link>
      </a-menu-item>

      <a-menu-item key="/landing" class="side-menu-label">
        <a-icon type="pie-chart" />
        <span>Landing Page</span>
        <router-link to="/landing"></router-link>
      </a-menu-item>

      <a-menu-item key="/configuration" class="side-menu-label">
        <a-icon type="desktop"/>
        <span>Config</span>
        <router-link to="/configuration" ></router-link>
      </a-menu-item>

      <!--<a-sub-menu key="/dashboard" class="side-menu-label">
          <span slot="title">
            <a-icon type="user" />
            <span>Dashboard</span>
          </span>
        <a-menu-item key="/dashboard/analysis">
          User Management
          <router-link :to="{path:'/dashboard/analysis'}" ></router-link>
        </a-menu-item>
      </a-sub-menu>-->

      <a-sub-menu key="/service" class="side-menu-label">
          <span slot="title">
            <a-icon type="menu-unfold" />
            <span>Service</span>
          </span>
        <a-menu-item key="/service/register">
          Service Register
          <router-link :to="{path:'/service/register'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="/service/list">
          Service List
          <router-link :to="{path:'/service/list'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="/service/monitor">
          Service Monitor
          <router-link :to="{path:'/service/monitor'}" ></router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="/api" class="side-menu-label">
          <span slot="title">
            <a-icon type="api" />
            <span>Gateway</span>
          </span>
        <a-menu-item key="/api/management">
          Api Management
          <router-link :to="{path:'/api/management'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="/api/monitor">
          Api Monitor
          <router-link :to="{path:'/api/monitor'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="/api/pluginManagement">
          Plugin Management
          <router-link :to="{path:'/api/pluginManagement'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="/api/grayPub">
          Gray Publish
          <router-link :to="{path:'/api/grayPub'}" ></router-link>
        </a-menu-item>
      </a-sub-menu>
      <!--<a-sub-menu key="sub2" class="side-menu-label">
        <span slot="title"><a-icon type="team" /><span>Team</span></span>
        <a-menu-item key="6">
          Team 1
        </a-menu-item>
        <a-menu-item key="8">
          Team 2
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9" class="side-menu-label">
        <a-icon type="file" />
        <span>File</span>
      </a-menu-item>-->
      <a-sub-menu key="/user" class="side-menu-label">
          <span slot="title">
            <a-icon type="user" />
            <span>{{$t('User')}}</span>
          </span>
        <a-menu-item key="/user/user-management">
          {{$t('User Management')}}
          <router-link :to="{path:'/user/user-management'}" ></router-link>
        </a-menu-item>
        <a-menu-item key="/user/settings">
          {{$t('Settings')}}
          <router-link :to="{path:'/user/settings'}" ></router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
        rootSubmenuKeys: [ '/home', '/landing', '/configuration', '/dashboard', '/service', '/api', '/user' ],
        subMenuKey: ['/'+this.$route.path.split('/')[1].toString()],
        openKeys: ['/'+this.$route.path.split('/')[1].toString()],  // 一级菜单key统一命名为 /+ 名称，例： '/user'
      };
    },
    name: "Sider",
    watch: {
      '$route': 'getPath' // 监听路由变化
    },
    methods: {
      // Headers用户图标处改变路由
      getPath(){
        let subMenuKey=`/${this.$route.path.split('/')[1].toString()}`
        if (subMenuKey==='/user') { this.openKeys=['/user'] }
      },

      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .layouts-sider {
    .side-menu-label {
      text-align: left;
    }
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
</style>

<i18n>
  {
    "en": {
      "Settings": "Settings",
      "User": "User",
      "User Management": "User Management"
    },
    "zh":{
      "Settings": "个人设置",
      "User": "用户",
      "User Management": "用户管理"
    }
  }
</i18n>