!<template>
  <div class="transactions">
    <Hearder :head_name="head_name" />
  <div class="transactions_box">
    <!-- <template id="data_tpl">
      <div class="transactions_line" onclick="click_fun(this)" data_msgid="<$messageid>" data-url="<$go_url>">
        <p>
          &lt;$content&gt;
        </p>
        <p> <span class="fl" style="float:left;">
          &lt;$add_time&gt;
          </span> <span class="fr" style="float:right"><u class="class_u">
          &lt;$is_look_str&gt;
          </u></span> </p>
      </div>
    </template> -->
  
      <div class="transactions_line" onclick="click_fun(this)" data_msgid="49" data-url="#">
        <p>
          恭喜你 , 完成了 [测量一次心率] 积分任务 , 奖励积分 <u>+10</u> , 请注意查收
        </p>
        <p> <span class="fl" style="float:left;">
          2021-09-29 15:20:25
          </span> <span class="fl" style="float:right"><u class="class_u">
          <font style="color:red">未阅读</font>
          </u></span> </p>
      </div>
    
      <div class="transactions_line" onclick="click_fun(this)" data_msgid="48" data-url="#">
        <p>
          恭喜你 , 完成了 [做一次运动] 积分任务 , 奖励积分 <u>+30</u> , 请注意查收
        </p>
        <p> <span class="fr" style="float:left;">
          2021-09-29 04:49:24
          </span> <span class="fr" style="float:right"><u class="class_u">
          
          </u></span> </p>
      </div>
    
      <div class="transactions_line" onclick="click_fun(this)" data_msgid="42" data-url="#">
        <p>
          恭喜你 , 完成了 [测量一次心率] 积分任务 , 奖励积分 <u>+10</u> , 请注意查收
        </p>
        <p> <span class="fl" style="float:left;">
          2021-09-26 17:42:03
          </span> <span class="fl" style="float:right"><u class="class_u">
          <font style="color:red">未阅读</font>
          </u></span> </p>
      </div>
    
      <div class="transactions_line" onclick="click_fun(this)" data_msgid="38" data-url="#">
        <p>
          恭喜你 , 完成了 [测量一次心率] 积分任务 , 奖励积分 <u>+10</u> , 请注意查收
        </p>
        <p> <span class="fr" style="float:left;">
          2021-09-25 22:03:41
          </span> <span class="fr" style="float:right"><u class="class_u">
          <font style="color:red">未阅读</font>
          </u></span> </p>
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
    name: 'transactions',
    data() {
      return {
        head_name: '消息详情',
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
.transactions {}
body { background-color: #efefef; }
.transactions_box, .transactions_line { width: 100%; overflow: hidden; }
.transactions_box { padding: 0px 10px; margin-bottom: 10px; }
.transactions_box .transactions_line { padding: 10px; background-color: #fff; border-radius: 5px; margin-top: 10px; }
.transactions_line p { width: 100%; overflow: hidden; font-size: 13px; }
.transactions_line p:first-child { padding-bottom: 10px; border-bottom: 1px solid #e3e3e7; }
.transactions_line p:last-child { padding-top: 10px; }
.transactions_line u { color: #2cacfc; margin: 0px 5px; }
.transactions_line span { color: #666; }

</style>
