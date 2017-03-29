<template>
  <div class="app" >
    <router-view></router-view>
   <!--  <a v-on:click="test()">test</a> -->
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

  },
  methods:{
    test(){

        window.location.href="./result.html"
    }
  },
  components:{
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
  position: relative
  margin: 0 auto
  max-width:640px;
  background: #F3F5F7;

</style>
