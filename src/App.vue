<template>
  <div v-bind:class="[{app:true},{nobanner:!isShowBanner}]" >
    <Banner v-show="isShowBanner"></Banner>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner/Banner.vue"
export default {
  name: 'app',
  data(){
    return {

    }
  },
  computed:{
    isShowBanner(){
      return this.$store.state.selectM.isShowBanner
    }
  },
  components:{
    Banner
  },
  mounted(){

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../static/css/reset.css"
@import "../static/css/cusstyle.css"
.app
  width:100%
  padding-top:4rem
  padding-bottom:4rem
  position: relative
  margin: 0 auto
  &.nobanner
    padding-top:0;
  .main
    width:100%
    max-width:640px;
    margin: 0 auto;
    background: #F3F5F7;

</style>
