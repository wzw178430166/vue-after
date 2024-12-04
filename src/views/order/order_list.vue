<template>
  <div>
       <Hearder :head_name="head_name"/>
        <div class="m-head" data-isshow="1">
        <form action="" method="get" class="head-query" onsubmit="search_data('text');return false;">
            <input type="text" id="k" placeholder-color="#999" placeholder="输入关键词快速搜索项目">
        </form>
    </div>
    <div class="registered_place_option" id="registe_id">
        <ul>
            <li class="tab_type" data-fenglei="0">项目类型<i class="fa fa-caret-down"></i></li>
            <li class="tab_order" data-distance="1">价格排序<i class="fa fa-caret-down"></i></li>
        </ul>
    </div>
    <div class="registered_place_choice" id="register" style="display: none;">
        <div class="registered_place_choice_" style="display:none;">
            <div class="choice_box choice_box1">
                <ul class="type">
                    <!-- <li class="active" da_sort="1"><i class="fa fa-angle-down fa-2x"></i>课程类型</li> -->
                </ul>
                <!-- <li da_sort="2">人气优先</li></ul>-->
            </div>
            <div class="bg_color"></div>
        </div>
        <div class="registered_place_choice_" style="">
            <div class="choice_box choice_box2">
                <ul class="order">
                    <!--  -->
                </ul>
            </div>
            <div class="bg_color"></div>
        </div>
        <div class="registered_place_choice_" style="">
            <div class="choice_box choice_box3">
                <ul class="series">
                    <li class="active" da_sort="1"><i class="fa fa-angle-down fa-2x"></i>系列课</li>
                </ul>
            </div>
            <div class="bg_color"></div>
        </div>
    </div>
    <!-- header -->
    <!-- contaienr -->
    <div class="contaienr">
        <div class="order_item" onclick="goo('/tv/tv_app/order/style1/order_inner.html')">
            <p class="order_name">
                高德地图API车辆航迹图程序开发
            </p>
            <p class="tag_box">
                <span class="tag_btn">
                    定制开发类
                </span>
                <span class="tag_btn">
                    40个工作天
                </span>
            </p>
            <p class="order_info">
                <span class="price"> 100,000- 150,000</span>
                <span class="view_count">
                    123人浏览
                </span>
                <span class="bid_count">
                    4人已投标
                </span>
            </p>

        </div>
        <div class="order_item">
            <p class="order_name">
                高德地图API车辆航迹图程序开发
            </p>
            <p class="tag_box">
                <span class="tag_btn">
                    定制开发类
                </span>
                <span class="tag_btn">
                    40个工作天
                </span>
            </p>
            <p class="order_info">
                <span class="price"> 100,000- 150,000</span>
                <span class="view_count">
                    123人浏览
                </span>
                <span class="bid_count">
                    4人已投标
                </span>
            </p>

        </div> <div class="order_item">
            <p class="order_name">
                高德地图API车辆航迹图程序开发
            </p>
            <p class="tag_box">
                <span class="tag_btn">
                    定制开发类
                </span>
                <span class="tag_btn">
                    40个工作天
                </span>
            </p>
            <p class="order_info">
                <span class="price"> 100,000- 150,000</span>
                <span class="view_count">
                    123人浏览
                </span>
                <span class="bid_count">
                    4人已投标
                </span>
            </p>

        </div> <div class="order_item">
            <p class="order_name">
                高德地图API车辆航迹图程序开发
            </p>
            <p class="tag_box">
                <span class="tag_btn">
                    定制开发类
                </span>
                <span class="tag_btn">
                    40个工作天
                </span>
            </p>
            <p class="order_info">
                <span class="price"> 100,000- 150,000</span>
                <span class="view_count">
                    123人浏览
                </span>
                <span class="bid_count">
                    4人已投标
                </span>
            </p>

        </div> 
    </div>
    <!-- container -->
    <TabbarHtml v-bind:active=1 />
  </div>
</template>

<script>
  import TabbarHtml from '../../components/Tabbar.vue';
  import Hearder from '../../components/Hearder.vue';
import  '../../assets/js/setFontSize.js';
  export default {
    name: 'App',
    data(){
        return{
             head_name:'接单专区'
        }
    },
    mounted(){
        //this.wen_getCateg();
    },
    components: {
      Hearder,
      TabbarHtml
    },
    methods:{

    }
  }
</script>
    <style scoped>
    @import  '../../assets/css/appstyle.css';
        body {
            background: #f7f7f7
        }

        .m-head {
            padding: 1rem .19rem 1rem .19rem;
            overflow: hidden;
            left: 0;
            top: 0;
            width: 100%;
            background: #fff;
        }

        .m-head .head-query {
            margin-top: .2rem;
            width: 90%;
            margin: 0 auto;
            height: 2.7rem;
            padding-left: 2rem;
            background: #f5f4f7 url(https://ypmm.yjxun.cn/index/style2/images/magnifier.png) no-repeat 2.7rem center;
            padding-left: 4.5rem;
            background-size: 1rem;
            border-radius: 500px;
            border: 1px solid #ececec;
            position: relative
        }

        .head-query svg {
            position: absolute;
            right: 1rem;
            width: 1.2rem;
            height: 1.2rem;
            top: 50%;
            transform: translateY(-50%)
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

        .header_box {
            height: 3.8rem;
            z-index: 99999
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

        .listitem1 {
            display: flex
        }

        .listitem {
            background: #fff;
            /*margin-bottom:.5rem;*/
            position: relative;
            overflow: hidden;
            width: 100vw
        }

        .listitem1 .artic {
            flex: 3;
            padding: 1rem 1rem .9rem 0;
            position: relative;
            width: 100vw
        }

        .listitem .artic {
            /*width:92%;*/
            margin: 0 auto;
            text-align: justify;
            padding-top: .7rem
        }

        .title {
            color: #343434;
            font-size: 1.13rem;
            margin-top: .3rem;
            font-weight: 600
        }

        .piece {
            color: #656565;
            font-size: .92rem;
            position: absolute;
            bottom: .9rem;
            display: flex;
            justify-content: space-between;
            width: 93%;
            text-align: right
        }

        .piece .piexe_t {
            color: #ff4c73;
            font-size: 1.32rem
        }

        .piece .piext-k {
            color: #999
        }

        .pide_img img {
            width: 100%
        }

        .listitem1 .img {
            flex: 1.8;
            padding: 1rem 0.5rem 1rem 0.5rem
        }

        .listitem1 .zoomImage {
            height: 6.56rem;
            border-radius: .3rem;
            margin: 0 auto;
            position: relative
        }

        .piece .piext-k {
            color: #e54a4a;
            float: right;
            border-radius: 500px;
            font-size: .85rem;
            padding: 0 .6rem;
            background: #ffefef
        }

        .zoomImage {
            background-size: cover;
            background-position: center center
        }

        .citem_div2 {
            color: #999;
            font-size: 1rem;
            line-height: 1.2rem;
            font-weight: 500;
            margin-top: .65rem
        }

        .citem_div5 {
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            font-size: .85rem;
            line-height: 1rem;
            font-weight: 500;
            margin-top: .4rem
        }

        .citem_div3 {
            color: #2196f3;
            font-size: .85rem;
            display: flex;
            margin-top: .5rem
        }

        .citem_div3 span {
            padding: 0 .6rem;
            border: 1px solid #2196f3;
            margin-right: .6rem;
            border-radius: 500px
        }

        #ketangs .listitem1 .artic {
            flex: 3;
            padding: 1rem 0 .9rem 1rem;
            position: relative;
            width: 100vw
        }

        #ketangs .listitem1 .img {
            flex: 2;
            padding: 1rem
        }

        .listitem1 .zoomImage .zoomtitle {
            width: 100%;
            height: 2rem;
            line-height: 2rem;
            position: absolute;
            padding-right: .3rem;
            bottom: 0;
            font-size: .92rem;
            right: 0;
            text-align: right;
            color: #fff;
            background: rgb(43 43 43 / 20%)
        }

        .zoomImage_img {
            width: 100%;
            height: 100%;
        }

        .registered_place_box_line .registered_place_box_line_r {
            width: 11.165rem
        }

        .registered_place_box_line .registered_place_box_line_r .p1_l {
            font-size: 1.1rem
        }

        .registered_place_box_line .registfont {
            color: #999;
            position: relative;
            top: 2.2rem
        }

        .registered_place_box,
        .registered_place_box_,
        .registered_place_box_line,
        .registered_place_option {
            width: 100%;
            overflow: hidden
        }

        .registered_place_option {
            position: relative;
            z-index: 6;
            background-color: #fff
        }

        .registered_place_option li {
            width: 50%;
            float: left;
            margin: .923rem auto;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            border-right: 1px solid #c8c8c8;
            color: #101d37;
            font-family: SourceHanSansCN-Regular;
            font-size: 1.153846rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.384615rem;
            letter-spacing: 0px;
            color: #48474f;
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

        .registered_place_box_line {
            padding: 1.1rem .923rem .923rem .923rem;
            position: relative;
            margin-bottom: 1rem;
            background-color: #fff
        }

        .registered_place_box_line .orders {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            border-radius: 500px;
            width: 4.5rem;
            text-align: center;
            height: 2rem;
            line-height: 2rem;
            font-size: .75rem;
            border: 1px solid #fe7739;
            color: #fe7739
        }

        .registered_place_choice {
            width: 100%;
            overflow: hidden;
            position: fixed;
            left: 0;
            top: 8.1rem;
            z-index: 9999999;
            height: 100%;
            display: none
        }

        .registered_place_choice .registered_place_choice_ {
            width: 100%;
            overflow: hidden
        }

        .registered_place_choice_ .choice_box {
            background-color: #fff;
            margin-top: 3.2rem
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
            border-radius: .769231rem;
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

        .contaienr {
            padding: 0 .769231rem;
            margin-top: 1.153846rem;
            width: 100%;
        }

        .order_item {
            width: 100%;
            height: 7.692308rem;
            background-color: #ffffff;
            border-radius: .384615rem;
            padding: 1rem .884615rem;
        }
        .order_item:nth-child(n+2){
            margin-top: 1rem;
        }
        .order_name {
            font-family: SourceHanSansCN-Regular;
            font-size: 1.153846rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.384615rem;
            letter-spacing: 0px;
            color: #48474f;
        }

        .tag_box {
            margin-top: .807692rem;
        }

        .tag_btn {
            font-family: SourceHanSansCN-Regular;
            font-size: .846154rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.384615rem;
            letter-spacing: 0px;
            color: #3399ff;
            width: 5.576923rem;
            height: 1.538462rem;
            background-color: #daffff;
            border-radius: .769231rem;
            display: inline-block;
        }

        .tag_box .tag_btn:nth-child(n+2) {
            margin-left: .692308rem;
        }

        .order_info {
            margin-top: .846154rem;
        }

        .price {
            font-family: FZYDZHJW--GB1-0;
            font-size: 1.076923rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.461538rem;
            letter-spacing: 0px;
            color: #ff4c73;
            float: left;
            overflow: hidden;
        }

        .view_count,
        .bid_count {
            float: right;
            font-family: SourceHanSansCN-Regular;
            font-size: 1rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.153846rem;
            letter-spacing: 0px;
            color: #666666;
        }
    </style>
