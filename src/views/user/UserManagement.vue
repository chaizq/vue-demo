<template>
  <a-layout-content style="margin: 0 16px">
    <a-breadcrumb style="margin: 16px 0; text-align: left">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>User Management</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      Bill is a cat.
    </div>
  </a-layout-content>
</template>

<script>

  // import BasicLayout from "../../layouts/BasicLayout";
  export default {
    name: "UserManagement",
    components: {
      // BasicLayout
    }
  }
</script>

<style scoped>

</style>