// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const todoModule={
	state:{
		tabState:0, // tab 的显示状态，0/1/2
		selContShow:false,
		selectedItem:{
			"title":null,
      "content":null,
      eventID:null,
      eventTime:null,
      status:null,
      completeTime:null,
      deleteTime:null
		},
		eventList:JSON.parse(window.localStorage.getItem("eventList"))||[],
		// todoList:[],
		// completeList:[],
		// deleteList:[]
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
		},
		completeList(state){
			let newList=state.eventList.filter(function(item){
				return item.status == 1
			})
			if(newList.length==0){
				return [];
			}else{
				return newList;
			}
		},
		deleteList(state){
			let newList=state.eventList.filter(function(item){
				return item.status == 2
			})
			if(newList.length==0){
				return [];
			}else{
				return newList;
			}
		},
	},
	mutations:{
		todoTabChange(state,num){
			state.tabState=num;
		},
		todoSaveEvent(state,obj){
			let arr= state.eventList;
			arr.unshift(obj);
			state.eventList=arr;
			//window.localStorage.setItem("eventList", JSON.stringify(state.eventList));
		},
		todoSetComplete(state,obj){ // 设置为已做
			state.eventList.forEach(function(item,index){
			 	if(item.eventID==obj.eventID){
					Object.assign(item,{status:1,eventID:obj.newID});
			 	}
			})
			_.sortBy(state.eventList,function(item){
         return  -item.eventID
      })

			//window.localStorage.setItem("eventList", JSON.stringify(state.eventList));
		},
		todoSetDelete(state,obj){ // 设置为删除
			state.eventList.forEach(function(item,index){
			 	if(item.eventID==obj.eventID){
					Object.assign(item,{status:2,eventID:obj.newID});
			 	}
			})
			_.sortBy(state.eventList,function(item){
         return  -item.eventID
      })
			//window.localStorage.setItem("eventList", JSON.stringify(state.eventList));
		},
		todoSetTodo(state,obj){  // 设置为未做
			state.eventList.forEach(function(item,index){
			 	if(item.eventID==obj.eventID){
					Object.assign(item,{status:0,eventID:obj.newID});
			 	}
			})
			_.sortBy(state.eventList,function(item){
         return  -item.eventID
      })
			//window.localStorage.setItem("eventList", JSON.stringify(state.eventList));
		},
		todoSelContShowOpen(state,id){  // 打开popUp
			let aList=window.localStorage.getItem("eventList");
			console.log(aList);
			state.selContShow=true;
			state.eventList.forEach(function(item,index){
			 	if(item.eventID==id){
					state.selectedItem=item;
			 	}
			})
		},
		todoSelContShowClose(state){  // 关闭popUp
			state.selContShow=false
		}
	},
	actions:{
		todoTabChange(context,num){
			context.commit('todoTabChange',num)
		},
		todoSaveEvent(context,obj){
			context.commit('todoSaveEvent',obj)
		},
		todoSetComplete(context,obj){
			context.commit('todoSetComplete',obj)
		},
		todoSetDelete(context,obj){
			context.commit('todoSetDelete',obj)
		},
		todoSetTodo(context,obj){
			context.commit('todoSetTodo',obj)
		},
		todoSelContShowOpen(context,id){
			context.commit('todoSelContShowOpen',id)
		},
		todoSelContShowClose(context){
			context.commit('todoSelContShowClose')
		}
	}
}

let store =new Vuex.Store({
   modules:{
   		todoM:todoModule
   },

})

export default store



