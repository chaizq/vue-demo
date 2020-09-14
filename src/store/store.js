import Vue from 'vue'
import Vuex from 'vuex'
import request from "../utils/request";

Vue.use(Vuex);

const state= {
  user:"default",
  personId: '',
  apiMonitorData:[
    {Count: 489, Time: "2018/8/8 0:00"},
    {Count: 200, Time: "2018/8/8 2:00"},
    {Count: 333, Time: "2018/8/8 4:00"}
  ],
}
// actions是异步的,用于写业务代码
const actions = {
   changeUser(context, data){
     console.log("action", context, data);
     context.commit("setUser", data);
   },
  getApiMonitorData(context) {
    // public文件夹中的静态内容文件访问'/siteUV.json'
    request.get('/siteUV.json')
      .then(res =>{
        context.commit('setApiMonitorData', res.data)
      })
      .catch(err =>{
        console.log(`code ${err.code}: ${err.message}`)
      })
  },

  changePersonId(context, id) {
    context.commit("setPersonId", id);
  },
}
// mutations是同步的,用于更新state状态
const mutations= {
  setUser(state, data){
    console.log("mutation", state, data);
    state.user = data;
  },
  setApiMonitorData(state, data){
    state.apiMonitorData = data
  },
  setPersonId(state, id) {
    state.personId = id
  },
}
const getters={
  user: state => state.user,
  personId: state => state.personId
  // gatewayToken: state => state.gatewayToken,
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})