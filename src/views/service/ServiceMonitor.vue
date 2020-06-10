<template>
  <a-layout-content style="margin: 0 16px">
    <a-breadcrumb style="margin: 16px 0; text-align: left">
      <a-breadcrumb-item>Service</a-breadcrumb-item>
      <a-breadcrumb-item>{{$t(routeName)}}</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      Service Monitor
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
    name: "ServiceMonitor",
    components: {

    }
  }
</script>

<style scoped>

</style>