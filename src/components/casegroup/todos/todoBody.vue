<template>
  <div class="body-wrap">
    <div  class="list-wrap new-list" v-show="tabState==0">
      <swipeout>
        <swipeout-item  :threshold="0.5" :sensitivity="15" v-for="item in todoList"
          v-bind:key="item.eventID">
          <div slot="right-menu">
            <swipeout-button type="primary"  @click.native="completeHandle(item.eventID)" >完成</swipeout-button>
            <swipeout-button type="warn" @click.native="deleteHandle(item.eventID)">删除</swipeout-button>
          </div>
          <div slot="content" class="list-content" >
            <a @click="selContOpen(item.eventID)"> {{item.title}} </a> <span>{{item.eventTime}}</span>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
    <div class="list-wrap complete-list" v-show="tabState==1" >
      <swipeout>
        <swipeout-item  :threshold="0.5" :sensitivity="15" v-for="item in completeList"
          v-bind:key="item.eventID">
          <div slot="right-menu">
            <swipeout-button type="primary"  @click.native="todoHandle(item.eventID)" >撤回</swipeout-button>
            <swipeout-button type="warn" @click.native="deleteHandle(item.eventID)">删除</swipeout-button>
          </div>
          <div slot="content" class="list-content" >
             <a @click="selContOpen(item.eventID)"> {{item.title}} </a> <span>{{item.eventTime}}</span>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
    <div class="list-wrap cancel-list" v-show="tabState==2">
      <swipeout>
        <swipeout-item  :threshold="0.5" :sensitivity="15" v-for="item in deleteList"
          v-bind:key="item.eventID">
          <div slot="right-menu">
            <swipeout-button type="primary"  @click.native="todoHandle(item.eventID)" >重建</swipeout-button>
          </div>
          <div slot="content" class="list-content" >
             <a @click="selContOpen(item.eventID)"> {{item.title}} </a> <span>{{item.eventTime}}</span>
          </div>
        </swipeout-item>
      </swipeout>
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
    },
    completeList:{
      type:Array,
      default:[]
    },
    deleteList:{
      type:Array,
      default:[]
    }
  },
  components:{
    Swipeout, SwipeoutItem, SwipeoutButton
  },
  methods:{
    completeHandle (id) {
      this.$store.dispatch("todoSetComplete",id);
    },
    deleteHandle (id) {
      this.$store.dispatch("todoSetDelete",id);
    },
    todoHandle (id) {
      this.$store.dispatch("todoSetTodo",id);
    },
    selContOpen(id){
      this.$store.dispatch("todoSelContShowOpen",id);
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
      &>a
        display:inline-block
        padding:0 0.3rem
        color:blue
        text-decoration:underline
        border-bottom:1px solid red
      &>span
        float:right
        padding-left:0.8rem
        font-size: 0.6rem
        color:gray
</style>
