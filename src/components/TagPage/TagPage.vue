<template>
  <div class="tag-page">
    <Catalog v-bind:catalogName="catalogName"></Catalog>
  </div>
</template>

<script>
import Catalog from '../Catalog/Catalog.vue'
export default {
  name: 'tagpage',
  /*props:{

  },*/
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
    Catalog
  },
  mounted(){
    this.$store.dispatch("cleanSelectedArr")// 每次进入 单个选项入口页，清空已选项目
    this.$store.dispatch("cleanResultListArr") // 清空结果数组
  }
}
</script>

<style scpoed rel="stylesheet/css">
.tag-page{
  width:100%;
  max-width:100%;
  padding:1rem;
}
</style>