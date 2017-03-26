<template>
  <div class="tag-page">
   <Banner ></Banner>
   <Taglist v-bind:catalogName="catalogName" :isExpress=false ></Taglist>

   <HomeBtn url="/" ></HomeBtn>
   <CamaraBtn inPageType="tagPage"></CamaraBtn>
  </div>
</template>

<script>
import Banner from "components/Banner/Banner.vue"
import Taglist from 'components/Taglist/Taglist.vue'
import HomeBtn from 'components/FloatBtn/HomeBtn.vue'
import CamaraBtn from 'components/FloatBtn/CamaraBtn.vue'

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
    window.history.replaceState("","","");
    window.localStorage.removeItem('selectedObj')// 清理历史缓存

    window.localStorage.removeItem('resultList');
    window.localStorage.removeItem('pageIndex');
    window.localStorage.removeItem('scrollTop');
  }
}
</script>

<style scpoed rel="stylesheet/css">
.tag-page{
  width:100%;
  padding:8rem 0;
}
</style>