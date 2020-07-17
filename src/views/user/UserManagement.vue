<template>
  <a-layout-content style="margin: 0 16px;">
    <a-breadcrumb style="margin: 16px 0; text-align: left;">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>{{$t(routeName)}}</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <CurrentUser :user="user"></CurrentUser>
      <UserList :userList="userList"></UserList>
    </div>
  </a-layout-content>
</template>

<script>
  import CurrentUser from './component/CurrentUser'
  import UserList from './component/UserList'

  export default {
    name: "UserManagement",
    components: {
      // 引入的子组件
      CurrentUser,
      UserList,
    },
    data() {
      return {
        routeName: this.$route.name,
        user:'',
        userList:[]
      }
    },
    methods: {
      getListInfo() {
        let obj = {
          "code":true,
          "user":"web",
          "data":{
            "users":[
              {
                "id":1,
                "name":"Alice"
              },
              {
                "id":2,
                "name":"Bob"
              },
              {
                "id":3,
                "name":"Tom"
              },
              {
                "id":4,
                "name":"John"
              }
            ]
          }
        }
        this.getListInfoSuccess(obj)
      },
      getListInfoSuccess(res){
        if(res.code){
          this.user = res.user;
          this.userList = res.data.users;
        }
      },
    },
    mounted() {
      this.getListInfo()
    }
  }
</script>

<style lang="less" scoped>

</style>