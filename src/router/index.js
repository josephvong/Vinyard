import Vue from 'vue'
import Router from 'vue-router'

import $ from "jquery"

import appstore from '../vuex/appstore'

import Login from '../components/Login/Login.vue'
import MainList from '../components/MainList/MainList.vue'
import TagPage from '../components/TagPage/TagPage.vue'
import SelectPage from '../components/TagPage/SelectPage.vue'
import Result from '../components/Result/Result.vue'

Vue.use(Router)

let router=new Router({
  //mode: 'history',
  routes: [
    {
      path: '/', name: 'Login', component: Login
    },
    {
      path: '/MainList', name: 'MainList', component: MainList
    },
    {
      path: '/TagPage/:typename', name: 'TagPage', component: TagPage
    },
    {
      path: '/SelectPage', name: 'SelectPage', component: SelectPage
    },
    {
      path: '/Result', name: 'Result', component: Result
    }
  ]
})


router.beforeEach( (to , from , next) =>{
  //window.history.pushState(to.path,"");
  if(to.path!="/#Result"){
    $(window).scroll(function(){
      return false
    })
    //appstore.state.selectM.isShowBanner=false
  }
  next()
})

export default router