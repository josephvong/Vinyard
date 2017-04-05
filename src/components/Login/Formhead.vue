<template>
  <div class="form-header clearfix">
    <div v-bind:class="{'head-tab':true,'active':isInfo}" ctrl="text" v-on:click="headerClick(true)">填写信息</div>
    <div v-bind:class="{'head-tab':true,'active':!isInfo}" ctrl="file" v-on:click="headerClick(false)">上传名片</div>
  </div>
</template>

<script>
export default {
  name: 'Formhead',
  props:{
    eventHub:{
      type:Object,
    }
  },
  data(){
    return {
      isInfo:true,
    }
  },
  computed:{

  },
  methods:{
    headerClick(flag){
      this.isInfo = flag;
      this.eventHub.$emit("switchBody",this.isInfo)
      return this.isInfo
    }
  },
  components:{

  },
  mounted(){

  }
}
</script>

<style scoped rel="stylesheet/css">
.login .form-header{
  width: 100%;
  height:3rem; line-height: 3rem;

}
.login .form-header .head-tab{
  float: left;
  position: relative;
  width:50%;
  font-size: 1.4rem;
  text-align: center;
  border-top:1px solid #B91C36;
  background: #B91C36;
  color:white;
}
.login .form-header .head-tab:nth-of-type(1){border-radius: 5px 0 0 0; border-left:1px solid #B91C36; }
.login .form-header .head-tab:nth-of-type(2){border-radius:0 5px 0 0;border-right:1px solid #B91C36;}
.login .form-header .head-tab.active{
  background: white;
  color:black;
}
</style>