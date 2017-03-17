<template>
  <div class="type-list">
    <div class="list-wrap">
      <box gap="4rem 1rem">
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/TagPage/district">按产区查找</router-link>
        </div>
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/TagPage/winetype">按酒品类型查找</router-link>
        </div>
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/TagPage/grapetype">按葡萄品种查找</router-link>
        </div>
        <div class="list-btn">
          <router-link style="display:block;width:100%;height:100%" to="/SelectPage">多条件综合查找</router-link>
        </div>
      </box>
    </div>
  </div>
</template>

<script>
import {Box} from 'vux'
export default {
  name: 'type-list',
  data(){
    return {

    }
  },
  computed:{

  },
  components:{
    Box
  },
  mounted(){
    this.$store.dispatch("cleanSelectedArr")// 每次进入 单个选项入口页，清空已选项目
  }
}
</script>

<style scpoed lang="stylus" rel="stylesheet/stylus">
.type-list
  width:100%
  &>.list-wrap
   width:90%;
   margin:2rem auto 0 auto;
   background: white;
   .list-btn
     width:100%;
     height:4rem;
     line-height:4rem;
     font-size:1.6rem
     text-align:center;
     border-radius:99px;
     margin-bottom:3rem;
     border:1px solid red
</style>