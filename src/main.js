import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Viser from 'viser-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import {
  Button,
  Layout,
  List,
  Menu,
  Breadcrumb,
  Icon,
  Col,
  Card,
  Row,
  Table,
  Tabs,
  Input,
  Divider,
  Form,
  Select,
  Checkbox,
  Spin,
  Dropdown,
  Avatar,
  PageHeader,
  Descriptions,
} from 'ant-design-vue'
import router from "./router/index"
import i18n from './i18n'
import store from '@/store/store'


Vue.config.productionTip = false

// Viser
Vue.use(Viser)

// Vuex
Vue.use(Vuex)

// Axios
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;

// VueRouter
Vue.component(VueRouter.name,VueRouter)
// Vue.component('pro-layout', ProLayout)
// Vue.component('page-header-wrapper', PageHeaderWrapper)

// Antd Components
Vue.use(Layout)
Vue.use(List)
Vue.use(Breadcrumb)
Vue.use(Menu)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Col)
Vue.use(Card)
Vue.use(Row)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Input)
Vue.use(Divider)
Vue.use(Form)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Spin)
Vue.use(Dropdown)
Vue.use(Avatar)
Vue.use(PageHeader)
Vue.use(Descriptions)

new Vue({
  el: '#app',
  router,
  axios,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
