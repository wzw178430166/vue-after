<template>
    <div class="page">
        <Hearder :head_name="head_name"/>
      
    </div>
</template>

<script>
    import Hearder from '../../components/Hearder.vue';
    import TabbarHtml from '@/components/Tabbar1.vue';
    import  '../../assets/js/setFontSize.js';
  export default {
    name: 'course_details',
      data(){
        return{
             head_name:'课程介绍'
        }
    },
    components:{
      Hearder,
      TabbarHtml,
     
    },
    props: {
    
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="less" scoped>
  @import '../../assets/css/appstyle.less'; 
    .headerBoxCircle {
      z-index: 99;
      border: 0
    }

    body {
      background: #fff
    }

    .addfriends {
      position: fixed;
      width: 100%;
      display: flex;
      align-items: center;
      height: 3.8rem;
      justify-content: space-between;
      background: #fff;
      line-height: 3.8rem;
      font-size: 1.1rem;
      text-align: center;
      color: #101010;
      bottom: 0
    }

    .addfriends_left {
      display: flex;
      align-items: center;
      flex: 1;
      font-size: 0.9rem;
    }

    .addfriends_left img {
      width: 1.3rem;
      margin: 0 .2rem 0 1rem;
      vertical-align: middle
    }

    .addfriends_right {
      width: 15rem;
      text-align: center;
      background-color: #ff4c73;
      color: #fff;
      flex: 0.7;
    }

    .addfriends_left .addf_right {
      margin-right: 1rem
    }

    .co-content {
      width: 100%
    }

    .co-content .co-img {
      width: 100%
    }

    .co-content .co-img img {
      width: 100%;
      height: 15rem
    }

    .co-box {
      width: 100%;
      padding: 0 1rem
    }

    .co-box .co-box-p1 {
      font-size: 1.25rem;
      color: #333;
      margin-top: 1.2rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-between
    }

    .co-box .co-box-p2 {
      font-size: 1.02rem;
      color: #b8b8b8;
      margin-top: .82rem
    }

    .co-box .co-box-p3 {
      font-size: 1.02rem;
      display: flex;
      color: #333;
      margin-top: 1rem;
      justify-content: space-between
    }

    .co-box .co-box-p3 span {
      margin-right: .2rem
    }

    .co-box .co-box-p4 {
      font-size: 1.35rem;
      color: #ff4c73;
      margin-top: 1rem;
      margin-bottom: 1.3rem
    }

    #menu {
      padding-top: 1rem;
      background: #fff
    }

    #menu ul {
      justify-content: space-around;
      display: flex
    }

    #menu li {
      width: 50%;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      background-color: #fff;
      overflow: hidden;
      font-size: 1.13rem;
      color: #666
    }

    #menu li .pstyle {
      width: 70%;
      height: 2px;
      background: #ff4c73;
      margin: 1.35rem auto 0 auto
    }

    #menu li.on {
      color: #000;
      font-weight: 600
    }

    #tab-con .tab_itemst {
      width: 100vw;
      position: relative;
      display: none
    }

    .teacher_int {
      width: 100%
    }

    .teacher_int .cont_border {
      width: 90%;
      margin: 1rem auto 1rem auto;
      display: flex;
      height: 6.1rem;
      align-items: center;
      border-radius: .2rem;
      padding: 1rem;
      box-shadow: 1px 1px 7px 2px #e6cece
    }

    .teacher_int .cont_border img {
      width: 4.3rem;
      height: 4.3rem;
      margin-right: 1rem;
      border-radius: 50%
    }

    .teacher_int .cont_border .cont_rights p:nth-child(1) {
      font-size: 1.193rem;
      color: #000;
      font-weight: 600
    }

    .teacher_int .cont_border .cont_rights p:nth-child(2) {
      margin-top: .7rem;
      font-size: .964rem
    }

    .cont-content {
      width: 90%;
      margin: 0 auto;
      color: #333;
      font-size: .975rem;
      text-indent: 2em;
      letter-spacing: .15rem
    }

    #tab-con .on {
      display: block;
      background-color: #fff
    }

    #tab-con .ae {
      width: 3rem;
      height: 3rem;
      background: red
    }

    .henline {
      height: .7rem;
      background: #f6f6f6
    }

    .tcontbox {
      width: 100%
    }

    .tcbox-img {
      width: 100%;
      margin-top: .8rem;
      padding: 0
    }

    .tcbox-img img {
      width: 100%;
      display: block
    }

    #mcover {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .7);
      display: none;
      z-index: 20000
    }

    #mcover img {
      position: fixed;
      right: 18px;
      top: 5px;
      width: 260px;
      height: 180px;
      z-index: 20001
    }

    .m_contewed {
      width: 93%;
      margin: 0 auto
    }

    .m_divedcont {
      padding-bottom: 1rem
    }

    .m_divedcont p:nth-child(2) {
      font-size: .92rem
    }

    .m_divedcont p {
      color: #333;
      font-size: 1.12rem;
      line-height: 2rem
    }

    .m_divedcont p.m_divplist2 {
      font-size: .92rem;
      color: #666
    }

    .m_divedcont p.m_divplist1 .see_pick {
      padding: .2rem .5rem;
      margin-left: .7rem;
      background-color: #ff4c73;
      font-size: .9rem;
      color: #fff;
      border-radius: .3rem
    }

    .m_divedcont p.m_divplist2 .divlis2_left {
      margin-right: .5rem
    }

    .divlist2_num {
      color: #333;
      font-size: 1.1rem;
      margin: 0 .2rem
    }

    .m_divedcont p.m_divplist2 {
      color: #ff4c73 !important
    }

    .m_divedcont p.m_divplist2 .divlist2_num2 {
      color: #ff4c73 !important
    }

    .m_dbox {
      width: 100%;
      display: flex;
      height: 4.5rem;
      line-height: 4.5rem;
      padding: 0 1rem;
      justify-content: space-between
    }

    .m_dbox .mstio {
      color: #ff4c73;
      font-weight: 500
    }

    .m_dbox .mstios {
      color: #919899;
      font-weight: 500
    }

    .m_dbox .mstio .uing {
      display: inline-block;
      width: 1rem;
      margin: 0 .35rem
    }

    .m_dbox .mstios .uings {
      display: inline-block;
      width: 1.15rem;
      margin: 0 .35rem
    }

    .m_dbox span:nth-child(1) {
      font-size: 1.2rem;
      color: #111;
      font-weight: 600
    }

    .m_dbox span:nth-child(1) img {
      vertical-align: middle;
      width: 1rem;
      margin-right: .5rem
    }

    .m_contewed {
      width: 93%;
      margin: 0 auto
    }

    .m_divedcont {
      padding-bottom: 1rem
    }

    .m_divedcont p:nth-child(2) {
      font-size: .92rem
    }

    .m_divedcont p {
      color: #333;
      font-size: 1.12rem;
      line-height: 2rem
    }

    .m_divedcont p.m_divplist2 {
      font-size: .92rem;
      color: #666
    }

    .m_divedcont p.m_divplist1 .see_pick {
      padding: .2rem .5rem;
      margin-left: .7rem;
      background-color: #ff4c73;
      font-size: .9rem;
      color: #fff;
      border-radius: .3rem
    }

    .m_divedcont p.m_divplist2 .divlis2_left {
      margin-right: .5rem
    }

    .divlist2_num {
      color: #333;
      font-size: 1.1rem;
      margin: 0 .2rem
    }

    .m_divedcont p.m_divplist2 {
      color: #ff4c73 !important
    }

    .m_divedcont p.m_divplist2 .divlist2_num2 {
      color: #ff4c73 !important
    }

    .bgpic {
      height: 5rem;
      line-height: 5rem;
      padding: 0 1.5rem 0 .8rem;
      margin-top: .3rem;
      background: #fff3f6;
      width: 93%;
      position: relative;
      margin: 0 auto;
      border-radius: .5rem;
      margin-bottom: 1rem
    }

    .bgpic .m-iteimg {
      display: block;
      height: 5rem;
      line-height: 5rem;
      border-radius: 50%;
      float: left;
      font-size: 1.1rem;
      color: #333
    }

    .bgpic .m-iteimg img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      vertical-align: middle;
      object-fit: cover;
    }

    .doc-ite {
      /*width:70%;*/
      float: left;
      margin-top: 1rem
    }

    .bgpic .doc_guanzhuj {
      z-index: 99;
      position: absolute;
      right: 1rem;
      top: 50%;
      font-size: .95rem;
      text-align: center;
      width: 3.5rem;
      height: 1.8rem;
      border-radius: .3rem;
      border: 1px solid #fa4141;
      color: #fa4141;
      transform: translateY(-50%);
      line-height: 1.8rem
    }

    .doc-ite .docuname {
      font-size: 1.15rem;
      color: #0c0c0c;
      margin-right: .5rem
    }

    .docunamess {
      font-size: 1.15rem;
      color: #0c0c0c;
      margin-right: .3rem
    }

    .doc-ite p {
      padding-left: .5rem;
      margin-bottom: .2rem;
      color: #999
    }

    .m-videcont {
      width: 100%;
      text-align: center;
      height: 14.457rem;
      margin: 0 auto
    }

    .m-videcont .m-video {
      width: 100%;
      object-fit: cover;
      height: 100%
    }

    .no_data {
      display: block;
      width: 100%;
      height: 12rem;
      text-align: center;
      padding: 1rem;
      color: #666;
      font-size: .95rem
    }

    article {
      display: flex;
      padding: 1rem;
      align-items: center
    }

    .Rev_left {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 5.884615rem;
      flex-shrink: 0;
      padding-right: 1rem
    }

    .fen {
      color: #ff4c73;
      font-size: 1.461538rem
    }

    .xin svg {
      height: .923077rem;
      width: .923077rem
    }

    .Rev_right {
      border-left: 1px solid #8f8f8f;
      padding-left: 1rem
    }

    .Rev_right ul li {
      display: flex;
      align-items: center;
      font-size: 1.076923rem
    }

    .star svg {
      height: 1.653846rem;
      width: 1.653846rem
    }

    .star svg+svg {
      margin-left: .5rem
    }

    .star {
      display: inline-block;
      margin-left: 2rem
    }

    .pinrun {
      width: 100%;
      background: #fff;
      padding: 0 1rem 1rem 1rem
    }

    .pinrun_top {
      display: flex;
      justify-content: space-between;
      align-items: center
    }

    .user_inf {
      display: flex;
      align-items: center
    }

    .pinrun_item {
      padding: .5rem 1rem;
      background: #f9f9f9;
      border-radius: .5rem;
      margin-top: 1rem
    }

    .pinrun_body {
      padding: .5rem 0
    }

    .bottom_pun {
      margin-top: 1.5rem;
      background-color: #fff;
      flex: 1
    }

    .img-responsive {
      height: 2.461538rem;
      width: 2.461538rem;
      margin-right: .7rem;
      border-radius: 50%
    }

    .m_divedcont p.m_divplist1 .see_pick {
      padding: .2rem .5rem;
      margin-left: .7rem;
      background-color: #ff4c73;
      font-size: .9rem;
      color: #fff;
      border-radius: .3rem
    }

    .content_boxed {
      display: none
    }

    #content_boxedss .m-fun {
      background-color: #fff;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem
    }

    #content_boxedss .m-fun ul li {
      padding: 0 1rem;
      position: relative;
      height: 3.5rem;
      line-height: 3.5rem;
      border-bottom: 1px solid #f6f6f6
    }

    #content_boxedss .btn_sunbimte {
      width: 100%;
      height: 3.5rem;
      line-height: 3.5rem;
      color: #fff;
      background-color: #ff4c73;
      text-align: center;
      margin: 0;
      border-radius: 0;
      margin-bottom: 0
    }

    #content_boxedss .m-fun ul li .m-icon {
      height: 5rem !important
    }

    #content_boxedss .m-fun ul li:nth-child(1) {
      height: 3.5rem;
      line-height: 3.5rem;
      display: flex;
      border-bottom: 0;
      justify-content: space-between
    }

    #content_boxedss .m-fun ul li:nth-child(1) .m-iteimg {
      display: block;
      height: 5rem;
      line-height: 5rem
    }

    #content_boxedss .m-fun ul li:nth-child(1) img {
      width: 1.2rem;
      vertical-align: middle
    }

    #content_boxedss .m-fun ul li span {
      font-size: 1.1rem;
      display: inline-block;
      line-height: 3.5rem;
      color: #7b7777
    }

    #content_boxedss .m-fun ul li .m-usemsg {
      float: right;
      font-size: 1.1rem;
      color: #030303;
      position: relative;
      display: inline-block;
      line-height: 3.5rem
    }

    .zoom_title {
      float: left;
      font-size: .95rem
    }

    #content_boxedss .m-fun ul li .icon-arrow-r {
      float: right;
      display: block;
      width: 2rem;
      height: 3.5rem;
      background: url(https://lxj.yjxun.cn/drug/images/icon_arrow_r.png) no-repeat 100% center;
      background-size: 1.3rem
    }

    #mindedlist .listitem1 {
      display: flex
    }

    #mindedlist .listitem {
      background: #fff;
      position: relative;
      overflow: hidden;
      width: 93%;
      border-bottom: 1px solid #d9d7d7;
      margin: 0 auto
    }

    #mindedlist .listitem1 .artic {
      flex: 3;
      padding: 1rem 1rem 0 0;
      position: relative;
      width: 100vw
    }

    #mindedlist .listitem .artic {
      width: 92%;
      margin: 0 auto;
      text-align: justify;
      padding-top: .7rem
    }

    #mindedlist .title {
      color: #343434;
      font-size: 1.1rem;
      margin-top: .1rem;
      font-weight: 600;
      line-height: 1.5rem
    }

    #mindedlist .piece {
      color: #656565;
      font-size: .9rem;
      height: 2rem;
      line-height: 2rem;
      display: block;
      justify-content: space-between;
      width: 93%;
      text-align: left
    }

    #mindedlist .piece .piexe_t {
      color: #ff4c73;
      font-size: 1.08rem
    }

    #mindedlist .piece .piexe_z {
      color: #999;
      font-size: 1.06rem
    }

    #mindedlist .piece .piext-k {
      color: #e54a4a;
      float: right;
      border-radius: 500px;
      font-size: .85rem;
      padding: 0 .6rem;
      background: #ffefef
    }

    #mindedlist .pide_img img {
      width: 100%
    }

    #mindedlist .listitem1 .img {
      width: 5rem;
      flex: 1.84;
      overflow: hidden;
      height: 6.2rem;
      padding: 1rem 1rem 1rem 0
    }

    #mindedlist .listitem1 .zoomImage {
      height: 100%;
      border-radius: .3rem;
      margin: 0 auto;
      border: 0;
      padding-bottom: 0;
      overflow: auto;
      background-position: center center;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      background-size: cover;
      border: 0
    }

    #mindedlist .citem_div3 {
      color: #999;
      font-size: .95rem;
      line-height: 1.2rem;
      font-weight: 500;
      margin-top: .6rem
    }

    #mindedlist .citem_div2 {
      color: #949494;
      font-size: .98rem;
      line-height: 1.2rem;
      font-weight: 500;
      margin-top: .4rem
    }

    #closed img {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1.145rem;
      align-self: center
    }

    .m_dbox {
      width: 100%;
      display: flex;
      height: 2.5rem;
      font-size: 1.03rem;
      line-height: 2.5rem;
      padding: 0 1rem;
      justify-content: space-between
    }

    #menust {
      background: #fff;
      padding: .5rem 1rem 0 1rem;
      margin-bottom: 2rem
    }

    #menust ul {
      display: flex
    }

    #menust li {
      width: auto !important;
      height: 2rem !important;
      border-radius: 500px;
      margin-right: 1rem;
      line-height: 2rem !important;
      text-align: center !important;
      background-color: #ffefef;
      overflow: hidden;
      font-size: .95rem;
      color: #e54a4a
    }

    #menust li .pstyle {
      width: 30%;
      height: 2px;
      background: #ff4c73;
      margin: .88rem auto 0 auto
    }

    #menust li.onst {
      color: #fff;
      background: #fe5b7e
    }
  </style>