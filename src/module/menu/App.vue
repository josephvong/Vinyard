<template>
  <div class="app" >
    <Banner></Banner>
    <div class="type-header"> 按{{catalogName}}分类选项 </div>
    <div class="main-menu">
      <div class="left-menu">
        <ul class="cata-list" ref="cataList">

          <li  class="active" catalog-type="region" v-on:click="leftItemClick()" >产区</li>
          <li catalog-type="wine_type" v-on:click="leftItemClick()">葡萄酒</li>
          <li catalog-type="grape" v-on:click="leftItemClick()">葡萄品种</li>
         <!--  <li catalog-type="country" v-on:click="leftItemClick()" >国家</li> -->
          <li  v-on:click="leftItemClick()">综合多选</li>
        </ul>
      </div>
      <div class="right-menu">
        <!-- <div></div> -->
        <Taggroup ref="taggroup" ></Taggroup>
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
      country:this.getUrlParam("country"),
      catalogName:catalogTitle["region"],
      eventHub:new Vue(),
      //countrySelect:false
    }
  },
  computed:{
    /*titleName(){

    }*/
  },
  methods:{
    leftItemClick(){
      // 清空 从info页面中 回来时留着的缓存
      if(window.localStorage.getItem("selectedObj")){
        window.localStorage.removeItem("selectedObj")
      }
      if(window.localStorage.getItem("fromMenu")){
        window.localStorage.removeItem("fromMenu")
      }
      if(window.localStorage.getItem("resultList")){
        window.localStorage.removeItem("resultList")
      }
      if(window.localStorage.getItem("pageIndex")){
         window.localStorage.removeItem("pageIndex")
      }
      if(window.localStorage.getItem("scrollTop")){
         window.localStorage.removeItem("scrollTop")
      }

      let catName = event.target.getAttribute("catalog-type");
      $(this.$refs.cataList).find("li").removeClass("active");//.getElementsByTagName("li").
      $(event.target).addClass("active");
      this.catalogName=catalogTitle[catName];
      if(catName){
        this.$refs.taggroup.changeCatalogName(catName)
      }else{
        window.localStorage.setItem('fromMenu',"ok"); // 设置 从 menu 页面进入的判定
        window.location.href="/module/info.html?country="+this.country
      }

    },
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg);  //匹配目标参数
      if (r != null) return unescape(r[2]); return null; //返回参数值
    }
  },
  components:{
    Banner,Taggroup
  },
  mounted(){
    // 清空 从info页面中 回来时留着的缓存
    this.$nextTick(function(){
      if(window.localStorage.getItem("selectedObj")){
        window.localStorage.removeItem("selectedObj")
      }
      if(window.localStorage.getItem("fromMenu")){
        window.localStorage.removeItem("fromMenu")
      }
      if(window.localStorage.getItem("resultList")){
        window.localStorage.removeItem("resultList")
      }
      if(window.localStorage.getItem("pageIndex")){
         window.localStorage.removeItem("pageIndex")
      }
      if(window.localStorage.getItem("scrollTop")){
         window.localStorage.removeItem("scrollTop")
      }
    })
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
  // background:#F3F5F7;
  background:white;
  .type-header
    width:100%
    font-size:2rem;
    height:3rem;
    line-height:2.8rem;
    margin-top:8rem
    text-align:center
    border-bottom:1px solid rgba(0,0,0,0.1);
  .main-menu
    position:absolute
    top:11rem
    left:0
    right:0
    bottom:0
    display:flex
    flex-flow:row no-wrap
    justify-content: flex-start
    .left-menu
      flex: 0 0 8rem
      width:8rem
      padding-top:1rem;
      height:100%
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      background:#F3F5F7;
      // background: #E5E5E5;
      .cata-list
        width:100%;
        &>li
          position:relative
          width:100%
          padding:0.5rem 0;
          line-height:4rem;
          font-size:1.4rem;
          text-align:center;
          border-bottom:1px solid rgba(0,0,0,0.1);
          background:#F3F5F7;
          // background: #E5E5E5;
        &>li:nth-of-type(1)
          border-top:1px solid rgba(0,0,0,0.1);
        &>li.active
          background:white;
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
      padding:1rem 0rem 0rem 0.8rem;
      overflow: auto;
      -webkit-overflow-scrolling: touch;

</style>
