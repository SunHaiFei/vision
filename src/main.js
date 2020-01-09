import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
Vue.prototype.$ = $;
//引入element-ui组件
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
import elementUI from "element-ui"

Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
