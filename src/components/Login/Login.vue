<template>
  <div class="login main">
    <Banner v-show="true"></Banner>
    <div class="login-form">
      <Formhead v-bind:eventHub="eventHub" ref="formhead"></Formhead>
      <Formbody  v-bind:eventHub="eventHub" ref="formbody"></Formbody>
      <Formfooter v-bind:eventHub="eventHub"></Formfooter>
    </div>
  </div>
</template>

<script>
import Vue from "Vue"
import Banner from "../Banner/Banner.vue"
import Formhead from "./Formhead.vue"
import Formbody from "./Formbody.vue"
import Formfooter from "./Formfooter.vue"
export default {
  name: 'banner',
  data(){
    return {
      eventHub:new Vue()
    }
  },
  computed:{

  },
  components:{
    Banner,
    Formhead,
    Formbody,
    Formfooter
  },
  methods:{

  },
  mounted(){
    this.eventHub.$on("switchBody",(flag)=>{
      this.$refs.formbody.switchBody(flag);
    })

    this.eventHub.$on("dataSubmit",()=>{
      this.$refs.formbody.dataSubmit();
    })

    this.eventHub.$on("headerClick",(flag)=>{
      this.$refs.formhead.headerClick(flag)
    })
  }
}
</script>

<style scoped rel="stylesheet/css">
.main{padding:8rem 0;}
.login .login-form{width:90%; margin:4rem auto 0 auto;  background: white; }
</style>