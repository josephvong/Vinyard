<template>
  <div class="app" >
     <panel header="点击国家列表查看该国酒款"  :list="list" ></panel>
  </div>
</template>

<script>

import Vue from "vue"
import {Panel} from "vux"

export default {
  name: 'app',
  data(){
    return {
      list: [{
        src: './country/ita.png',
        title: '意大利',
        desc: '意大利是世界上最早酿制葡萄酒的国家，几乎全国各地都种植有葡萄树。意大利目前是世界上第二大葡萄酒生产国，仅次于法国。 葡萄酒的产量如此之大，为规范提升葡萄酒业的有效管理，意大利于1963年制定了一套与法国AOC制度相近的分级方案，将本国葡萄酒分为日常餐酒（VDT）、地区餐酒（IGT）、法定产区葡萄酒（DOC）和优秀产区葡萄酒（DOCG）。其中地区餐酒（IGT）这个级别是1992年新添加的，这个等级的葡萄酒被认为比一般的日常餐酒质量要好。',
        url: 'menu.html?country=italy'
      }, {
        src: './country/frc.png',
        title: '法国',
        desc: '法国的葡萄酒历史十分悠久，可追溯至公元前600年左右，那时希腊人来到了现在的法国马赛地区，并带来了葡萄树和葡萄栽培技术。公元前51年，凯撒征服了高卢地区，正式地葡萄树栽培便在此展开。随着葡萄种植区域不断向北扩展，公元3世纪，Bordeaux和Burgundy开始为供不应求的葡萄酒市场酿制葡萄酒。',
        url: 'menu.html?country=france',/*{
          path: '/component/radio',
          replace: false
        }*/
      }],
      eventHub:new Vue()
    }
  },
  computed:{

  },
  methods:{

  },
  components:{
     Panel
  },
  mounted(){


  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/css/reset.css"
@import "../../common/css/cusstyle.css"
.app
    position: relative;
    width:100%;

</style>
