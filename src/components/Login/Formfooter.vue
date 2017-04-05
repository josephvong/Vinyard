<template>
<div class="form-footer">
  <div class="form-desc">
    请填写名称和电话号码，或选择上传名片进行登录
  </div>
 <div class="form-submit" v-on:click="submitClick()"> 提交 </div>
</div>
</template>

<script>
export default {
  name: 'Formfooter',
  props:{
    eventHub:{
      type:Object,
    }
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    submitClick(){
      this.eventHub.$emit("dataSubmit")
    }
  },
  components:{

  },
  mounted(){

  }
}
</script>

<style scoped rel="stylesheet/css">
.login .form-footer{
  width:100%;
  padding: 0.5rem 1rem;
  border-radius:0 0 5px 5px;
  border-left:1px solid #B91C36;
  border-right:1px solid #B91C36;
  border-bottom:1px solid #B91C36;
}
.login .form-footer .form-desc{
  line-height: 2rem;
  font-size: 1.2rem;
  border-bottom:1px solid #B91C36;
  padding-bottom:0.5rem;
  margin-bottom:0.8rem;
}
.login .form-footer .form-submit{
  display:block;
  width:50%; height:100%; line-height: 3rem;
  text-align: center;
  margin:0.5rem auto;
  font-size: 1.4rem;
  color:white;
  border-radius: 5px;
  background: #B91C36;
}
.login .form-footer .form-submit.disable{
  background: gray;
}


</style>