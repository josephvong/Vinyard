<template>
  <div class="tabbar-wrap">
    <div class="tabbar" ref="tabbar">
      <div class="symbol-wrap">
        <span class="symbol" v-for="(item,index) in symbolArr" v-show="item.tId"
              v-bind:catalogName="item.catalogName" v-bind:tId="item.tId"
              v-on:click="tagClickHandle()"
        >
           {{item.tId}}
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
  width:2rem; height:2rem; line-height: 2rem;
  font-size: 1.4rem;
  text-align: center;
  border-radius: 50%;
  background: blue;
  z-index: 3
}
.tabbar-wrap .tabbar .symbol-wrap{
  width:90%;min-height: 2.4rem;
}
.tabbar-wrap .tabbar .symbol-wrap .symbol{
    display: inline-block;
    position: relative;
    height:2rem; line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
    padding:0 0.8rem;
    margin:0.5rem 0.25rem;
    border-radius:8px;
    background: red;
}
/*.tabbar-wrap .tabbar .tag-list .top-tag:nth-of-type(1){background:#289341; color:white; }
.tabbar-wrap .tabbar .tag-list .top-tag:nth-of-type(2){background:white ;color:#A5A5A5; border:1px solid #A5A5A5;}
.tabbar-wrap .tabbar .tag-list .top-tag:nth-of-type(2) .close{color:#A5A5A5;}
.tabbar-wrap .tabbar .tag-list .top-tag:nth-of-type(3){background:#E31C15; color:white;}

.tag-header-wrap .header .top-tag .close{
    position: absolute; display: block;
    right:0.2rem; top:0%;
    height: 1rem;width:1rem; font-size: 1rem;
    color:white;
}*/

.clearfix:after,.clearfix:before{ content:""; display:table;}
.clearfix:after{ clear:both;}
.clearfix{*zoom:1;}
.fl{float:left;}
.fr{float:right;}
</style>