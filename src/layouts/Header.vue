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
  <a-layout-header id="layouts-header">
    <div class="logo"></div>
    Header Title Info

    <!--<a-dropdown v-if="currentUser && currentUser.name" placement="bottomRight">-->

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

   <!-- <span v-else>
    <a-spin size="small" :style="{ marginLeft: 8, marginRight: 8 }" />
  </span>-->

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
        this.$router.push({ path: '/account/center' })
      },
      handleToSettings () {
        this.$router.push({ path: '/account/settings' })
      },
      // eslint-disable-next-line no-unused-vars
      handleLogout (e) {
        Modal.confirm({
          title: this.$t('layouts.usermenu.dialog.title'),
          content: this.$t('layouts.usermenu.dialog.content'),
          onOk: () => {
            // return new Promise((resolve, reject) => {
            //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1500)
            // }).catch(() => console.log('Oops errors!'))
            return this.$store.dispatch('Logout').then(() => {
              this.$router.push({ name: 'login' })
            })
          },
          onCancel () {}
        })
      }
    }
  }
</script>

<style lang="less" scoped>
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
  .ant-pro-account-avatar {
    /*
    .antd-pro-global-header-index-avatar {
      margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0;
      margin-right: 8px;
      color: @primary-color;
      vertical-align: top;
      background: rgba(255, 255, 255, 0.85);
    }
    */
  }
</style>