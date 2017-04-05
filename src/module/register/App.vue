<template>
  <div class="app" >
   <Banner></Banner>
   <Login></Login>
  </div>
</template>

<script>
import Banner from "components/Banner/Banner"
import Login from "components/Login/Login"
export default {
  name: 'app',
  data(){
    return {
    }
  },
  computed:{

  },
  methods:{

  },
  components:{
    Banner,Login
  },
  mounted(){
    if(window.localStorage.getItem("userCookie")){
      window.location.href="menu.html?country=italy";
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/css/reset.css"
@import "../../common/css/cusstyle.css"
// .app
//     position: relative;
//     width:100%;

</style>
