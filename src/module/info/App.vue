<template>
  <div class="app" ref="infoApp" >
    <!-- 顶部栏 -->
    <Tabbar v-bind:eventHub="eventHub"  ref="tabbar" ></Tabbar>
    <div class="list-wrap" ref="resultList">

      <ul class="result-list" >
        <ResultItem v-for="(item,index) in resultList"
                  v-bind:infoObj="item" v-bind:key="index"
                  v-bind:eventHub="eventHub"
        >
        </ResultItem>
      </ul>
      <div class="no-result"  v-show="isNoResult"  >没有更多酒款</div>
      <div class="add-more" v-show="!isNoMore" >正在加载中...</div>
    </div>

    <!-- 弹出型筛选器 -->
    <popup v-model="filterShow" height="100%">
      <div class="filter-wrap" style="">
          <a class="close-filter" v-on:click="closeFilter()">x</a>
          <scroller lock-x  ref="filterScroll" >
            <div class="select-wrap">
              <Filterlist catalogName="region" ref="regionTag"
                          v-bind:eventHub="eventHub" v-bind:selectedObj="selectedObj"
              ></Filterlist>
              <Filterlist catalogName="wine_type" ref="wineTag"
                          v-bind:eventHub="eventHub" v-bind:selectedObj="selectedObj"
              >
              </Filterlist>
              <Filterlist catalogName="grape"  ref="grapeTag"
                          v-bind:eventHub="eventHub" v-bind:selectedObj="selectedObj"
              ></Filterlist>
            </div>
          </scroller>

          <div class="bottom">
            <a class="btn" v-on:click="resetClickHandle()"  >重置</a>
            <a class="btn" v-on:click="submitClickHandle()" >提交</a>
          </div>
      </div>
    </popup>

  </div>
</template>

<script>
import "common/css/reset.css"
import "common/css/cusstyle.css"

import { Popup, Scroller  } from 'vux'
import {countryName} from "countryData"

import $ from "jquery"
import Vue from "vue"
import _ from "lodash"

import Filterlist from "components/Filter/Filterlist.vue"
import Tabbar from "components/Tabbar/Tabbar.vue"
import ResultItem from "components/ResultItem/ResultItem.vue"


export default {
  name: 'app',
  props:{
  },
  data(){ // 全局数据
    return {
      // 全局 选择 数据
      selectedObj:$.extend({},JSON.parse(window.localStorage.getItem("selectedObj"))), //选中结果

      // 筛选器 切换
      filterShow:false, // 筛选器显示隐藏

      // 全局结果列表状态
      resultList:JSON.parse(window.localStorage.getItem("resultList"))||[], // 结果列表
      pageIndex:parseInt(window.localStorage.getItem("pageIndex"))||1, // 当前页码
      stopScrollRequest:false,  // 滚动加载停止
      isNoResult:false, // 是否没有数据
      isNoMore:false,   // 是否加载结束
      stableData:{  // 列表加载API 固定参数
        "authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
        "authmode":"app",
        "country":countryName[this.getUrlParam("country")],// 国家名
        "cookie":window.localStorage.getItem("userCookie")//"940158d239561338e"
      },

      // 事件集合
      eventHub:new Vue(),
    }
  },
  computed:{

  },
  methods:{
    //===============筛选器打开关闭函数================
      openFilter(){   // 打开筛选器函数
        this.filterShow=true;
        this.$nextTick(() => {
          setTimeout(()=>{this.$refs.filterScroll.reset()},500)
        })
      },
      closeFilter(){  // 关闭筛选器
        this.filterShow=false
      },
    //=============筛选器打开关闭函数(完结)===========

    // ================动态改变 选择数据 的函数====================
      modifySelection(catalogName,tId){ // 子组件筛选器中点击每个标签 触发 modify函数
        if(this.selectedObj[catalogName]){
          if(this.selectedObj[catalogName]!=tId){
            this.selectedObj[catalogName] = tId
          }else{
            this.selectedObj[catalogName] = null
          }
        }else{
          Object.assign(this.selectedObj,JSON.parse('{"'+catalogName+'":"'+tId+'"}'))
        }
        this.$nextTick(()=>{
          this.initTagList()
        })
      },

      removeSelection(catalogName,tId){//子组件tabBar 每个 symbol 点击触发 remove
        if(this.selectedObj[catalogName]==tId){
          this.selectedObj[catalogName] = null
        }
        this.$nextTick(()=>{
          this.initTagList(); // 更新筛选器状态
          this.initTabBar(); // 更新顶部symbol状态
          //-----------重置列表状态--------------
          $(window).scrollTop(0) // 返回顶部
          this.resultList=[]; // 清空结果列表数据
          this.pageIndex = 1; // 重置页码
          this.isNoResult=false; //  重置noResult状态
          this.isNoMore=false;   //  重置noMore状态
          //------------重置列表状态（完）-----------
          this.reslutDataLoad()// 加载数据
        })
      },

      cleanSelection(){ // 点击重设按钮 清除全部 selection
        let newObj={}
        this.selectedObj=newObj
      },
    //================动态改变 选择数据 的函数（完结）====================

    //========子组件动态数据（选项数据）更新函数=============
      initTagList(){  // 初始化 子组件(筛选列表) 的选择数据
       this.$refs.regionTag.setSelected(this.selectedObj)
       this.$refs.wineTag.setSelected(this.selectedObj)
       this.$refs.grapeTag.setSelected(this.selectedObj)
      },

      initTabBar(){  // 初始化 子组件(symbol列表) 的选择数据
        this.$refs.tabbar.setSelected(this.selectedObj);
        this.$nextTick(()=>{ // 初始化 tabBar 组件，自动执行 tabBar 的高度调整
          this.$refs.tabbar.tabbarFixedHead()
        })
      },

      tabbarFixedHead(num){  // 父组件自动调整 顶部填充
        $(this.$refs.infoApp).css("padding-top",num)
      },
    //======子组件动态数据（选项数据）更新函数（完结）==========

    //=================当前 组件 事件触发函数 =========================
      submitClickHandle(){
        this.filterShow=false; // 关闭筛选器
        this.initTabBar();
        //-----------重置列表状态--------------
        $(window).scrollTop(0) // 返回顶部
        this.resultList=[]; // 清空结果列表数据
        this.pageIndex = 1; // 重置页码
        this.isNoResult=false; //  重置noResult状态
        this.isNoMore=false;   //  重置noMore状态
        //-----------重置列表状态（完结）--------------
        this.$nextTick(()=>{  // 加载列表数据
          this.reslutDataLoad()
        })
      },

      resetClickHandle(){  // 重置 筛选器
        this.cleanSelection();
        this.$nextTick(()=>{
          this.initTagList();
          this.initTabBar();
        })
      },
    //=================当前 组件 事件触发函数(完结) =========================

    //=================结果列表数据加载===========================
      reslutDataLoad(){  // 列表加载数据函数
        let formObj={};
        _.forIn(this.selectedObj,(val,key)=>{ // 格式化选择标签的数据json
          if(val){
            formObj[key]=val
          }else{
            formObj[key]="0"
          }
        });
        let newObj = Object.assign({},this.stableData,formObj,{page:this.pageIndex})
        $.ajax({
          url:'https://recomm.9kacha.com/toBfindWine/findWine.php',
          type:'POST',
          data:{'jparams':JSON.stringify(newObj) },
          success:(data)=>{
            this.stopScrollRequest=false; // 关闭开关
            var res = JSON.parse(data);
            this.$nextTick(()=>{
              this.getDataCb(res);
            })
          },
          error:(err)=>{
            this.isNoResult=true //没有数据
            console.log(err);
          }
        });
      },

      getDataCb(res){ // 获取数据后的回调函数（拼接结果数组）
        if(res.description=="ok"){
          if(res.jsonData.length>0){
            let newArr=this.resultList
            this.resultList=newArr.concat(res.jsonData);
            if(res.jsonData.length<10){
              this.isNoMore=true  // 已经结束
            }
          }
        }else{
          this.isNoMore = true
          this.isNoResult=true // 没有数据
        }
      },
    //=================结果列表数据加载(完结)===========================

    //=================App组件内 事件 触发函数=========================
      windowScrollHandle(){  // window.scroll 事件触发函数
        let viewHeight=$(window).height();
        let listHeight = $(this.$refs.resultList).outerHeight();
        let overTop=listHeight-viewHeight; // >0 or not
        let btmHeight=overTop-$(window).scrollTop();
        if(btmHeight < -20 ){
          //console.log(btmHeight)
          if(!this.stopScrollRequest){
            this.stopScrollRequest=true;
            this.pageIndex+=1;
            this.reslutDataLoad();
          }
        }
      },
    //================================================================

    //===================页面 状态缓存函数===========================
      savePageStatus(){
        window.localStorage.setItem('selectedObj',JSON.stringify(this.selectedObj));
        window.localStorage.setItem('resultList',JSON.stringify(this.resultList));
        window.localStorage.setItem('pageIndex',this.pageIndex);
        window.localStorage.setItem('scrollTop',$(window).scrollTop());
      },
    //==================================================================

    //====================获取页面链接的国家参数==============================
    // 获取链接字段
    getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    //=======================================================================
  },
  components:{
    Tabbar,Popup,Filterlist, ResultItem, Scroller,
  },
  mounted(){

    // 判断页面的scrollTop（是否有记录）
    if(window.localStorage.getItem("scrollTop")){
      $(window).scrollTop(window.localStorage.getItem("scrollTop"))
    }

    // 判断是否有 resultList 记录，如果没有，加载数据
    if(!window.localStorage.getItem("resultList")){
      this.reslutDataLoad()
    }

    // 如果没有选项数据的本地存储（综合查询）
    if(!window.localStorage.getItem("selectedObj") && window.localStorage.getItem("fromMenu")=="ok" ){
      this.$nextTick(() => {
        this.filterShow=true;
      })
    }

    // 根据 selectedObj 初始化子组件
    this.initTagList();  //初始化选择TagList 子组件
    this.initTabBar(); //初始化 Tabbar 子组件(显示symbol)
    this.$nextTick(() => {
      setTimeout(()=>{this.$refs.filterScroll.reset()},500)
    })

    // 监听 window.scroll
    $(window).on("scroll",()=>{
      this.windowScrollHandle()
    })

    // 监听 filterList 展开后 发送的 scrollerRefresh 事件
    this.eventHub.$on("scrollerRefresh",()=>{
      this.$nextTick(() => {
        this.$refs.filterScroll.reset({"top":0});
      })
    })

    // 监听 标签列表 子节点 的点击事件触发
    this.eventHub.$on("modifySelection",(catalogName,tId)=>{
      this.modifySelection(catalogName,tId)
    })

    //监听 tabbar 子节点 的点击事件触发(打开筛选器)
    this.eventHub.$on("openFilter",()=>{
      this.openFilter()
    })

    //监听 tabbar 子节点 的点击事件触发(打开筛选器)
    this.eventHub.$on("removeSelection",(catalogName,tId)=>{
       this.removeSelection(catalogName,tId)
    })

    // 监听 tabbar 组件 发送的 调整padding-top 事件
    this.eventHub.$on("tabbarFixedHead",(tabHeight)=>{
      this.tabbarFixedHead(tabHeight);
    });

    // 监听 resultItem 组件发送的 记录 页面状态 事件
    this.eventHub.$on("savePageStatus",(tabHeight)=>{
      this.savePageStatus();
    });

    // 清空 本地缓存
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

<style scoped  rel="stylesheet/css">
@import "../../common/css/reset.css"
@import "../../common/css/cusstyle.css"
.app{
  position: relative;
  width:100%;
}

.filter-wrap{
  position:absolute;
  padding-top:1.8rem;
  left:0;right:0;top:0;bottom:0;
  font-size:1rem;
  /*background:red;*/
}
.filter-wrap .close-filter{
  display: block;
  padding:0;
  position: absolute;
  right:1rem; top:1rem;
  width:3rem; height:3rem; line-height:3rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  color:gray;
  z-index: 3;
}
.filter-wrap .scroller-wrap{
  width:100%; height:100%;
  overflow-y: scroll;
}
.filter-wrap .select-wrap{
  width:100%;
  padding-bottom:8rem;
}
.filter-wrap .bottom{
  position: absolute;
  height:4rem;
  left:0;right:0;bottom:0;
  background: white;
}
.filter-wrap .bottom:after{
  content: "";
  position:absolute;
  width:100%; height: 1px;
  top:-1px; left:0;
  transform:scaleY(0.5);
  -webkit-transform:scaleY(0.5);
  background: #E0E0E0;
}
.filter-wrap .bottom .btn{
  position: relative;
  display: inline-block;

  width:50%; height:4rem; line-height: 4rem;
  text-align:center;

}
.filter-wrap .bottom .btn:nth-of-type(2){
  margin-left: -10px;
}
.filter-wrap .bottom .btn:nth-of-type(2):after{
  content: "";
  position: absolute;
  left: 0; top:0;
  height: 100%; width: 1px;
  transform:scaleX(0.5);
  -webkit-transform:scaleX(0.5);
  background: #E0E0E0;
}

.list-wrap{
  width:100%;
  box-sizing: border-box;
  padding:1rem 1rem;
}
.list-wrap .result-list{
  box-sizing: border-box;
  padding:0; margin:0;
 /* padding:1rem 0.5rem 3rem 0.5rem;*/
}
.list-wrap .no-result, .list-wrap .add-more{
  width:100%; height:2rem; line-height: 2rem;
  font-size: 1.8rem; text-align: center;
}
</style>
