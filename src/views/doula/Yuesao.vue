<template>
    <div>
           <div class="headerBoxCircle">
        <img src="../../assets/images/goback_b.png" onClick="goback()" class="left">
        <p class="midden">月嫂预约成功</p>
    </div>
    <div class="h50"></div>

    <div class="co-content">
        <div class="con-bg">
            <p class="con-plist">
                客服人员会在稍后与您联系，并安排与月嫂的在线 视频面试，请保持电话畅通。
            </p>
        </div>
        <p class="con-plist2">
            预计1小时内响应，联系电话请保持畅通。稍后会 有客服人员与您进行联系，请耐心等候。
        </p>
    </div>
    <div class="addfriends" onclick="goo('./mat_seorder.html')" id="go_orders">返回订单</div>
    <div class="addfriends" id="addfrs" style="display:none;">去面试</div>
    </div>
</template>

<script>
//import '../assets/js/commont.js'
// export default {
//     data:{

//     },
//     created:{

//     },
//     methods:{
//        get_data() {
// 			$.ajax({
// 				url: '/?m=data&c=doulas&a=get_order_status',
// 				type: 'POST',
// 				data: 'orderid=' + orderid,
// 				dataType: 'json',
// 				success: function(data) {
//                    var status=data.status;
//                   // status=1;
//                    if(0<status){
//                     $('#addfrs').show();
//                     $('#go_orders').hide();
//                     $('#addfrs').click(function(){
//                         goo('./makevideo.html?id='+getUrlParam('userid'));
//                     });
//                    }else{
//                     $('#addfrs').hide(); 
//                     $('#go_orders').show();
//                    }
// 				}
// 			})
// 		} 
//     }
// }
</script>

<style>
  .headerBoxCircle {
            z-index: 99;
        }

        body {
            background: #ffffff;
        }

        .addfriends {
            width: 85%;
            height: 3rem;
            background: #ff5400;
            line-height: 3rem;
            border-radius: .3rem;
            font-size: 1rem;
            text-align: center;
            color: #fff;
            margin: 3rem auto 3rem auto;
            bottom: 3rem;
        }

        .co-content {
            width: 100%;
            padding: 2.5rem 1rem 1rem 2rem;
        }

        .co-content .con-bg {
            width: 100%;
            height: 8rem;
            background: #ffffff url(../../../static/images/bakcj3.png) no-repeat;
            background-size: contain;
            position: relative;
        }

        .con-plist {
            position: absolute;
            top: 50%;
            width: 80%;
            font-size: 1.02rem;
            color: #666666;
            margin-left: 3rem;
            transform: translateY(-50%);
        }

        .con-plist2 {
            width: 80%;
            font-size: 1.02rem;
            color: #666666;
            margin: 1rem 0 0 3rem;
        }
</style>