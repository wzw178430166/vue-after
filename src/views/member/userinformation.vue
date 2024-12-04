!<template>
  <div class="userinformation">
    <Hearder :head_name="head_name" />
    <form action="/index.php?m=member&c=data&a=get_set_user_data" method="post" enctype="multipart/form-data"
      id="edit_form">
      <div class="m-fun">
        <ul>
          <li><span>头像</span>
            <!--<i class="icon-arrow-r m-icon"></i>-->
            <span class="m-usemsg m-iteimg">
              <div style="border-radius:100%;width: 3.5rem;height: 3.5rem;display: inline-block;vertical-align: middle;"
                id="portrait"> <img style="border:none; border-radius: 100%;display: none;" /> </div>
              <input type="hidden" value="" name="portrait" id="portrait_">
              <div class="img_box" id="case_record"></div>
              <div id="case_record__" style="display:none;"></div>
            </span></li>
          <li><span>昵称</span>
            <!--<i class="icon-arrow-r"></i>--><span class="m-usemsg"><input type="text" value="" placeholder="点击填写修改"
                id="nickname" name="nickname" maxlength="20"></span></li>
          <li><span>性别</span>
            <!--<i class="icon-arrow-r"></i>--><span class="m-usemsg">
              <input type="radio" value="1" name="sex" class="sex" style="-webkit-appearance:radio;width:10%;"
                checked="checked">男 <input type="radio" value="2" name="sex" class="sex"
                style="-webkit-appearance:radio;width:10%;">女</span></li>
          <li><span>出生日期</span>
            <!--<i class="icon-arrow-r"></i>--><span class="m-usemsg" id='open_time'><input type="button" value=""
                class="birthday" style="background-color:#FFF;"><input type="hidden" value="0000-00-00"
                class="day nobd birthday" style="background-color:#FFF;" name="birthday"></span></li>
          <li style="height: 1rem;background: #f6f6f6;"></li>
          <li><span>身高</span>
            <!--<i class="icon-arrow-r"></i>--><span class="m-usemsg"><input type="text" value="" placeholder="点击填写修改"
                id="u_height" name="u_height">cm</span></li>
          <li><span>体重</span>
            <!--<i class="icon-arrow-r"></i>--><span class="m-usemsg"><input type="text" value="" placeholder="点击填写修改"
                id="u_weight" name="u_weight">kg</span></li>
          <!--<li><span>患者信息</span><i class="icon-arrow-r"></i><span class="m-usemsg">查看患者信息</span></li>-->
          <!-- <li><span>真实姓名</span><i class="icon-arrow-r"></i><span class="m-usemsg"><input type="text" value="" placeholder="点击填写修改" id="realname" name="realname"></span></li> -->
          <!-- <li><span>身份证号</span><i class="icon-arrow-r"></i><span class="m-usemsg"><input type="text" value="" placeholder="点击填写修改" id="idcard" name="idcard"></span></li> -->
          <li style="height: 1rem;background: #f6f6f6;"></li>
        </ul>
      </div>
      <input type="hidden" value="1" name="edit" />
    </form>
    <div class="addfriends steps_foot">保存个人信息</div>
    <div class="addfriendsttt"
      @click="logout">退出登录</div>
  </div>
</template>

<script>
  import Hearder from '../../components/Hearder.vue';
  import '../../assets/js/setFontSize.js';
  import { noPassByMobile } from '@/assets/js/global';
  export default {
    name: 'userinformation',
    data() {
      return {
        head_name: '个人信息',
      }
    },
    components: {
      Hearder,
    },
    methods:{
    logout(){
    this.$store.dispatch('Login/getLoginOut',{type:'member',that:this});
    return;

    }
    }

  }

</script>

<style lang="" scoped>
  @import '../../assets/css/appstyle.css';

  .userinformation {}

  body {
    background: #f6f6f6;
  }

  .m-fun {
    background-color: #fff;
  }

  .m-fun ul li {
    padding: 0 1rem;
    position: relative;
    height: 3.5rem;
    line-height: 3.5rem;
    border-bottom: 1px solid #f6f6f6;
  }

  .m-fun ul li .m-icon {
    height: 5rem !important;
  }

  .m-fun ul li:nth-child(1) {
    height: 5rem;
    line-height: 5rem;
  }

  .m-fun ul li:nth-child(1) .m-iteimg {
    display: block;
    height: 5rem;
    line-height: 5rem;
  }

  .m-fun ul li:nth-child(1) img {
    width: 3.5rem;
    vertical-align: middle;
  }

  .m-fun ul li span {
    padding-left: 1.5rem;
    font-size: 1.1rem;
    display: inline-block;
    line-height: 3.5rem;
    color: #030303;
  }

  .m-fun ul li .m-usemsg {
    float: right;
    font-size: 1.1rem;
    color: #7b7777;
    display: inline-block;
    line-height: 3.5rem;
    padding-right: 0.7rem;
  }

  /* .m-fun ul li .icon-arrow-r {
    float: right;
    display: block;
    width: 2rem;
    height: 3.5rem;
    background: url('/drug/images/icon_arrow_r.png') no-repeat 100% center;
    background-size: 1.3rem;
  } */

  .addfriends {
    height: 3rem;
    width: 90%;
    background: #2ea5e6;
    line-height: 3rem;
    border-radius: .3rem;
    font-size: 1.1rem;
    text-align: center;
    color: #fff;
    background-size: 11%;
    margin: 2rem auto 0 auto;
  }

  input {
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    text-align: right;
  }

  input[type='radio'] {
    width: 15px !important;
    height: 15px;
    vertical-align: sub;
    margin-right: 5px;
  }

  .webuploader-pick {
    position: fixed;
    height: 90px;
    top: 70px;
    opacity: 0;
  }

  .invisible_case_record {
    width: 0;
    height: 0;
    display: none;
  }

  .parentFileBox {
    display: none;
  }

  .addfriendsttt {
    height: 3rem;
    width: 90%;
    background: #ff6a7a;
    line-height: 3rem;
    border-radius: .3rem;
    font-size: 1.1rem;
    text-align: center;
    color: #fff;
    background-size: 11%;
    margin: 2rem auto 0 auto;
  }

</style>
