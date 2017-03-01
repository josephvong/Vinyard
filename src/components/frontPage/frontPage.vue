<template>
  <div class="front-page" style="background:red">
    <p v-for="i in 100">{{i}}</p>
  </div>
</template>

<script>
import { ViewBox } from 'vux'
export default {
  name: 'front-page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	ViewBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="stylus" rel="stylesheet/stylus" >
.front-page
	// width:100%
	// height:100%
</style>
