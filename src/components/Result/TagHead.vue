<template>
  <div class="tag-header-wrap">
  <div class="header clearfix" ref="tagHeader">
    <span v-show="selectedObj.district" class="top-tag" v-bind:tId="selectedObj.district"
          v-on:click="tagClickHandle('district')"
    >
      {{selectedObj.district}}<strong class="close">x</strong>
    </span>
    <span v-show="selectedObj.winetype" class="top-tag" v-bind:tId="selectedObj.winetype"
          v-on:click="tagClickHandle('winetype')"
    >
      {{selectedObj.winetype}}<strong class="close">x</strong>
    </span>
    <span v-show="selectedObj.grapetype" class="top-tag" v-bind:tId="selectedObj.grapetype"
           v-on:click="tagClickHandle('grapetype')"
    >
      {{selectedObj.grapetype}}<strong class="close">x</strong>
    </span>
  </div>
</div>

</template>

<script>
import $ from "jquery"
export default {
  name: 'taghead',
  props:{
    selectedObj:{
      type:Object,
      default:{}
    },
    eventHub:{
      type:Object,
    }
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    fixedHeader(){ // 计算出 顶部 组建高度后 输出到 父组建
      let HeadHeight = $(this.$refs.tagHeader).outerHeight();
      this.$nextTick(()=>{
        this.eventHub.$emit("fixedHeader",HeadHeight);
      })
    },

    tagClickHandle(catName){
      let catalogName = catName ;
      let tId = event.target.getAttribute("tId");
      this.eventHub.$emit("editSelectedObj",{"catalogName":catalogName,"tId":tId})
    }
  },
  components:{

  },
  mounted(){
    this.fixedHeader(); // 传递 组建高度给母组件 调整 顶部填充距离


  }
}
</script>

<style scpoed rel="stylesheet/css">
.tag-header-wrap{
    position: fixed;
    top:0;left:0;
    width: 100%;
    z-index: 5;
}
.tag-header-wrap .header{
    width: 100%; max-width:640px;
    font-size: 2rem;
    margin: 0 auto;
    color:white;
    padding:0.25rem 0.5rem;
    text-align: center;
    background : white;
}
.tag-header-wrap .header .top-tag{
    display: inline-block; position: relative;
    float:left;
    height:2.2rem; line-height: 2.2rem;
    font-size: 1.2rem;
    text-align: center;
    padding:0 1.5rem;
    margin:0.25rem 0.5rem;
    border-radius:8px;
}
.tag-header-wrap .header .top-tag:nth-of-type(1){background:#289341; color:white; }
.tag-header-wrap .header .top-tag:nth-of-type(2){background:white ;color:#A5A5A5; border:1px solid #A5A5A5;}
.tag-header-wrap .header .top-tag:nth-of-type(2) .close{color:#A5A5A5;}
.tag-header-wrap .header .top-tag:nth-of-type(3){background:#E31C15; color:white;}

.tag-header-wrap .header .top-tag .close{
    position: absolute; display: block;
    right:0.2rem; top:0%; /*margin-top:-0.5rem;*/
    height: 1rem;width:1rem; font-size: 1rem;
    color:white;
}
</style>