import Vue from 'vue'
import Antd from 'ant-design-vue'
import './assets/font/iconfont.css'
import './assets/css/main.css'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import axios from 'axios'
import VCharts from 'v-charts'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VCharts)
Vue.prototype.$ajax = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
