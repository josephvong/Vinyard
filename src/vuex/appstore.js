// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const selectModule={
	state:{
		isShowBanner:true,
		selectedArr:[
			/*{catalogName:"district",tId:"卡拉布里亚"},
			{catalogName:"winetype",tId:"红葡萄酒"},
			{catalogName:"grapetype",tId:"赤霞珠"},*/
		],
		/*jparmas:{
			"authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
		},*/
		resultListArr:[] // 结果列表
	},
	getters:{

	},
	mutations:{
		cleanSelectedArr(state){
			state.selectedArr=[];  // 清空数组
			//console.log(state.selectedArr);
		},
		singleSelectedArr(state,obj){ // 单一标签选择
			state.selectedArr.push(obj)
		},
		modifySelectedArr(state,obj){
			function checkType(obj,arr){
				let flag=false;
				arr.forEach((item,index)=>{
					if(item.catalogName==obj.catalogName){
						flag=true;
						return
					}
				})
				return flag  //判断选中标签是否有同类存在
			}
			if(checkType(obj,state.selectedArr)){  // 有对应类型的标签已经存在
				state.selectedArr.forEach((item,index)=>{
					if(item.catalogName==obj.catalogName){
						if(item.tId!=obj.tId){
							item.tId=obj.tId
						}
					}
				})
			}else{
				state.selectedArr.push(obj);
			}
		},
		addResultListArr(state,arr){
			console.log(arr);
			let newArr=state.resultListArr.concat(arr);
			state.resultListArr=newArr
		},
		cleanResultListArr(state){
			//window.LocalStorage.clearItem()
			state.resultListArr=[]
		}
	},
	actions:{
		cleanSelectedArr(context){
			context.commit('cleanSelectedArr')
		},
		singleSelectedArr(context,obj){  //CTag 的单选 动作
			context.commit('singleSelectedArr',obj)
		},
		modifySelectedArr(context,obj){
			context.commit('modifySelectedArr',obj)
		},
		addResultListArr(context,arr){
			//console.log(arr);
			context.commit('addResultListArr',arr)
		},
		cleanResultListArr(context){  //
			context.commit('cleanResultListArr')
		}

	}
}

let store =new Vuex.Store({
   modules:{
   		selectM:selectModule
   },

})

export default store


