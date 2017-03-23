<template>
  <div class="main-list">
    <Banner ></Banner>
    <div class="list-wrap">
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/TagPage/district">按产区查找</router-link>
        </div>
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/TagPage/winetype">按酒品类型查找</router-link>
        </div>
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/TagPage/grapetype">按葡萄品种查找</router-link>
        </div>
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/SelectPage">多条件综合查找</router-link>
        </div>
    </div>
    <CamaraBtn></CamaraBtn>
  </div>
</template>

<script>
import Banner from "../Banner/Banner.vue"
import CamaraBtn from '../FloatBtn/CamaraBtn.vue'
export default {
  name: 'main-list',
  data(){
    return {

    }
  },
  computed:{

  },
  components:{
    Banner,CamaraBtn
  },
  mounted(){
    window.history.replaceState("","","");
    window.localStorage.removeItem('selectedObj')

  }
}
</script>

<style scpoed lang="stylus" rel="stylesheet/stylus">
.main-list
  width:100%
  padding:8rem 0;
  &>.list-wrap
   width:90%;
   margin:3rem auto
   .list-btn
     width:100%;
     height:4rem;
     line-height:4rem;
     font-size:1.6rem
     text-align:center;
     border-radius:99px;
     margin-bottom:3rem;
     border:1px solid red
</style>