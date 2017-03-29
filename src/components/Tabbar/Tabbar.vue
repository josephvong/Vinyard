<template>
  <div class="tabbar-wrap">
    <div class="tabbar" ref="tabbar">
      <div class="symbol-wrap">
        <span class="symbol" v-for="(item,index) in symbolArr" v-show="item.tId">
           {{item.tId}}
           <em class="close" v-bind:catalogName="item.catalogName" v-bind:tId="item.tId"
              v-on:click="tagClickHandle()">x</em>
        </span>
      </div>

      <div class="filter-open" v-on:click="openFilter()">筛</div>
    </div>
  </div>

</template>

<script>
import $ from "jquery"
export default {
  name: 'taghead',
  props:{
    eventHub:{
      type:Object,
    }
  },
  data(){
    return {
      selectedObj:null,
      //symbolArr:[]
    }
  },
  computed:{
    symbolArr(){
      let newArr=[];
      if(this.selectedObj){
        _.forIn(this.selectedObj,(val,key)=>{
          let newObj={}
          newObj.catalogName=key;
          newObj.tId = val;
          newArr.push(newObj)
        })
        return newArr
      }else{
        return newArr
      }
    }
  },
  watch: {
    /*selectedObj:function(newVal){
      console.log(1);
    }*/
  },
  methods:{
    // 由父组件 传递 selectedObj 来改变 tabbar的选中数据
    setSelected(obj){
      let newObj=Object.assign({},obj)
      this.selectedObj = newObj ;
    },

    // 发送 控制父组件 打开 筛选器的 方法
    openFilter(){
      this.eventHub.$emit("openFilter");
    },

    tagClickHandle(){
      let catalogName = event.target.getAttribute("catalogName"); ;
      let tId = event.target.getAttribute("tId");
      this.eventHub.$emit("removeSelection",catalogName,tId )

    },

    tabbarFixedHead(){ // 计算出 顶部 组建高度后 输出到 父组建
      let tabHeight = $(this.$refs.tabbar).outerHeight();
      this.$nextTick(()=>{
        this.eventHub.$emit("tabbarFixedHead",tabHeight);
      })
    },
  },
  components:{

  },
  mounted(){

    this.tabbarFixedHead(); // 传递 组建高度给母组件 调整 顶部填充距离


  }
}
</script>

<style scpoed rel="stylesheet/css">
.tabbar-wrap{
  position: fixed;
  top:0;left:0;
  width: 100%;
  z-index: 5;
}
.tabbar-wrap .tabbar{
    position:relative;
    width: 100%; max-width:640px;
    margin: 0 auto;
    color:white;
    background : white;
}
.tabbar-wrap .tabbar .filter-open{
  position: absolute;
  right:0.5rem; top:0.25rem;
  width:2.8rem; height:2.8rem; line-height: 2.8rem;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 50%;
  background: blue;
  z-index: 3;
}
.tabbar-wrap .tabbar .symbol-wrap{
  width:90%;min-height: 2.4rem;
  padding:0.5rem 0rem;
}
.tabbar-wrap .tabbar .symbol-wrap .symbol{
  display: inline-block;
  position: relative;
  height:2rem; line-height: 2rem;
  font-size: 1.2rem;
  text-align: center;
  padding:0rem 2rem 0rem 0.8rem;
  margin:0.5rem 0.25rem;
  border-radius:6px;
}
.tabbar-wrap .tabbar .symbol-wrap .symbol:nth-of-type(1){
  border:1px solid #C37CD0;
  color:#C37CD0;
}
.tabbar-wrap .tabbar .symbol-wrap .symbol:nth-of-type(2){
  border:1px solid #F06292;
  color:#F06292;
}
.tabbar-wrap .tabbar .symbol-wrap .symbol:nth-of-type(3){
  border:1px solid #FF8C68;
  color:#FF8C68;
}
.tabbar-wrap .tabbar .symbol-wrap .close{
  font-style: normal;
  position: absolute; display: block;
  right:0.2rem; top:20%;
  height: 1.4rem; width:1.4rem; font-size: 1.4rem;
  margin-top: -0.5rem;
}

.clearfix:after,.clearfix:before{ content:""; display:table;}
.clearfix:after{ clear:both;}
.clearfix{*zoom:1;}
.fl{float:left;}
.fr{float:right;}
</style>