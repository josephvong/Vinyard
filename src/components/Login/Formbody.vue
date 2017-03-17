<template>
  <div class="form-body">
    <div class="text-wrap" style="display:block">
      <div class="input-wrap"><input id="userName" type="text" placeholder="请填写名称" /></div>
      <div class="input-wrap"><input id="userCell" type="number" placeholder="请填写电话号码"/></div>
      <p class="require">请填写正确手机号码</p>
    </div>
    <div class="img-wrap" style="display:none">
      <div class="file-wrap"><input id="cardFile" type="file" /></div>
      <div class="show-wrap"><img src="" /></div>
      <div class="remove"><a>清空图片</a></div>
      <p class="require">图片格式不正确</p>
      <input id="urlAPI" type="text" style="border:1px solid red"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form-body',
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

.form-body{
  padding:1rem;
  border:1px solid #B91C36;
  border-top:none;
}
.form-body .text-wrap{
  width:100%;
  margin-top:1rem;
}
.form-body .input-wrap{
    width:100%; height:3.2rem;
    border-radius: 5px;
    margin-bottom:1rem;
    padding:0 1rem;
    border:1px solid #B91C36;
    background: white;
}
.form-body .text-wrap input{
  width:100%; height:3rem;line-height: 3rem;
  font-size: 1.4rem;
}
.form-body .require{
  display: none;
  font-size: 1.2rem;
  color:red;
}

.form-body .img-wrap{

}
.form-body .file-wrap{
  width:5rem; height:5rem;
  margin:0 auto 1rem;
  background:gray;
}
.login .form-body .file-wrap input{
  display: block;
  width:100%;height: 100%;
  opacity:0;
  background:none;
}
.form-body .show-wrap{
  width:100%; height:12rem; overflow:hidden;
}
.form-body .show-wrap img{
  display: none;
  height:100%; width:auto;
  margin:0 auto;
}
.form-body .img-wrap .remove{
  /*display: none;*/
  height: 2rem; width:100%; line-height: 2rem;
  text-align: center;
  font-size: 1.2rem;
}
.form-body .img-wrap .remove a{ color:#34ADFA;}

</style>