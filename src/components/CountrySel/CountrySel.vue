<template>
  <div class="country-sel">
    <div class="main-wrap">
        <div class="header">
          <span v-for="obj in headArr">obj.tId<em>x</em></span>
          <!-- <span>意大利<em>x</em></span> -->
        </div> 
        <ul class="select-list">
          <li v-for="(value,key) in defaultData" v-on:click="selItemClick()" >
            <span v-bind:tId="value" v-bind:eId="key">{{value}}</span>
            <span v-bind:tId="value" v-bind:eId="key">{{key}}</span>
          </li> 
        </ul>
    </div> 
    <div class="sel-bottom">AAAA</div> 
  </div>
</template>

<script>
import {countryName} from "countryData" 
import {countryData} from "countryData"
import $ from "jquery"
export default {
  name: 'countrysel',
  props:{
    /*catalogName:{
      type:String,
      default:""
    },*/ 
  },
  data(){
    return {
      headArr:[],
      defaultData:null
    }
  },
  computed:{
    
  },
  components:{

  },
  methods:{
    selItemClick(){
      let tId = event.target.getAttribute("tId");
      let eId = event.target.getAttribute("eId");
      let obj = {tId:tId,eId:eId};
      //console.log(obj);
      
    } 
  },
  watch:{

  },
  mounted(){
    this.defaultData=countryName 
  }
}
</script>

<style scpoed rel="stylesheet/css">
.country-sel{
  position: absolute;
  left:0;top:0;
  width:100%; height:100%;
  overflow:hidden;  
}
.country-sel .main-wrap{
  width:100%;height:100%;
  padding:1rem 1rem 5rem;
  overflow-y: scroll;
}
.country-sel .sel-bottom{
  position: absolute;
  width:100%;height:4rem;
  left:0;bottom:0;
  background: red;
}

.country-sel .main-wrap .header{
}
.country-sel .main-wrap .header span{
  position: relative;
  display: inline-block; 
  height:2rem; line-height: 2rem;
  padding:0 1.2rem 0 1rem;
  font-size: 1.2rem;
  border-radius:5px;
  margin-right:0.5rem;margin-bottom:0.5rem;
  color:white;
  background: red;
}
.country-sel .main-wrap .header span em{
  position: absolute;
  display: inline-block;
  right:0.5rem; top:0.4rem;
  font-style: normal;
  font-size: 1rem;line-height:1rem;
}
.country-sel .main-wrap .select-list{
  width:100%;
  padding:0.5rem;
}
.country-sel .main-wrap .select-list li{ 
  display: inline-block;
  float:left;
  margin:0.5rem;
  padding:0.5rem 0.5rem;
  border-radius:6px;
  overflow: hidden;
  color:#545454;
  background: #F3F5F7;
}
.country-sel .main-wrap .select-list li span{
  display: block;
  width:100%; line-height: 2rem;font-size: 1.2rem;
  text-align: center;
}
</style>

