<template>
  <div class="col" v-show="tagShow">
      <div class="tag" v-bind:tId="showName" v-bind:catalogName="catalogName" v-bind:islink="isLink" >{{showName}}</div>
  </div>
</template>

<script>

export default {
  name: 'tag',
  props:{
    showName:{
      type:String,
      default:""
    },
    catalogName:{
      type:String,
      default:""
    },
    isExpress:{
      type:Boolean,
      default:false
    },
    showToggle:{
      type:Boolean,
      default:false
    },
    index:{
      type:Number,
      default:0
    }
  },
  data(){
    return {

    }
  },
  computed:{
    isLink(){  // 是否单选
      if(this.isExpress){ // 可以展开
        return false  // 不为单选
      }else{
        return true   // 否则为单选
      }
    },
    tagShow(){
      if(this.isExpress){
        if(!this.showToggle && this.index>8){
          return false
        }else{
          return true
        }
      }else{
        return true
      }
    }
  },
  methods:{
    // CtagClickHandle(){
    //   let catalogName=event.target.getAttribute('catalogName');
    //   let tId=event.target.getAttribute('tId');

    //   this.$store.dispatch("singleSelectedArr",{catalogName:catalogName,tId:tId});
    //   this.$nextTick(function(){
    //     this.$router.push("/Result");
    //   })
    // }
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
    flex-basis:auto;
    text-align: center;
    padding:0.5rem 0.5rem;
}
.col .tag{
  display: inline-block;
  width:100%;  line-height: 3rem;
  font-size: 1.2rem;
  padding:0.5rem 1.2rem;
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