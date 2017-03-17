<template>
  <div class="banner">
    <div class="banner-wrap">B2B找酒平台</div>
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

<style lang="stylus" rel="stylesheet/stylus">
.banner
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:4rem;
  z-index: 5;
  .banner-wrap
    width: 100%;
    max-width:640px;
    height:4rem;
    line-height: 4rem;
    font-size: 2rem;
    margin: 0 auto;
    color:white;
    text-align: center;
    background:#B91C36;
</style>