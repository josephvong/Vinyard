<template>
  <div class="tag-list">
    <h3 class="title">{{tagsData.title}}</h3>
    <div class="tag-wrap">
      <div class="col" v-for="(tag,index) in tagsData.list" v-show="tagShow||index<8">
        <div v-bind:class="[{tag:true},{active:isExpress && tag==selectedId }]" v-bind:tId="tag" v-bind:catalogName="catalogName" v-on:click="TagClickHandle()">{{tag}}</div>
      </div>
    </div>
  <!--   <input v-show="isExpress" type="text" style="border:1px solid red" v-bind:value="selectId" /> -->
    <a v-show="isExpress" v-on:click="ExpressClickHandle()" class="express">{{tagShow?"收起":"更多"}}</a>
  </div>
</template>

<script>
import tagData from "../../assets/tagData"
import $ from "jquery"
export default {
  name: 'taglist',
  props:{
    catalogName:{
      type:String,
      default:""
    },
    isExpress:{  // 是否有展开功能 (true有，false无)
      type:Boolean,
      default:false
    },
    selectedId:{
      type:String,
      default:null
    },
    eventHub:{
      type:Object
    }
  },
  data(){
    return {
      tagsData:tagData[this.catalogName],
      showToggle:false // 默认隐藏
    }
  },
  computed:{
    tagShow(){
      if(this.isExpress){ // 有展开功能
        if(this.showToggle){ //
          return true
        }else{
          return false
        }
      }else{  // 无展开功能
        return true // 全部显示
      }
    }
  },
  components:{
     //Tag
  },
  methods:{
    ExpressClickHandle(){
      this.showToggle=!this.showToggle
      return this.showToggle
    },
    TagClickHandle(){
      let catalogName=event.target.getAttribute('catalogName');
      let tId=event.target.getAttribute('tId');
      if(this.isExpress){
        this.eventHub.$emit("modifySelection",{catalogName:catalogName,tId:tId}) // 在 父节点中设置
      }else{
        let path = this.$route.path
        window.history.pushState({"path":path},"","");  // 设置 浏览器历史
        window.localStorage.setItem('selectedObj',JSON.stringify({catalogName:catalogName,tId:tId})) // 设置 本地存储
        window.location.href="../ResultPage/index.html";
      }
    }

  },
  mounted(){

  }
}
</script>

<style scpoed rel="stylesheet/css">
.tag-list{
  position: relative;
  width:100%;
  border-bottom:1.5rem solid #F3F5F7;/*blue;*/
  margin-bottom: 0.5rem;
}
.tag-list .express{
    position: absolute;
    display: inline-block;
    right:1rem; bottom:-1rem; line-height: 1.5rem;
    font-size: 1.2rem;

}

.tag-list .title{
  height:2rem; line-height: 2rem;
    font-size: 1.4rem;
  padding-left: 0.5rem;
    border-left:3px solid #B91C36;
}

.tag-list .tag-wrap{
  width:100%; max-width:100%;
  padding-left:0.2rem;

  display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;

  box-orient:horizontal;-webkit-box-orient:horizontal; box-lines:multiple;-webkit-box-lines:multiple;

  flex-direction:row; -webkit-flex-direction:row; -moz-flex-direction:row;
  flex-wrap:wrap; -webkit-flex-wrap:wrap; -moz-flex-wrap:wrap;

  justify-content:left; -webkit-justify-content:left;
  box-pack:left;-webkit-box-pack:left;-moz-box-pack:left;
}
.col{
    display: block;
    box-flex:1; -webkit-box-flex:1;
    flex-grow:0;
    flex-shrink:1;
    flex-basis:auto;
    text-align: center;
    padding:0.5rem 0.5rem;
}
.col .tag{
  display: inline-block;
  width:100%;  line-height: 3rem;
  font-size: 1.2rem;
  padding:0.5rem 1.2rem;
  border-radius:6px;
  overflow: hidden;
  color:#545454;
  background: white;
}
.col .tag.active{
    color:white;
    background: #B91C36;
}
.col .tag a{
  display: line-block;
  max-width: 100%;
  overflow-x: hidden;
}
</style>