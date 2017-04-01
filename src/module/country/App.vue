<template>
  <div class="app" >
    <Countrylist></Countrylist>
  </div>
</template>

<script>
import axios from "axios"
import $ from "jquery"
import Vue from "vue"
import Countrylist from "components/Countrylist/Countrylist.vue"

export default {
  name: 'app',
  data(){
    return {
      eventHub:new Vue()
    }
  },
  computed:{

  },
  methods:{
    postAxios(){
      let data = JSON.stringify({
            "authparams":{"app_id":"343535","rtoken":"sldffyy9767","time":1489131067},
            "authmode":"app",
            "country":"意大利",
            "cookie":"940158d239561338e"//window.localStorage.getItem("userCookie")
          })
      var params = new URLSearchParams();
      params.append('jparams',data);
      return axios.post('http://zyshi.9kacha.com/AutoRecommWines/toBfindWine/findWine.php',
        params
      ) //.then(function(res){ console.log(res); })
    },
    testAxios(){
      let data = JSON.stringify({"scene_food_id":["47487760-d940-11e6-b0ae-525400650f76"]})
      var params = new URLSearchParams();
      params.append('jparams',data);
      return axios.post('http://mhzheng.9kacha.com/frontrecomm/dataApi/get_auto_screenbuy.php',
        params
      )//.then(function(res){ console.log(res); })
    },
    getAxios(){
      let data={page_now:1,randomTime:1234};
      return axios.get('http://m.9kacha.com/activity/G100/api/Select_sCount_ActWine.php',{
        params:{page_now:1,randomTime:1234}
      }) //.then(function(res){ console.log(res); })
    },
    AxiosAll(){
      axios.all([this.postAxios(),this.getAxios(),this.testAxios()]).then(axios.spread((posData,getData,testData)=>{
        console.log(testData);
      }))
    }

  },
  components:{
    Countrylist
  },
  mounted(){
    //this.testAxios();
    //console.log(require('cusTest'))

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
