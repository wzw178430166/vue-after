<template>
  <div class="msgCenter2">
    <Hearder :head_name="head_name" />
 <form>
<div class="steps_box">
     <div class="steps_line">
    <div class="m-titles">意见反馈</div>
    <textarea style="-webkit-appearance: none;width: 96%;height: 150px;line-height: 15px;padding: 11px 5px;display: block;border: 1px solid #e1e1e0;border-bottom-left-radius: 0;border-bottom-right-radius: 0;margin:.5rem auto; outline: none; resize: none; border-radius: 3px;" ref="content" placeholder="您可以在此输入您对我们的意见或建议" value=""></textarea>
  </div>
  <div class="steps_line">
   <div class="m-titles" style="margin-top:0;">联系方式</div>
    <input style="width: 96%;display: block;height: 41px;line-height: 41px;border: 1px solid #e1e1e0;text-indent: 10px;font-size: 15px;color: #181717;margin: .2rem auto; outline: none; border-radius: 3px;" type="text" ref="lxqq" placeholder="请您在此输入您的联系方式">
  </div>
</div>
<input type="hidden" value="1">
</form>

<div class="liuyan" style="/*margin-bottom: 50px;*/">
  <div class="liuyan_top">
<!--    <h2 set-lan="html:submit_feedback">客户留言</h2>-->
    <div class="liuyan_title">您提出的宝贵意见对于我们的成长有很大的作用，我们会不断的完善自己的，让你的使用更加的方便快捷，让您感觉更温馨！</div>
         <div class="steps_foot" @click="set_feedback">提交</div>
  </div>
  <div class="liuyan_main" style="display: none;">
    <template id="data_tpl">
      <div class="liuyan_lists">
        <ul>
          <li><u set-lan="html:message_content">留言内容</u>：
          444
          </li>
        </ul>
        <ul>
          <li><u set-lan="html:name">姓名</u>：<font>
         33
            </font></li>
        </ul>
        <ul>
          <li><u set-lan="html:time">时间</u>：<font class="ly-time">
           222
            </font></li>
        </ul>
        <ul style="color:rgb(52,160,240);">
          <li><u set-lan="html:reply">回复</u>：
          11
          </li>
        </ul>
      </div>
    </template>
  </div>
</div>

  </div>
</template>

<script>
  import Hearder from '../../components/Hearder.vue';
  import '../../assets/js/setFontSize.js';
  import { noPassByMobile } from '@/assets/js/global';
 // import { getOrderList } from '@/api/order'
  import { getliuyanList } from '@/api/liuyan';
  import { Toast , Dialog  } from 'vant';
  export default {
    name: 'msgCenter2',
    data() {
      return {
        head_name: '意见反馈',
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
  set_feedback(){
	var text = this.$refs.content.value; 
	var lxqq = this.$refs.lxqq.value;
  let param = {
            judge: 4,
            lxqq:lxqq,
            modelid:10,
            typeid:83,
            text:text
           }
	if(text != '' && lxqq != ''){
          let formData = new FormData();
            for(let key in param){
                  formData.append(key,param[key]);
            }
        getliuyanList(formData).then((res) => {
            if (res.state == 1) {
                 Toast(res.msg);   
            }
          }).catch(()=>{
            console.log('我是第二个catch的回调函数')
            return;
          })
	}else{
  
	       Toast('您反馈的内容不能为空');  

	}

}
  
    }

  }

</script>

<style lang="" scoped>
@import '../../assets/css/appstyle.css';
body { background-color: #fff; }
/**/
    .header_box{border-bottom: 1px solid #e1e1e0;}
.steps_box, .steps_line { width: 100%; overflow: hidden; }
.steps_box p { height: 35px; line-height: 35px; padding-left: 10px; background-color: #f7f7f7; border-top: 1px solid #e3e3e7; border-bottom: 1px solid #e3e3e7; }
.steps_box .steps_line { padding: 5px 10px; background-color: #fff; /*margin-bottom: 10px;*/ }
.steps_box .steps_line:first-child { border-top: none; }
.steps_line .line_l { height: 30px; line-height: 30px; color: #333; font-size: 1.1rem; }
.steps_line .line_l u { font-size: 12px; margin-left: 10px; color: #999; }
.steps_line .line_r { height: 30px; line-height: 30px; width: 60%; }
.steps_line .day { width: 20px; height: 30px; line-height: 30px; text-align: right; width: 100%; }
    .steps_line .m-titles{    font-size: 1.2rem;
    color: #333333;
    padding-left: .5rem;
    margin-top: .5rem;
    margin-bottom: 1rem;}
.steps_foot {     width: 93%;
    height: 45px;
    line-height: 45px;
    background-color: #2cacfc;
    color: #fff;font-size: 1.15rem;
    text-align: center;
    margin: 1.2rem auto 0 auto;
    border-radius: .3rem;}
.liuyan { width: 100%; background-color: rgb(255,255,255); color: #333; }
.liuyan_top { width: 100%; padding-left: 10px; }
.liuyan_top h2 { float: left; height: 24px; line-height: 24px; border-left: 2px #2cacfc solid; margin-top: 5px; padding-left: 2%; }
    .liuyan_top .liuyan_title{color: #999;
    width: 93%;
    margin: 2rem auto 0 auto;
    font-size: 1.1rem;
    text-indent: 1rem;
    line-height: 1.7rem;}
.liuyan_main ul { list-style-type: none; padding: 3px 10px; margin: 0px; }
.liuyan_lists { border-bottom: 1px solid #EEE; padding: 2% 0; }
.liuyan_lists ul li font { font-weight: 400; }
.liuyan_lists ul li font.ly-time { color: #666; }

</style>
