// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const todoModule={
	state:{
		tabState:0, // tab 的显示状态，0/1/2
		//eventObject:{title:"",content:"",eventID:"",state:null},
		eventList:[]
	},
	getters:{
		todoList(state){
			let newList=state.eventList.filter(function(item){
				return item.status == 0
			})
			if(newList.length==0){
				return [];
			}else{
				return newList;
			}
		}
	},
	mutations:{
		todoTabChange(state,num){
			state.tabState=num;
		},
		todoSaveEvent(state,obj){
			let arr= state.eventList;
			arr.push(obj);
			state.eventList=arr;
		}
	},
	actions:{
		todoTabChange(context,num){
			context.commit('todoTabChange',num)
		},
		todoSaveEvent(context,obj){
			context.commit('todoSaveEvent',obj)
		}
	}
}

let store =new Vuex.Store({
   modules:{
   		todoM:todoModule
   },

})

export default store



