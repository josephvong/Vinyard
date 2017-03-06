<template>
  <div class="body-wrap">
    <div  class="list-wrap new-list"  v-bind:style="{zIndex:tabState==0?3:1}">
      <Scroller lock-x  height="100%" ref="scrl0">
        <div class="scroll-wrap"  >
          <swipeout>
            <swipeout-item  :threshold="0.5" :sensitivity="15">
              <div slot="right-menu">
                <swipeout-button @click.native="" type="primary"> good</swipeout-button>
                <swipeout-button @click.native="" type="warn"> Right </swipeout-button>
              </div>
              <div slot="content" class="" style="height:2rem;line-height:2rem">
              AAAAAA
              </div>
            </swipeout-item>
            <swipeout-item  :threshold="0.5" :sensitivity="15">
              <div slot="right-menu">
                <swipeout-button @click.native="" type="primary"> good</swipeout-button>
                <swipeout-button @click.native="" type="warn"> Right </swipeout-button>
              </div>
              <div slot="content" class="" style="height:2rem;line-height:2rem">
              BBBBBB
              </div>
            </swipeout-item>
            <swipeout-item  :threshold="0.5" :sensitivity="15">
              <div slot="right-menu">
                <swipeout-button @click.native="" type="primary"> good</swipeout-button>
                <swipeout-button @click.native="" type="warn"> Right </swipeout-button>
              </div>
              <div slot="content" class="" style="height:2rem;line-height:2rem">
              CCCCCC
              </div>
            </swipeout-item>
          </swipeout>
        </div>
      </Scroller>
    </div>
    <div class="list-wrap complete-list" v-bind:style="{zIndex:tabState==1?3:1}" >
      <Scroller lock-x  height="100%" ref="scrl1">
        <div class="scroll-wrap" >
           <p v-for="i in 10">{{i}}</p>
        </div>
      </Scroller>
    </div>
    <div class="list-wrap cancel-list" v-bind:style="{zIndex:tabState==2?3:1}" >
      <Scroller lock-x  height="100%" ref="scrl2">
        <div class="scroll-wrap" >
           <p v-for="i in 30">{{i}}</p>
        </div>
      </Scroller>
    </div>
  </div>
</template>

<script>
import { Scroller ,Group, CellBox,Flexbox,FlexboxItem , Swipeout, SwipeoutItem, SwipeoutButton  } from 'vux'
export default {
  name: 'todoBody',
  props:{
    tabState:{
      type:Number,
      default:0
    }
  },
  components:{
    Scroller
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
  components:{
    Scroller ,Group, CellBox,Flexbox,FlexboxItem ,Swipeout, SwipeoutItem, SwipeoutButton
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
.body-wrap
  width:100%
  height:100%
  position relative
  .list-wrap
    position absolute
    width:100%
    height:100%
    background:white
    .scroll-wrap
      padding-bottom:3rem
</style>
