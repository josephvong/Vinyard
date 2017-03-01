import Vue from 'vue'
import Router from 'vue-router'
import frontPage from '../components/frontPage/frontPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'Hello', component: frontPage
    }
  ]
})
