<template>
    <div class="page">
         <Hearder :head_name="head_name" />
        <div class="banner">
        <img src="https://ypmm.yjxun.cn/tv/tv_app/project/images/banner.jpg" alt="">
    </div>
    <div class="conten_info">
        <p class="system_tit">
            高德地图API车辆航迹图程序
        </p>
        <p class="price_info">
            <span class="price_span">
                售价: <span class="price">
                    350,000
                </span>
            </span>
            <span class="fc_span">
                分成:
                <span class="fc">
                    30%
                </span>
            </span>
        </p>
        <p class="default_info">
            <span class="default_span">
                程序大小: <span>
                    86M
                </span>
            </span>
            <span class="default_span">
                最后更新: <span>
                    2021-06-10
                </span>
            </span>
        </p>
        <p class="default_info">
            <span class="default_span">
                数据库: <span>
                    MYsql
                </span>
            </span>
            <span class="default_span">
                开发语言: <span>
                    PHP
                </span>
            </span>
        </p>
        <p class="default_info">
            <span class="default_span">
                伪静态: <span>
                    需要
                </span>
            </span>
            <span class="default_span">
                主机类型: <span>
                    独立主机(服务器、VPS)
                </span>
            </span>
        </p>
        <p class="default_info">
            <span class="default_span">
                操作系统: <span>
                    Windows
                </span>
            </span>
            <span class="default_span">
                web服务器: <span>
                    Nginx
                </span>
            </span>
        </p>
        <p class="default_info">
            <span class="default_span">
                安装服务: <span>
                    ￥200（需额外支付费用，可选服务）
                </span>
            </span>
        </p>
        <p class="default_info">
            <span class="default_span">
                需要支持/适配的客户端: <span>
                    移动端 小程序
                </span>
            </span>
        </p>
        <p class="default_info">
            <span class="default_span">
                安装方式: <span>
                    提供管理员权限
                </span>
            </span>
            <span class="default_span">
                演示地址: <span class="link">
                    点击体验演示系统
                </span>
            </span>
        </p>
    </div>
    <div class="system_content">
        <img src="https://ypmm.yjxun.cn/tv/tv_app/project/images/info.jpg" alt="">
    </div>

    <div class="bottom">
        <div class="collect_box">
           
            <span>收藏</span>
        </div>
        <span class="commit">
            咨询技术专员
        </span>
    </div>
    <div style="height: 9rem;"></div>
    <TabbarHtml v-bind:active=3 />
    </div>
</template>

<script>
   import Hearder from '../../components/Hearder.vue';
     import TabbarHtml from '../../components/Tabbar.vue';
     import '../../assets/js/setFontSize.js';
  export default {
    name: 'IndexPage',
      data() {
            return {
                head_name: '系统详情',
                list:[]
            }
        },
    components:{
          Hearder,
          TabbarHtml
    },
    props: {
     
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/appstyle.css';
   body {
            background: #f7f7f7;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .banner {
            height: 18.076923rem;

            width: 100%;
        }

        .banner img {
            height: 100%;
            width: 100%;
        }


        .bottom {
            height: 4rem;
            background-color: #ffffff;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 1.807692rem;

        }

        .collect_box {
            display: flex;
            flex-direction: column;
        }

        .collect_box>svg {
            width: 2rem;
            height: 2rem;
        }

        .collect_box span {
            font-family: SourceHanSansCN-Regular;
            font-size: 1rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 2.153846rem;
            letter-spacing: 0px;
            color: #3e3e3e;
        }

        .commit {
            width: 10.769231rem;
            height: 100%;
            background-color: #1457dd;
            color: #fff;
            text-align: center;
            line-height: 4rem;
            font-family: SourceHanSansCN-Regular;
            font-size: 1.230769rem;
            font-weight: normal;
            font-stretch: normal;
        }

        .conten_info {
            padding-top: 1.307692rem;
            padding-left: 1.230769rem;
            background: #fff;
            padding-bottom: 1rem;
            margin-bottom: 1.2rem;
        }

        .system_tit {
            font-family: SourceHanSansCN-Regular;
            font-size: 1.230769rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.384615rem;
            letter-spacing: 0px;
            color: #202021;
        }

        .price_info {
            margin-top: 1rem;
            font-family: SourceHanSansCN-Regular;
            font-size: 1rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.153846rem;
            letter-spacing: 0px;
            color: #666666;
        }

        .price_info span:nth-child(1) {
            margin-right: .8rem;
        }

        .price,
        .fc {
            font-family: FZYDZHJW--GB1-0;
            font-size: 1.076923rem;
            font-weight: bold;
            font-stretch: normal;
            line-height: 1.461538rem;
            letter-spacing: 0px;
            color: #ff4c73;
        }

        .default_info {
            font-family: SourceHanSansCN-Regular;
            font-size: 1rem;
            letter-spacing: 0px;
            line-height: 1em;
            color: #666666;
            display: flex;
            margin-top: .923077rem
        }

        .default_info .default_span:nth-child(1){
            width: 45%;
        }
      
        .default_info .default_span:last-child{
            flex: 1;
        }

        .default_span span {
            font-family: SourceHanSansCN-Regular;
            font-size: 1rem;
            font-weight: normal;
            letter-spacing: 0px;
            color: #3399ff;

        }

        .link {
            font-family: SourceHanSansCN-Regular;
            text-decoration: underline;
            font-size: 1rem;
            font-weight: normal;
            letter-spacing: 0px;
            color: #3399ff;
        }
        .system_content img{
            width: 100%;
            height: auto;
        }   
</style>
