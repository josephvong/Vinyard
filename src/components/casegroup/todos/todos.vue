<template>
  <div class="todos"> 
    <div class="todo-input">
      <group>
        <flexbox>
            <flexbox-item :span="9">
                <x-input title="事件名称" placeholder="填写事件名" ></x-input>
            </flexbox-item>
            <flexbox-item :span="2">
                 <x-button mini type="primary" v-on:click.native="">提交</x-button>
            </flexbox-item>
        </flexbox>
        <x-textarea :max="30" placeholder="请填写详细信息"  ></x-textarea>
      </group>
    </div>
    <!-- <todo-tab></todo-tab>  -->
    <div class="todo-tab">
      <tab>
        <tab-item :selected="tabState==0" v-on:click.native="tabChange(0)">新事件</tab-item>
        <tab-item :selected="tabState==1" v-on:click.native="tabChange(1)">已完成</tab-item>
        <tab-item :selected="tabState==2" v-on:click.native="tabChange(2)">已取消</tab-item>
      </tab>
    </div> 
    <div class="todo-body">
      <todo-body :tabState="tabState"></todo-body> 
       
    </div> 
    
  </div>
</template>

<script>
import {mapState , mapMutations } from 'vuex'
import todoBody from "./todoBody"
import {  Group, XInput,XTextarea ,Flexbox,FlexboxItem,XButton,Tab,TabItem } from 'vux'
export default {
  name: 'todos',
  data () {
    return {
       
    }
  },
  computed: mapState({
    tabState: state=>state.todoM.tabState
    
  }),
  components:{
  todoBody, 
    Group, XInput,XTextarea,Flexbox,FlexboxItem,XButton,Tab,TabItem
  },
  methods:{
   // ...mapActions({tabChange:"todoTabChange",N})
   tabChange(N){
    //alert(N)
    this.$store.dispatch("todoTabChange",N) 
   }


  },
  mounted(){ 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
.todo-body
  position:absolute
  left:0
  right:0
  bottom:0
  top:14rem 
</style>
