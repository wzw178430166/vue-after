<template>
  <div class="matmatron_list">
    <Hearder :head_name="head_name" />
    <div class="doula_lic" id="mas_content">
      <!-- <span class="doula_flag" id="mastst_img">我已了解，关闭本提示</span> -->
      <img src="https://app.yupingmama.com/doula/tpl_ypmm/images/liuichens1.png">
    </div>
    <div class="registered_place_box">
      <div class="registered_place_box_">
        <ul>
          <ul ref="inputtime_div" data-page="1">
            <li v-for="(item,index) in area" :key="index">
              <div class="mat_box_line">
                <div class="mat_box_img">
                    <!-- :src="host+item.portrait" -->
                  <img src="../../../static/images/icon_tou1.png" :onerror="defaultImg">
                </div>
                <div class="registerfr">
                  <div class="p1">
                    <div class="p1_l fl">
                      <span class="yname" v-text="item.realname"></span>
                      <span class="yisli">40岁</span>
                    </div>
                  </div>
                  <div class="p2">
                    <div class="scores">


                      <div class="starts">

                        <img src="/se/images/start1.jpg">

                        <img src="/se/images/start1.jpg">

                        <img src="/se/images/start1.jpg">

                        <img src="/se/images/start1.jpg">
                        <img src="/se/images/start1.jpg">
                      </div>
                      <div class="starts-num" style="display:none;">
                        <span>5</span>分
                      </div>
                      <div class="ptime" v-text="item.price+'(元/月)'">
                        0,000(元/月)
                      </div>
                    </div>
                  </div>
                  <div class="p2 psie" v-text="item.discirpt">
                    
                  </div>
                  <div class="citem_div4">
                  </div>
                </div>
                <div class="orders">详情</div>
              </div>
            </li>
          </ul>
        </ul>
        <div class="more-load" v-if="finished">到底啦〜想不到你看到了这里^_^</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Hearder from '../../components/Hearder.vue';
  import '../../assets/js/setFontSize.js';
  import 'mint-ui/lib/style.css'
  import { Indicator } from 'mint-ui';
  import {
    noPassByMobile
  } from '@/assets/js/global';
  import {
    getDoulaList
  } from '@/api/doula'
  export default {
    name: 'matmatron_list',
    data() {
      return {
        head_name: '母婴师列表',
        page: 1,
        loading: false,
        finished: false,
        area: [],
        bottomOfWindow:true, 
        defaultImg: 'this.src="' + require('../../assets/images/sfsadfd.jpg') + '"',
      }
    },
    components: {
      Hearder,
    },
    created() {
      this.getArea();
    },
  methods: {
  getArea(pages=1) {
  this.loading = false;
          let param = {
            page: pages,
            // limit: this.limit
          }
     getDoulaList(param).then((res) => {
            Indicator.close();
            if (res.staus == 1) {
              this.loading = false;
              this.area = this.area.concat(res.data); //追加数据
              if (res.data.length == 0) {
                //数据全部加载完成
                alert('数据全部加载完成');
                this.finished = true;
              } else {
                this.finished = false;
              }
            }
          }).catch(()=>{
             Indicator.close();
            console.log('我是第二个catch的回调函数')
            return;
            })
      
      },
   getdata(){
    var _this = this;
   var page = _this.$refs.inputtime_div.getAttribute("data-page");
   var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
   var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
   var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
   _this.bottomOfWindow = scr + clientHeight + 10 >= scrHeight;
   if(_this.bottomOfWindow && _this.loading == false && _this.finished == false){
      Indicator.open();
      this.loading = true;
     if(_this.bottomOfWindow){ //this.bottomOfWindow控制滚动是否加载更多
       page++;
     //  alert("达到底部。");
      _this.$refs.inputtime_div.setAttribute("data-page",page);
       _this.getArea(page);
     }else{
       return;
     }
   }
    },
    //节流函数
    throttle(fun, delay, time) {
        var timeout,
        startTime = new Date();
        return function (e) {
            var context = this,
                args = arguments,
                curTime = new Date();
            clearTimeout(timeout);
            if (curTime - startTime >= time) {
                fun.apply(context, args);
                startTime = curTime;
            } else {
                timeout = setTimeout(function () {
                    fun.apply(context, args);
                }, delay);
            }
        };
    },
    

    },
 
 mounted() {
  window.addEventListener('scroll',this.throttle(this.getdata,300,500),false);
    },
  // beforeDestroy(){

  //   }
  destroyed(){
  window.removeEventListener("scroll",this.throttle)
  }
  }

</script>

<style scoped>
body{height:100vh;}
  .headerBoxCircle {
    height: 3.8rem;
    z-index: 999
  }

  .headerBoxCircle p {
    text-align: left;
    padding-left: 3rem;
    font-size: 1.13rem;
  }

  .m-head {
    padding: .9rem .19rem 0 .19rem;
    overflow: hidden;
    right: 0;
    top: 0;
    width: 65%;
    background: #fff;
    z-index: 999;
    position: absolute
  }

  .m-head .head-query {
    margin-top: .2rem;
    width: 90%;
    margin: 0 auto;
    height: 2rem;
    background: #f5f4f7 url(/index/style2/images/magnifier.png) no-repeat .8rem center;
    padding-left: 2.5rem;
    background-size: 1rem;
    border-radius: 500px;
    border: 1px solid #ececec
  }

  .head-query input {
    width: 90%;
    height: 100%;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    background: #f5f4f7;
    padding-left: .2rem
  }

  .n21 {
    width: 5.5rem;
    border: 1px solid #2cacfc;
    background: #2cacfc;
    margin: 11% auto;
    text-align: center;
    color: #fff;
    padding: 3px;
    border-radius: 15px
  }

  .n22 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: .923rem;
    color: #999
  }

  .registered_place_box_line .registered_place_box_line_r {
    width: 100%;
    padding-left: 1rem;
    position: absolute;
    left: 0
  }

  .registered_place_box_line .registered_place_box_line_r .p1_l {
    font-size: 1.1rem
  }

  .registered_place_box_line .registfont {
    color: #999;
    position: relative;
    top: 2.2rem
  }

  body {
    background-color: #fff
  }

  .header_box {
    background-color: #fff;
    border-bottom: 1px solid #e3e2e7
  }

  .header_box .midden {
    color: #1d1d1d
  }

  .registered_place_box_line {
    padding: .8rem .923rem .923rem .923rem;
    position: relative;
    margin-bottom: 1rem;
    background-color: #fff;
    height: 8.8rem
  }

  .registered_place_choice {
    width: 100%;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 6.9rem;
    height: 100%;
    display: none;
    Z-INDEX: 9
  }

  .registered_place_choice .registered_place_choice_ {
    width: 100%;
    overflow: hidden
  }

  .registered_place_choice_ .choice_box {
    background-color: #fff
  }

  .registered_place_choice_ .choice_box ul {
    overflow: scroll
  }

  .registered_place_choice_ .choice_box li {
    width: 100%;
    line-height: 3.346rem;
    height: 3.346rem;
    border-bottom: 1px solid #ddd8cd;
    padding-left: 10%;
    position: relative
  }

  .registered_place_choice_ .choice_box i {
    position: absolute;
    left: 6%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    vertical-align: middle;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    border-top: 7px solid #515151
  }

  .registered_place_choice_ .bg_color {
    display: block;
    position: absolute;
    top: auto
  }

  .registered_search {
    width: 93.33%;
    height: 2.615rem;
    line-height: 2.615rem;
    margin: .769rem auto;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #e4e4e4;
    text-align: center
  }

  .registered_search img {
    width: 1rem;
    height: 1rem;
    vertical-align: sub
  }

  .registered_search input {
    width: 18.423rem
  }

  .registered_search input::-ms-input-placeholder {
    color: #666
  }

  .registered_search input::-webkit-input-placeholder {
    color: #666
  }

  .registered_search input::-moz-placeholder {
    color: #666
  }

  .registered_place_box_line img {
    width: 7.9rem;
    height: 5.9rem;
    border-radius: .35rem;
    float: left
  }

  .p2,
  .p3,
  .registered_place_box_line .registered_place_box_line_r .p1 {
    width: 100%
  }

  .registered_place_box_line .registered_place_box_line_r .scores {
    width: 100%;
    height: 100%;
    display: flex
  }

  .registered_place_box_line .registered_place_box_line_r .starts {
    height: 1.923rem;
    align-items: center;
    display: flex;
    line-height: 1.923rem
  }

  .registered_place_box_line .registered_place_box_line_r .starts img {
    float: left;
    width: 1.2rem;
    height: 1.2rem
  }

  .registered_place_box_line .registered_place_box_line_r .starts-num {
    font-size: .85rem;
    color: #ff4c73;
    margin-left: .4rem
  }

  .registered_place_box_line .registered_place_box_line_r .p1 {
    height: 1.4rem;
    line-height: 1.4rem
  }

  .registered_place_box_line .registered_place_box_line_r .p1_l {
    color: #000;
    font: size 1;
    font-weight: 700
  }

  .registered_place_box_line .registered_place_box_line_r .p1_l .yisli {
    color: #333;
    font-size: 1.077rem
  }

  .registered_place_box_line .registered_place_box_line_r .p1_l span {
    margin-left: .654rem;
    font-size: .923rem;
    font-weight: 400
  }

  .registered_place_box_line .registered_place_box_line_r .p1_r {
    color: #999;
    font-size: .923rem
  }

  .registered_place_box_line .registered_place_box_line_r .p2 {
    font-size: .923rem;
    color: #999;
    height: 1.923rem;
    width: 100%;
    line-height: 1.923rem;
    margin-top: .5rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between
  }

  .registered_place_box_line .registered_place_box_line_r .psie {
    width: 150%;
    display: flex;
    margin-top: .5rem;
    color: #999;
    font-size: .95rem;
    align-items: center
  }

  .registered_place_box_line .registered_place_box_line_r .psie img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: .3rem
  }

  .registered_place_box_line .registered_place_box_line_r .psie span {
    border-radius: 500px;
    margin-right: .42rem
  }

  .registered_place_box_line .registered_place_box_line_r .psie span:empty {
    display: none
  }

  .m-loaction {
    width: 150%;
    height: 2rem;
    font-size: .95rem;
    clear: both;
    display: flex;
    margin-top: .3rem;
    color: #999;
    align-items: center
  }

  .m-loaction img {
    width: 1.2rem;
    height: 1.4rem;
    margin-right: .4rem
  }

  .registered_place_box_line .registered_place_box_line_r .p3 li {
    line-height: 1.077rem;
    padding: .115rem .731rem;
    border: 1px solid #a1a7a8;
    color: #a1a7a8;
    border-radius: 15px;
    float: left;
    margin-right: .5rem
  }

  .header_box {
    height: 3.8rem
  }

  .header_box .midden {
    height: 3.8rem;
    line-height: 3.8rem
  }

  .h50 {
    height: 3.8rem
  }

  .bg_color {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    display: none
  }

  .m-banner .banner-container {
    width: 100%;
    height: 7rem;
    margin: 0 auto
  }

  .mt_boxs .banner-container .tempWrap,
  .mt_boxs .bd .tempWrap ul {
    height: 10rem
  }

  .banner-container .tempWrap ul li,
  .bd .tempWrap ul {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-left: 1rem;
    left: -.8%;
    border-radius: .7rem
  }

  .m-banner .banner-intelligent {
    width: 100%;
    height: 7rem;
    overflow: hidden;
    margin: 0 auto
  }

  .m-banner .banner-intelligent img {
    width: 100%;
    float: left;
    height: auto;
    object-fit: cover
  }

  .banner-intelligent .tempWrap ul li,
  .bd .tempWrap ul {
    width: 99%;
    height: 100%;
    margin: 0 auto
  }

  .m-banner .hd {
    position: absolute;
    bottom: 1%;
    width: 100%;
    text-align: right !important;
    right: 7%
  }

  .m-banner .hd ul li {
    display: inline-block;
    width: .5rem;
    height: .5rem;
    background-color: #fedede;
    color: transparent;
    border-radius: 500px;
    margin-right: .192rem;
    text-indent: -999px
  }

  .m-banner .hd ul li.on {
    background-color: #fd5148;
    width: 1.5rem
  }

  .m-banner {
    width: 99%;
    position: relative;
    height: 10rem;
    margin-top: .29rem !important
  }

  .mt_boxs {
    width: 100%;
    padding: 0 1rem;
    margin-top: 1rem
  }

  .mt_boxs .m-banner {
    padding: 0;
    margin-top: 0 !important
  }

  .mt_boxs .m-banner .banner-container img {
    width: 100%;
    float: left;
    object-fit: cover;
    height: 10rem;
    border-radius: .5rem
  }

  .mt_boxs .m-banner .banner-container {
    width: 100%;
    height: 10rem;
    border-radius: 0;
    overflow: hidden;
    margin: 0 auto
  }

  .mt_boxs .banner-container .tempWrap ul li,
  .mt_boxs .bd .tempWrap ul {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-left: 0 !important;
    left: 0;
    border-radius: .7rem
  }

  .registered_place_box,
  .registered_place_box_,
  .registered_place_box_line,
  .registered_place_option {
    width: 100%;
    overflow: hidden
  }

  .registered_place_option {
    border-bottom: 1px solid #e3e3e7;
    position: fixed;
    z-index: 6;
    background-color: #fff
  }

  .registered_place_option li {
    width: 33.3%;
    float: left;
    margin: .923rem auto;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border-right: 1px solid #c8c8c8;
    color: #101d37;
    font-size: .9rem
  }

  .registered_place_option li:last-child {
    border-right: none
  }

  .registered_place_option i {
    margin-left: 6px;
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid #515151
  }

  .mat_box_line {
    display: flex;
    break-after: avoid;
    margin: 0 auto;
    position: relative;
    width: 93%;
    padding: 1rem 0;
    border-bottom: 1px solid #ececec
  }

  .mat_box_line .orders {
    position: absolute;
    bottom: 2.15rem;
    right: 1rem;
    border-radius: 500px;
    width: 4.3rem;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    font-size: .75rem;
    border: 1px solid #fe7739;
    color: #fe7739
  }

  .mat_box_line .starts-num {
    color: #ff4c73;
    margin-left: .5rem
  }

  .mat_box_line .mat_box_img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: #ccc;
    position: relative;
    overflow: hidden
  }

  .mat_box_line .mat_box_img img {
    width: 100%;
    position: relative;
    z-index: 4;
    object-fit: cover;
    height: 100%;
    border-radius: 50%;
  }

  .registerfr {
    flex: 1;
    padding-left: 1rem
  }

  .mat_box_line .p1 {
    height: 1.4rem;
    line-height: 1.4rem
  }

  .mat_box_line .p1 .yname {
    font-size: 1.18rem;
    color: #333;
    font-weight: 600
  }

  .mat_box_line .p1 .yisli {
    font-size: 1.03rem;
    color: #8f8f8f;
    margin-left: .2rem
  }

  .mat_box_line .p2 {
    font-size: .923rem;
    color: #999;
    height: 1.923rem;
    line-height: 1.923rem;
    margin-top: .2rem
  }

  .mat_box_line .psie {
    width: 70%;
    height: auto;
    line-height: initial;
    min-height: 35px
  }

  .mat_box_line .scores {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative
  }

  .mat_box_line .scores .ptime {
    position: absolute;
    right: 0;
    top: 50%;
    color: #ff4c73;
    font-size: 1.05rem;
    transform: translateY(-50%)
  }

  .mat_box_line .starts {
    height: 1.923rem;
    align-items: center;
    display: flex;
    line-height: 1.923rem
  }

  .mat_box_line .starts img {
    float: left;
    width: 1.2rem;
    height: 1.2rem
  }

  .mat_box_line .citem_div4 {
    margin-top: .5rem
  }

  .mat_box_line .citem_div4 .cactive1 {
    padding: .2rem .7rem;
    color: #c3a3ff;
    background: #f1efff;
    border-radius: 500px;
    margin-right: .5rem;
    font-size: .88rem
  }

  .active_ {
    color: #ff7e37
  }

  .textssg {
    padding: 1rem;
    position: absolute;
    opacity: 0;
    left: 50%;
    display: none;
    transform: translateX(-50%);
    color: #666;
  }

  .doula_lic {
    width: 100%;
    position: relative;
    margin-bottom: .5rem;
  }

  .doula_lic img {
    width: 100%;
  }

  .doula_flag {
    position: absolute;
    right: 1rem;
    top: .5rem;
    color: #8f8f8f;
    font-size: .96rem;
  }
  .more-load{
    text-align: center;
  }
</style>
