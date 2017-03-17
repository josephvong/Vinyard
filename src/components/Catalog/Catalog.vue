<template>
  <div class="catalog">
    <h3 class="title">{{catalogTitle}}</h3>
    <div class="tag-wrap">
      <Ctag v-for="tag in tags" v-bind:showName="tag" v-bind:catalogName="catalogName"></Ctag>
      <!-- <div v-for="tag in tags" class="col"><div class="tag">{{tag}}</div></div> -->
    </div>
  </div>
</template>

<script>
import tagData from "../../assets/tagData"
import Ctag from "./Ctag"
export default {
  name: 'catalog',
  props:{
    catalogName:{
      type:String,
      default:""
    }
  },
  data(){
    return {
      tags:tagData[this.catalogName]
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
  },
  components:{
    Ctag
  },
  mounted(){

  }
}
</script>

<style scpoed rel="stylesheet/css">
.catalog{
    position: relative;
  width:100%;
    border-bottom:1.5rem solid #F3F5F7;/*blue;*/
  margin-bottom: 0.5rem;
}
.catalog .express{
    position: absolute;
    display: inline-block;
    right:0.5rem; bottom:-1rem; line-height: 1.5rem;
    font-size: 1.2rem;

}

.catalog .title{
  height:2rem; line-height: 2rem;
    font-size: 1.4rem;
  padding-left: 0.5rem;
    border-left:3px solid #B91C36;
}

.catalog .tag-wrap{
  width:100%; max-width:100%;
  padding-left:0.2rem;

  display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;

  box-orient:horizontal;-webkit-box-orient:horizontal; box-lines:multiple;-webkit-box-lines:multiple;

  flex-direction:row; -webkit-flex-direction:row; -moz-flex-direction:row;
  flex-wrap:wrap; -webkit-flex-wrap:wrap; -moz-flex-wrap:wrap;

  justify-content:left; -webkit-justify-content:left;
  box-pack:left;-webkit-box-pack:left;-moz-box-pack:left;

}
.catalog .tag-wrap .col{
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
.catalog .tag-wrap .col.addlong{
    flex-basis:50%;
}
.catalog .tag-wrap .col .tag{
  display: inline-block;
  width:100%;  line-height: 3rem;
  font-size: 1.2rem;
  padding:0.5rem ;
  border-radius:6px;
  overflow: hidden;
  color:#545454;
  background: white;
}
.catalog .tag-wrap .col .tag.active{
    color:white;
    background: #B91C36;
}
.catalog .tag-wrap .col .tag a{
  display: line-block;
  max-width: 100%;
  overflow-x: hidden;
}

</style>