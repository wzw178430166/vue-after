<template>
  <div class="login">
      <div class="conte_bg">
        <img src="/member/tpl_ypmm/images/login/shagjiao.png">
    </div>
    <Hearder :head_name="head_name"/>
    <div class="zhuce_pic">
        <!-- <img src="../statics/images/new_top_ban_.jpg"> -->
        <img :src="`${host}/member/tpl_ypmm/images/2323dd.png`">
        <p class="daplist">打造国内母婴健康护理第一品牌</p>
    </div>
    <form action="" id="loginForm" ref="loginForm">
        <input type="hidden" name="dosubmit" value="1">
        <input type="hidden" name="forward" value="" id="forward" ref="forward" v-model="form.forward">
        <input type="hidden" name="country_code" value="" id="country_code" v-model="form.country_code">
        <div class="login_box">
            <div class="login_line">
                <input type="text" placeholder="请输入手机号码" class="text nobd fl" style="margin-left:9%; width:3.9rem;"
                    name="username" id="username" ref="username" v-model="form.username">
            </div>
            <div class="login_line">
                <input type="password" placeholder="请输入密码" class="text nobd" name="password" style="width:5.5rem;"
                    id="password" ref="password" v-model="form.password">
            </div>

            <div class="submit" id="send-btn" @click="sendForm()">登录</div>
            <div class="operation">
                <!--<div class="operation_r fl" onClick="goo('/h5page/muyin/login_msg.html')">
            <span style="color: #666666;">手机快捷登陆</span>
        </div>-->
                <div class="operation_r fl">
                    <span style="color: #666666;" onClick="goo('/member/edit_pass.html')">找回密码</span>
                </div>
                <div class="operation_l fr">
                    <u onClick="goo_('/member/register.html')" style="color: #666666;letter-spacing: .03rem;">快速注册</u>
                    <u onClick="goo('/member/login.html')" style="color: #666666;letter-spacing: .03rem;">快捷登录</u>
                </div>
            </div>
            <!-- <div class="other" style="position: relative;margin-top: 16%;">
                <p class="title"><span>第三方账号登录</span></p>
                <div style="text-align: center;"><img src="/member/tpl_ypmm/images/login/kuaisiss.png"
                        style="display: inline-block;width: 100%;border-radius: 5px;" onClick="goWeChat()"></div>
            </div> -->
        </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery"
import Hearder from '../../components/Hearder.vue';
import { Toast , Dialog  } from 'vant';
import { login } from '@/api/login'
export default {
  name: 'login',
  data() { 
    return {
      head_name:'用户登录',
      host: this.host, //域名
      host_shop: this.host_shop, //商城域名
      form: {
        username: '',
        password: '',
        country_code:'',
        forward: '',
        dosubmit:1,
      },
    }
  },
    components:{
      Hearder,
    },
  methods:{
       goo(parsem) {
        this.$router.push({
          path: parsem.path,
          query: parsem.query
        });
      },

  sendForm() {
    var forward = this.$route.query.forward ? this.$route.query.forward : '';
	if (forward == 'null' || forward == 'undefined') forward = '';
    this.$refs.forward.value=forward;
		var reg = /^1[0-9]{10}$/;
		var username = this.$refs.username.value;
		var password = this.$refs.password.value;
		if (username == '') {
          Toast({
          message:'请输入手机号码!',
          position:'middle'
           });
			return;
		}
         Toast.loading({
         duration: 0, // 持续展示 toast
         forbidClick: true,
         message: "加载中..."
        });
        let formData = new FormData();
        for(let key in this.form){
               formData.append(key,this.form[key]);  
            }
          login(formData).then(data => {
              Toast.clear();
         if (data.status == 1) {
             Toast('登录成功');
              //  $('.login_box').append(data.synloginstr); //执行其他应用登录接口js
                if (1) {  //getUrlParam('mobile') == 'ios'苹果ios登录口
                 //   goo('ios://setlogin=>' + JSON.stringify(data));
                } else {
                    try {
                        delete data.synloginstr;
                        if (data.username == '13763346681') {}
                        var jo = { 'userid': data.userid, 'username': data.username, 'nickname': data.nickname, 'portrait': data.portrait, 'auth': data.auth };
                        setCookie('forward', data.forward)
                        jstojava.setlogin(JSON.stringify(data));
                        return;
                    } catch (e) {
                    }
                }
                if (false) {   //isWeiXin()微信登录口
                    wx.miniProgram.getEnv(function (res) {
                        if (res.miniprogram) {
                            var weChatUid = {};
                            weChatUid.uid = getCookie(cookie_pre + '__userid');
                            weChatUid.uidAuth = getCookie(cookie_pre + '_userid');
                            wx.miniProgram.postMessage({ data: weChatUid });
                            wx.miniProgram.switchTab({ url: '../index/index' });
                        }
                    })
                }
               //this.$store.commit()触发--->mutaions
               //this.$store.dispatch()触发--->actions
               this.$store.commit('Login/SET_USER',data.username);
               this.$store.commit('Login/SET_TOKEN',data.auth);
               this.$store.commit('Login/SET_Portrait',data.portrait);
               this.$store.commit('Login/SET_Userid',data.userid);
               this.$store.commit('Login/SET_Nickname',data.nickname);  
                this.$store.commit('Login/SET_groupid',data.groupid);
               this.$store.commit('Login/SET_synloginstr',data.synloginstr);
               this.$store.commit('Login/SET_isLogin',1);
               var that=this;
               setTimeout(function () {
                   var forward = sessionStorage.getItem('forward');
                    if(forward != null){
                        that.$router.push(forward)
                    }else {
                        that.$router.push('/member')
                    }
                }, 500);
            } else if (data.status == 2) {
            this.form.password='';
            Dialog.alert({
             message: '用户名或密码错误',
             btn: '再试一次'
             }).then(() => {
               this.$refs.password.focus();
               });
            } else if (data.status == -99) {
             Dialog.alert({
             message: '您还未注册用户账号',
             btn: '确定'
             }).then(() => {});
            } else if (data.status == "-999") {
            Dialog.alert({
             message: '账号已被锁定,请在' + data.minute + '分钟后再登录',
             btn: '确定'
             }).then(() => {});
            } else {
            Dialog.alert({
             message: '登录失败!',
             btn: '关闭'
             }).then(() => {});
            }
            //  console.log(data);
            })  
          
	}
  },
  mounted(){
     $('html').css('font-size','50px');
     $('.midden').css({'height':'1.1rem','line-height':'1.1rem','font-size':'.32rem'});
     $('.header_box').css('height','1.1rem');
     $('.h50').css('height','1.1rem');
  },
       beforeDestroy: function () {
           $('html').css('font-size','13px');
        },

 }
</script>
<style lang="less" scoped>
@import '../../assets/css/appstyle.less'; 
@import './css/app_dc.less'; 
    .headerBoxCircle {
        height: 50px;
        z-index: 999;
        position: relative;
    }

    .header_box img,
    .headerBoxCircle img {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 6%;
        top: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }

    .headerBoxCircle p {
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #1d1d1d;
        font-size: .289rem;
    }

    .h50 {
        height: 50px;
    }

    .warm_box {
        width: 100%;
        overflow: hidden;
    }

    .warm_box p {
        text-align: center;
        margin-bottom: .2rem;
    }

    .warm_box .title {
        font-size: .4rem;
        color: #3f83ff;
    }

    .warm_box .link {
        font-size: .25rem;
        color: #010101;
    }

    .warm_box .link a {
        color: #2dacfd;
    }

    *:after {
        content: normal;
    }

    .zhuce_pic {
        width: 100%;
        height: 3.8rem;
        background: url("@{baseurl}/member/tpl_ypmm/images/login/loginsed1.png") no-repeat -1.98rem -.5rem;
        background-size: 152%;
        padding-top: 0.65rem;
    }

    #loginForm {
        margin: -15% auto 0 auto;
        width: 90%;
        padding: .62rem 0 0 0;
        background: #ffffff;
        border-radius: .1rem;
        box-shadow: 0px 0px 4px -1px #e02a68;
        height: 61vh;
    }

    .zhuce_pic .daplist {
        width: 100%;
        text-align: center;
        font-size: .295rem;
        letter-spacing: .05rem;
        color: #ffffff;
        font-family: fantasy;
        margin-top: .23rem;

    }

    .zhuce_pic img {
        width: 4rem;
        height: 1.35rem;
        margin: 0 auto;
        display: block;
        object-fit: cover;
    }

    .login_box .login_line .text {
        margin-left: 9%;
        background-color: transparent;
        height: .68rem;
        line-height: .68rem;
        font-size: 0.235rem;
        position: absolute;
    }

    .login_box .login_line {
        border-radius: 500px;
        background-color: #f7f6f6;
        height: 0.68rem;
    }

    .login_box .submit {
        width: 100%;
        height: .68rem;
        line-height: .68rem;
        font-family: fantasy;
        text-align: center;
        background-color: #ff4c73;
        color: #fff;
        border-radius: 500px;
        font-size: 0.28rem;
        letter-spacing: .25rem;
        margin-top: .6rem;
    }

    .login_box .login_line {
        margin-bottom: .6rem;
    }

    .conte_bg {
        width: 3.5rem;
        height: 3.5rem;
        position: absolute;
        top: -12%;
        left: 19%;
        display: none;
        z-index: 99;
    }

    .conte_bg img {
        width: 100%;
    }

    .login_box .other {
        width: 78%;
        overflow: hidden;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
    }

    .zhuce_pic {
        padding-top: .2rem;
    }

</style>

