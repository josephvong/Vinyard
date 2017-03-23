<template>
  <div class="float-btn cambtn">
    <a v-on:click="goCamaraLink()"></a>
  </div>
</template>

<script>

export default {
  name: 'homebtn',
  props:{
    inPageType:{
      type:String,
      default:null
    },
    eventHub:{
      type:Object,
      default:null
    }
  },
  data(){
    return {
      url:"http://h5.9kacha.com/Kacha/index?sid=e3bbbe4c-0864-11e7-bcb8-525400540d5c"
    }
  },
  computed:{

  },
  methods:{
    goCamaraLink(){
      event.preventDefault();
      let path = this.$route.path;

      if(this.inPageType=="selectPage"){
        this.eventHub.$emit("goCamaraPage",this.url);
      }else if(this.inPageType=="resultPage"){
         console.log("resultPage")
      }else if(this.inPageType=="tagPage"){
        window.history.pushState({"path":path},"","");
        window.location.href=this.url
      }else{
        window.history.pushState({"path":path},"","");
        window.location.href=this.url
      }

    }
  },
  components:{

  },
  mounted(){

  }
}
</script>

<style scpoed rel="stylesheet/css">
.float-btn{
  position: fixed;
  width:4rem; height:4rem; right:2rem;
  border-radius:50%;
  background: rgba(0,0,0,0.3)
}
.float-btn.cambtn{
   bottom:16rem
}
.float-btn a{
  display: block;
  width:100%; height: 100%;
  background: no-repeat;
  background-size:70%;
  background-position: center center;
}
.float-btn.cambtn a{
  background-image: url('./camara.png')
}


</style>