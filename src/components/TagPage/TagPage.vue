<template>
  <div class="tag-page">
   <Banner ></Banner>
   <Taglist v-bind:catalogName="catalogName" :isExpress=false ></Taglist>
  </div>
</template>

<script>
import Banner from "../Banner/Banner.vue"
import Taglist from '../Taglist/Taglist.vue'
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
    Banner,Taglist
  },
  mounted(){

  }
}
</script>

<style scpoed rel="stylesheet/css">
.tag-page{
  width:100%;
  padding:8rem 0;
}
</style>