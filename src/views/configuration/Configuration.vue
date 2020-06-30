<template>
  <a-layout-content style="margin: 0 16px;" >
    <a-breadcrumb style="margin: 16px 0; text-align: left;" >
      <a-breadcrumb-item>Config</a-breadcrumb-item>
      <a-breadcrumb-item>{{$t(routeName)}}</a-breadcrumb-item>
    </a-breadcrumb>
    <label>{{ $t('Configuration') }}</label>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      Bill is a cat.
    </div>
  </a-layout-content>
</template>

<script>
  export default {
    data() {
      return {
        routeName: this.$route.name
      }
    },
    name: "Configuration"
  }
</script>

<style scoped>

</style>