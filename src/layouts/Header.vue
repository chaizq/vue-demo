<!--<template>
  <a-dropdown v-if="true" placement="bottomRight">
    <span class="ant-pro-account-avatar">
      <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" />
      <span>{{ currentUser.name }}</span>
    </span>
    <template v-slot:overlay>
      <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
        <a-menu-item v-if="menu" key="center" @click="handleToCenter">
          <a-icon type="user" />
          个人中心
        </a-menu-item>
        <a-menu-item v-if="menu" key="settings" @click="handleToSettings">
          <a-icon type="setting" />
          个人设置
        </a-menu-item>
        <a-menu-divider v-if="menu" />
        <a-menu-item key="logout" @click="handleLogout">
          <a-icon type="logout" />
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
  <span v-else>
    <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
  </span>
</template>-->
<template>

  <a-layout-header id="layouts-header" className="ant-pro-global-header-index-right">
    <div class="logo"></div>
    Header Title Info

    <!--<a-dropdown v-if="currentUser && currentUser.name" placement="bottomRight">-->
    <a-dropdown v-if="true" placement="bottomRight" class="header-line">

      <span class="ant-pro-account-avatar">
        <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" />
        <!--<span>{{ currentUser.name }}</span>-->
        <span>Admin</span>
      </span>
      <template v-slot:overlay>
        <a-menu class="ant-pro-drop-down menu" :selected-keys="[]">
          <a-menu-item v-if="menu" key="center" @click="handleToCenter">
            <a-icon type="user" />
            个人中心
          </a-menu-item>
          <a-menu-item v-if="menu" key="settings" @click="handleToSettings">
            <a-icon type="setting" />
            个人设置
          </a-menu-item>
          <a-menu-divider v-if="menu" />
          <a-menu-item key="logout" @click="handleLogout">
            <a-icon type="logout" />
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

    <span v-else>
    <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
  </span>

  </a-layout-header>


</template>

<script>
  import { Modal } from 'ant-design-vue'

  export default {
    name: "Header",
    props: {
      currentUser: {
        type: Object,
        default: () => null
      },
      menu: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleToCenter () {
        this.$router.push({ path: '/user/user-management' })
      },
      handleToSettings () {
        this.$router.push({ path: '/user/settings' })
      },
      // eslint-disable-next-line no-unused-vars
      handleLogout (e) {
        Modal.confirm({
          title: this.$t('Do you want to log out'),
          content: this.$t('Log out and return to the login page'),
          onOk: () => {
            // return new Promise((resolve, reject) => {
            //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1500)
            // }).catch(() => console.log('Oops errors!'))

            this.$router.push({ name: 'login' })

            // return this.$store.dispatch('Logout').then(() => {
            //   this.$router.push({ name: 'loginPage' })
            // })
          },
          onCancel () {}
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~ant-design-vue/es/style/themes/default.less";
  #layouts-header {
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
  .ant-pro-drop-down {
    /deep/ .action {
      margin-right: 8px;
    }
    /deep/ .ant-dropdown-menu-item {
      min-width: 160px;
    }
  }

  .header-line {
    float: right;
    margin-right: 50px;
    padding: 0 15px;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  .ant-pro-global-header-index-right {
    &.ant-pro-global-header-index-dark {
      .ant-pro-global-header-index-action {
        color: hsla(0, 0%, 100%, 0.85);

        &:hover {
          background: #1890ff;
        }
      }
    }

    .ant-pro-account-avatar {
      .antd-pro-global-header-index-avatar {
        margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0;
        margin-right: 8px;
        color: @primary-color;
        vertical-align: top;
        background: rgba(255, 255, 255, 0.85);
      }
    }

    .menu {
      .anticon {
        margin-right: 8px;
      }

      .ant-dropdown-menu-item {
        min-width: 100px;
      }
    }
  }
</style>

<!--页面局部国际化设置-->
<i18n>
  {
  "en": {
  "Do you want to log out": "Do you want to log out",
  "Log out and return to the login page": "Log out and return to the login page"
  },
  "zh": {
  "Do you want to log out": "是否登出",
  "Log out and return to the login page": "登出账户并返回登录页"
  }
  }
</i18n>