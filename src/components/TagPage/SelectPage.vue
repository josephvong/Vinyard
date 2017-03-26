<template>
  <div class="select-page">
    <Banner></Banner>
    <Taglist catalogName="district" :isExpress="true" ref="districtTag"
             v-bind:eventHub = "eventHub" v-bind:selectedObj = "selectedObj"
    ></Taglist>
    <Taglist catalogName="wine_type" :isExpress="true" ref="wineTag"
            v-bind:eventHub = "eventHub"  v-bind:selectedObj = "selectedObj"
    ></Taglist>
    <Taglist catalogName="grape" :isExpress="true" ref="grapeTag"
             v-bind:eventHub = "eventHub"  v-bind:selectedObj = "selectedObj"
    ></Taglist>

    <HomeBtn url="/" ></HomeBtn>
    <CamaraBtn inPageType="selectPage" v-bind:eventHub = "eventHub" ></CamaraBtn>
    <div class="footer-wrap" style="display:block;">
      <div class="footer clearfix">
          <a class="btn" v-on:click="submitClickHandle('../ResultPage/index.html')">提交</a>
          <a class="btn" v-on:click="resetClickHandle()">重置</a>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "components/Banner/Banner.vue"
import Taglist from 'components/Taglist/Taglist.vue'
import HomeBtn from 'components/FloatBtn/HomeBtn.vue'
import CamaraBtn from 'components/FloatBtn/CamaraBtn.vue'
import Vue from "vue"
export default {
  name: 'selectpage',
  data(){
    return {
      selectedObj:{},
      eventHub:new Vue() // 父子节点之间的事件集合器
    }
  },
  computed:{

  },
  methods:{
    // 编辑选中的数据对象
    modifySelection(catalogName,tId){
      if(this.selectedObj[catalogName]){
        if(this.selectedObj[catalogName]!=tId){
          this.selectedObj[catalogName] = tId
        }else{
          this.selectedObj[catalogName] = null
        }
      }else{
        Object.assign(this.selectedObj,JSON.parse('{"'+catalogName+'":"'+tId+'"}'))
      }
      this.$nextTick(()=>{
        this.initTagList()
      })
    },
    
    // 初始化 子组件 的选择属性
    initTagList(){  
     this.$refs.districtTag.setSelected(this.selectedObj) 
     this.$refs.wineTag.setSelected(this.selectedObj)
     this.$refs.grapeTag.setSelected(this.selectedObj)
    },

    // 重置选项
    resetClickHandle(){  
      this.selectedObj={};
      this.$nextTick(()=>{
        this.initTagList()
      })
    },

    // 提交选项
    submitClickHandle(url){    
      let path = this.$route.path
      window.history.pushState({"path":path},"","");  // 设置浏览器历史
      window.localStorage.setItem('selectedObj',JSON.stringify(this.selectedObj) ) // 设置本地缓存
      window.location.href="/module/result.html";
    },

    // 保存当前页面状态转跳页面
    storeStatusJump(url){
      event.preventDefault();
      let path = this.$route.path
      window.history.pushState({"path":path},"","");  // 设置浏览器历史
      window.localStorage.setItem('selectedObj',JSON.stringify(this.selectedObj) ) // 设置本地缓存
      window.location.href=url;
    }
  },
  components:{
    Banner,Taglist,HomeBtn,CamaraBtn
  },
  mounted(){
    // 清除 Result.html 页面中的 缓存记录
    window.localStorage.removeItem('resultList');
    window.localStorage.removeItem('pageIndex');
    window.localStorage.removeItem('scrollTop');

    // 加载页面组件时：
    window.history.replaceState("","",""); // 清空历史记录
    if(window.localStorage.getItem('selectedObj')){  // 如果有本地缓存
      let newObj=null;
      newObj=Object.assign({},JSON.parse(window.localStorage.getItem('selectedObj'))); // 根据本地缓存还原选项
      this.selectedObj = newObj; 
      window.localStorage.removeItem('selectedObj')  // 删除本地缓存
    }

    // 初始化标签列表
    this.initTagList();

    // 监听 标签列表 子节点 的点击事件触发
    this.eventHub.$on("modifySelection",(catalogName,tId)=>{
      this.modifySelection(catalogName,tId)
    })

    // 监听 浮动按钮（拍照搜酒） 的点击事件触发
    this.eventHub.$on("goCamaraPage",(url)=>{
      this.storeStatusJump(url)
    })
  }
}
</script>

<style scpoed rel="stylesheet/css">
.select-page{
  width:100%;
  padding:8rem 0;
}

.footer-wrap{
  position: fixed;
  bottom:0;left:0;
  width: 100%;
  height:4rem;

}
.footer-wrap .footer{
  position: relative;
  width: 100%; max-width:640px;
  height:4rem;
  margin: 0 auto;
  background: white;

}
.footer-wrap .footer:after{
  content: "";
  position:absolute;
  width:100%; height: 1px;
  top:-1px; left:0;
  transform:scaleY(0.5);
  -webkit-transform:scaleY(0.5);
  background: #E0E0E0;
}
.footer-wrap .footer .btn{
  position: relative;
  display: inline-block;
  float: left;
  width:50%; height:4rem; line-height: 4rem;
  text-align:center;

}
.footer-wrap .footer .btn:nth-of-type(2):after{
  content: "";
  position: absolute;
  left: 0; top:0;
  height: 100%; width: 1px;
  transform:scaleX(0.5);
  -webkit-transform:scaleX(0.5);
  background: #E0E0E0;
}

</style>