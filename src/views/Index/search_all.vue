<template>
  <div class="content">
      <div class="container_top">
        <div class="m-head"><i class="m-head-back" @click="$router.back(-1)"></i>
            <div class="search_box">
                <img src="../../assets/images/search.png" class="search" onclick="search()">
                <input type="text" value="" id="search">
            </div>
        </div>
        <div class="m-nav">
            <ul>
                <li class="active" data-type="commodity">商品</li>
                <li data-type="news">文章</li>
                <li data-type="course">课程</li>
                <li data-type="maternity">月嫂</li>
                <li data-type="serve">服务</li>

            </ul>
        </div>
    </div>
    <div class="m-content">
        <div class="m-collect" id="J_collect">
            <div class="search_content">
                <ul class='commodity'>
                    <div class="empty">暂无数据</div>
                </ul>
                <ul class="news">
                    <div class="empty">暂无数据</div>
                </ul>
                <ul class="course">
                    <div class="empty">暂无数据</div>
                    </li>
                </ul>
                <ul class="maternity">
                    <div class="empty">暂无数据</div>
                    </li>
                </ul>
                <ul class="serve">
                    <div class="empty">暂无数据</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
 import  '../../assets/js/setFontSize.js';
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

 <style scoped>
    @import '../../assets/css/appstyle.less'; 
    .m-head {
    position: relative;
    width: 100%;
    padding: 0 3%;
    height: 3.8rem;
    background-color: #fff;
}
 .m-head .m-head-back {
    position: absolute;
    left: 3%;
    top: 0;
    width: 3rem;
    height: 3.8rem;
    background: url(../../assets/images/goback_b.png) no-repeat 0 center;
    background-size: 40%;
}
        html {
            background-color: #f2f2f2;
        }

        .m-nav {
            padding: 0 1rem;
            background-color: #ffffff;
            position: relative;
            height: 3.2rem;
        }

        .m-content {
            margin-top: 7rem;
        }

        .m-nav:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #e0e0e0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
        }

        .data-record ul li:last-child .r-info:after {
            border: 0;
        }

        .m-nav ul {
            overflow: hidden;
        }

        .m-nav ul li {
            float: left;
            width: 20%;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
        }

        .m-nav ul li.active {
            color: #e93535;
            border-bottom: 1px #e93535 solid;
        }


        .m-collect ul li {
            background-color: #fff;
            margin-top: 1rem;
            border-radius: .4rem;
            position: relative;
        }

        .m-collect ul li:last-child {
            margin-bottom: 1rem;
        }

        .m-collect ul li .collect-top {
            overflow: hidden;
        }

        .collect-top .collect-img {
            width: 6rem;
            height: 4.5rem;
            float: left;
            overflow: hidden;
            background-size: cover;
            background-position: center center;
        }

        .collect-img img {
            width: 100%;
            display: none;
        }

        .collect-top .collect-data {
            float: left;
            margin-left: 1rem;
            width: 72%;
        }

        .collect-data .collect-content {
            line-height: 1.5rem;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .collect-data .collect-title {
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .collect-data .collect-price {
            color: #e93535;
            margin-top: .5rem;
        }

        .m-collect ul li .collect-bottom {
            margin-top: .6rem;
            font-size: .9rem;
            color: #999;
        }

        .collect-bottom span:first-child {
            margin-right: .5rem;
        }

        .operate-cancle {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            padding: .2rem 1rem;
            color: #e93535;
            border-radius: .4rem;
            border: 1px #e93535 solid;
        }

        .empty {
            text-align: center;
            margin-top: 3rem;
            color: #999;
            font-size: .9rem;
        }

        .search {
            height: 1.37rem;
            width: 1.37rem;
            flex-shrink: 0;
            margin-left: 1.5rem;
        }

        .search_box {
            height: 100%;
            width: calc(100% - 5rem);
            margin-left: 3rem;
            display: flex;
            align-items: center;
            background-color: #f5f4f7;
            border-radius: 99px;
            background-clip: content-box;
            padding: 0.8rem 0;
        }

        #search {
            height: 100%;
            flex: 1;
            outline: none;
            border: none;
            background-color: #f5f4f7;
            border-radius: 99px;
            color: #333;
            text-indent: .6rem;
        }

        ul.commodity li {
            overflow: hidden;
            padding: .8rem;

            position: relative;
            background-color: #fff;
        }

        p.pro-title {
            font-size: 1.1rem;
            height: 3rem;
            line-height: 1.5rem;
            overflow: hidden;
        }

        .old-price {
            margin: .3rem 0;
            font-size: .9rem;
            /* color: #fd7070; */
            color: #ff3737;
            font-weight: bold;
        }

        p.now-price {
            color: #ff3737;
            font-size: 1.2rem;
            font-weight: bold;
        }

        .pro-buy-btn {
            position: absolute;
            right: .8rem;
            bottom: .8rem;
            padding: .4rem 1.1rem;
            border-radius: 3px;
            background-color: #f23030;
            color: #fff;
            font-size: .9rem;
        }

        ul.commodity li .pro-img {
            width: 6rem;
            height: 6rem;
            float: left;
            margin-right: .8rem;
            overflow: hidden;
        }

        .pro-img img {
            width: 100%;
        }

        .course_item {
            display: flex;
        }

        .course_tit {
            color: #343434;
            font-size: 1.13rem;
            margin-top: .3rem;
            font-weight: 600;

        }

        .course_tic {
            color: #999;
            font-size: 1rem;
            line-height: 1.2rem;
            font-weight: 500;
            margin-top: .65rem;
        }

        .course_item .course_img {
            width: 40%;
            flex-shrink: 0;
        }

        .course_img img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .course_info {
            margin-left: .8rem;
        }

        .price_info {
            color: #656565;
            font-size: .92rem;
            position: absolute;
            bottom: .9rem;
            display: flex;
            justify-content: space-between;
            width: 93%;
            text-align: right;
        }

        .piexe_t {
            color: #ff4c73;
            font-size: 1.32rem;
        }

        .piext {
            color: #e54a4a;
            float: right;
            border-radius: 500px;
            font-size: .85rem;
            padding: 0 .6rem;
            background: #ffefef;
        }

        .family_care,
        .family_care_option,
        .family_care_box,
        .family_care_box1,
        .family_care_box2,
        .family_care_box3 {
            width: 100%;
            overflow: hidden;
            background-color: #fff;
        }

        .family_care_box1,
        .family_care_box2,
        .family_care_box3 {
            padding: 10px 0px;
        }

        .family_care_box1,
        .family_care_box3 {
            padding: 10px;
        }

        .family_care_box1 .family_care_box1_r {
            width: 35%;
            height: 5.5rem;
        }

        .fr {
            float: right;
        }

        .family_care_box1_r .pic {
            width: 100%;
            float: left;
            object-fit: cover;
            height: 100%;
        }

        .family_care_box1 .family_care_box1_l {
            width: 60%;
        }

        .family_care_box1_l .title {
            width: 100%;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
            text-align: left;
        }

        #J_collect {
            width: 100vw;
            overflow: hidden;
            display: flex;

        }

        #J_collect ul {
            width: 100vw;
            flex-shrink: 0;
        }

        .search_content {
            width: 500vw;
            display: flex;
            flex-wrap: nowrap;
        }

        .search_content ul {
            width: 100vw;
            padding: 0 .7rem;
        }

        .container_top {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 99999;
        }

        .serve_img {
            width: 40%;
            border-radius: .3rem;
        }

        .serve_img img {
            border-radius: .4rem;
        }

        .serve li {
            display: flex;
        }

        .serve li .pro-info {
            margin-left: .8rem;
        }

        .mat_box_line {
            display: flex;
            break-after: avoid;
            margin: 0 auto;
            position: relative;
            width: 93%;
            padding: 1rem 0;
            border-bottom: 1px solid #ececec;
        }

        .mat_box_line .mat_box_img {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background: #ccc;
            position: relative;
            overflow: hidden;
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
            padding-left: 1rem;
        }

        .mat_box_line .p1 {
            height: 1.4rem;
            line-height: 1.4rem;
        }

        .fl {
            float: left;
        }

        .mat_box_line .p2 {
            font-size: .923rem;
            color: #999;
            height: 1.923rem;
            line-height: 1.923rem;
            margin-top: .2rem;
        }

        .mat_box_line .scores {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
        }

        .mat_box_line .starts {
            height: 1.923rem;
            align-items: center;
            display: flex;
            line-height: 1.923rem;
        }

        .mat_box_line .starts img {
            float: left;
            width: 1.2rem;
            height: 1.2rem;
        }

        .mat_box_line .scores .ptime {
            position: absolute;
            right: 0;
            top: 50%;
            color: #ff4c73;
            font-size: 1.05rem;
            transform: translateY(-50%);
        }

        .mat_box_line .psie {
            width: 70%;
            height: auto;
            line-height: initial;
            min-height: 35px;
        }

        .mat_box_line .p2 {
            font-size: .923rem;
            color: #999;
            line-height: 1.923rem;
            margin-top: .2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
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
            color: #fe7739;
        }
    </style>