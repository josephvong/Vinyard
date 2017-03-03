// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =new Vuex.Store({
  state:{
  	count:0
  }
})

export default store



