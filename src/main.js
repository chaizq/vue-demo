import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Button, Layout, Menu, Breadcrumb, Icon, Col, Row, Table, Tabs, Input, Divider, Form, Select, } from 'ant-design-vue'
import router from "../config/router/router.config"
import i18n from './i18n'

Vue.config.productionTip = false

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

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
