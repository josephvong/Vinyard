<template>
  <div v-bind:class="[{col:true}, {addlong:isLong}]">

      <div class="tag" v-on:click="CtagClickHandle()" v-bind:tId="showName" v-bind:catalogName="catalogName" >{{showName}}</div>

  </div>
</template>

<script>

export default {
  name: 'ctag',
  props:{
    showName:{
      type:String,
      default:""
    },
    catalogName:{
      type:String,
      default:""
    }
  },
  data(){
    return {

    }
  },
  computed:{
    isLong(){
      return this.showName.length>5?true:false
    }
  },
  methods:{
    CtagClickHandle(){
      let catalogName=event.target.getAttribute('catalogName');
      let tId=event.target.getAttribute('tId');

      this.$store.dispatch("singleSelectedArr",{catalogName:catalogName,tId:tId});
      this.$nextTick(function(){
        this.$router.push("/Result");
      })
    }
  },
  components:{

  },
  mounted(){

  }
}
</script>

<style scpoed rel="stylesheet/css">
.col{
    display: block;
    box-flex:1; -webkit-box-flex:1;
    flex-grow:0;
    flex-shrink:1;
    flex-basis:33%;
    /*flex-basis:auto;*/
    /*min-width:33%;*/
  text-align: center;
  padding:0.5rem;
}
.addlong{
    flex-basis:50%;
}
.col .tag{
  display: inline-block;
  width:100%;  line-height: 3rem;
  font-size: 1.2rem;
  padding:0.5rem ;
  border-radius:6px;
  overflow: hidden;
  color:#545454;
  background: white;
}
.col .tag.active{
    color:white;
    background: #B91C36;
}
.col .tag a{
  display: line-block;
  max-width: 100%;
  overflow-x: hidden;
}

</style>