<template>
  <div class="app" > 
    <Result></Result>
  </div>
</template>

<script>
import Result from "components/Result/Result.vue"
export default {
  name: 'app',
  data(){
    return {

    }
  },
  computed:{

  },
  components:{
    Result
  },
  mounted(){

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/css/reset.css"
@import "../../common/css/cusstyle.css"
.app
  width:100%
  padding-bottom:2rem;
  position: relative
  margin: 0 auto
  max-width:640px;
  background: #F3F5F7;

</style>
