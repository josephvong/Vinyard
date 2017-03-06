<template>
  <div class="body-wrap">
    <div  class="list-wrap new-list" v-show="tabState==0">
      <swipeout>
        <swipeout-item  :threshold="0.5" :sensitivity="15" v-for="item in todoList"
          v-bind:key="item.eventID">
          <div slot="right-menu">
            <swipeout-button @click.native="" type="primary">完成</swipeout-button>
            <swipeout-button @click.native="" type="warn">删除</swipeout-button>
          </div>
          <div slot="content" class="list-content" >
             {{item.title}} <span>{{item.eventTime}}</span>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
    <div class="list-wrap complete-list" v-show="tabState==1" >

      <p v-for="i in 10">{{i}}</p>

    </div>
    <div class="list-wrap cancel-list" v-show="tabState==2">
      <p v-for="i in 30">{{i}}</p>
    </div>
  </div>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton  } from 'vux'
export default {
  name: 'todoBody',
  props:{
    tabState:{
      type:Number,
      default:0
    },
    todoList:{
      type:Array,
      default:[]
    }
  },
  methods:{

  },
  components:{
    Swipeout, SwipeoutItem, SwipeoutButton
  },
  watch:{
    tabState(New,Old){
      //console.log(New);
      /*if(New==0){
        this.$nextTick(() => { this.$refs.scrol0.reset() })
      }else if(New==1){
        this.$nextTick(() => { this.$refs.scrol1.reset() })
      }else if(New==2){
        this.$nextTick(() => { this.$refs.scrol2.reset() })
      }*/
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
.body-wrap
  width:100%
  .list-wrap
    width:100%
    background:white
    .list-content
      height:2rem
      line-height:2rem
      padding: 0 0.8rem
      span
        float:right
        padding-left:0.8rem
        font-size: 0.6rem
        color:gray
</style>
