<template>
  <div class="app" >
    <Banner></Banner>
    <div class="type-header"> 按{{catalogName}}分类选项 </div>
    <div class="main-menu">
      <div class="left-menu">
        <ul class="cata-list" ref="cataList">
          <li  class="active" catalog-type="region" v-on:click="leftItemClick()" >产区<br/>分类</li>
          <li catalog-type="wine_type" v-on:click="leftItemClick()">葡萄酒类型<br/>分类</li>
          <li catalog-type="grape" v-on:click="leftItemClick()">葡萄品种<br/>分类</li>
          <li  v-on:click="leftItemClick()">价格区间<br/>分类</li>
          <li  v-on:click="leftItemClick()">综合<br/>分类</li>
        </ul>
      </div>
      <div class="right-menu">

        <Taggroup ref="taggroup"></Taggroup>
      </div>
    </div>
  </div>
</template>

<script>

const catalogTitle={"region":"产区","wine_type":"葡萄酒类型","grape":"葡萄品种"}
import $ from "jquery"
import Vue from "vue"
import Banner from "components/Banner/Banner.vue"
import Taggroup from "components/Taggroup/Taggroup.vue"

export default {
  name: 'app',
  data(){
    return {
      catalogName:catalogTitle["region"],
      eventHub:new Vue()
    }
  },
  computed:{
    /*titleName(){

    }*/
  },
  methods:{
    leftItemClick(){
      let catName = event.target.getAttribute("catalog-type");
      $(this.$refs.cataList).find("li").removeClass("active");//.getElementsByTagName("li").
      $(event.target).addClass("active");
      this.catalogName=catalogTitle[catName];
      if(catName){
        this.$refs.taggroup.changeCatalogName(catName)
      }else{
        window.localStorage.setItem('fromMenu',"ok"); // 设置 从 menu 页面进入的判定
        window.location.href="/module/info.html"
      }

    }
  },
  components:{
    Banner,Taggroup
  },
  mounted(){

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/css/reset.css"
@import "../../common/css/cusstyle.css"
.app
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background:#F3F5F7;
  .type-header
    width:100%
    font-size:2rem;
    line-height:2.4rem;
    margin-top:8rem
    text-align:center
  .main-menu
    position:absolute
    top:10.4rem
    left:0
    right:0
    bottom:0
    display:flex
    flex-flow:row no-wrap
    justify-content: flex-start
    .left-menu
      flex: 1 0 8rem
      width:8rem
      height:100%
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      .cata-list
        width:100%;
        &>li
          position:relative
          width:100%
          padding:1rem 0;
          line-height:2rem;
          font-size:1.4rem;
          text-align:center;
          background:white;
          border-bottom:1rem solid #F3F5F7;
        &>li.active
          background:#F3F5F7;
        &>li.active:before
          content:""
          position:absolute
          width:0.5rem
          height:100%
          left:0
          top:0
          background:red
    .right-menu
      flex: 1 1 auto
      height:100%
      padding:1rem
      overflow: auto;
      -webkit-overflow-scrolling: touch;

</style>
