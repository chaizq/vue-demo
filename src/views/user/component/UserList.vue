<template>
  <div>
    <a-button v-for="item of userList" :key="item.id" @click="getUserName(item.name)">{{item.name}}</a-button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: "UserList",
    props: {
      userList : Array,
    },
    data() {
      return {

      }
    },
    methods: {
      ...mapMutations(['changeUser']),
      getUserName(name){
        // 调用actions中的 context.commit提交的方式，调用Mutations中更改state的状态
        this.$store.dispatch('changeUser', name)

        // 如果是同步操作，可直接调用Mutations中的方法更改state的状态，
        // this.changeUser(name)
      },
    }
  }
</script>

<style scoped>

</style>