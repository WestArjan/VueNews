import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueNativeSock from 'vue-native-websocket'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueNativeSock,
  render: h => h(App)
}).$mount('#app')
