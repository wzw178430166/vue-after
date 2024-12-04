<template>
  <div class="store_list">
    <Hearder :head_name="head_name" />
    <div class="doula_lic" id="mas_content">
      <!-- <span class="doula_flag" id="mastst_img">我已了解，关闭本提示</span> -->
      <img src="https://app.yupingmama.com/doula/tpl_ypmm/images/liuichens1.png">
    </div>
    <div class="registered_place_box">
      <div class="registered_place_box_" data-loaded="0">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="registered_place_box_line">
              <div class="registered_place_box_line_l">
                <img src="../../../static/images/icon_tou1.png">
              </div>
              <div class="registered_place_box_line_r">
                <div class="p1">
                  {{item.realname}}
                  <span class="yisli" style="display:none;">广东玉萍妈妈母婴健康管理科技有限公司</span>
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
                    <div class="starts-num">
                      <span>5分</span>
                    </div>
                    <div class="registfont">5.85km</div>
                  </div>
                </div>
                <div class="m-loaction">{{item.discirpt}}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="more-load" v-if="finished">到底啦〜想不到你看到了这里^_^</div>
    <input type="hidden" value="1" id="page">
  </div>
</template>
<script>
  import Hearder from '../../components/Hearder.vue';
  import '../../assets/js/setFontSize.js';
  import 'mint-ui/lib/style.css';
  import {
    Indicator
  } from 'mint-ui';
  import {
    getstoreList
  } from '@/api/store';
  import {
    getDoulaList
  } from '@/api/doula'
  export default {
    name: 'store_list',
    data() {
      return {
        head_name: '周边门店',
        page: 1,
        loaded: 0,
        list: [],
        finished: false,
      }
    },
    components: {
      Hearder,
    },
    created() {
      this.getData()
    },
    methods: {
      getData(e) {
        Indicator.open();
        let param = {
          page: this.page,
          // limit: this.limit
        }
        getDoulaList(param).then((res) => {
          console.log(res.data);
          Indicator.close();
          if (res.data.length == 0) {
            //数据全部加载完成
            this.loaded = 1;
            alert('数据全部加载完成');
            this.finished = true;
          } else {
            this.finished = false;
          }
          this.list = this.list.concat(res.data); //追加数据
          this.page++;
        }).catch(() => {
          console.log('我是第二个catch的回调函数')
          return;
        })
      },
    },
    mounted() {
      var _this = this;
      window.addEventListener('scroll', function () {
          var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
          var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
          var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
          if (0 == _this.loaded) {
            if (scr <= 0) {
              console.log("滚动条已经到达顶部为0");
            }
            if (scr >= scrHeight - clientHeight) {
              console.log("滚动条已经到达底部为" + scr);
              _this.getData();
            }
          }
        },
        true);
    },
    destroyed() {
      //window.removeEventListener('scroll');
    }
  }

</script>
<style lang="" scoped>
  .store_list {}

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

  .headerBoxCircle {
    height: 3.8rem;
    z-index: 999;
  }

  .headerBoxCircle p {
    height: 3.8rem;
    line-height: 3.8rem;
  }

  .m-head {
    padding: 1rem .19rem 1rem .19rem;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    background: #ffffff;
    z-index: 999;
  }

  .m-head .head-query {
    margin-top: .2rem;
    width: 90%;
    margin: 0 auto;
    height: 2.89rem;
    padding-left: 2rem;
    background: #f5f4f7 url(/index/style2/images/magnifier.png) no-repeat 2.8rem center;
    padding-left: 4.5rem;
    background-size: 1rem;
    border-radius: 500px;
    border: 1px solid #ececec;
  }

  .head-query input {
    width: 90%;
    height: 100%;
    border: 0;
    outline: none;
    margin: 0;
    padding: 0;
    background: #f5f4f7;
    padding-left: .2rem;
  }


  .n21 {
    width: 5.5rem;
    border: 1px solid #2CACFC;
    background: #2CACFC;
    margin: 11% auto;
    text-align: center;
    color: #FFF;
    padding: 3px;
    border-radius: 15px;
  }

  .n22 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.923rem;
    color: #999;
  }

  .registered_place_box_line_r {
    width: 11.165rem;
  }

  .registered_place_box_line_r .p1 {
    font-size: 1.1rem;
  }

  .registered_place_box_line .registfont {
    color: #999;
    text-align: right;
    flex: 2;
  }

  body {
    background-color: #ffffff;
  }

  .header_box {
    background-color: #fff;
    border-bottom: 1px solid #e3e2e7;
  }

  .header_box .midden {
    color: #1d1d1d;
  }

  .registered_place_box,
  .registered_place_option,
  .registered_place_box_,
  .registered_place_box_line {
    width: 100%;
    overflow: hidden;
  }

  .registered_place_option {
    border-bottom: 1px solid #e3e3e7;
    position: relative;
    z-index: 6;
    background-color: #ffffff;
  }

  .registered_place_option li {
    width: 33.3%;
    float: left;
    margin: 0.923rem auto;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    border-right: 1px solid #c8c8c8;
    color: #101d37;
    font-size: 1.1rem;
  }

  .registered_place_option li:last-child {
    border-right: none;
  }

  .registered_place_option i {
    margin-left: 6px;
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid #515151;
  }

  .registered_place_box_line {
    padding: 0.923rem 0.923rem 0.923rem 0.923rem;
    background-color: #ffffff;
    display: flex;
  }

  .registered_place_box_line .orders {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    border-radius: 500px;
    width: 5.5rem;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    font-size: .75rem;
    border: 1px solid #fe7739;
    color: #fe7739;
  }

  /**/
  .registered_place_choice {
    width: 100%;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 12.1rem;
    height: 100%;
    display: none;
  }

  .registered_place_choice .registered_place_choice_ {
    width: 100%;
    overflow: hidden;
  }

  .registered_place_choice_ .choice_box {
    background-color: #fff;
  }

  .registered_place_choice_ .choice_box ul {
    overflow: scroll;
  }

  .registered_place_choice_ .choice_box li {
    width: 100%;
    line-height: 3.346rem;
    height: 3.346rem;
    border-bottom: 1px solid #ddd8cd;
    padding-left: 10%;
    position: relative;
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
    border-top: 7px solid #515151;
  }

  .registered_place_choice_ .bg_color {
    display: block;
    position: absolute;
    top: auto;
  }

  .registered_search {
    width: 93.33%;
    height: 2.615rem;
    line-height: 2.615rem;
    margin: 0.769rem auto;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #e4e4e4;
    text-align: center;
  }

  .registered_search img {
    width: 1rem;
    height: 1rem;
    vertical-align: sub;
  }

  .registered_search input {
    width: 18.423rem;
  }

  .registered_search input::-ms-input-placeholder {
    color: #666
  }

  /* Internet Explorer 10+*/
  .registered_search input::-webkit-input-placeholder {
    color: #666
  }

  /* WebKit browsers*/
  .registered_search input::-moz-placeholder {
    color: #666;
  }

  /* Mozilla Firefox */
  /**/
  .registered_place_box_line_l img {
    width: 100%;
    border-radius: .35rem;
    float: left;
    height: 100%;
    object-fit: cover;
  }

  .registered_place_box_line_l {
    flex: 0.4;
    position: relative;
    margin-right: .8rem;
    height: 6.3rem;
  }

  .registered_place_box_line_r {
    flex: 0.7;
  }

  .registered_place_box_line_r .p1,
  .p2 {
    width: 100%;
  }

  .registered_place_box_line_r .p1 {
    line-height: 1.4rem;
    color: #000;
    ;
    font-weight: 700;
  }

  .registered_place_box_line_r .scores {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .registered_place_box_line_r .starts {
    height: 1.923rem;
    align-items: center;
    display: flex;
    line-height: 1.923rem;
    flex: 1;
  }

  .registered_place_box_line_r .starts img {
    float: left;
    width: 1.2rem;
    height: 1.2rem;
  }

  .registered_place_box_line_r .starts-num {
    font-size: .85rem;
    color: #666;
    margin-left: .4rem;
  }


  .registered_place_box_line_r .p1_r {
    color: #999;
    font-size: 0.923rem;
  }

  .registered_place_box_line_r .p2 {
    font-size: 0.923rem;
    color: #999;
    height: 1.923rem;
    line-height: 1.923rem;
    margin-top: .5rem;
  }

  .registered_place_box_line_r .psie {
    width: 150%;
    display: flex;
    align-items: center;
  }

  .registered_place_box_line_r .psie img {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: .3rem;
  }

  .registered_place_box_line_r .psie span {
    border-radius: 500px;
    margin-right: .42rem;
  }

  .registered_place_box_line_r .psie span:empty {
    display: none;
  }

  .m-loaction {
    width: 100%;
    min-height: 3rem;
    font-size: .95rem;
    /* clear: both; */
    /* display: flex; */
    color: #999999;
    /* align-items: center; */
    word-wrap: break-word;
    margin-top: .2rem;
  }

  .m-loaction img {
    width: 1.2rem;
    height: 1.4rem;
    margin-right: .4rem;
  }

  .header_box {
    height: 3.8rem;
  }

  .header_box .midden {
    height: 3.8rem;
    line-height: 3.8rem;
  }

  .h50 {
    height: 3.8rem;
  }

  .bg_color {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    display: none;
  }


  .listitem1 {

    display: flex;

  }

  .listitem {

    background: #ffffff;

    margin-bottom: .5rem;

    position: relative;

    overflow: hidden;

    width: 100vw;

  }

  .listitem1 .artic {

    flex: 3;

    padding: 1rem 1rem 0.9rem 0rem;

    position: relative;

    width: 100vw;

  }

  .listitem .artic {

    width: 92%;

    margin: 0 auto;

    text-align: justify;

    padding-top: .7rem;

  }

  .title {

    color: #171717;

    font-size: 1.15rem;

    font-weight: 600;

    margin-top: .3rem;

  }

  .piece {

    color: #656565;

    font-size: 0.9rem;

    position: absolute;

    bottom: .66rem;
    display: flex;
    justify-content: space-between;

    width: 90%;
    text-align: right;

  }

  .piece .piexe_t {
    color: #ff4c73;

    font-size: 1.32rem;

    margin-top: -.3rem;
  }

  .piece .piexe_w {
    margin-top: -.3rem;
  }

  .pide_img img {
    width: 100%;
  }

  .listitem1 .img {

    flex: 1.5;

    padding: 1rem;

  }

  .listitem1 .zoomImage {

    height: 6.96rem;
    border-radius: .3rem;

    margin: 0 auto;
    padding-bottom: 0;

  }

  .zoomImage {

    background-size: cover;

    background-position: center center;

  }

  .citem_div2 {
    color: #666;

    font-size: .95rem;

    line-height: 1rem;

    font-weight: 500;

    margin-top: .6rem;
  }

  .citem_div5 {
    color: #666;



    text-overflow: ellipsis;

    overflow: hidden;

    word-break: break-all;

    font-size: .85rem;
    line-height: 1rem;

    font-weight: 500;

    margin-top: .4rem;
  }

  .citem_div3 {
    color: #2196F3;

    font-size: .85rem;

    display: flex;

    margin-top: .5rem;
  }

  .citem_div3 span {
    padding: 0rem .6rem;
    border: 1px solid #2196F3;
    margin-right: .6rem;
    border-radius: 500px;
  }



  #ketangs .listitem1 .artic {

    flex: 3;

    padding: 1rem 0rem 0.9rem 1rem;

    position: relative;

    width: 100vw;

  }

  #ketangs .listitem1 .img {

    flex: 2;

    padding: 1rem;

  }

  .misttq {
    text-align: center;
    padding: 1rem;
    color: #666;
    font-size: 1.02rem;
    display: none;
  }

  .reginsged_span {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgb(95 95 89 / 50%);
    padding: .1rem .5rem;
    color: #fff;
    border-bottom-right-radius: .3rem;
    font-size: .92rem;
  }

</style>
