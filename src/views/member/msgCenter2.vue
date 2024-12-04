<template>
  <div class="msgCenter2">
    <Hearder :head_name="head_name" />
     <div style="width: 100%;height: 5rem;background: #FFF;color: #333;" @click="$router.push({path:'/transactions',query:{mss_type:1}}).catch(()=>{})">
		<img :src="host+'/circleN/images/notice.png'" style='width: 3rem;height: 3rem;float: left;margin: 1rem 1rem 0 1rem;'/>
		<div style='margin-left: 3%;padding-top: 1rem;' id='sMsg'>系统通知</div>
		<div style='color: #999;' id='sMsg_'  class="descript">暂无消息</div>
	</div>
	<div style="width: 100%;height: .1rem;"></div>
	<div style="width: 100%;height: 5rem;background: #FFF;color: #333;" @click="$router.push({path:'/member/test',query:{mss_type:1}}).catch(()=>{})">
		<img :src="host+'/circleN/images/docMsg.png'" style='width: 3rem;height: 3rem;float: left;margin: 1rem 1rem 0 1rem;'/>
		<div style='margin-left: 3%;padding-top: 1rem;' id='dMsg'>医生咨询</div>
		<div style='color: #999;' id='dMsg_' class="descript">暂无消息</div>
	</div>
	<div style="width: 100%;height: 5rem;background: #FFF;color: #333; display: none;" onClick="goo('/patient/talk_hm.html')">
		<img :src="host+'/circleN/images/jiankanggl.png'" style='width: 3.9rem;height: 3.9rem;float: left;margin: .5rem .5rem 0 .5rem;'/>
		<div style='margin-left: 3%;padding-top: 1rem;' id='dMsg'>健康管理</div>
		<div style='color: #999;' id='dmMsg_' class="descript">暂无消息</div>
	</div>
	<div style="width: 100%;height: .1rem;"></div>
	<div style="width: 100%;height: 5rem;background: #FFF;color: #333;" onClick="goUrl(2)">
		<img :src="host+'/circleN/images/msgB.png'" style='width: 3rem;height: 3rem;float: left;margin: 1rem 1rem 0 1rem;'/>
		<div style='margin-left: 3%;padding-top: 1rem;' id='myMsg2'>评论消息</div>
		<div style='color: #999;' id='myMsg2_'  class="descript">暂无消息</div>
	</div>
	<!-- <div style="width: 100%;height: .1rem;"></div>
	<div style="width: 100%;height: 5rem;background: #FFF;color: #333;" onClick="goUrl(3)">
		<img src='images/msgA.png' style='width: 3rem;height: 3rem;float: left;margin: 1rem 1rem 0 1rem;'/>
		<div style='margin-left: 3%;padding-top: 1rem;' id='myMsg3'>私信消息</div>
		<div style='color: #999;' id='myMsg3_'  class="descript">暂无消息</div>
	</div> -->
  </div>
</template>

<script>
  import Hearder from '../../components/Hearder.vue';
  import '../../assets/js/setFontSize.js';
  import { noPassByMobile } from '@/assets/js/global';
  import { getOrderList } from '@/api/order'
  export default {
    name: 'msgCenter2',
    data() {
      return {
        head_name: '消息中心',
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
.msgCenter2 {}
body{background: #F6F6F6; font-size: 1.3rem;}
.newMsg .ring,.newAnswer .ring{background: #F04E23;width: .5rem;height: .5rem;border-radius: .5rem;display: inline-block;}
.ringA{background: #F04E23;width: 1.2rem;height: 1.2rem;border-radius: 1.2rem;display: inline-block;color: #FFF;text-align: center;line-height: 1.2rem;margin-left: .6rem;}
.descript{ font-size: 1.2rem; }

</style>
