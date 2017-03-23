<template>
  <div class="result">
    <TagHead v-bind:selectedObj="selectedObj"></TagHead>
    <div class="list-wrap">
     <!--  <div class="no-result" style="display:'none">没有对应酒款</div> -->
      <ul class="result-list">
        <ListItem v-for="item in resultListArr" v-bind:infoObj="item">
        </ListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import TagHead from "./TagHead.vue"
import ListItem from "./ListItem.vue"
// import {Scroller} from 'vux'
import $ from 'jquery'
export default {
  name: 'result',
  props:{
  },
  data(){
    return {
      nowPageIndex:1
    }
  },
  computed:{
    selectedObj(){
      let obj={};
      obj.district = this.$store.state.selectM.district;
      obj.winetype = this.$store.state.selectM.winetype;
      obj.grapetype = this.$store.state.selectM.grapetype;
      return obj
    },
    resultListArr(){
      return this.$store.state.selectM.resultListArr
    }

  },
  methods:{

  },
  components:{
    TagHead, ListItem
  },
  mounted(){
    this.$store.dispatch("refreshStateList",this.selectedObj);
    /*$(window).scroll(()=>{
      if(this.$route.path=="/Result"){
        //console.log("A")
      }
    })*/

  }
}
</script>

<style scpoed rel="stylesheet/css">
.result{
  position: relative;
  width:100%;
  padding-top:6rem;
}

.result .list-wrap{
  width:100%;
}
.result-list{
  padding: 0 1rem 3rem 1rem;
  width:100%;
}
</style>