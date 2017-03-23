<template>
  <div class="banner">
    <div class="banner-wrap"></div>
  </div>
</template>

<script>

export default {
  name: 'banner',
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

<style scpoed rel="stylesheet/css">
.banner{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:8rem;
  z-index: 5;
}

.banner-wrap{
    width: 100%;
    max-width:640px;
    height:8rem;
    line-height: 8rem;
    margin: 0 auto;
    background:no-repeat;
    background-position:center center;
    background-size:contain;
    background-image:url('./header-banner.png');
}
</style>