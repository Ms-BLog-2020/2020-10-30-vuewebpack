// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios' //主要ajax套件
import VueAxios from 'vue-axios' //將它轉為Vue的套件 可以直接用this的方法來運行 要用use的方式來執行它(如下方)

Vue.use(VueAxios, axios) //
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
