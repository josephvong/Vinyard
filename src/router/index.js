import Vue from 'vue'
import Router from 'vue-router'

import appstore from '../vuex/appstore'

import Login from '../components/Login/Login.vue'
import TypeList from '../components/TypeList/TypeList.vue'
import TagPage from '../components/TagPage/TagPage.vue'
import SelectPage from '../components/TagPage/SelectPage.vue'
import Result from '../components/Result/Result.vue'

Vue.use(Router)

let router=new Router({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'Login', component: Login
    },
    {
      path: '/TypeList', name: 'TypeList', component: TypeList
    },
    {
      path: '/TagPage/:typename', name: 'TagPage', component: TagPage
    },
    {
      path: '/SelectPage', name: 'TagPage', component: SelectPage
    },
    {
      path: '/Result', name: 'Result', component: Result
    }
  ]
})


router.beforeEach( (to , from , next) =>{
  //window.history.pushState(to.path,"");
  if(to.path=="/Result"){
    appstore.state.selectM.isShowBanner=false
  }else{
    appstore.state.selectM.isShowBanner=true
  }
  next()
})

export default router