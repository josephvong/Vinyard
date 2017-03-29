<template>
  <div class="filter-list">
    <h3 class="title">{{tagsData.title}}</h3>
    <div class="tag-wrap">
      <div class="col" v-for="(tag,index) in tagsData.list" v-show="showToggle||index<8" >
        <div class="tag" v-bind:class="[{tag:true},{active:tag.name_ch==selectedId}]" ref="tag"
              v-bind:tId="tag.name_ch"  v-bind:catalogName="catalogName"  v-on:click="TagClickHandle($event)"
        >
          <span v-bind:tId="tag.name_ch"  v-bind:catalogName="catalogName">{{tag.name_ch}}</span>
          <span v-bind:tId="tag.name_ch"  v-bind:catalogName="catalogName" v-show="tag.name_en!=''">
            {{tag.name_en}}
          </span>
        </div>
      </div>
    </div>
    <!--<input type="text" value="" /> -->
    <a v-on:click="ExpressClickHandle()" class="express">{{showToggle?"收起":"更多"}}</a>
  </div>
</template>

<script>
import tagData from "common/tagData"
import $ from "jquery"
export default {
  name: 'filterlist',
  props:{
    catalogName:{
      type:String,
      default:""
    },
    eventHub:{
      type:Object
    }
  },
  data(){
    return {
      tagsData:tagData[this.catalogName],  // 列表数据
      showToggle:false, // 默认隐藏
      selectedId:null,  // 选中的ID
    }
  },
  computed:{
    selectedId(){
      return this.selectedObj[this.catalogName]
    }
  },
  components:{

  },
  methods:{
    ExpressClickHandle(){
      this.showToggle=!this.showToggle
      this.$nextTick(()=>{
        this.eventHub.$emit("scrollerRefresh");
      })
      return this.showToggle
    },

    TagClickHandle(event){
      // 获取点击对象的数据
      let catalogName=event.target.getAttribute('catalogName');
      let tId=event.target.getAttribute('tId');
      this.eventHub.$emit("modifySelection",catalogName,tId); // 将点击的标签数据提交给父级组件
    },
    setSelected(obj){
      this.selectedId = obj[this.catalogName]
    },
  },
  watch:{

  },
  mounted(){
    //console.log(this.selectedObj)
  }
}
</script>

<style scpoed rel="stylesheet/css">
.filter-list{
  position: relative;
  width:100%;
  border-bottom:1.5rem solid rgba(0,0,0,0);/*blue;*/
  margin-bottom: 0.5rem;
}
.filter-list .express{
    position: absolute;
    display: inline-block;
    padding: 0.5rem 1rem;
    right:2rem; bottom:-3rem; line-height: 2rem;
    font-size: 1.4rem;

}

.filter-list .title{
  height:2rem; line-height: 2rem;
  font-size: 1.4rem;
  padding-left: 0.5rem;
  border-left:3px solid #B91C36;
}

.filter-list .tag-wrap{
  width:100%; max-width:100%;
  padding-left:0.2rem;

  display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex;
  display: flex;

  box-orient:horizontal;-webkit-box-orient:horizontal; box-lines:multiple;-webkit-box-lines:multiple;

  flex-direction:row; -webkit-flex-direction:row; -moz-flex-direction:row;
  flex-wrap:wrap; -webkit-flex-wrap:wrap; -moz-flex-wrap:wrap;

  justify-content:left; -webkit-justify-content:left;
  box-pack:left;-webkit-box-pack:left;-moz-box-pack:left;
}
.filter-list .tag-wrap .col{
    display: block;

    flex-grow:0;
    flex-shrink:1;
    flex-basis:auto;
    text-align: center;
    padding:0.5rem 0.5rem;
}
.filter-list .tag-wrap .col .tag{
  display: inline-block;
  box-sizing: border-box;
  width:100%;

  padding:0.5rem 1.2rem;
  border-radius:6px;
  overflow: hidden;
  color:#545454;
  background: white;
}
.filter-list .tag-wrap .col .tag span{
  display: block;
  width:100%; line-height: 2rem;font-size:1.2rem;
}
.filter-list .tag-wrap .col .tag.active{
    color:white;
    background: #B91C36;
}
</style>

