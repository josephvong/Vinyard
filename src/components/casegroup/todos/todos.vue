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
      <todo-body :tabState="tabState" :todoList="todoList" :completeList="completeList" :deleteList="deleteList"></todo-body>
    </div>
    <popup v-model="selContShow" height="100%">
      <div class="popup-content">
        <a class="close-btn" @click="selContClose" >X</a>
        <div class="sel-content">
          <Flexbox>
            <FlexboxItem>
              标题：{{selItem.title}}
            </FlexboxItem>
          </Flexbox>
          <Flexbox>
            <FlexboxItem>
              时间：{{selItem.eventTime}}
            </FlexboxItem>
          </Flexbox>
          <Flexbox>
            <FlexboxItem>
              内容：
            </FlexboxItem>
          </Flexbox>
          <Flexbox>
            <FlexboxItem>
              {{selItem.content}}
            </FlexboxItem>
          </Flexbox>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import _ from 'lodash'
import {mapState , mapMutations } from 'vuex'
import todoBody from "./todoBody"
import {  Group, XInput,XTextarea ,Flexbox,FlexboxItem,XButton,Tab,TabItem,Popup ,dateFormat  } from 'vux'
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
      return _.sortBy(this.$store.getters.todoList,function(item){
         return  -item.eventID
      })
    },
    completeList(){
      return _.sortBy(this.$store.getters.completeList,function(item){
         return  -item.eventID
      })
    },
    deleteList(){
      return _.sortBy(this.$store.getters.deleteList,function(item){
         return  -item.eventID
      })
    },
    selContShow(){
      return this.$store.state.todoM.selContShow
    },
    selItem(){
      return this.$store.state.todoM.selectedItem
    }

  },
  components:{
  todoBody,
    Group, XInput,XTextarea,Flexbox,FlexboxItem,XButton,Tab,TabItem,Popup
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
    },
    selContClose(){
      this.$store.dispatch("todoSelContShowClose");
    }
  },
  mounted(){
    //console.log(_.sortBy());
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus" >
.todo-body
  width:100%;
.popup-content
  position:relative;
  width:100%;
  height:100%;
  padding-top:2rem;
  .close-btn
    position:absolute
    display:block
    width:2rem
    height:2rem
    text-align:center
    line-height:2rem
    font-size:1rem
    color:gray
    right:0
    top:0
  .sel-content
    width:100%
    padding:0 0.5rem
</style>
