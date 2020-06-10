import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Button, Layout, Menu, Breadcrumb, Icon, Col, Row } from 'ant-design-vue'
import router from "../config/router/router.config"

Vue.config.productionTip = false
// Layout
Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Footer.name, Layout.Footer)
Vue.component(Layout.Sider.name, Layout.Sider)
// Breadcrumb
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)
// Menu
Vue.component(Menu.name, Menu)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)
Vue.component(Menu.Item.name, Menu.Item)
// VueRouter
Vue.component(VueRouter.name,VueRouter)
// Button
Vue.component(Button.name,Button)
// Icon
Vue.component(Icon.name,Icon)
Vue.component(Col.name,Col)
Vue.component(Row.name,Row)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
