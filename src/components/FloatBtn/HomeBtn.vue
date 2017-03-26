<template>
  <div class="float-btn homebtn">
    <a v-on:click="backHomeHandle()"></a>
  </div>
</template>

<script>

export default {
  name: 'homebtn',
  props:{
    url:{
      type:String
    }
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    backHomeHandle(){
      event.preventDefault();
      if(this.url=="/"){
        window.history.replaceState("","","");
        window.localStorage.removeItem('selectedObj');
        this.$router.push({'path':'/'})
      }else if(this.url=="module/select.html"){
        window.location.href="/module/select.html";
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
.float-btn.homebtn{
  bottom:10rem
}
.float-btn a{
  display: block;
  width:100%; height: 100%;
  background: no-repeat;
  background-size:70%;
  background-position: center center;
}
.float-btn.homebtn a{
  background-image: url('./home.png');
}

</style>