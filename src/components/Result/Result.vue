<template>
  <div class="result" ref="resultPage">
    <TagHead v-bind:selectedObj="selectedObj" v-bind:eventHub="eventHub"></TagHead>
    <div class="list-wrap">

      <ul class="result-list">
        <ListItem v-for="(item,index) in resultList"
                  v-bind:infoObj="item" v-bind:key="index"
                  v-bind:eventHub="eventHub"
        >
        </ListItem>
      </ul>
      <div class="no-result" v-show="isNoResult" >没有更多酒款</div>
      <div class="add-more" v-show="!isNoMore">正在加载中...</div>
    </div>
  </div>
</template>

<script>
import TagHead from "./TagHead.vue"
import ListItem from "./ListItem.vue"
import $ from 'jquery'
import Vue from 'vue'

export default {
  name: 'result',
  props:{
  },
  data(){
    return {
      selectedObj:$.extend({},JSON.parse(window.localStorage.getItem("selectedObj"))), //选中结果
      resultList:JSON.parse(window.localStorage.getItem("resultList"))||[], // 结果列表
      pageIndex:parseInt(window.localStorage.getItem("pageIndex"))||1, // 当前页码

      isNoResult:false, // 是否没有数据
      isNoMore:false,   // 是否加载结束
      stopScrollRequest: false,  // 是否暂停加载（默认不暂停）

      staticData:{   // 固定参数
        "authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
        "authmode":"app",
        "country":"意大利",
        "cookie":"940158d239561338e"//window.localStorage.getItem("userCookie")
      },
      eventHub:new Vue()
    }
  },
  computed:{

  },
  methods:{
    // 加载数据
    dataLoad(obj,page){
      let newObj={};
      newObj.region=obj.district||"0";
      newObj.wine_type=obj.winetype||"0";
      newObj.grape=obj.grapetype||"0";
      let JParams = $.extend({},this.staticData,newObj,{"page":page});
      $.ajax({
        url:'http://zyshi.9kacha.com/AutoRecommWines/toBfindWine/findWine.php',
        type:'POST',
        data:{'jparams':JSON.stringify(JParams) },
        success:(data)=>{
          this.stopScrollRequest=false; // 关闭开关
          var res = JSON.parse(data);
          this.getDataCb(res,page);
        },
        error:(err)=>{
          this.isNoResult=true //没有数据
          console.log(err);
        }
      });
    },

    // 获取数据的回调
    getDataCb(res,page){
      if(res.description=="ok"){
        if(res.jsonData.length>0){
          let newArr=this.resultList
          this.resultList=newArr.concat(res.jsonData);
          if(res.jsonData.length<10){
            this.isNoMore=true  // 已经结束
          }
        }
      }else{
        this.isNoResult=true // 没有数据
      }
    },

    // 调整标签刷新
    editSelectedObj(obj){
      if(this.selectedObj[obj.catalogName] == obj.tId){
        this.selectedObj[obj.catalogName] = null;
      }
      window.localStorage.setItem("selectedObj",JSON.stringify(this.selectedObj)) // 更新本地保存选中标签
      $(window).scrollTop(0);
      this.resultList=[];
      this.pageIndex = 1;
      this.$nextTick(()=>{
        this.dataLoad(this.selectedObj,this.pageIndex)
      })
    },

    // 记录页面当前状态
    savePageStatus(){
      window.localStorage.setItem('resultList',JSON.stringify(this.resultList));
      window.localStorage.setItem('pageIndex',this.pageIndex);
      window.localStorage.setItem('scrollTop',$(window).scrollTop());
    },

    // 调整页面padding-top 的函数
    fixedHeader(num){
      $(this.$refs.resultPage).css("padding-top",num)
    }
  },
  components:{
    TagHead, ListItem
  },
  mounted(){

    if(window.localStorage.getItem("scrollTop")){
      $(window).scrollTop(window.localStorage.getItem("scrollTop"))
    }

    this.eventHub.$on("fixedHeader",(num)=>{  // 监听 tag-header 组建传过来的高度，
      this.fixedHeader(num)   //执行padding-top 的调整函数
    });

    this.dataLoad(this.selectedObj,this.pageIndex); // 首次加载数据

    $(window).on("scroll",()=>{
      let viewHeight=$(window).height();
      let bodyHeight = $("body").outerHeight();
      let overTop=bodyHeight-viewHeight; // >0 or not
      let btmHeight=overTop-$(window).scrollTop();
      if(btmHeight<= 0){
        if(!this.stopScrollRequest){
          this.stopScrollRequest=true;
          this.pageIndex+=1;
          this.dataLoad(this.selectedObj,this.pageIndex);
        }
      }
    })

    // 监听 头部标签点击事件
    this.eventHub.$on("editSelectedObj",(obj)=>{
      this.editSelectedObj(obj)
    })

    //监听 列表连接点击事件
    this.eventHub.$on("savePageStatus",()=>{
      this.savePageStatus()
    })
  }
}
</script>

<style scpoed rel="stylesheet/css">
.result{
  position: relative;
  width:100%;
  /*padding-top:6rem;*/
}

.result .list-wrap{
  width:100%;
}
.result .list-wrap .no-result,.result .list-wrap .add-more,.result .list-wrap .no-more{
  width:100%; height:2rem; line-height: 2rem;
  font-size: 1.8rem; text-align: center;
}
.result-list{
  padding: 0 1rem 0rem 1rem;
  width:100%;
}
</style>