// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'

Vue.use(Vuex)

const staticData={
	"authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
  "authmode":"app",
  "country":"意大利",
  "cookie":"940158d239561338e"
}

const selectModule={
	state:{
		district:null,
		winetype:null,
		grapetype:null,
		resultListArr:[] // 结果列表
	},
	getters:{

	},
	mutations:{
		modifyStateType(state,obj){
			if(state[obj.catalogName]==obj.tId){
				state[obj.catalogName] = null
			}else{
				state[obj.catalogName] = obj.tId
			}
		},
		selectStateType(state,obj){
			console.log(obj);

		},
		resetStateType(state){   // 重置
			state.district=null;
			state.winetype=null;
			state.grapetype=null;
		},
		cleanStateList(state){
			if(state.resultListArr.length){
				state.resultListArr = [];
			}
		},
		pushStateList(state,arr){
			let newArr=state.resultListArr
			state.resultListArr=newArr.concat(arr);
			//console.log(state.resultListArr)
		}


	},
	actions:{
		modifyStateType(context,obj){
			context.commit('modifyStateType',obj)
		},
		selectStateType(context,obj){
			context.commit('resetStateType')
			context.commit('modifyStateType',obj)
			//context.commit('selectStateType',obj)
		},
		resetStateType(context){  // 重置
			context.commit('resetStateType')
		},
		refreshStateList(context,obj){
			context.commit('cleanStateList');
			let newObj={};
			newObj.region=obj.district||"0";
			newObj.wine_type=obj.winetype||"0";
			newObj.grape=obj.grapetype||"0";
			let JParams = $.extend({},staticData,newObj);
			$.ajax({
				url:'http://zyshi.9kacha.com/AutoRecommWines/toBfindWine/findWine.php',
    		type:'POST',
    		data:{'jparams':JSON.stringify(JParams) },
    		success:function(data){
    			var res = JSON.parse(data);
    			if(res.description=="ok"){
    				//console.log(res.jsonData);
    				context.commit("pushStateList",res.jsonData)
    			}
    		}
			});
		},
		//addStateList()

	}
}

let store =new Vuex.Store({
   modules:{
   		selectM:selectModule
   },

})

export default store


