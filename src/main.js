// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.config.productionTip = false


//引入公共组件
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
Vue.component("v-header",Header);
Vue.component("v-footer",Footer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
