<template>
  <div class="login">
    <div class="login-form">
      <Formhead></Formhead>
      <Formbody></Formbody>
      <Formfooter></Formfooter>
    </div>
  </div>
</template>

<script>
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
    Formhead,
    Formbody,
    Formfooter
  },
  mounted(){

  }
}
</script>

<style scoped rel="stylesheet/css">
.login{width:100%;}
.login .login-form{width:90%; margin:4rem auto 0 auto;  background: white; }
</style>