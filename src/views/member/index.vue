<template>
  <div class="index_member">
        <Hearder :head_name="head_name"/>
   <div class="m-content">
    <div class="m-inner">
      <div class="inner-content">
        <div class="inner-member header_portrait logined" v-if="state.isLogin>0">
          <img :src="host+state.portrait" class="member-head" id="portrait">
          <div class="member-info" @click="goo({path:'/userinformation'})">
            <p><span class='nickname' v-text="state.nickname"></span>
              <!-- <i class="icon_sex"><img src="/member/tpl_ypmm/images/girls.jpg" width="100%" id='sex_str'></i> -->
            </p>
            <!-- <p>ID:<i id='userid'>0</i></p>  -->
            <p class="wewe">绑定手机:<i id='bind_tel' v-text="state.username"></i></p>
            <!-- <p style="margin-top: 1rem;">账户余额:<span class="r-text"></span><i id="balance"></i><span onclick="event.stopPropagation();goo('/payCenter/template/payConfirm3.html');">【充值】</span></p> -->
          </div>
          <div class="operate-sign" onClick="goo('/circleN/indexHome.html?toUid='+userid_)">
            <img src="../../../static/images/womemi.png">
            <p>我的主页</p>
          </div>
        </div>
        <div class="inner-member header_portrait unlogin" style="display: block;" v-else>
          <img :src="`${host}/member/tpl_ypmm/images/icon_tou.png`" class="member-head" id="portrait">
          <div class="member-info">
            <p  @click="goo({path:'/login',query:{}})">登录/注册 </p>
          </div>
        </div>
      </div>
      <div class="head_bottom" onClick="goo('/course/member_vip.html')">
        <img src="../../../static/images/shengjihu2.png">
        <span class="head_state">升级VIP会员</span>
      </div>
    </div>
    <!--m-inner-->
    <div class="group-contents">
      <div class="group-title">我的订单</div>
      <div class="funbot-box">
        <div class="funbot-btn" onClick="goo('/se/se_order.html')"> <img src="../../../static/images/dingdna1.png" alt="">
          <p>服务订单</p>
        </div>
        <div class="funbot-btn" @click="goo({path:'/on_order',query:{type:1}})"> <img src="../../../static/images/kegashw.png" alt="" style=" width: 1.8rem;
    height: 1.3rem;
    margin-bottom: .1rem;">
          <p>课程订单</p>
        </div>
        <div class="funbot-btn" onClick="goo('/mall/order.html')"> <img src="../../../static/images/fenxiah.png" alt="">
          <p>商城订单</p>
        </div>
        <!--<div class="funbot-btn" onclick="goo('/member/order3.html')"> <img src="/member/tpl_ypmm/images/migns.png" alt="">
                    <p>问诊订单</p>
                </div>-->
        <div class="funbot-btn" onclick="goo('/doula/mat_seorder.html')"> <img src="../../../static/images/migns.png" alt="">
          <p>月嫂订单</p>
        </div>
        <!-- <div class="makecontent" id="cn_itemsed">
    <div class="makefriends">
        <div class="makebg">
            <img src="/se/images/sotres01.jpg">
        </div>
        <div class="makefP">
            <div class="maskbox" id="maskbox">
                <p class="mssktitle">您预约的 Cocolove月嫂育婴 即将开始</p>
                <p class="msttime">离预约时间还有 03:45:18</p>
            </div>
        </div>
    </div>
</div> -->
        <div class="makecontent" id="cn_itemsed">
          <script type="text/html" id="caty_itemsed">
            <div class="makefriends" onclick="goo('/se/se_details.html?&sid=10&svid=<%:=store.id%>&orderid=<%:=list.orderid%>')">
              <div class="makebg">
                <img src="<%:=store.thumb%>">
              </div>
              <div class="makefP">
                <!-- <img src="/h5page/muyin/images/heartbeat_03.jpg" id="close_se"> -->
                <div class="maskbox" id="maskbox">
                  <p class="mssktitle">您预约的
                    <%:=store.name%>
                  </p>

                  <p class="mssktitle">即将开始</p>


                  <p class="msttime">离开始还有
                    <span id="timeid1"></span>天<span id="timeid2"></span>小时<span id="timeid3"></span>分
                  </p>
                </div>
              </div>
              <!-- <div class="chalook" onclick="goo('/se/se_details.html?&sid=10&svid=<%:=store.id%>&orderid=<%:=list.orderid%>')">查看详情</div> -->
            </div>
          </script>
        </div>
      </div>
    </div>
    <div class="hengxian"></div>
    <div class="group-contents">
      <div class="group-title">我的钱包</div>
      <div class="fwbot-box">
        <div class="fwbot_item" onClick="goo('/payCenter/template/payConfirm3.html')">
          <p id="amount">0.00</p>
          <p>平台余额（元）</p>
        </div>
        <div class="fwbot_line"></div>
        <div class="fwbot_item" onclick="goo('/member/point_deal.html')">
          <p id="point">0.00</p>
          <p>我的积分</p>
        </div>
        <div class="fwbot_line"></div>
        <!--<div class="fwbot_item" onClick="goo('/mall/userCoupon.html')">-->
        <div class="fwbot_item" onClick="goo('/member/m_coupon.html?type=index')">
          <p id="cCount">0</p>
          <p>我的优惠卡券</p>
        </div>
      </div>
    </div>
    <div class="hengxian"></div>
    <div class="group-contents">
      <div class="group-title">常用功能</div>
      <div class="funbot-box" style="padding-bottom: .3rem;">
        <div class="funbot-btn" onClick="goo('/circleN/msgCenter2.html?target=top')"> <img src="../../../static/images/xioaxina.png" alt="" style="width: 1.6rem;
      height: 1.4rem;">
          <p>消息中心</p>
        </div>
        <div class="funbot-btn" onClick="goo('/circleN/myFollow.html?toUid='+getCookie(cookie_pre + '__userid'))"> <img src="../../../static/images/shouxiwe.png" alt="" style=" width: 1.6rem;
      height: 1.3rem;
      margin-bottom: .1rem;">
          <p>我的关注</p>
        </div>
        <div class="funbot-btn" onClick="goo('/group/per_list.html?target=top')"> <img src="../../../static/images/opengywe.png" alt="" style="width: 1.8rem;">
          <p>我的亲友</p>
        </div>
        <div class="funbot-btn" onClick="goo('/member/collection.html')"> <img src="../../../static/images/sopuaw.png" alt="" style="width: 1.5rem;
      height: 1.4rem;">
          <p>我的收藏</p>
        </div>
      </div>
    </div>
  </div>
  <div class="m-bannersimg" id="m_barrernd" onClick="toLive()">
    <img src="../../../static/images/barrerdbg.png">
  </div>
  <div class="group-contents">
    <div class="group-title">课程学习</div>
    <div class="funbot-box" style="padding-bottom: .3rem;">
      <div class="funbot-btn" @click="goo({path:'/store/on_order_purchased',query:{}})"> <img src="../../../static/images/zhishid.png" alt="">
        <p>我的课程</p>
      </div>
      <!-- <div class="funbot-btn"> <img src="/member/tpl_ypmm/images/sajigohw.png" alt="" style=" width: 1.6rem;
      height: 1.3rem;
      margin-bottom: .1rem;">
      <p>我的书架</p>
    </div> -->
      <div class="funbot-btn" onClick="goo('/course/homework_list.html')"> <img src="../../../static/images/zuoawgy.png" alt="">
        <p>我的作业</p>
      </div>
      <div class="funbot-btn" onclick="goo('/course/exam_list.html')"> <img src="../../../static/images/dsgsdg.png" alt="" >
        <p>我的考试</p>
      </div>
      <div class="funbot-btn" id="shujia"> <img src="../../../static/images/sajigohw.png" alt="" style=" width: 1.6rem;
      height: 1.3rem;
      margin-bottom: .1rem;">
        <p>看直播</p>
      </div>

    </div>
  </div>
  <div class="hengxian"></div>
  <div class="group-contents">
    <div class="group-title">健康服务</div>
    <div class="funbot-box" style="padding-bottom: .3rem;">
      <div class="funbot-btn" onClick="goo('/equipment/equipment_list.html')"> <img src="../../../static/images/ffefge.png" alt="" style="width: 1.55rem;">
        <p>智能穿戴</p>
      </div>
      <div class="funbot-btn" onClick="goo('/medical/index.html?target=top&to_uid='+getCookie(cookie_pre + '__userid'))"> <img src="../../../static/images/sdgdghbnb.png" alt="" style=" width: 1.4rem;
      height: 1.4rem;
      margin-bottom: .1rem;">
        <p>健康档案</p>
      </div>
      <div class="funbot-btn" id="jiaju"> <img src="../../../static/images/sdgdsgfh01.png" alt="" style="width: 1.65rem;">
        <p>智能家居</p>
      </div>
      <div class="funbot-btn" onClick="to_wzr()"> <img src="../../../static/images/dfbdbd3.png" alt="">
        <p>问诊人信息</p>
      </div>
    </div>
  </div>
  <div class="hengxian"></div>
  <div class="group-contents" id="shoping_">
    <div class="group-title">商城 </div>
    <div class="funbot-box" style="padding-bottom: .3rem;">
      <div class="funbot-btn" onClick="goo('/mall/order.html')"> <img src="../../../static/images/fenxiah.png" alt="" style="width: 1.55rem;">
        <p>商城订单</p>
      </div>
      <div class="funbot-btn" onclick="goo('/mall/cart.html')"> <img src="../../../static/images/cart.svg" alt="" style="width: 2rem;">
        <p>购物车</p>
      </div>
      <div class="funbot-btn" onclick="goo('/member/collection.html?t=product')"> <img src="../../../static/images/sopuaw.png" alt="" style="width: 1.55rem;">
        <p>收藏夹</p>
      </div>
      <div class="funbot-btn" onClick="goo('/mall/address.html')">
        <img src="../../../static/images/add.svg" alt="" style="width: 1.65rem;">
        <p>收货地址</p>
      </div>
    </div>
    <div class="funbot-box" style="padding-bottom: .3rem;">
      <div class="funbot-btn" onClick="goo('/mall/userCoupon.html')"> <img src="../../../static/images/juanw.png" alt="" style=" width: 2rem;">
        <p>商城优惠券</p>
      </div>

      <div class="funbot-btn" onClick="goo('/mall/liulan.html')"> <img src="../../../static/images/liulan.svg" alt="" style="width: 2rem;margin-top: -0.3rem;margin-bottom: 0.8rem;">
        <p>浏览记录</p>
      </div>
      <div class="funbot-btn" onClick="goo('/?m=myim&c=customer_service&f=mall')"> <img src="../../../static/images/kefus.jpg" alt="" style="width: 1.6rem;">
        <p>商城客服</p>
      </div>
      <div class="funbot-btn" onClick="goo('/mall/refund_list.html')"> <img src="../../../static/images/order_status4.png" alt="" style="width: 1.6rem;">
        <p>退款/售后</p>
      </div>

    </div>
  </div>
  <div class="hengxian"></div>
  <div class="group-contents">
    <div class="group-title">系统工具</div>
    <div class="funbot-box" style="padding-bottom: .3rem;">
      <div class="funbot-btn" onClick="goo('/mall/dist_homepage.html')"> <img src="../../../static/images/tege4.png" alt="" style="width: 1.55rem;">
        <p>分销推广</p>
      </div>
      <div class="funbot-btn" @click="goo({path:'/liuyan',query:{}})"> <img src="../../../static/images/ksayiogy.png" alt="" style=" width: 1.4rem;
      height: 1.4rem;
      margin-bottom: .1rem;">
        <p>意见反馈</p>
      </div>
      <div class="funbot-btn" onClick="goo('/customer_service/index.html')"> <img src="../../../static/images/jewhg33.png" alt="" style="width: 1.4rem;">
        <p>平台客服</p>
      </div>
      <div class="funbot-btn" onClick="goo('/member/tpl_ypmm/set_up.html')"> <img src="../../../static/images/sdfdsg4.png" alt="" style="width: 1.35rem;">
        <p>设置</p>
      </div>
    </div>
  </div>
  <!--<iframe src="/index2/footer.html" id="footer" frameborder="0" width="0" height="0"></iframe>-->
  <TabbarHtml v-bind:active=3 />
  <div id="point" style="display: none"></div>
  <div style="height: 8rem;"></div>
  </div>
</template>

<script>
 import Hearder from '../../components/Hearder.vue';
 import TabbarHtml from '@/components/Tabbar1.vue';
  import { mapState, mapActions } from 'vuex'
export default {
  name: 'index_member',
  data() { 
    return {
      head_name:'会员中心',
      host: this.host, //域名
      host_shop: this.host_shop, //商城域名
    }
  }   ,
   components:{
      Hearder,
      TabbarHtml,
     
    },
    methods:{
        goo(parsem) {
        this.$router.push({
          path: parsem.path,
          query: parsem.query
        }).catch(()=>{});
       },
      // Login 模块路径名
    // ...mapActions('Login', [
    //   'userStatus'
    //   ]),
    },
     mounted() {
     // console.log("store name: ", this.$store)
     // console.log("namespace test1 state: ", this.state)
    },
    computed: {
    ...mapState('Login', {
      state: state => state
    })
  },
 }
</script>

<style lang="less" scoped>
@import '../../assets/css/appstyle.less'; 
@import './css/index.less'; 
body{color:#333;background-color:#f8f8fb}
.icon-jbgl{background:url(/member/tpl_ypmm/images/jbgl.png) no-repeat .5rem center;background-size:1.6rem}
.r-text{display:inline-block;background:url(/member/tpl_ypmm_/images/icon_gold.png) no-repeat 0 center;color:#3a3a3a;font-size:1.1rem;height:1.2rem;background-size:100%;width:1.5rem;vertical-align:sub;margin:0 .2rem 0 .6rem}
.m-fun ul li span{padding-left:2.5rem}
.m-fun ul li{padding:0 .5rem}
.inner-member .operate-sign{float:right;width:6rem;height:2rem;margin-top:1rem;margin-right:.5rem;position:relative}
.operate-sign img{width:100%;display:inline-block;height:100%}
.inner-member .operate-sign p{position:absolute;top:0;left:0;height:2rem;line-height:2rem;width:100%;text-align:center;color:#eb6015;font-size:.95rem}
.m-inner{background:#fff;height:11.5rem;background-size:111%;margin-bottom:.5rem;position:relative}
.m-inner .head_bottom{position:absolute;bottom:0;height:3.5rem;width:93%;left:50%;transform:translateX(-50%)}
.head_bottom img{width:100%;height:100%}
.m-inner .inner-content{width:100%;padding:0 .8rem;padding-top:.5rem}
.inner-member .member-info{margin-left:1rem;float:left;position:absolute;left:5.5rem;top:50%;transform:translateY(-50%)}
.inner-member .operate-sign{float:right;width:6rem;height:2rem;margin-top:0;margin-right:0;position:absolute;right:1rem;top:50%;transform:translateY(-50%)}
.group-title{width:100%;font-size:1.1rem;font-weight:700;text-align:left;margin:0;padding:.5rem 1rem .2rem 1rem}
.funbot-box{display:flex;flex-wrap:wrap;padding:.6rem 0 1.3rem 0}
.funbot-box .funbot-btn{width:25%;display:flex;flex-direction:column;justify-content:space-between;align-items:center;box-sizing:border-box;margin-bottom:.7rem}
.funbot-btn img{width:1.3rem;margin-bottom:.5rem}
#shoping_ .funbot-box .funbot-btn{flex:1; display:flex;flex-direction:column;justify-content:space-between;align-items:center;box-sizing:border-box;margin-bottom:.7rem}
.group-contents{width:93%;background:#fff;margin:0 auto;border-radius:.5rem}
.makecontent{width:100%;background-color:#fff;padding:0;margin-top:.4rem}
.makefriends{display:flex;flex-wrap:wrap;background:#f4f2f2;height:6rem;width:93%;margin:0 auto;position:relative;border-radius:.5rem}
.makefriends div.makebg{width:6.5rem;height:4.325rem;background-size:50%;padding-left:.7rem;padding-right:.7rem;align-self:center}
.chalook{margin-left:2.1rem;color:#a6a3a3;font-size:.8rem;position:absolute;bottom:11%;right:3%;width:5.5rem;height:2rem;line-height:2rem;border:1px solid #ff91a9;border-radius:500px;color:#ff91a9;line-height:2rem;text-align:center}
.makefriends div.makebg img{width:100%;height:100%;border-radius:.5rem}
.makefP{width:60%;flex:1;display:flex;flex-wrap:wrap;align-items:center}
.makefP img{position:absolute;right:0;top:0;width:1.145rem;align-self:center;margin:.5rem .5rem}
.makefP .maskbox .mssktitle{font-size:1.01rem;font-weight:600}
.makefP .maskbox .msttime{font-size:.98rem;font-weight:500;color:#666;margin-top:.3rem}
.makefP .maskbox{width:88%}
.fwbot-box{width:100%;padding:0 1rem;display:flex;height:5rem;align-items:center}
.fwbot-box .fwbot_item{width:33%;height:4.2rem;display:flex;flex-wrap:wrap}
.fwbot-box .fwbot_line{width:1px;height:3rem;background:#dcdcdc}
.fwbot-box .fwbot_item p{width:100%;height:2rem;line-height:2rem}
.fwbot-box .fwbot_item:not(:first-child){padding-left:1rem}
.fwbot-box .fwbot_item p:nth-child(1){font-size:1.28rem;color:#eb6015;height:1rem}
.fwbot-box .fwbot_item p:nth-child(2){font-size:.93rem;color:#333}
.m-bannersimg{width:100%;padding:.5rem 1rem;display:flex;align-items:center}
.m-bannersimg img{width:100%;height:8.3rem}
.hengxian{width:100%;height:.8rem;background:#faf8f8}
.member-info p:first-child span{font-size:1.64rem}
.member-info p.wewe{overflow:hidden;font-size:1.1rem;line-height:1.6rem;color:#666;margin-top:.3rem}
.head_state{position:absolute;right:1.5rem;top:50%;transform:translateY(-50%);width:6.5rem;height:1.8rem;line-height:1.8rem;background:#55370a;background-image:linear-gradient(to bottom right,#6f480e,#9e791e);border-radius:500px;color:#f0e1c9;font-size:.92rem;text-align:center}
    
</style>