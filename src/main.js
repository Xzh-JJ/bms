import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import Service from '@/services'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);
Vue.prototype.service = Service

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
