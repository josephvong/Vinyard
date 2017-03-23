<template>
  <div class="tag-page">
   <Banner ></Banner>
   <Taglist v-bind:catalogName="catalogName" :isExpress=false ></Taglist>
   <HomeBtn :isInResult=false ></HomeBtn>
   <CamaraBtn inPageType="tagPage"></CamaraBtn>
  </div>
</template>

<script>
import Banner from "../Banner/Banner.vue"
import Taglist from '../Taglist/Taglist.vue'
import HomeBtn from '../FloatBtn/HomeBtn.vue'
import CamaraBtn from '../FloatBtn/CamaraBtn.vue'

export default {
  name: 'tagpage',
  data(){
    return {

    }
  },
  computed:{
    catalogName(){
      return this.$route.params.typename
    }
  },
  components:{
    Banner,Taglist,HomeBtn,CamaraBtn
  },
  mounted(){
    window.history.replacestate("","","");
    window.localStorage.removeItem('selectedObj')// 清理历史缓存
  }
}
</script>

<style scpoed rel="stylesheet/css">
.tag-page{
  width:100%;
  padding:8rem 0;
}
</style>