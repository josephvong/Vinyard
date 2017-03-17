<template>
  <div class="result">
    <div class="result-wrap">
      <TagHead></TagHead>
      <div class="list-wrap">
        <div class="no-result" v-bind:style="{display:isNoItem?'block':'none'}">没有对应酒款</div>
        <div class="scroller-wrap">
          <scroller lock-x height="100%" :use-pullup=true style="font-size:1.2rem"
                    @on-scroll="onScroll"
                    ref="resultScroller"
                    @on-pullup-loading="onPullup"
                    :pullup-config="{downContent: '加载更多', upContent: '释放后更新',loadingContent:'正在加载中...'}"

          >
            <div class="scroller-move">
              <ul class="result-list">
                <ListItem v-for="item in resultListArr" v-bind:infoObj="item">
                </ListItem>
              </ul>
            </div>
          </scroller>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagHead from "./TagHead.vue"
import ListItem from "./ListItem.vue"
import {Scroller} from 'vux'
import $ from 'jquery'
export default {
  name: 'ctag',
  props:{
  },
  data(){
    return {
      nowPageIndex:1//||window.localStorage.getItem("nowPageIndex")
    }
  },
  computed:{
    selectedArr(){
      return this.$store.state.selectM.selectedArr
    },
    resultListArr(){
      return this.$store.state.selectM.resultListArr
    },
    SelectObj(){ // 选择标签转化为json
      let newObj={};
      this.selectedArr.forEach(function(item,index){
        if(item.catalogName=="district"){
          Object.assign(newObj,{"region":item.tId})
        }else if(item.catalogName=="winetype"){
          Object.assign(newObj,{"wine_type":item.tId})
        }else if(item.catalogName=="grapetype"){
          Object.assign(newObj,{"grape":item.tId})
        }
      })
      return newObj;
    },
    PostObj(){  // 生成 提交数据
      let oDate=new Date()
      let SelectObj = this.SelectObj;
      let params={
        "authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
        "authmode":"app",
        "country":"意大利",
        "page":"'"+this.nowPageIndex+"'"
      }
      let Jparams=Object.assign({},params,SelectObj);
      return Jparams
    },
    isNoItem(){
      let flag=null;
      if(this.resultListArr.length>0){
        flag=false
      }else{
        flag=true
      }
      return flag
    },

  },
  methods:{
    onScroll(pos){
      return true
    },
    onPullup(){
      //console.log(this.$refs.resultScroller)
      let This=this;
      this.nowPageIndex+=1;



      this.$nextTick(()=>{
        this.$refs.resultScroller.donePullup();
        this.getListData(this.PostObj);
      })
      //
    },

    getListData(PostData){
      $.ajax({
        type:"POST",
        url:"http://zyshi.9kacha.com/AutoRecommWines/toBfindWine/findWine.php",
        data:{
          'jparams':JSON.stringify(PostData)
        },
        success:(data)=>{
          let resData=JSON.parse(data);
          let listData=resData.jsonData;
          if(resData.description=="ok"){
            this.$store.dispatch("addResultListArr",listData);
            this.$nextTick(() => {
              this.$refs.resultScroller.reset()
            })
          }
        }
      })
    }
  },
  components:{
    TagHead,Scroller,ListItem
  },
  mounted(){
    this.$store.dispatch("cleanResultListArr")
    this.getListData(this.PostObj);

  }
}
</script>

<style scpoed rel="stylesheet/css">
.result{
  position: fixed;
  left:0;bottom:0;top:0;right:0;
  width:100%;
}
.result-wrap{
  position: relative;
  width:100%;
  height: 100%;
  max-width:640px;
  margin:0 auto;
  padding-top:7rem;
}
.list-wrap{
  position: absolute;
  top:7rem; left:0; right:0; bottom:0;
}
.list-wrap .no-result{
  position: absolute;
  top:0;left:0;
  display: none;
  width:100%; height:3rem; line-height: 3rem;
  text-align:center;
  font-size: 1.4rem;
}
.scroller-wrap{
  width:100%; height:100%;

}
.scroller-move{
}


.result-list{
  padding: 0 1rem 3rem 1rem;
    width:100%;

}
</style>