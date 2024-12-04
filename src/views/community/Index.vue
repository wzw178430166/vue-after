<template>
    <div class="content">
         <Hearder :head_name="head_name" />
         <div class="bg_banner">
        <div class="input_box">
            <input type="text" id="k" placeholder-color="#999" placeholder="输入关键词快速搜索感兴趣的内容">
        </div>
        <div class="banner">
            <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/img6.jpg" alt="">
        </div>
    </div>
    <div class="hot_serve">
        <p class="hot_tit">
            <span class="hot_left">
                热门课程
            </span>
            <span class="more">
                更多>
            </span>
        </p>
        <div class="hot_list">
            <div class="hot_item">
                <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/item_img.jpg" alt="" class="item_img">
                <p class="hot_item_tit">
                    微信小程序|小程序定制开
                    发|分销商城小程序
                </p>
            </div>
            <div class="hot_item">
                <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/item_img.jpg" alt="" class="item_img">
                <p class="hot_item_tit">
                    微信小程序|小程序定制开
                    发|分销商城小程序
                </p>
            </div>
            <div class="hot_item">
                <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/item_img.jpg" alt="" class="item_img">
                <p class="hot_item_tit">
                    微信小程序|小程序定制开
                    发|分销商城小程序
                </p>
            </div>
        </div>
    </div>
    <div class="pl_container">
        <div class="pl_top">
            <p class="left_pl">
                <span class="toggle_span chocked">
                    最新
                </span>
                <span class="toggle_span">
                    与我有关
                </span>
            </p>
            <span class="ft_span">
                <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/bianji.png" alt="">
                发帖
            </span>
        </div>
        <div class="pl_content">
            <div class="pl_item">
                <p class="pl_tit">
                    html5+css样式冲突，如何解决？在线等。
                </p>
                <div class="user_info">
                    <div class="user_info">
                        <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/img88.jpg" alt="">
                        <p class="pl_tiem">
                            <span class="pl_name">
                                回忆、真好
                            </span>
                            <span class="time">
                                2012-05-21
                            </span>
                        </p>
                    </div>
                    <div class="user_right">
                        <span>
                            <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/dz.png" alt="">
                            453
                        </span>
                        <span>
                            <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/ly.png" alt="">
                            121
                        </span>
                        <span>
                            <img src="https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/forward.png" alt="">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <TabbarHtml v-bind:active=1 /> 
    </div>
</template>

<script>
import Hearder from '@/components/Hearder.vue';
import TabbarHtml from '@/components/Tabbar.vue';
//import '../assets/js/commont.js'
export default {
      data() {
            return {
                head_name: '系统销售',
                list:[],
                data:[]
            }
        },
   
     components: {
            Hearder,
            TabbarHtml
     },
    methods:{
 
    }
}
</script>

<style scoped>
    @import '../../assets/css/appstyle.css';
 body {
            background: #f7f7f7;
            padding-bottom: 4rem;
        }

        .bg_banner {
            width: 100%;
            height: auto;
            background: #fff;
            background-size: 100%;
            background-repeat: no-repeat;
            padding: 1rem .769231rem 0
        }

        .bg_banner .input_box {
            width: 100%;
            height: 2.615385rem;
            background-color: #f5f4f7;
            border-radius: 1.307692rem;
            padding-left: 3rem;
            border: solid 1px #e6e6e6;
            position: relative;
            margin-bottom: 1rem;
        }

        .input_box input {
            width: 100%;
            height: 2.615385rem;
            outline: none;
            border: none;
            background-color: #f5f4f7;
            border-radius: 1.307692rem;
        }

        .input_box::before {
            content: "";
            display: block;
            height: 1.192308rem;
            width: 1.192308rem;
            position: absolute;
            background: url(https://ypmm.yjxun.cn/tv/tv_app/forum/style1/images/search.png);
            background-size: 100%;
            top: 50%;
            left: 1rem;
            transform: translateY(-50%);
        }

        .banner {
            width: 100%;
            height: 10.769231rem;

        }

        .banner img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: .384615rem;
        }


        .hot_serve {
            padding: 1.538462rem .884615rem 2.307692rem;
            background: #fff;
        }

        .hot_tit {
            display: flex;
            justify-content: space-between;
        }

        .hot_left {
            font-family: SourceHanSansCN-Medium;
            font-size: 1.307692rem;
            line-height: 1.461538rem;
            letter-spacing: 0px;
            color: #333333;
        }

        .more {
            font-family: SourceHanSansCN-Regular;
            font-size: 1rem;
            line-height: 1.461538rem;
            letter-spacing: 0px;
            color: #999999;
            align-self: flex-end;
        }

        .hot_item {
            width: 12.153846rem;
        }

        .item_img {
            width: 12.153846rem;
            height: 7.576923rem;
        }

        .hot_list {
            margin-top: 1rem;
            display: flex;
            overflow: auto;

        }

        .hot_list::-webkit-scrollbar {
            display: none;
        }

        .hot_item:nth-child(n+2) {
            margin-left: .692308rem;
        }


        .hot_item_tit {
            font-size: 1.076923rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.461538rem;
            letter-spacing: 0px;
            color: #333333;
        }

        .bottom {
            height: 4.038462rem;
            background: #fff;
            position: fixed;
            width: 100%;
            bottom: 0;
            border-top: 1px solid #e3e3e7;
            display: flex;
            justify-content: space-around;
        }

        .bottom_nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: center;
        }

        .bottom_nav img {
            margin-bottom: .3rem;
        }

        .bottom_nav span {
            align-self: flex-end;
        }

       

        .bottom_nav:nth-child(1) img {
            height: 1.384615rem;
            width: 1.384615rem;
        }

        .bottom_nav:nth-child(2) img {
            height: 1.192308rem;
            width: 1.5rem;
        }

        .bottom_nav:nth-child(4) img {
            height: 1.153846rem;
            width: 1.269231rem;
        }
        .bottom_nav:nth-child(3) img {
            height: 1.43846rem;
            width: 1.269231rem;
        }

        .bottom_nav:nth-child(5) img {
            height: 1.192308rem;
            width: 1.192308rem;
        }

        .pl_container {
            background: #fff;
            margin-top: 1rem;
        }

        .pl_top {
            padding: 1.269231rem .961538rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #e4e1e1;

        }

        .toggle_span {
            font-family: SourceHanSansCN-Regular;
            font-size: 1.153846rem;
            line-height: 1.461538rem;
            letter-spacing: 0px;
            color: #8a8888;
        }

        .toggle_span:nth-child(1) {
            margin-right: 1.269231rem;
        }

        .chocked {
            font-family: SourceHanSansCN-Medium;
            font-size: 1.307692rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.461538rem;
            letter-spacing: 0px;
            color: #333333;
        }

        .ft_span {
            width: 5.961538rem;
            height: 2rem;
            background-color: #ffebeb;
            border-radius: .384615rem;
            border: solid 1px #f05f5e;
            text-align: center;
            line-height: 2rem;
            font-family: SourceHanSansCN-Regular;
            font-size: 1.076923rem;
            letter-spacing: 0px;
            color: #eb5a5a;

        }

        .ft_span img {
            height: 1.038462rem;
        }

        .pl_tit {
            font-family: SourceHanSansCN-Regular;
            font-size: 1.153846rem;
            line-height: 1.769231rem;
            letter-spacing: 0px;
            color: #333333;
        }

        .pl_item {
            padding: 1.615385rem 1.307692rem;
        }

        .user_info {
            display: flex;
            justify-content: space-between;
            margin-top: .923077rem;
        }

        .user_info>img {
            height: 2.307692rem;
            width: 2.307692rem;
            border-radius: 50%;
            margin-right: .6rem;
        }

        .pl_tiem {
            display: flex;
            flex-direction: column;
        }

        .pl_name {
            font-family: SourceHanSansCN-Regular;
            font-size: 1rem;
            line-height: 1.384615rem;
            letter-spacing: 0px;
            color: #666666;
        }

        .time {
            font-family: SourceHanSansCN-Normal;
            font-size: .846154rem;
            line-height: 1.384615rem;
            letter-spacing: 0px;
            color: #999999;
        }

        .user_right {
            align-self: flex-end;
            font-size: .923077rem;
            line-height: 1.384615rem;
            letter-spacing: 0px;
            color: #666666;
        }

        .user_right span:not(:last-child) {
            margin-right: 2rem;
        }

        .user_right img {
            height: 1.076923rem;
        }
</style>