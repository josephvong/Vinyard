<template>
  <div class="home">
    <flexbox justify="center">
      <flexbox-item :span="1/4">
        <img class="logo" src="../../assets/logo.png" />
      </flexbox-item>
    </flexbox>
    <divider>进入链接</divider>
    <group>
      <cell title="案例集合" is-link link="/casegroup">
      </cell>
      <cell title="个人介绍" is-link >
        <div slot="default">
          <span style="color: green" >Joseph的个人简介</span>
        </div>
      </cell>
    </group>
    <br/>
    <divider>项目介绍</divider>
    <group>
      <cell-box>创建人 : 黄吉平</cell-box>
      <cell-box>项目名称 : VueNote</cell-box>
    </group>

  </div>
</template>

<script>
import {Flexbox,FlexboxItem, CellBox, Group,Cell,Divider} from 'vux'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  computed:{

  },
  components:{
    Flexbox,
    FlexboxItem,
    CellBox,
    Group,
    Cell,
    Divider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="stylus" rel="stylesheet/stylus" >
.logo
  display:block
  height:5rem

</style>
