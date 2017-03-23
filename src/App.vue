<template>
  <div class="app" >
    <router-view></router-view>
  </div>
</template>

<script>

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
  position: relative
  margin: 0 auto
  max-width:640px;
  background: #F3F5F7;

</style>
