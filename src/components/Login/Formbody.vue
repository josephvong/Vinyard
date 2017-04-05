<template>
  <div class="form-body">
    <div class="text-wrap" v-show="isInfo">
      <div class="input-wrap"><input id="userName" type="text" v-model:value="username" placeholder="请填写名称" /></div>
      <div class="input-wrap"><input id="userCell" type="number" v-model:value="cellphone" placeholder="请填写电话号码"/></div>
      <p>{{cellphone}}</p>
      <p class="require" v-show="!infoValid">请填写正确手机号码</p>
    </div>
    <div class="img-wrap" v-show="!isInfo">
      <div class="file-wrap"><input id="cardFile" type="file" v-on:change="fileChangeHandle()" /></div>
      <div class="show-wrap"><img v-bind:src="imgUrl" v-show="imgUrl!=null"/></div>
      <div class="remove"><a v-on:click="imgClean()">清空图片</a></div>
      <p class="require" v-show="!imgValid">图片格式不正确</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import lrz from "lrz"
export default {
  name: 'Form-body',
  props:{
    eventHub:{
      type:Object,
    }
  },
  data(){
    return {
      isInfo:true, // 是否填信息
      //imgUpload:false, // 是否上传了图片
      imgUrl:null, // 上传图片获得的图片url
      imgValid:true, // 图片有效
      infoValid:true,
      username:null,  // 用户名
      cellphone:null, //手机
      staticData:{
        "authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
        "authmode":"app",
        "user_id": "343535",
      }
    }
  },
  computed:{

  },
  methods:{
    switchBody(flag){
      this.isInfo = flag;
      return this.isInfo
    },
    // 图片上传
    fileChangeHandle(){
      let fileObj = event.target.files[0];
      lrz(fileObj).then((rst)=>{
        let urlBase = rst.base64;
        this.syncSubImg(urlBase).then((res)=>{
            let resData=res.data;
            if(resData.description=="ok"){
              this.imgUrl = resData.url;
              this.imgValid =  true; // 图片有效
              //this.imgUpload = true; // 图片已经上传
            }else{
              this.imgValid=false // 数据获取失败
            }
          })
        }).catch((err)=>{
          this.imgValid=false // 图片格式又无
        })
    },
    // 图片删除
    imgClean(){
      this.imgUrl = null;
      this.imgValid = true;
    },
    // 上传图片调用接口
    syncSubImg(url){
      let data = Object.assign({},this.staticData,{"media":url})
      let submitData = JSON.stringify(data);
      let params = new URLSearchParams();
      params.append('jparams',submitData);
      return axios.post('https://recomm.9kacha.com/toBfindWine/uploadCard.php',
        params
      )
    },
    // 上传数据整理
    dataSubmit(){
      let reg=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i;

      if(this.imgUrl){ // 有图片
        if(this.username && this.cellphone && reg.test(this.cellphone) ){ // 有姓名电话且正确
          let data= Object.assign({},this.staticData,{
            nick_name:this.username,
            phone:this.cellphone,
            card_url: this.imgUrl
          })
          this.axiosHandle(data);

        }else if(!this.username && !this.cellphone){
          let data= Object.assign({},this.staticData,{"card_url":this.imgUrl});
          this.axiosHandle(data);

        }else{
          this.eventHub.$emit("headerClick",true);
          this.infoValid = false;
        }
      }else{
        if(this.username && this.cellphone && reg.test(this.cellphone) ){ // 有姓名电话且正确
          let data= Object.assign({},this.staticData,{
            nick_name:this.username,
            phone:this.cellphone
          })
          this.axiosHandle(data)

        }else{
          this.eventHub.$emit("headerClick",true);
          this.infoValid = false;
        }
      }
    },
    // 提交事件
    axiosHandle(data){
      let submitData = JSON.stringify(data);
      let params = new URLSearchParams();
      params.append('jparams',submitData);
      axios.post('https://recomm.9kacha.com/toBfindWine/submitContact.php',params)
        .then((res)=>{
          let data = res.data;
          if(data.description=="ok"){
            window.localStorage.setItem("userCookie",data.cookie);
            window.location.href="menu.html?country=italy";
          }
        }).catch((err)=>{
            console.log(err);
          })
    }


  },
  components:{

  },
  mounted(){

  }
}
</script>

<style scoped rel="stylesheet/css">
.login .form-body{
  padding:1rem;
  border:1px solid #B91C36;
  border-top:none;
}
.login .form-body .text-wrap{
  width:100%;
  margin-top:1rem;
}
.login .form-body .input-wrap{
  width:90%; height:3.2rem;
  border-radius: 5px;
  margin:0 auto 1rem;
  padding:0 1rem;
  border:1px solid #B91C36;
  background: white;
}
.login .form-body .text-wrap input{
  width:100%; height:3rem;line-height: 3rem;
  font-size: 1.4rem;
}
.login .form-body .require{
  font-size: 1.2rem;
  color:red;
}

.login .form-body .img-wrap{

}
.login .form-body .file-wrap{
  width:5rem; height:5rem;
  margin:0 auto 1rem;
  background:no-repeat;
  background-image:url(./jiben2.png);
  background-size:contain;
}
.login .form-body .file-wrap input{
  display: block;
  width:100%;height: 100%;
  opacity:0;
  background:none;
}
.login .form-body .show-wrap{
  width:100%; height:12rem; overflow:hidden;
  background: no-repeat;
  background-image:url(./img-wrap-bg.png);
  background-size:50px 50px;
  background-position:center center;
}
.login .form-body .show-wrap img{
/*  display: none;*/
  height:100%; width:auto;
  margin:0 auto;
}
.login .form-body .img-wrap .remove{
  /*display: none;*/
  height: 2rem; width:100%; line-height: 2rem;
  text-align: center;
  font-size: 1.2rem;
}
.login .form-body .img-wrap .remove a{ color:#34ADFA;}

</style>