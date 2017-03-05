// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todoModule={
	state:{
		tabState:0, // tab 的显示状态，0/1/2 
		eventObject:{title:"",content:"",eventID:""}
	},
	mutations:{
		todoTabChange(state,num){ 
			state.tabState=num;
		}
	},
	actions:{
		todoTabChange(context,num){
			context.commit('todoTabChange',num)
		}
	}
}

let store =new Vuex.Store({
   modules:{
   		todoM:todoModule
   },
  
})

export default store



