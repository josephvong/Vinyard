import Vue from 'vue'
import App from './App'
//import router from './router'
import 'es6-promise/auto'


// 加载样式
import "../../common/css/reset.css"
import "../../common/css/cusstyle.css"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render:h=>h(App),
  mounted(){
  // 	if(window.localStorage.getItem("userCookie")){
		//   window.location.href="menu.html?country=italy";
		// }
  }
}).$mount("#app")