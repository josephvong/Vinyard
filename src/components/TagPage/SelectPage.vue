<template>
  <div class="select-page">
    <Selection catalogName="district"  ></Selection>
    <Selection catalogName="winetype"  ></Selection>
    <Selection catalogName="grapetype"  ></Selection>
    <div class="footer-wrap" style="display:block;">
      <div class="footer clearfix">
          <router-link class="btn" to="/Result">提交</router-link>
          <a class="btn" v-on:click="ResetClickHandle()">重置</a>
      </div>
    </div>
  </div>
</template>

<script>
import Selection from '../Catalog/Selection.vue'
export default {
  name: 'selectpage',
  data(){
    return {

    }
  },
  computed:{


  },
  methods:{
    ResetClickHandle(){
      this.$store.dispatch("cleanSelectedArr");
    }
  },
  components:{
    Selection
  },
  mounted(){
    this.$store.dispatch("cleanResultListArr"); // 清空结果数组
   // console.log(this.district)
  }
}
</script>

<style scpoed rel="stylesheet/css">
.select-page{
  width:100%;
  max-width:100%;
  padding:1rem;
}
.footer-wrap{
  position: fixed;
  bottom:0;left:0;
  width: 100%;
  height:4rem;

}
.footer-wrap .footer{
  position: relative;
  width: 100%; max-width:640px;
  height:4rem;
  margin: 0 auto;
  background: white;

}
.footer-wrap .footer:after{
  content: "";
  position:absolute;
  width:100%; height: 1px;
  top:-1px; left:0;
  transform:scaleY(0.5);
  -webkit-transform:scaleY(0.5);
  background: #E0E0E0;
}
.footer-wrap .footer .btn{
  position: relative;
  display: inline-block;
  float: left;
  width:50%; height:4rem; line-height: 4rem;
  text-align:center;

}
.footer-wrap .footer .btn:nth-of-type(2):after{
  content: "";
  position: absolute;
  left: 0; top:0;
  height: 100%; width: 1px;
  transform:scaleX(0.5);
  -webkit-transform:scaleX(0.5);
  background: #E0E0E0;
}

</style>