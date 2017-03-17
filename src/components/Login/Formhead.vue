<template>
  <div class="form-header clearfix">
    <div class="head-tab active" ctrl="text">填写信息</div>
    <div class="head-tab" ctrl="file">上传名片</div>
  </div>
</template>

<script>
export default {
  name: 'Formhead',
  data(){
    return {

    }
  },
  computed:{

  },
  components:{

  },
  mounted(){

  }
}
</script>

<style scoped rel="stylesheet/css">
.form-header{
  width: 100%;
  height:3rem; line-height: 3rem;

}
.form-header .head-tab{
  float: left;
  position: relative;
  width:50%;
  font-size: 1.4rem;
  text-align: center;
  border-top:1px solid #B91C36;
  background: #B91C36;
  color:white;
}
.form-header .head-tab:nth-of-type(1){border-radius: 5px 0 0 0; border-left:1px solid #B91C36; }
.form-header .head-tab:nth-of-type(2){border-radius:0 5px 0 0;border-right:1px solid #B91C36;}
.form-header .head-tab.active{
  background: white;
  color:black;
}
</style>