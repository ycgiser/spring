// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
var store=new Vuex.Store({
  state:{
    dad:'dad',
    dads:[{name:'dad-state1'},{name:'dad2'},{name:'dad3'},{name:'dad4'}]
  }
})
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
