<template>
  <div class="tag-head clearfix">
    <div class="tag" v-for="item in selectedArr" v-bind:catalogName="item.catalogName" >
       {{item.tId}}<span>x</span>
    </div>
  </div>

</template>

<script>

export default {
  name: 'taghead',
  props:{
    /*selectedObj:{
      type:String,
      default:""
    } */
  },
  data(){
    return {

    }
  },
  computed:{
    selectedArr(){ // 被选中的tag
      return this.$store.state.selectM.selectedArr
    },

  },
  components:{

  },
  mounted(){
  }
}
</script>

<style scpoed rel="stylesheet/css">
.tag-head{
  position: absolute;
  top:0;
  width:100%;
  padding:1rem 1rem 0rem 1rem;
}
.tag-head .tag{
  position: relative;
  float:left;
  display:inline-block;
  height:2rem;
  line-height: 2rem;
  border-radius:5px;
  margin-right:1rem;
  margin-bottom:1rem;
  padding:0 1.5rem 0 1.5rem;
  text-align: center;
  font-size: 1.4rem;
  color:white;
  background: red;
}
.tag-head .tag.hide{
  display: none;
}
.tag-head .tag span{
  position: absolute;
  display:inline-block;
  right:0rem; top:50%;
  width:1.2rem; height:1.2rem; line-height: 1.2rem;
  font-size: 1.2rem;
  color:black;
  margin-top:-0.7rem;
}
</style>