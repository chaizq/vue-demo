import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Viser from 'viser-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
  Button,
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Col,
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
  Avatar
} from 'ant-design-vue'
import router from "./router/index"
import i18n from './i18n'

Vue.config.productionTip = false

// Viser
Vue.use(Viser)

// Axios
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios;

// VueRouter
Vue.component(VueRouter.name,VueRouter)

// Antd Components
Vue.use(Layout)
Vue.use(Breadcrumb)
Vue.use(Menu)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Col)
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

new Vue({
  el: '#app',
  router,
  axios,
  i18n,
  render: h => h(App)
}).$mount('#app')
