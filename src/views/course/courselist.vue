!<template>
  <div class="courselist">
    <Hearder :head_name="head_name" />
    
sdsdd
  </div>
</template>

<script>
  import Hearder from '../../components/Hearder.vue';
  import '../../assets/js/setFontSize.js';
  import { noPassByMobile } from '@/assets/js/global';
  import { getOrderList } from '@/api/order'
  export default {
    name: 'courselist',
    data() {
      return {
        head_name: '课程列表',
        page:1
      }
    },
    components: {
      Hearder,
    },
    created(){
        //  this.getOrderList();
        },
    methods:{
    getOrderList(page = 1,opt) {

    getOrderList({page:this.page}).then(res=>{
    opt = opt? opt : {};
    console.log(res);


    }).catch(err => {
        console.log(err);
    });

 
  }
    }

  }

</script>

<style lang="" scoped>
@import '../../assets/css/appstyle.css';
.courselist {}
body{background:#fff}
.m-head{padding:1rem .19rem 1rem .19rem;overflow:hidden;left:0;top:0;width:100%;background:#fff;z-index:999999;position:fixed;top:3.8rem}
.m-head .head-query{margin-top:.2rem;width:90%;margin:0 auto;height:2.7rem;padding-left:2rem;background:#f5f4f7 url(/index/style2/images/magnifier.png) no-repeat 2.7rem center;padding-left:4.5rem;background-size:1rem;border-radius:500px;border:1px solid #ececec;position:relative}
.head-query svg{position:absolute;right:1rem;width:1.2rem;height:1.2rem;top:50%;transform:translateY(-50%)}
.head-query input{width:90%;height:100%;border:0;outline:0;margin:0;padding:0;background:#f5f4f7;padding-left:.2rem}
.n21{width:5.5rem;border:1px solid #2cacfc;background:#2cacfc;margin:11% auto;text-align:center;color:#fff;padding:3px;border-radius:15px}
.n22{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:.923rem;color:#999}
.header_box{height:3.8rem;z-index:99999}
.header_box .midden{height:3.8rem;line-height:3.8rem}
.h50{height:3.8rem}
.bg_color{width:100%;height:100%;background:rgba(0,0,0,.3);z-index:1;position:fixed;left:0;top:0;display:none}
.listitem1{display:flex}
.listitem{background:#fff;margin-bottom:.5rem;position:relative;overflow:hidden;width:100vw}
.listitem1 .artic{flex:3;padding:1rem 1rem .9rem 0;position:relative;width:100vw}
.listitem .artic{width:92%;margin:0 auto;text-align:justify;padding-top:.7rem}
.title{color:#343434;font-size:1.07rem;margin-top:.3rem;font-weight:600;line-height:1.2rem;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}
.piece{color:#656565;font-size:.9rem;position:absolute;bottom:1rem;display:flex;justify-content:space-between;width:93%;text-align:right}
.piece .piexe_t{color:#ff4c73;font-size:1.21rem}
.piece .piext-k{color:#999}
.pide_img img{width:100%}
.listitem1 .img{flex:1.6;padding:1rem 1rem 1rem 1rem}
.listitem1 .zoomImage{height:6.56rem;border-radius:.3rem;margin:0 auto}
.zoomImage{background-size:cover;background-position:center center}
.citem_div2{color:#999;font-size:.85rem;line-height:1.2rem;font-weight:500;margin-top:.15rem;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}
.citem_div5{color:#666;text-overflow:ellipsis;overflow:hidden;word-break:break-all;font-size:.85rem;line-height:1rem;font-weight:500;margin-top:.4rem}
.citem_div3{color:#2196f3;font-size:.85rem;display:flex;margin-top:.5rem}
.citem_div3 span{padding:0 .6rem;border:1px solid #2196f3;margin-right:.6rem;border-radius:500px}
#ketangs .listitem1 .artic{flex:3;padding:1rem 0 .9rem 1rem;position:relative;width:100vw}
#ketangs .listitem1 .img{flex:2;padding:1rem}
.registered_place_box_line .registered_place_box_line_r{width:11.165rem}
.registered_place_box_line .registered_place_box_line_r .p1_l{font-size:1.1rem}
.registered_place_box_line .registfont{color:#999;position:relative;top:2.2rem}
.registered_place_box,.registered_place_box_,.registered_place_box_line,.registered_place_option{width:100%;overflow:hidden}
.registered_place_option{border-bottom:1px solid #e3e3e7;position:relative;z-index:6;background-color:#fff}
.registered_place_option li{width:33.3%;float:left;margin:.923rem auto;height:1.5rem;line-height:1.5rem;text-align:center;border-right:1px solid #c8c8c8;color:#101d37;font-size:1.1rem}
.registered_place_option li:last-child{border-right:none}
.registered_place_option i{margin-left:6px;display:inline-block;width:0;height:0;vertical-align:middle;border-right:5px solid transparent;border-left:5px solid transparent;border-top:5px solid #515151}
.registered_place_box_line{padding:1.1rem .923rem .923rem .923rem;position:relative;margin-bottom:1rem;background-color:#fff}
.registered_place_box_line .orders{position:absolute;bottom:1rem;right:1rem;border-radius:500px;width:4.5rem;text-align:center;height:2rem;line-height:2rem;font-size:.75rem;border:1px solid #fe7739;color:#fe7739}
.registered_place_choice{width:100%;overflow:hidden;position:fixed;left:0;top:8.1rem;z-index:9999999;height:100%;display:none}
.registered_place_choice .registered_place_choice_{width:100%;overflow:hidden}
.registered_place_choice_ .choice_box{background-color:#fff;margin-top:3.2rem}
.registered_place_choice_ .choice_box ul{overflow:scroll;height: 58vh;}
.registered_place_choice_ .choice_box li{width:100%;line-height:3.346rem;height:3.346rem;border-bottom:1px solid #ddd8cd;padding-left:10%;position:relative}
.registered_place_choice_ .choice_box i{position:absolute;left:6%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);width:0;height:0;vertical-align:middle;border-right:7px solid transparent;border-left:7px solid transparent;border-top:7px solid #515151}
.registered_place_choice_ .bg_color{display:block;position:absolute;top:auto}
.registered_search{width:93.33%;height:2.615rem;line-height:2.615rem;margin:.769rem auto;border-radius:20px;background-color:#fff;border:1px solid #e4e4e4;text-align:center}
.registered_search img{width:1rem;height:1rem;vertical-align:sub}
.registered_search input{width:18.423rem}
.registered_search input::-ms-input-placeholder{color:#666}
.registered_search input::-webkit-input-placeholder{color:#666}
.registered_search input::-moz-placeholder{color:#666}
.registered_place_box_line img{width:7.9rem;height:5.9rem;border-radius:.35rem;float:left}
@media screen and (max-width:414px){.registered_place_box_line .registered_place_box_line_r{width:11.165rem}
}
@media screen and (max-width:375px){.registered_place_box_line .registered_place_box_line_r{width:11.165rem}
}
@media screen and (max-width:320px){.registered_place_box_line .registered_place_box_line_r{width:9.55rem}
}
.p2,.p3,.registered_place_box_line .registered_place_box_line_r .p1{width:100%}
.registered_place_box_line .registered_place_box_line_r .scores{width:100%;height:100%;display:flex}
.registered_place_box_line .registered_place_box_line_r .starts{height:1.923rem;align-items:center;display:flex;line-height:1.923rem}
.registered_place_box_line .registered_place_box_line_r .starts img{float:left;width:1.2rem;height:1.2rem}
.registered_place_box_line .registered_place_box_line_r .starts-num{font-size:.85rem;color:#666;margin-left:.4rem}
.registered_place_box_line .registered_place_box_line_r .p1{height:1.4rem;line-height:1.4rem}
.registered_place_box_line .registered_place_box_line_r .p1_l{color:#000;font:size 1;font-weight:700}
.registered_place_box_line .registered_place_box_line_r .p1_l .yisli{color:#333;font-size:1.077rem}
.registered_place_box_line .registered_place_box_line_r .p1_l span{margin-left:.654rem;font-size:.923rem;font-weight:400}
.registered_place_box_line .registered_place_box_line_r .p1_r{color:#999;font-size:.923rem}
.registered_place_box_line .registered_place_box_line_r .p2{font-size:.923rem;color:#999;height:1.923rem;line-height:1.923rem;margin-top:.5rem}
.registered_place_box_line .registered_place_box_line_r .psie{width:150%;display:flex;align-items:center}
.registered_place_box_line .registered_place_box_line_r .psie img{width:1.2rem;height:1.2rem;margin-right:.3rem}
.registered_place_box_line .registered_place_box_line_r .psie span{border-radius:500px;margin-right:.42rem}
.registered_place_box_line .registered_place_box_line_r .psie span:empty{display:none}


</style>
