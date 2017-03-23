<template>
  <li class="list-item">
    <div class="item-wrap">
      <div class="left">
        <div class="thumb">
          <img v-bind:src="infoObj.pic_url" />
        </div>
      </div>
      <div class="content-wrap">
        <p class="c-name">{{infoObj.name_ch}} </p>
        <p class="e-name">{{infoObj.name_en}}</p>
        <p class="rigion">
          <span class="country">{{infoObj.country_ch}}</span> >
          <span class="main-reg">{{infoObj.region_ch}}</span>
          <span class="sub-reg" v-show="infoObj.sub_region_ch"> > {{infoObj.sub_region_ch}}</span>
        </p>
        <p class="type">
          {{infoObj.wine_type_ch}} | {{infoObj.sugar_ch}}
        </p>
        <p class="grape">
          <span v-for="g in infoObj.grape"> {{g.grape_ch}} </span>
        </p>
        <p></p>
      </div>
    </div>
    <div class="btn-wrap clearfix">
      <a class="contact" v-bind:link="infoObj.winery_url" v-on:click="wineryClickHandle()">联系酒庄</a>
      <a class="detail" v-bind:wine_id="infoObj.wine_id" v-bind:sign="infoObj.sign" v-on:click="detailClickHandle()">酒款详情</a>
    </div>
  </li>
</template>

<script>

export default {
  name: 'listitem',
  props:{
    infoObj:{type:Object, default:{}}
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
    wineryClickHandle(){
      let link = event.target.getAttribute("link");
      window.open(link)
    },
    detailClickHandle(){
      let wine_id = event.target.getAttribute("wine_id");
      let sign = event.target.getAttribute("sign");
      window.open('http://h5.9kacha.com/index.php/Wine/custom_detail?wine_id='+wine_id+'&sign='+sign+'&from=2b')
    }
  },
  components:{

  },
  mounted(){

  }
}
</script>

<style scpoed rel="stylesheet/css">
.list-item{
    width:100%;
    padding: 0.5rem 0rem 0 0rem;
    border-radius:5px;
    margin-bottom: 0.8rem;
    background: white;
    border:1px solid rgba(0,0,0,0.1);
}
.list-item .item-wrap{
    width:100%;
    display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;
    box-orient:horizontal;-webkit-box-orient:horizontal; box-lines:single;-webkit-box-lines:single;

    flex-direction:row; -webkit-flex-direction:row; -moz-flex-direction:row;
    flex-wrap:no-wrap; -webkit-flex-wrap:no-wrap; -moz-flex-wrap:no-wrap;

    justify-content:left; -webkit-justify-content:left;
    box-pack:left;-webkit-box-pack:left;-moz-box-pack:left;
}
.list-item .item-wrap .left{
    display:block; position:relative;
    box-flex:0; -webkit-box-flex:0;
    flex-grow:0;
    flex-shrink:0;
    flex-basis:10rem;
    width:10rem;
    margin-left: 0.5rem;
    overflow-x:hidden;
}
.list-item .item-wrap .left .thumb{
    width:100%;height:100%;
     overflow-x:hidden;

    display:-webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;
    box-orient:vertical;-webkit-box-orient:vertical; box-lines:single;-webkit-box-lines:single;
    align-items:center; -webkit-align-items:center; -moz-align-items:center;
    box-align:center;-moz-box-align:center;-webkit-box-align:center;
    flex-direction:row; -webkit-flex-direction:row; -moz-flex-direction:row;
    flex-wrap:no-wrap; -webkit-flex-wrap:no-wrap; -moz-flex-wrap:no-wrap;
    justify-content:center; -webkit-justify-content:center;
    box-pack:center;-webkit-box-pack:center;-moz-box-pack:center;
}

.list-item .item-wrap .left .thumb img{
    display: block;
    height:10rem; width:auto;
   /* margin:0 auto;*/

}
.list-item .item-wrap .content-wrap{
    display: block;
    box-flex:1; -webkit-box-flex:1;
    flex-grow:0;
    flex-shrink:1;
    flex-basis:auto;
    padding:0 0.5rem;
}
.list-item .item-wrap .content-wrap .c-name{
    display:-webkit-box;
    text-overflow: ellipsis;
    overflow:hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.6rem;
    font-size: 1.4rem;

}
.list-item .item-wrap .content-wrap .e-name{
    display:-webkit-box;
    text-overflow: ellipsis;
    overflow:hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.6rem;
    font-size: 1.4rem;
}
.list-item .item-wrap .content-wrap .rigion{
    margin-top:0.4rem;
    line-height: 1.2rem; font-size: 1.2rem;
}
.list-item .item-wrap .content-wrap .type{
    margin-top:0.4rem;
    line-height: 1.4rem; font-size: 1.2rem;
}
.list-item .item-wrap .content-wrap .grape{
     margin-top:0.4rem;
    line-height: 1.4rem; font-size: 1.2rem;
}
.list-item .btn-wrap{
    width:100%; height:3rem;
    margin-top:1rem;
    border-top:1px solid rgba(0,0,0,0.2);

}
.list-item .btn-wrap>a{
    display: block; position: relative;
    float:left;
    width:50%; height:3rem; line-height: 3rem;
    font-size: 1.2rem;
    text-align: center;
}
.list-item .btn-wrap>a:nth-of-type(2):after{
    content: "";
    position: absolute;
    left:0;top:0;
    width:1px; height:100%;
    background:  rgba(0,0,0,0.2);
}
</style>

