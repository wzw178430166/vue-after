<template>
  <div class="page">
     <Hearder :head_name="head_name"/>
    <div class="head_bg"></div>
    <div class="query-input">
      <input type="text" id="k" placeholder="输入关键词快速搜索项目">
      <i class="query-clear" id="J_clear"></i>
    </div>
    <!-- <div class="refresh"><img src="images/refresh.png">换换看</div> -->
    <div class="container" style="padding: .1rem 0 1.4rem 0;">
      <div class="option_box" style="margin-top: .5rem;">

        <ul>

          <li>
  <router-link :to="'order_list'">
            <div class="option"><img src="../../../static/images/jianka.png">

              <p>接单专区</p>

            </div>
</router-link>
          </li>

          <li @click="goo('')">

            <div class="option"><img src="../../../static/images/zhishiw.png">

              <p>项目分包</p>

            </div>
  
          </li>

          <li>
 <router-link :to="'/system_list'">
            <div class="option"><img src="../../../static/images/zhuxh.png">

              <p>系统销售</p>

            </div>
</router-link>
          </li>

          <li @click="goo('/tv/tv_app/video/meeting_list.html')">

            <div class="option"><img src="../../../static/images/knollection.png">

              <p>视频会议</p>

            </div>

          </li>

        </ul>

      </div>

    </div>
    <div style="height: 1rem;background-color: #f7f7f7;"></div>


    <div class="planting">
      <div class="mt_boxsu">
        <div class="m-banner" id="J_banners">
          <div class="banner-container bd">
            <div class="tempWrap">
              <ul id="advertss">
                <li class="li-rela" @click="goo('/tv/tv_app/members/style1/work.details.html')">
                  <div class="tcontbox">
                    <p class="tconp">
                      <span class="yaorder">类似大学在线教育平台开发</span><span>已中标</span>
                    </p>
                    <p class="tunOrder">
                      <span>投标报价：<span class="ser-item ser_items">320,000</span></span>
                      <span>投标工期：<span class="ser-item">38个工作日</span> </span>
                    </p>
                    <p class="tunOrder">
                      <span>项目类型：<span class="ser-item">定制开发类</span></span>
                      <span>技能要求：<span class="ser-item">PHP</span> </span>
                    </p>
                    <p class="tunOrder tunarks">
                      <span>需支持/适配的客户端：<span class="ser-item">PHP</span></span>
                    </p>
                    <div class="tunOrder tunorremarks" style="height: 2.3rem;">
                      <div>
                        视频会议时间：<b class="taun-text">2021-06-22 14:00</b>
                      </div>

                    </div>
                    <div class="nth-btn">
                      <span class="nth-sitem" @click="goo('/se/se_details.html')">等待视频会议</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="hd">
            <ul>
              <li class="on"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>



    <div class="m_dbox" style="line-height: 3rem;height: 3rem;">
      <span>最新工单</span>
      <span class="mstios" @click="goo_d()">更多<i class="uings"><img src="../../../static/images/fanhuis.png"
            style="width: 100%;"></i></span>
    </div>


    <div class="m_bo_well">
      <div class="m_bo_item" @click="goo('/tv/tv_app/order/style1/order_inner.html')">
        <p class="m_bo_items1">高德地图API车辆航迹图程序开发 </p>
        <p class="m_bo_items2"><span>定制开发类</span><span>40个工作天</span></p>
        <p class="m_bo_items3"><span class="m_bo_t_ie">100,000-150,000</span><span class="m_bo_t_is">123人浏览 4人已投标</span>
        </p>
      </div>

      <div class="m_bo_item">
        <p class="m_bo_items1">高德地图API车辆航迹图程序开发 </p>
        <p class="m_bo_items2"><span>定制开发类</span><span>40个工作天</span></p>
        <p class="m_bo_items3"><span class="m_bo_t_ie">100,000-150,000</span><span class="m_bo_t_is">123人浏览 4人已投标</span>
        </p>
      </div>

      <div class="m_bo_item">
        <p class="m_bo_items1">高德地图API车辆航迹图程序开发 </p>
        <p class="m_bo_items2"><span>定制开发类</span><span>40个工作天</span></p>
        <p class="m_bo_items3"><span class="m_bo_t_ie">100,000-150,000</span><span class="m_bo_t_is">123人浏览 4人已投标</span>
        </p>
      </div>

    </div>
    <span id="footer_box"></span>
    <div style="height: 5rem;"></div>
    <TabbarHtml v-bind:active=0 /> 
  </div>
</template>

<script>
  import TabbarHtml from '@/components/Tabbar.vue';
  import  '../../assets/js/setFontSize.js';
  //import '../../../static/js/TouchSlide.1.1.js';
  import Hearder from '@/components/Hearder.vue';
  export default {
    name: 'IndexPage',
    data (){
    return {
      active: 0,
      head_name:'接单平台'
    }
    },
    components: {
      Hearder,
      TabbarHtml
      //[Loading.name]: Loading
    },
   
    methods:{
      goo(){

      }  ,
      banner1() {
      
	
			}  
      },
      mounted(){
      // this.banner1();
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import  '../../assets/css/appstyle.css'; 
 
  .head_bg{
    background: #ffffff;
    width: 100%;
    height: 12rem;
    z-index: -1;
    position: absolute;
    background-size: 100%;
    background: #fff;
  }
  .page {
    font-size: 14px;

    a {
      color: #FF0000;
    }
  }

  body {
    background: #f7f7f7!important;
  }

  .head_top {
    position: relative;
    margin-top: 2rem;
    padding: 0 1rem;
    padding-top: 0rem;
    text-align: center;
    font-weight: 600;
    top: .5rem;
    font-size: 1.53rem;
    color: #ffffff;
  }

  .query-input {
    padding-left: 4rem;
    height: 2.7rem;
    background: url(../../../static/images/magnifier.png) no-repeat 1.5rem .75rem;
    background-size: 1.4rem;
    background-color: #f5f4f7;
    width: 93%;
    /* float: left; */
    margin: 1.5rem auto 0 auto;
    border-radius: 500px;
  }

  .query-input input {
    width: 85%;
    border: 0;
    height: 100%;
    outline: none;
    margin: 0;
    font-size: .98rem;
    text-align: center;
    padding: 0;
    background-color: #f5f4f7;
    float: left;
  }

  .query-input .query-clear {
    width: 2.5rem;
    height: 3rem;
    background: url(/statics/wbShopV2/m/images/icon_delete.png) no-repeat center;
    background-size: 1.3rem;
    display: none;
    float: right;
  }

  .container {
    position: relative;
    background-color: #fff;
    width: 100%;
    border-radius: .3rem;
    margin: .5rem auto 0rem auto;
    padding: .2rem 0rem 0rem 0rem;
  }

  .option_box_ {
    width: 100%;
    overflow: hidden;
    /*    margin-top: 1rem;*/
  }

  .option_box {
    width: 98%;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #fff;
  }

  .option_box li {
    float: left;
    width: 25%;
    margin-top: 1rem;
  }

  .option_box .option {
    text-align: center;
  }

  .option_box .option img {
    width: 3rem;
    height: 3rem;
    display: block;
    margin: 0 auto;
  }

  .option_box .option p {
    height: 1.538rem;
    line-height: 1.54rem;
    font-size: 1.002rem;
    color: #282828;
    margin-top: .45rem;
  }

  /* 轮播图 */

  .m-banner .banner-container {

    width: 93%;
    /* overflow: hidden; */
    position: relative;
    background: #ffffff;
    height: 13rem;
    margin-top: .29rem !important;
    margin: 0 auto;
    border-radius: .3rem;
  }


  .mt_boxs .bd .tempWrap ul,

  .mt_boxs .banner-container .tempWrap {

    height: 10rem;

  }



  .bd .tempWrap ul,

  .banner-container .tempWrap ul li {

    width: 100%;

    height: 100%;

    margin: 0 auto;

    padding-left: 1rem;

    left: -.8%;

    border-radius: .7rem;

  }


  .m-banner .banner-intelligent {

    width: 100%;

    height: 7rem;

    overflow: hidden;

    margin: 0 auto;

  }


  .m-banner .banner-intelligent img {

    width: 100%;

    float: left;

    height: auto;

    object-fit: cover;

  }



  .bd .tempWrap ul,

  .banner-intelligent .tempWrap ul li {

    width: 99%;

    height: 100%;

    margin: 0 auto;

  }



  .m-banner .hd {
    position: absolute;
    bottom: -8%;
    width: 100%;
    text-align: right !important;
    right: 50%;
  }



  .m-banner .hd ul li {

    display: inline-block;

    width: 0.5rem;

    height: 0.5rem;

    background-color: #fedede;

    color: transparent;

    border-radius: 500px;

    margin-right: 0.192rem;

    text-indent: -999px;

  }



  .m-banner .hd ul li.on {

    background-color: #fd5148;

    width: 1.5rem;

    /*            height: .385rem; */

  }



  .m-banner {

    width: 99%;

    /*          overflow: hidden;*/

    position: relative;

    height: 14rem;

    margin-top: .29rem !important;

  }



  .mt_boxs {

    width: 100%;

    padding: 0 1rem;

  }



  .mt_boxs .m-banner {

    padding: 0;

    margin-top: 0 !important;

  }



  .mt_boxs .m-banner .banner-container img {

    width: 100%;

    float: left;

    /* object-fit: scale-down; */

    height: 10rem;

    border-radius: .5rem;

  }



  .mt_boxs .m-banner .banner-container {

    width: 100%;

    height: 10rem;

    border-radius: 0;

    overflow: hidden;

    margin: 0 auto;

  }



  .mt_boxs .bd .tempWrap ul,

  .mt_boxs .banner-container .tempWrap ul li {

    width: 100%;

    height: 100%;

    margin: 0 auto;

    padding-left: 0rem !important;

    left: 0%;

    border-radius: .7rem;

  }

.m-banner .hd ul li.on {
    background-color: #fd5148;
    width: 1.5rem;
    /* height: .385rem; */
}
.m-banner .hd ul li {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: #fedede;
    color: transparent;
    border-radius: 500px;
    margin-right: 0.192rem;
    text-indent: -999px;
}



  /*	轮播图结束*/

  .tcontbox {
    width: 100%;
    margin: 0 auto;
    height: 14rem;
  }

  .tcontbox .tconp {
    display: flex;
    justify-content: space-between;
    height: 3.7rem;
    line-height: 4.7rem;
    width: 100%;
    margin: 0 auto;
    font-size: 1.1rem;
    color: #2b2b2b;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
  }

  .tcontbox .tconp .yaorder {
    color: #252424;
    font-weight: 600;
    font-size: 1.05rem;
  }

  .tcontbox .tconp span:nth-child(2) {
    color: #ff4c73;
    width: 4rem;
    height: 2rem;
    border: 1px solid #ff4c73;
    line-height: 2rem;
    text-align: center;
    font-size: 1rem;
    border-radius: .3rem;
  }

  .tcontbox .tunOrder {
    height: 1.9rem;
    line-height: 2.7rem;
    width: 100%;
    margin: 0 auto;
    font-size: 1.02rem;
    color: #7a7979;
    display: flex;
  }

  .tcontbox .tunOrder span {
    width: 50%;
    font-size: 1.01rem;
  }

  .tcontbox .tunOrder span .ser_items {
    color: #ff4c73;
    font-size: 1.05rem;
  }

  .tcontbox .nth-btn {
    display: flex;
    flex-direction: row-reverse;
    top: -2.2rem;
    position: relative;
    padding-bottom: 1rem;
  }

  .tcontbox .nth-btn span {
    width: 6.5rem;
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: .85rem;
    border: 0;
    color: #fff !important;
    background: #ff6d0a;
    text-align: center;
    border-radius: 500px;
    margin-right: 1rem;
  }

  .tcontbox .tunOrder span .ser-item {
    color: #3399ff;
    font-size: 1.05rem;
  }

  .tcontbox .tunorremarks .taun-text {
    color: #333333;
    font-weight: 500;
  }


  .m_dbox {

    width: 100%;

    display: flex;

    height: 3.5rem;

    line-height: 3.5rem;

    padding: 0 1rem;

    justify-content: space-between;

  }



  .m_dbox .mstio {

    color: #ff4c73;

    font-weight: 500;

  }



  .m_dbox .mstios {

    color: #919899;

    font-weight: 500;

  }

  .m_dbox .mstio .uing {

    display: inline-block;

    width: 1rem;

    margin: 0 .35rem;

  }



  .m_dbox .mstios .uings {

    display: inline-block;

    width: .45rem;

    margin: 0 .35rem;

  }



  .m_dbox span:nth-child(1) {

    font-size: 1.1678rem;

    color: #111111;

    font-weight: 600;

  }



  .m_dbox span:nth-child(1) img {

    vertical-align: middle;

    width: 1rem;

    margin-right: .5rem;

  }

  .m_bo_well {
    width: 93%;
    margin: 0 auto;
  }

  .m_bo_item {
    width: 100%;
    background: #fff;
    padding: .7rem;
    border-radius: .3rem;
    margin-bottom: 1rem;
  }

  .m_bo_items1 {
    font-size: 1.15rem;
  }

  .m_bo_items2 {
    font-size: .93rem;
    display: flex;
    margin: .35rem 0;
  }

  .m_bo_items2 span {
    padding: .2rem .4rem;
    background: #daffff;
    color: #5db3ff;
    margin-right: .5rem;
    border-radius: 500px;
  }

  .m_bo_items3 {
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
  }

  .m_bo_items3 .m_bo_t_ie {
    color: #ff4c73;
    font-size: 1.11rem;
  }

  .m_bo_items3 .m_bo_t_is {
    color: #666666;
  }
 
</style>