!<template>
  <div class="on_order">
    <Hearder :head_name="head_name" />
     <div id="menu">
    <ul>
      <li class="on">全部
        <p class="pstyle"></p>
      </li>
      <li>待付款
        <p></p>
      </li>
      <li>已购买
        <p></p>
      </li>
      <li>已过期
        <p></p>
      </li>
      <div class="clear"></div>
    </ul>
    <div class="clear"></div>
  </div>
  <div class="h50"></div>
  <div class="henline"></div>

  <div class="order-cover mescroll" id="mescroll">
  <div id="tab-con">
    <div class="tab_itemst on" id="tab_itemst_1" data-page='1'></div>
    <div class="tab_itemst" id="tab_itemst_2" data-page='1'></div>
    <div class="tab_itemst" id="tab_itemst_3" data-page='1'></div>
    <div class="tab_itemst" id="tab_itemst_4" data-page='1'></div>
  </div>
 </div>

  <div id="content_boxed" class="content_boxed">
    <div id="content_boxedss">
      <div class="m-fun">
        <ul>
          <li>
            <span style="color: #030303;font-size: 1.13rem;">申请续约</span><span class="m-usemsg" style="color:#7b7777" id="closed">关闭</span>
          </li>
          <li>
            <span>请选择服务月数：</span>
            <i class="icon-arrow-r"></i>
            <span class="m-usemsg" id="boxsss">2个月</span>
          </li>
          <li><span>合计费用：</span><span class="m-usemsg">25400元</span></li>
        </ul>
        <div class="btn_sunbimte" onclick="goo('/course/pay_curicons.html?&id=4&tchid=2')">
          提交申请
        </div>
      </div>
    </div>
  </div>
    
  </div>
</template>

<script>
  import Hearder from '../../components/Hearder.vue';
  import '../../assets/js/setFontSize.js';
  import { noPassByMobile } from '@/assets/js/global';
  import { getOrderList } from '@/api/order'
  export default {
    name: 'on_order',
    data() {
      return {
        head_name: '课程订单',
        page:1
      }
    },
    components: {
      Hearder,
    },
    created(){
          this.getOrderList();
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

  .on_order {}
#menu{padding-top:1rem;background:#fff;position:fixed;z-index:9;width:100%}
#menu ul{justify-content:space-around;display:flex}
#menu li{width:25%;height:2.5rem;text-align:center;background-color:#fff;overflow:hidden;font-size:1.1rem;color:#111}
#menu li .pstyle{width:50%;height:2px;background:#ff4c73;margin:.28rem auto 0 auto}
#menu li.on{color:#ff4c73}
.clear{clear:both}
#tab-con .tab_itemst{width:100vw;position:relative;display:none}
#tab-con .on{display:block;background-color:#fff}
#tab-con .ae{width:3rem;height:3rem;background:red}
.henline{height:.7rem;background:#f6f6f6}
.tab_itemst .tcontbox{width:100%;border-bottom:10px solid #eee}
.tab_itemst .tcontbox .tconp{display:flex;justify-content:space-between;height:3.5rem;line-height:3.5rem;border-bottom:1px solid #dcdcdc;width:93%;margin:0 auto;font-size:1.1rem;color:#2b2b2b}
.tab_itemst .tcontbox .tconp span:nth-child(2){color:#ff4c73;font-size:.95rem}
.tab_itemst .tcontbox .tunOrder{width:93%;margin:0 auto;font-size:.95rem;color:#7a7979;padding:.8rem 0 .5rem 0}
.tab_itemst .tcontbox .tunOrder span:nth-child(2){float:right;text-align:right}
.tab_itemst .tcontbox .nth-btn{display:flex;flex-direction:row-reverse;padding-bottom:1rem}
.tab_itemst .tcontbox .nth-btn span{width:6.5rem;height:2.15rem;line-height:2.15rem;font-size:.9rem;text-align:center;border-radius:.3rem;margin-right:1rem}
.tab_itemst .tcontbox .nth-btn .nth-sitem{border:1px solid #ccc;color:#323232}
.tab_itemst .tcontbox .nth-btn .nth-bitem{border:1px solid #f12036;color:#f12036}
.m-fun{background-color:#fff}
.m-fun ul li{width:93%;margin:0 auto;position:relative;height:3rem;line-height:3rem}
.m-fun ul li.conlist{border-bottom:1px solid #dcdcdc}
.m-fun ul li.conitem{color:#7a7979;display:flex;justify-content:space-between;align-items:center}
.m-fun ul li .m-th{background-size:24%!important}
.m-fun ul li .m-ths{width:75%;height:5.2rem;position:relative;overflow:hidden}
.m-fun ul li .m-ths .boxyao{float:left;width:5.5rem;height:5.2rem;border:1px solid #ccc;margin-right:.5rem;overflow:hidden;display:flex;justify-content:center;align-items:center}
.m-fun ul li .m-ths .boxyao img{width:100%}   /*images/yaodetils.png*/ 
.m-fun ul li .m-ths .m-yb{width:2rem;height:5.5rem;background:url() -6rem .5rem;position:absolute;top:0;right:0;background-size:100%}
.m-fun ul li .m-num{position:absolute;top:50%;right:.2rem;transform:translateY(-50%);height:3.5rem;line-height:3.5rem;font-size:1rem;color:#7a7979}
.m-fun ul li .icon-arrow-r{float:right;display:block;width:.8rem;height:3.5rem;background:url(https://www.519ksy.com/h5page/images/icon_arrow_r.png) no-repeat 100% center;margin-left:.5rem;background-size:1.3rem}
.tcontbox .m-fun ul li.listed{height:5.8rem;border-bottom:1px solid #e0e0e0}
.tcontbox .m-fun ul li.listedtt{height:6.8rem}
.header_box{border-bottom:1px solid #e3e3e3}
.listitem1{display:flex}
.listitem{background:#fff;position:relative;padding-bottom:.5rem;overflow:hidden;width:100vw}
.listitem1 .artic{flex:3;position:relative;width:100vw}
.listitem .artic{width:92%;position:relative;margin:0 auto;text-align:justify}
.title{color:#171717;font-size:1.122rem;font-weight:600;margin-top:.5rem;width:80%;display:block;line-height:1.32rem}
.piece{color:#656565;font-size:.9rem;position:absolute;bottom:.06rem;height:2rem;line-height:2rem;display:flex;justify-content:space-between;width:90%;text-align:right}
.piece .piexe_t{color:#ff4c73;font-size:1.59rem}
.piece .piexe_w{margin-top:-.3rem}
.pide_img img{width:100%}
.listitem1 .img{flex:1.5;padding:.5rem 1rem 0 0;position:relative}
.listitem1 .zoomImage{height:5.46rem;border-radius:.3rem;margin:0 auto;max-width:100%;padding-bottom:0;object-fit:cover}
.citem_div2{color:#666;font-size:.95rem;line-height:1.3rem;margin-top:.4rem;width:65%;font-weight:500;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}
.citem_div5{color:#666;text-overflow:ellipsis;overflow:hidden;word-break:break-all;font-size:.85rem;line-height:1rem;font-weight:500;margin-top:.4rem}
.citem_div3{color:#2196f3;font-size:.85rem;display:flex;margin-top:.5rem}
.citem_div3 span{padding:0 .6rem;border:1px solid #2196f3;margin-right:.6rem;border-radius:500px}
#ketangs .listitem1 .artic{flex:3;position:relative;width:100vw}
#ketangs .listitem1 .img{flex:2;padding:1rem;position:relative}
.content_boxed{display:none}
#content_boxedss .m-fun{background-color:#fff}
#content_boxedss .m-fun ul li{padding:0 1rem;position:relative;height:3.5rem;line-height:3.5rem;border-bottom:1px solid #f6f6f6}
#content_boxedss .btn_sunbimte{width:80%;height:3rem;line-height:3rem;color:#fff;background-color:#ff4c73;text-align:center;margin:2rem auto 0 auto;border-radius:.5rem;margin-bottom:1rem}
#content_boxedss .m-fun ul li .m-icon{height:5rem!important}
#content_boxedss .m-fun ul li:nth-child(1){height:3.5rem;line-height:3.5rem;display:flex;border-bottom:0;justify-content:space-between}
#content_boxedss .m-fun ul li:nth-child(1) .m-iteimg{display:block;height:5rem;line-height:5rem}
#content_boxedss .m-fun ul li:nth-child(1) img{width:3.5rem;vertical-align:middle}
#content_boxedss .m-fun ul li span{padding-left:1.5rem;font-size:1.1rem;display:inline-block;line-height:3.5rem;color:#7b7777}
#content_boxedss .m-fun ul li .m-usemsg{float:right;font-size:1.1rem;color:#030303;display:inline-block;line-height:3.5rem}
.zoom_title{float:left;font-size:.95rem}
#content_boxedss .m-fun ul li .icon-arrow-r{float:right;display:block;width:2rem;height:3.5rem;background:url(/course/images/icon_arrow_r.png) no-repeat 100% center;background-size:1.3rem}
.tunOrder span{width:50%;width:50%;font-size:.85rem;word-spacing:normal;display:inline-block}
.mescroll{
			position: fixed;
			top: 7rem;
			bottom: 0;
			height: auto; /*如设置bottom:50px,则需height:auto才能生效*/
      overflow-x: hidden;
		}

</style>
