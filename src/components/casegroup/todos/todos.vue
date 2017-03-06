<template>
  <div class="todos">
    <div class="todo-input">
      <group>
        <flexbox>
            <flexbox-item :span="9">
                <x-input title="事件名称" placeholder="填写事件名" ref="titleInp" v-model="eventTitle"></x-input>
            </flexbox-item>
            <flexbox-item :span="2">
                 <x-button mini type="primary" v-on:click.native="eventSave">提交</x-button>
            </flexbox-item>
        </flexbox>
        <x-textarea :max="30" placeholder="请填写详细信息" ref="contentInp" v-model="eventContent"></x-textarea>
      </group>
    </div>
    <div class="todo-tab">
      <tab>
        <tab-item :selected="tabState==0" v-on:click.native="tabChange(0)">新事件</tab-item>
        <tab-item :selected="tabState==1" v-on:click.native="tabChange(1)">已完成</tab-item>
        <tab-item :selected="tabState==2" v-on:click.native="tabChange(2)">已取消</tab-item>
      </tab>
    </div>
    <!-- <span>{{todoList.length}}</span> -->
    <div class="todo-body">
      <todo-body :tabState="tabState" :todoList="todoList" ></todo-body>
    </div>

  </div>
</template>

<script>
import {mapState , mapMutations } from 'vuex'
import todoBody from "./todoBody"
import {  Group, XInput,XTextarea ,Flexbox,FlexboxItem,XButton,Tab,TabItem ,dateFormat  } from 'vux'
export default {
  name: 'todos',
  data () {
    return {
      eventTitle:'',
      eventContent:''
    }
  },
  computed: {
    tabState(){
      return this.$store.state.todoM.tabState
    },
    todoList(){
      return this.$store.getters.todoList
    }
  },
  components:{
  todoBody,
    Group, XInput,XTextarea,Flexbox,FlexboxItem,XButton,Tab,TabItem
  },
  methods:{
   tabChange(N){  // tab 切换事件函数
    this.$store.dispatch("todoTabChange",N)
   },
   eventSave(){  // 点击提交 按钮保存记录 函数
    if(this.eventTitle==""){ return }
    let nowDate=new Date();
    let newObj={
      "title":this.eventTitle,
      "content":this.eventContent,
      eventID:nowDate.getTime(),
      eventTime:dateFormat(new Date(), 'YYYY-MM-DD HH:mm'),
      status:0
    }
    this.$store.dispatch("todoSaveEvent",newObj);
    this.eventTitle="";
    this.eventContent="";
    console.log(this.$store.getters)
   }


  },
  mounted(){
    //console.log(this.$store.getters);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
.todo-body
  width:100%;
</style>
