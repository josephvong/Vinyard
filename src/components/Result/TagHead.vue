<template>
  <div class="tag-header-wrap">
  <div class="header clearfix">
    <span v-show="selectedObj.district" class="top-tag">{{selectedObj.district}}<strong class="close">x</strong></span>
    <span v-show="selectedObj.winetype" class="top-tag">{{selectedObj.winetype}}<strong class="close">x</strong></span>
    <span v-show="selectedObj.grapetype" class="top-tag">{{selectedObj.grapetype}}<strong class="close">x</strong></span>
  </div>
</div>

</template>

<script>

export default {
  name: 'taghead',
  props:{
    selectedObj:{
      type:Object,
      default:{}
    }
  },
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
.tag-header-wrap{
    position: fixed;
    top:0;left:0;
    width: 100%;
    z-index: 5;
}
.tag-header-wrap .header{
    width: 100%; max-width:640px;
    font-size: 2rem;
    margin: 0 auto;
    color:white;
    padding:0.25rem 0.5rem;
    text-align: center;
    background : white;
}
.tag-header-wrap .header .top-tag{
    display: inline-block; position: relative;
    float:left;
    height:2.2rem; line-height: 2.2rem;
    font-size: 1.2rem;
    text-align: center;
    padding:0 1.5rem;
    margin:0.25rem 0.5rem;
    border-radius:8px;
}
.tag-header-wrap .header .top-tag:nth-of-type(1){background:#289341; color:white; }
.tag-header-wrap .header .top-tag:nth-of-type(2){background:white ;color:#A5A5A5; border:1px solid #A5A5A5;}
.tag-header-wrap .header .top-tag:nth-of-type(2) .close{color:#A5A5A5;}
.tag-header-wrap .header .top-tag:nth-of-type(3){background:#E31C15; color:white;}

.tag-header-wrap .header .top-tag .close{
    position: absolute; display: block;
    right:0.2rem; top:0%; /*margin-top:-0.5rem;*/
    height: 1rem;width:1rem; font-size: 1rem;
    color:white;
}
</style>