<template>
  <div class="app sui-page">
    <view-box ref="viewBox">
      <x-header>VueNote首页</x-header>
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">案例</span>
        </tabbar-item>
        <tabbar-item>
          <span slot="label">结尾</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader,Tabbar,TabbarItem,Icon} from 'vux'
export default {
  name: 'app',
  components:{
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Icon
  },
  mounted(){

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:1rem;
  .autofix
    width:3rem
    height:3rem
    background:red
    transform:translateY(20px)
</style>
