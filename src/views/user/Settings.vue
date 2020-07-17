<template>
  <a-layout-content style="margin: 0 16px">
    <a-breadcrumb style="margin: 16px 0; text-align: left">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>{{$t(routeName)}}</a-breadcrumb-item>
    </a-breadcrumb>
    <label>{{ $t('AA') }}</label>
    <div class="content">
      Bill is a cat.
    </div>
  </a-layout-content>
</template>

<script>
  // const a=this.$route.query.route;
  // import BasicLayout from "../../layouts/BasicLayout";

  export default {
    data() {
      return {
        routeName: this.$route.name,  // 使用router.config.js中的name属性
        // routeName: this.$route.query.routeName,
      };
    },

    name: "MenuManagement",
    components: {
      // BasicLayout
    },
    methods:{

    }

  }

</script>

<style scoped>
  .content {
    padding: 24px;
    background: #fff;
    min-height: 360px;
  }
</style>

<!--页面局部国际化设置-->
<!--
<i18n>
{
  "en": {
  "Menu Management": "Local"
  },
  "zh":{
  "Menu Management": "局部设置"
  }
}
</i18n>-->