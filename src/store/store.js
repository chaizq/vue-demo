import Vue from 'vue'
import Vuex from 'vuex'
import request from "../utils/request";

Vue.use(Vuex);

const state= {
  user:"default",
  apiMonitorData:[
    {Count: 489, Time: "2018/8/8 0:00"},
    {Count: 200, Time: "2018/8/8 2:00"},
    {Count: 333, Time: "2018/8/8 4:00"}
  ],
}
// actions是异步的,用于写业务代码
const actions={
   changeUser(context, name){
     console.log("action", context, name);
     context.commit("changeUser", name);
   },
  getApiMonitorData(context) {
    // public文件夹中的静态内容文件访问'/siteUV.json'
    request.get('/siteUV.json')
      .then(res =>{
        context.commit('getApiMonitorData', res.data)
      })
      .catch(err =>{
        console.log(`code ${err.code}: ${err.message}`)
      })
  }
}
// mutations是同步的,用于更新state状态
const mutations= {
  changeUser(state, name){
    console.log("mutation", state, name);
    state.user = name;
  },
  getApiMonitorData(state, data){
    state.apiMonitorData = data
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})