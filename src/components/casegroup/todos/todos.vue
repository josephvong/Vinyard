<template>
  <div class="todos">
    <!-- <h1 class="todo-title">This Is A Todo List</h1> -->
    <div class="todo-input">
      <group>
        <x-input title="事件名称" placeholder="填写事件名" ></x-input>
        <x-textarea :max="30" placeholder="请填写详细信息"></x-textarea>
      </group>
    </div>
    <div>
      <tab>
        <tab-item selected>新事件</tab-item>
        <tab-item>重要事</tab-item>
        <tab-item>已完成</tab-item>
      </tab>
      <div style="height:200px;border-bottom:1px solid red">
      <swiper>
        <swiper-item >
          <div style="height:200px;background:blue">aaa</div>
        </swiper-item>
        <swiper-item >
          BBB
        </swiper-item>
        <swiper-item >
          CCC
        </swiper-item>
      </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Group,CellBox,Cell,XInput,XTextarea ,Tab ,TabItem,Swiper,SwiperItem} from 'vux'
export default {
  name: 'caseGroup',
  data () {
    return {

    }
  },
  components:{
    Group,CellBox,Cell,XInput,XTextarea,Tab ,TabItem,Swiper,SwiperItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
.todo-title
  width:100%
  height:1rem
  text-align:center
</style>
