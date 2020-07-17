<template>
  <p>{{this.user}}</p>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "CurrentUser",
    props: {
    },
    data(){
      return{
      }
    },
    computed:{
      ...mapState(['user'])
    },
  }
</script>

<style scoped>

</style>