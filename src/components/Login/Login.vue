<template>
  <div class="login main">
    <Banner v-show="true"></Banner>
    <div class="login-form">
      <Formhead></Formhead>
      <Formbody></Formbody>
      <Formfooter></Formfooter>
    </div>
  </div>
</template>

<script>
import Banner from "../Banner/Banner.vue"
import Formhead from "./Formhead.vue"
import Formbody from "./Formbody.vue"
import Formfooter from "./Formfooter.vue"
export default {
  name: 'banner',
  data(){
    return {

    }
  },
  computed:{

  },
  components:{
    Banner,
    Formhead,
    Formbody,
    Formfooter
  },
  mounted(){

  }
}
</script>

<style scoped rel="stylesheet/css">
.main{padding:8rem 0;}
.login .login-form{width:90%; margin:4rem auto 0 auto;  background: white; }
</style>