<template>
  <div class="selection">
    <h3 class="title">{{catalogTitle}}</h3>
    <div class="tag-wrap">
      <Stag v-for="(tag,index) in tags"
            v-bind:showName="tag"
            v-bind:tagIndex="index"
            v-bind:isExpress="isExpress"
            v-bind:catalogName="catalogName"
            v-bind:selectedId="selectedId"
      >
      </Stag>
    </div>
    <input type="text" class="get" style="border:1px solid red" v-bind:value="selectedId"  />
    <a v-on:click="expressToggle()" class="express">{{isExpress?"收起":"更多"}}</a>
  </div>
</template>

<script>
import tagData from "../../assets/tagData"
import Stag from "./Stag"
export default {
  name: 'selectionn',
  props:{
    catalogName:{
      type:String,
      default:""
    },
  },
  data(){
    return {
      isExpress:false,  // 列表中的tag 是否 展开 （false为不展，true为展开）
      tags:tagData[this.catalogName]
    }
  },
  methods:{
     // 点击更多进行切换
    expressToggle(){
      this.isExpress=!this.isExpress;
      return this.isExpress
    }
  },

  computed:{
    catalogTitle(){
      if(this.catalogName=="district"){
        return "地区"
      }else if(this.catalogName=="winetype"){
        return "红酒类型"
      }else if(this.catalogName=="grapetype"){
        return "葡萄品种"
      }
    },

    selectedArr(){
      return this.$store.state.selectM.selectedArr
    },
    selectedId(){
      let selId=null;
      this.selectedArr.forEach((item,index)=>{
        if(item.catalogName==this.catalogName){
          selId = item.tId
        }
      })
      return selId
    },

  },
  components:{
    Stag
  },
  mounted(){
  }
}
</script>

<style scpoed rel="stylesheet/css">
.selection{
  position: relative;
  width:100%;
  border-bottom:1.5rem solid #F3F5F7;/*blue;*/
  margin-bottom: 0.5rem;
}
.selection .express{
    position: absolute;
    display: inline-block;
    right:0.5rem; bottom:-1rem; line-height: 1.5rem;
    font-size: 1.2rem;

}

.selection .title{
  height:2rem; line-height: 2rem;
    font-size: 1.4rem;
  padding-left: 0.5rem;
    border-left:3px solid #B91C36;
}

.selection .tag-wrap{
  width:100%; max-width:100%;
  padding-left:0.2rem;

  display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;

  box-orient:horizontal;-webkit-box-orient:horizontal; box-lines:multiple;-webkit-box-lines:multiple;

  flex-direction:row; -webkit-flex-direction:row; -moz-flex-direction:row;
  flex-wrap:wrap; -webkit-flex-wrap:wrap; -moz-flex-wrap:wrap;

  justify-content:left; -webkit-justify-content:left;
  box-pack:left;-webkit-box-pack:left;-moz-box-pack:left;

}
.selection .tag-wrap .col{
    display: block;
    box-flex:1; -webkit-box-flex:1;
    flex-grow:0;
    flex-shrink:1;
    flex-basis:33%;
    /*flex-basis:auto;*/
    /*min-width:33%;*/
    text-align: center;
    padding:0.5rem;
}
.selection .tag-wrap .col.addlong{
    flex-basis:50%;
}
.selection .tag-wrap .col .tag{
  display: inline-block;
  width:100%;  line-height: 3rem;
  font-size: 1.2rem;
  padding:0.5rem ;
  border-radius:6px;
  overflow: hidden;
  color:#545454;
  background: white;
}
.selection .tag-wrap .col .tag.active{
    color:white;
    background: #B91C36;
}
.selection .tag-wrap .col .tag a{
  display: line-block;
  max-width: 100%;
  overflow-x: hidden;
}

</style>