<template>
  <div class="tag-group">
    <div class="tag-wrap">
        <div class="tag" v-for="(tag,index) in tagsData.list" v-on:click="tagClickHandle()"
             v-bind:tId="tag.name_ch"  v-bind:catalogName="catalogName" >
          <span v-bind:tId="tag.name_ch"  v-bind:catalogName="catalogName">{{tag.name_ch}}</span>
          <span v-bind:tId="tag.name_ch"  v-bind:catalogName="catalogName" v-show="tag.name_en!=''">
            {{tag.name_en}}
          </span>
        </div>
    </div>

  </div>
</template>

<script>
// import tagData from "common/tagData"
import {countryData} from "country"
export default {
  name: 'taggroup',
  props:{

    eventHub:{
      type:Object
    }
  },
  data(){
    return {
      country:this.getUrlParam("country"),
      catalogName:"region",
    }
  },
  computed:{
    tagsData(){
      return countryData[this.country][this.catalogName]
    }
  },
  components:{
  },
  methods:{
    changeCatalogName(str){
      this.catalogName = str
    },

    tagClickHandle(){
      let catName = event.target.getAttribute("catalogName");
      let tId = event.target.getAttribute("tId");
      window.localStorage.setItem('selectedObj','{"'+catName+'":"'+tId+'"}') // 设置 本地存储
      window.localStorage.setItem('fromMenu',"ok"); // 设置 从 menu 页面进入的判定
      window.location.href="/module/info.html?country="+this.country
    },
    // 获取链接字段
    getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }





  },
  watch:{

  },
  mounted(){
  }
}
</script>

<style scpoed rel="stylesheet/css">

.tag-group  {
  width:100%;

  /*display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;

  box-orient:horizontal;-webkit-box-orient:horizontal; box-lines:multiple;-webkit-box-lines:multiple;

  flex-direction:row; -webkit-flex-direction:row; -moz-flex-direction:row;
  flex-wrap:wrap; -webkit-flex-wrap:wrap; -moz-flex-wrap:wrap;

  justify-content:center;*/ /*-webkit-justify-content:left;
  box-pack:left;-webkit-box-pack:left;-moz-box-pack:left;*/

}
/*.col{
    display:inline-block;
    flex:0 1 auto;
    text-align: center;
    padding:0.5rem 0.5rem;
}
.col */
.tag{
 /* flex:0 1 auto;*/
  display: inline-block;
  float:left;
  margin:0.5rem;
  padding:0.5rem 0.5rem;
  border-radius:6px;
  overflow: hidden;
  color:#545454;
  background: white;
}
.tag span{
  display: block;
  width:100%; line-height: 2rem;font-size: 1.2rem;
  text-align: center;
}
/*.col .tag.active{
    color:white;
    background: #B91C36;
}*/
</style>
