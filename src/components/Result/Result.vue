<template>
  <div class="result" ref="resultPage">
    <TagHead v-bind:selectedObj="selectedObj" v-bind:eventHub="eventHub"></TagHead>
    <div class="list-wrap">
      <div class="no-result" v-show="isNoResult" >没有对应酒款</div>
      <ul class="result-list">
        <ListItem v-for="(item,index) in resultList" v-bind:infoObj="item" v-bind:key="index">
        </ListItem>
      </ul>
      <div class="add-more" v-show="!isNoMore">正在加载中...</div>
      <div class="no-more" style="display:none">加载完成</div>
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
      pageIndex:1,
      //selectedObj:$.extend({},JSON.parse(window.localStorage.getItem("selectedObj"))),
      selectedObj:$.extend({},{"district":"艾米利亚-罗马涅","winetype":null,"grapetype":"赤霞珠"}),
      isNoResult:false, // 是否没有数据
      isNoMore:false,   // 是否加载结束
      stopScrollRequest: false,  // 是否暂停加载（默认不暂停）
      resultList:[], // 结果列表
      staticData:{   // 固定参数
        "authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
        "authmode":"app",
        "country":"意大利",
        "cookie":window.localStorage.getItem("userCookie")
      },
      eventHub:new Vue()

    }
  },
  computed:{

  },
  methods:{
    dataLoad(obj,page){ // 加载数据
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
          var res = JSON.parse(data);
          this.getDataCb(res,page);
        }
      });
    },
    getDataCb(res,page){ // 获取数据的回调
      if(res.description=="ok"){
        let newArr=this.resultList
        this.resultList=newArr.concat(res.jsonData);
      }else{
        this.isNoResult=true
      }
    },
    fixedHeader(num){ // 调整页面padding-top 的函数
      $(this.$refs.resultPage).css("padding-top",num)
    }
  },
  components:{
    TagHead, ListItem
  },
  mounted(){
    window.localStorage.removeItem("selectedObj") ; // 获取数据后 清除页面
    this.eventHub.$on("fixedHeader",(num)=>{  // 监听 tag-header 组建传过来的高度，
      this.fixedHeader(num)   //执行padding-top 的调整函数
    });

    this.dataLoad(this.selectedObj,this.pageIndex); // 首次加载数据

    $(window).on("scroll",()=>{
      let viewHeight=$(window).height();
      let bodyHeight = $("body").outerHeight();
      let overTop=bodyHeight-viewHeight; // >0 or not
      let btmHeight=overTop-$(window).scrollTop();
      if(btmHeight<= 0)
      console.log(btmHeight)
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