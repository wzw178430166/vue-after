<template>
  <div class="page">

    <div id='tplA' style='display: none;'>
      <li>
        <div class="quiz-content"></div>
        <div class="quiz-imgs"></div>
        <div class="quiz-data"> <span>
            <font>0</font>个问答
          </span>
          <font></font>
        </div>
      </li>
    </div>
    <div id='tplB' style='display: none;'>
      <li>
        <div class="quiz-answer">
          <div class="answer-head"><img src="">
          </div>
          <div class="answer-data">
            <p><span></span>
              <font>回答了问题</font>
            </p>
            <p></p>
          </div>
        </div>
        <div class="quiz-content"></div>
        <div class="quiz-imgs"></div>
        <div class="quiz-data"> <span>
            <font>0</font>人收藏
          </span>
          <font>2个小时</font>
        </div>
      </li>
    </div>
    <!-- template -->

    <div class="m-head">
      <div class="m-head-query">
        <div class="query-input">
          <input type="text" id="k" ref="k" @keydown.13="search_data">
          <i class="query-clear" id="J_clear"></i>
        </div>

        <div class="m-head-message" @click="$router.push('/msgCenter2')">
          <i></i>
          <div class="mheadTag" id="medmsg" style="display: none;">0</div>
        </div>
      </div>
    </div>
    <div class="h50"></div>
    <div class="mt_boxs">
      <div class="swiper">
        <van-swipe :autoplay="5000" :loop="true" indicator-color="#fe597c">
          <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
            <img :src="host+image.image" @click="Preview_img(image,index)">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- <div class="m-banner" id="J_banners">
            <div class="banner-container bd">
                <div class="tempWrap">
                    <ul id="advert">

                    </ul>
                </div>
            </div>
            <div class="hd">
                <ul>
                    <li class="on"></li>
                </ul>
            </div>
        </div> -->
    </div>
    <div class="option_box">
      <ul>
        <!-- <li onclick="goo('/doula/store_list.html')"> ?&id=18-->
        <li @click="$router.push('/matmatron_list')">
          <div class="option"><img :src="`${host}/index/style3/images/ysicon.png`">
            <p>找母婴师1</p>
          </div>
        </li>
        <li onclick="goo('/doula/matmatron_list.html?user_type=2')">
          <div class="option"><img :src="`${host}/index/style3/images/w626123652.png`">
            <p>找育婴师</p>
          </div>
        </li>
        <li onclick="goo('/se/se_list.html?class=1')">
          <div class="option"><img :src="`${host}/index/style3/images/chhuf.png`">
            <p>女性护理</p>
          </div>
        </li>
        <li onclick="goo('/se/se_list.html?class=2')">
          <div class="option"><img :src="`${host}/index/style3/images/yier.png`">
            <p>婴儿护理</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="option_box" style="margin-bottom: .5rem;">
      <ul>
        <li onclick="goo('/equipment/equipment_list.html')">
          <div class="option"><img :src="`${host}/index/style3/images/jianche.png`">
            <p>数据监测</p>
          </div>
        </li>
        <li onclick="goo('/course/course_train.html?type=index')">
          <div class="option"><img :src="`${host}/index/style3/images/kecheng.png`">
            <p>精品课程</p>
          </div>
        </li>
        <li onclick="if(!userid_ || userid_ == 'null'){goo('/member/login.html');}else{goo('/patient/sr_index.html');}">
          <div class="option"><img :src="`${host}/index/style3/images/myzx.png`">
            <p>找名医</p>
          </div>
        </li>
        <!-- <li onclick="goo('/circleN/')">
					<div class="option"><img src="./images/shequ.png">
						<p>育婴社区</p>
					</div>
				</li> -->
        <li onclick="goo('/yunchan/list.html')">
          <div class="option"><img :src="`${host}/index/style3/images/gongju.png`">
            <p>孕妇专区</p>
          </div>
        </li>
      </ul>
    </div>
    <div style="width: 100%;height: 1rem;background: #f4f2f2;margin-top: 0.8rem;"></div>
    <!-- <div class="m-inner">
			<div class="head_bottom" onclick="goo('/course/member_vip.html')">
				<img src="/index1/images/kewwe.png">
				<span class="head_state">成为会员</span>
			</div>
		</div> -->
    <div class="m_dbox">
      <span>同城门店</span>
      <span class="mstios" @click="$router.push('/store/list')">更多<i class="uings"><img
            :src="`${host}/index1/images/jiahaos.png`" style="width: 100%;"></i></span>
    </div>
    <div class="store_container">
      <div class="store_content_box">
        <ul class="store_content" id="store_content">
          <li class="store_item" v-for="item in store" :key="item.id">
            <img :src="host+item.thumb" alt="">
            <p class="store_name">
              {{item.name}}
            </p>
            <p class="distance">
              距离您{{item.distance}}km
            </p>
          </li>
        </ul>
      </div>

    </div>

    <div class="m_dbox">
      <span>精品课程</span>
      <span class="mstios" onclick="goo('/course/course_train.html?type=index')">更多<i class="uings"><img
            :src="`${host}/index1/images/jiahaos.png`" style="width: 100%;"></i></span>
    </div>

    <div class="ciont_box">
      <div class="ciont_item" v-for="(item,index) in course" :key="index"
        @click="goo({path:'/course_details',query:{tchid:item.tchid,id:item.id}})">
        <div class="cont_img">
          <img :src="`${host}/se_bg/style1/images/ge19080804.png`" v-if="item.thumb == null">
          <img :src="host+item.thumb" v-else>
        </div>
        <div class="ciont_title">{{item.title}}</div>
        <div class="ciont_bottom">
          <span class="cin_span1">
            <span class="momey_p">¥</span>
            {{item.price}}
          </span>
          <span class="cin_span2" v-if="item.vip == 1">会员免费</span>
        </div>
      </div>



    </div>
    <div class="yhj" onclick="goo('/mall/coupon.html')">
      <img :src="`${host}/index/style3/images/yhj.png`" alt="">
    </div>
    <div class="m_dbox" style="height: 3rem;line-height: 4rem; ">
      <span>健康服务</span>
    </div>
    <div class="option_box" id="kangks">
      <ul>
        <!-- <li onclick="goo('/doula/matmatron_list.html')"> -->
        <li onclick="goo('/medical/index.html?target=top&to_uid='+getCookie(cookie_pre + '__userid'))">
          <div class="option">
            <img :src="`${host}/index/style3/images/jkdn.jpg`">
            <p class="p1">健康档案</p>
          </div>
        </li>
        <li onclick="goo('/medical/jktx.html?target=top')">
          <div class="option">
            <img :src="`${host}/index/style3/images/sadlj.jpg`">

            <p class="p1">健康提醒</p>
            <span class="tixin" id="hea_count">0</span>
          </div>
        </li>
        <li onclick="goo('/?m=myim&a=sr_dialogue_fast')">
          <div class="option"><img :src="`${host}/index/style3/images/ldajk.jpg`">
            <p class="p1">快速问医生</p>
          </div>
        </li>
        <li onclick="goo('/group/per_list.html?target=top')">
          <div class="option"><img :src="`${host}/index/style3/images/qyts.jpg`">
            <p class="p1">我的亲友</p>
          </div>
        </li>
      </ul>
    </div>
    <div style="width: 100%;height: 1rem;background: #f4f2f2;margin-top: 1rem;"></div>
    <div class="m_dbox">
      <span>推荐母婴师</span>
      <span class="mstios" onclick="goo('/doula/matmatron_list.html')">更多<i class="uings"><img
            :src="`${host}/index1/images/jiahaos.png`" style="width: 100%;"></i></span>
    </div>
    <div class="planting">
      <ul id="plants">
        <li class='li-rela' v-for="(item,idnex) in list" v-if="item.birthday!='0000-00-00'"
          @click="goo({path:'/doula/mat_details5.html',query:{id:item.userid}})">
          <div class="poster-thumb"><img :onerror="defaultImg" :src="host+item.portrait" width="100%"></div>
          <div class="msg_box">
            <p class="poster-title">
              {{item.realname.substr(0,1)}}妈妈
              {{item.birthdays}}岁
            </p>
            <div class="scores">
              <div class="starts">
                <div v-for="(items, index) in 5">
                  <img :src="`${host}/se/images/start1.jpg`" v-if="Number(item.starts)>index">
                  <img :src="`${host}/se/images/startw.jpg`" v-else>
                </div>
              </div>
            </div>
            <p class="poster-price">
              <span class="cactive<%:=j%>">{{item.w_experience}}
              </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="m_dbox" style="padding-top: .5rem;
    line-height: 1rem;
    height: 2.2rem;" data-val="护理服务">
      <span>护理服务</span>
      <span class="mstios" onclick="goo('/se/se_list.html')">更多<i class="uings"><img
            :src="`${host}/index1/images/jiahaos.png`" style="width: 100%;"></i></span>
    </div>
    <div class="contents" id="contentedstt">

      <div class="listitem listitem1" v-for="(item,idnex) in server">
        <div class="img">
          <div class="zoomImage" :style="`background-image:url('${defaultImg}')`"
            v-if="item.thumb==''||item.thumb==null" @click="goo({path:'/doula/mat_details5.html',query:{id:item.id}})">
          </div>
          <div class="zoomImage" :style="`background-image:url(${host+item.thumb})`" v-else>
          </div>
        </div>
        <div class="artic">
          <div class="title">
            {{item.name}}
          </div>
          <div class="citem_div2">
            {{item.synopsis}}
          </div>
          <div class="piece">
            <span class="piexe_t"><span class="sm_m">￥</span><span>
                {{item.price}}
              </span></span>
            <span class="piexe_navs">
              <span class="piexe_b">
                {{Math.floor(Math.random()*300)+200}}
              </span>人已购买
            </span>
          </div>
        </div>
      </div>


    </div>
    <div class="henline" style="height: 1rem;"></div>
    <div id="menu" class="nv_menu">
      <ul>
        <li :data-status=i v-for="(elem,i) of word_str" :key="i" @click="fun(i)">
          {{elem}}
          <p :class='i==list_active?"pstyle":""'></p>
        </li>
        <!-- <li data-status="1">互动
                <p></p>
            </li>
            <li class="on" data-status="2">发现
                <p class="pstyle"></p>
            </li>
            <li data-status="3">优选
                <p></p>
            </li>
            <li data-status="4">问答
                <p></p>
            </li> -->
      </ul>
      <div class="clear"></div>
    </div>

    <div class="tab_container" id="tab_contianer">
      <div id="tab-const" ref="profile">
        <div class="tab_itemst" id="contenteds" data-loaded="0" data-pagedd="1" @scroll.passive="scrollFun"
          data-status="0">
          <div class="contentsed">
            <div class="listitem listitem1" v-for="(item, index) in news" :key="index">
              <div class="artic">
                <div class="title">
                  {{item.title}}
                </div>
                <div class="citem_div5"> {{item.description}} </div>
                <div class="citem_div4">
                  <span class="cactive1">{{item.labels}}</span>
                </div>
              </div>
              <div class="img">
                <div v-if="item.thumb==''||item.thumb==null" class="zoomImage"
                  :style="`background-image:url('${host}/index/style3/images/sfsadfd.jpg'); `"></div>
                <div class="zoomImage" v-else>
                  <img :src="item.thumb" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab_itemst" id="tab_cotes_ad" data-pagedd="1" @scroll.passive="scrollFun" data-status="1">
          <!--topic-->
          <div class="m-dynamic">
            <div class="dynamic-item" id='defaultTpl' style='display: none;'>
              <!--<p class="dynamic-content" style='-webkit-line-clamp: 3'></p>-->
              <div class="dynamic-content"
                style='text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;line-clamp: 3;-webkit-box-orient: vertical;'>
              </div>
              <div class="item-atlas">
                <ul>
                  <li><img src=""></li>
                </ul>
              </div>
              <div class="item-push" style="display: none;"></div>
              <div class="item-tool">
                <div class="tool-top">
                  <div class="tool-member">
                    <div class="member-head"><img src=""></div>
                    <div class="member-info">
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                  <div class="tool-nav"> <span class="nav-share"></span><span class="nav-comment">0</span><span
                      class="nav-like"><i>0</i></span> </div>
                </div>
                <div class="tool-bottom"> <span>发布自 <p class="toCircleTip"></p><i id='toCircle'></i></span>
                  <font></font> <em class="operate-close"></em>
                </div>
              </div>
            </div>
          </div>

          <!--  -->

        </div>
        <div class="tab_itemst on" data-pagedd="1" @scroll.passive="scrollFun" data-status="2">
          <div class="content" style="display: block;">
            <div class="m-circle-recommend">
              <ul id="recommend">
                <li v-for="(elem, index) in video" :key="index">
                  <div class="dynamic-img" :style="` background-image: url(${elem.imgs})`">
                    <div class="playIco"><i></i></div>
                  </div>
                  <p class="dynamic-desc">{{elem.title}}</p>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <!-- 优选 -->
        <div class="tab_itemst" data-pagedd="1" @scroll.passive="scrollFun" data-status="3">
          <div class="content_divs" id="spu">

 <div class="content_items" v-for="(elem, index) in shops" :key="index">
        <div class="content_iteimg">
                <img :src="host_shop+elem.img" :onerror="defaultImg">
            </div>
            <p class="cont-title1">{{elem.name}}</p>
            <p class="cont-title2">{{elem.introduce}}</p>
            <p class="cont-title3">
                ￥{{elem.price}}
                <p class="cont-title5">￥{{elem.old_price}}</p>
            </p>
            <p class="cont-title4" style="display: none;">
                <span>包邮</span>
                <span>限时优惠</span>
            </p>
            <div class="content_shopping">
                <!-- <img src="/h5page/muyin/images/shoppings.jpg"> -->
                购买
            </div>
        </div>

          </div>
        </div>
        <!-- 问答 -->
        <div class="tab_itemst" data-pagedd="1" @scroll.passive="scrollFun" data-status="4">
          <div class="m-quiz">
            <ul v-if="answer && answer.length > 0">
              <li v-for="(item, index) in answer" :key="index" v-if="item.index == 0"
                @click="goo({path:'/quiz/show.html',query:{'id':item.id,'_index':item.index}})">
                <div class="quiz-content" v-text="item.title"></div>
                <div class="quiz-imgs" v-if="item.img_count > 0 && item.imgArr.length > 0">

                  <div class="imgs-item" v-for="(item1, index) in item.imgArr" :key="index" v-if="index<2"
                    style="height:6.9rem;">
                    <div class="zoomImage" :style="`width:66%;background-image:url('${host+item1}');`"></div>
                  </div>

                </div>
                <div class="quiz-data">
                  <span>
                    <font v-text="item.answer_c">0</font>个问答
                  </span>
                  <font v-text="item.add_date"></font>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div style="color: #666;font-size: 1rem;text-align: center;padding: 2rem;display: none;" id="wuwi">暂无数据</div>
    <div class="mas_content">
      <div class="mastst_img" id="mastst_img">
        <img :src="`${host}/index/style3/images/wiguwehgs.png`" class="imsgs" id="imsgs">
        <div class="bottom_but" onclick="goo('/?m=myim&c=customer_service')">咨询顾问</div>
      </div>
      <img :src="`${host}/index/style3/images/guwens.png`" class="imsgssts" id="imsgssts"
        onclick="goo('/?m=myim&c=customer_service')">
    </div>
    <span id="footer_box"></span>
    <!-- <div style="height: 4.2rem;"></div> -->
    <div style="height: 5rem;"></div>
    <TabbarHtml v-bind:active=0 />
  </div>
</template>

<script>
  import $ from "jquery"
  import {
    debounce
  } from "lodash";
  import {
    getchilds,
    throttle
  } from "../../assets/js/toole.js"
  import {
    Swipe,
    SwipeItem,
    ImagePreview
  } from "vant";
  import TabbarHtml from '@/components/Tabbar1.vue';
  import '../../assets/js/setFontSize.js';
  //import '../../../static/js/TouchSlide.1.1.js';
  import Hearder from '@/components/Hearder.vue';
  export default {
    name: 'IndexPage',
    data() {
      return {
        active: 0,
        head_name: '接单平台',
        SwiperImg: [
          // "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          // "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          // "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          // "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg",
          // "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34423/17/5378/97852/5cbecd7bE73730c2f/76e5359d8fb3a1e1.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        ],
        store: [],
        host: this.host, //域名
        host_shop: this.host_shop, //商城域名
        course: [],
        list: [],
        defaultImg: 'this.src="' + require('../../assets/images/sfsadfd.jpg') + '"',
        server: [],
        k_word: [{
          'word': "什么时产后耻骨疼痛",
          'type': 'news'
        }, {
          'word': "孕期有什么不能做？",
          'type': 'news'
        }, {
          'word': "坐月子有什么忌讳",
          'type': 'news'
        }],
        k_id: 0,
        word_str: ['推荐', '互动', '发现', '优选', '问答'],
        list_active: 2,
        loaded0: 0,
        page0: 1,
        loaded1: 0,
        page1: 1,
        loaded2: 0,
        page2: 1,
        loaded3: 0,
        page3: 1,
        loaded4: 0,
        page4: 1,
        video: [],
        pagedd: 1,
        news: [],
        //scrollFun: () => {}
        isloading: true,
        answer: [],
        shops:[]
      }
    },
    created() {
      //轮播图
      this.axios.get(process.env.API_ROOT+'/?m=data&c=index&a=advert_index&advert_id=8').then(res => {
      this.SwiperImg = res;
      }).catch(err => {
        console.log(err);
      });

      //门店
      this.axios.post(process.env.API_ROOT+'/?m=data&c=doulas&a=list_').then(res => {
        this.store = res.filter(item => item.posids == 1)
      }).catch(err => {
        console.log(err);
      });
      //课程
      this.axios.post(process.env.API_ROOT+'/?m=data&c=on_course&a=etCourseData').then(res => {
        var datas = res.data;
        this.course = datas;
        // console.log(this.course);
      }).catch(err => {
        console.log(err);
      });
      //月嫂
      this.axios.get(process.env.API_ROOT+'/?m=data&c=doula&a=get_member_doula1&page=1').then(res => {
        var datas = res.data;
        for (var i in datas) {
          if (datas[i].birthday || datas[i].birthday != '0000-00-00') {
            var da = datas[i].birthday;
            datas[i].birthdays = this.getAge(da);
          }
        }
        this.list = datas;
      }).catch(err => {
        console.log(err);
      });
      //服务
      this.axios.get(process.env.API_ROOT+'/?m=data&c=store&a=list_service&num=2').then(res => {
        var datas = res.data;
        this.server = datas;

      }).catch(err => {
        console.log(err);
      });

    },
    components: {
      Hearder,
      TabbarHtml,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
      //[Loading.name]: Loading
    },

    methods: {
      goo(parsem) {
        this.$router.push({
          path: parsem.path,
          query: parsem.query
        });
      },
     getRecommender(){
          //商城
         var url  = process.env.API_SOOT+'/?m=mall&c=renovation&a=itemData&index=3&data_index=0&category=index&terminal=wap&page=1';
                 //process.env.API_SOOT+'/?m=corp&c=spu&a=lists&ajax=1&category_id=6&page=1&rows=10'
         this.axios.get(url).then(res=>{
            var data = {"status":1,"erro":"","data":{"rows":[{"id":"2","img":"\/ckfinder\/userfiles\/images\/%E4%B8%B4%E6%97%B6%E5%9B%BE%E7%89%87\/be15fc24f584922c.jpg.jpg","name":"\u4f73\u8d1d\u827e\u7279\uff08Kabrita\uff09\u7231\u76ca\u68ee\u76ca\u751f\u83cc\u56fa\u4f53\u996e\u6599 \u84dd\u76d2 \u6e29\u517b\u8212\u75453g*12\u6761\/\u76d2\uff08\u5b98\u65b9\u76f4\u9500\u5e97\uff09","introduce":"","price":119,"old_price":126},{"id":"34","img":"\/ckfinder\/userfiles\/files\/88d2d67eaf73ed3a581cea1d6e29fc83.jpg","name":"\u9ea6\u996d\u77f3\u5976\u9505\u4e0d\u7c98\u9505\u5bb6\u7528\u5b9d\u5b9d\u8f85\u98df\u9505\u5a74\u513f\u5976\u9505\u5177\u70ed\u725b\u5976\u6ce1\u9762\u6c64\u9505","introduce":"","price":13.79,"old_price":15.45},{"id":"33","img":"\/ckfinder\/userfiles\/files\/f6971c0d5393cdf59a7516f286936140(1).png","name":"\u4f9b\u5e94\u5a74\u513f\u8f85\u98df\u54ac\u54ac\u4e50\u5c0f\u5b69\u679c\u852c\u54ac\u54ac\u4e50\u8425\u517b\u8f85\u98df\u679c\u852c\u4e50","introduce":"","price":2.4,"old_price":2.55},{"id":"28","img":"\/ckfinder\/userfiles\/files\/7f4b539e81e7089cb78931cdd6264b95.jpg","name":"\u5b9d\u5b9d\u5982\u5395\u8bad\u7ec3\u88e4\u513f\u7ae5\u5b66\u4e60\u88e4\u9632\u6c34\u9694\u5c3f\u88e4\u6212\u5c3f\u88e4\u795e\u5668\u5a74\u513f\u5c3f\u5e03\u88e4\u7eb1\u5e03","introduce":"","price":45,"old_price":46.5},{"id":"24","img":"\/ckfinder\/userfiles\/files\/525bb17ee3bea552680ebfaa7ab583d3.jpg","name":"\u5a74\u513f\u54ac\u54ac\u679c\u852c\u4e50\u7845\u80f6\u5b89\u629a\u5976\u5634\u7259\u80f6\u54ac\u54ac\u888b\u6c34\u679c\u8f85\u98df\u5668 \u5382\u5bb6\u6279\u53d1","introduce":"","price":3.6,"old_price":4.2},{"id":"12","img":"\/ckfinder\/userfiles\/files\/6bef30a2ff0e447e2a693c7af0fa56e2(1).jpg","name":"\u5382\u5bb6\u5b9a\u5236\u82b1\u8272\u5988\u54aa\u5305\u591a\u529f\u80fd\u9632\u6c34\u53cc\u80a9\u6bcd\u5a74\u5305\u5927\u5bb9\u91cf\u8f7b\u4fbf\u643a\u4ea7\u5987\u5f85\u4ea7\u5305","introduce":"","price":42,"old_price":48.5},{"id":"14","img":"\/ckfinder\/userfiles\/files\/33db4cd33cadffee9c034bf96e77b4a3.jpg","name":"\u65b0\u6b3e\u97e9\u7248\u5927\u5939\u53e3\u5988\u54aa\u5305\u53cc\u80a9\u80cc\u5305\u5f85\u4ea7\u5305","introduce":"","price":37.2,"old_price":39.5},{"id":"15","img":"\/ckfinder\/userfiles\/files\/A779e3ed91ba34aa9130b3a5e602cc8a.jpg","name":"\u4fbf\u6377\u5f0f\u6298\u53e0\u5a74\u513f\u5e8a\u5988\u54aa\u5305\u591a\u529f\u80fd\u5957\u88c5\u6bcd\u5a74\u5305\u5916\u51fa\u5988\u5988\u5305baby\u5f85\u4ea7\u5305","introduce":"","price":45.6,"old_price":56},{"id":"16","img":"\/ckfinder\/userfiles\/files\/093effd191c7076c84614fe1cfcc9536.jpg","name":"\u6fb3\u6d32\u7248 \u767e\u6d1b\u6cb9 \u5b55\u5987\u598a\u5a20\u6309\u6469\u6cb9 200ml\u5b55\u5987\u4e13\u7528\u62a4\u80a4\u6cb9\u6de1\u5316\u80a5\u80d6\u7eb9","introduce":"","price":166.8,"old_price":190},{"id":"27","img":"\/ckfinder\/userfiles\/files\/dc36.jpg","name":"Elinfant\u5a74\u513f\u5c3f\u5e03\u88e4\u5c3f\u5e03\u515c\u53ef\u6d17\u5b66\u4e60\u88e4\u5168\u68c9\u900f\u6c14\u9632\u6c34\u65b0\u751f\u513f\u5e03\u5c3f\u88e4","introduce":"","price":16.8,"old_price":17.2},{"id":"26","img":"\/ckfinder\/userfiles\/files\/172e81873b0591d9f6cb10757df5b336.jpg","name":"2020\u5b9d\u5b9d\u7ec3\u88e4\u53ef\u6d176\u5c42\u7eb1\u5e03\u5c3f\u5e03\u515c\u5b66\u4e60\u88e4\u5a74\u513f\u5e03\u5c3f\u88e4\u900f\u6c14\u9694\u5c3f\u88e4\u590f6","introduce":"","price":3.2,"old_price":12.2},{"id":"5","img":"\/ckfinder\/userfiles\/files\/1b87184c9e118e8b89ecb4423bf6f5d0.jpg","name":"\u4f18\u8d28\u65e0\u7eba\u5e03\u5a74\u513f\u6e7f\u5dfe80\u7247\u88c5\u97e9\u6587\u5e26\u76d6\u6e29\u548c\u8d85\u67d4\u5b9d\u5b9d\u624b\u53e3\u53ef\u7528\u6e7f\u7eb8\u5dfe","introduce":"","price":4.56,"old_price":5.56},{"id":"115","img":"\/upload\/seller\/c85aBQcEBlIFVFMIVgQCDlNUU1EHXQEAAQ0HVwYIAA8\/images\/03.jpg","name":"\u98df\u7269\u4e0d\u8010\u53d7\u68c0\u6d4b","introduce":"","price":1080,"old_price":0}]}}
            this.shops=data.data.rows;
         }).catch(err=>{console.log(err);
        });
      },
      search_data() {
        // var val = $('#k').val() == '' ? $('#k').attr('placeholder') : $('#k').val();
        var val = this.$refs.k.value == '' ? this.$refs.k.getAttribute('placeholder') : this.$refs.k.value;
        this.$router.push({
          path: '/search_all',
          query: {
            search: val
          }
        });
        // goo('/index/search_all.html?search=' + val);
        this.$refs.k.value == '';
      },
      fun(n) {
        this.list_active = n;
        var objs = getchilds(this.$refs.profile);
        for (var i = 0; i < objs.length; i++) {
          objs[i].setAttribute("class", "tab_itemst");
        }
        objs[n].setAttribute("class", "tab_itemst on");
        switch (Number(n)) {
          case 0:
            this.getRecommend();
            break;
          case 1:
            this.getInsideList();
            break;
          case 2:
            this.getRecommendttt();
            break;
          case 3:
            this.getRecommender();
            break;
          case 4:
            this.getDatass();
            break;
          default:

        }



      },

      scrollFun: debounce(function (e) {
        //使用防抖函数在停止滚动时加载一次，而不是在滚动过程中多次加载
        if (e instanceof Event && this.isloading) {
          let el = e.target;
          let scHeight = el.scrollHeight,
            scTop = el.scrollTop,
            clHeight = el.clientHeight;
          // var n=el.getAttribute('data-status');
          if (scHeight - scTop - clHeight >= 30) {
            console.log("距离底部的高度", scHeight - scTop - clHeight);
            return;
          } else {
            if (this.list_active == 0 || this.list_active == 1) {
              this.pagedd++;
            } else {
              this.pagedd = 1;
            }

            // console.log(this.list_active);
            this.fun(this.list_active);
          }
        }
      }, 500),

      //互动
      getInsideList() {
        console.log($('.dynamic-content'));
        var url = process.env.API_ROOT+'/?m=circleN&a=getInsideList&page='+ this.pagedd;
        var params = new URLSearchParams();
        params.append('getType', 1);
        this.axios.post(url, params).then(res => {
          console.log(res);
            console.log(888);
          var da = res;
          if (da.data && da.data.length > 0) {
            var tplBom = $('#defaultTpl');
            var data = da.data;
            for (var i in data) {
              $(tplBom).find('.item-atlas ul,.item-push').html('');
              $(tplBom).find('.item-push').hide();
              try {
                var toPortrait = da.userData[data[i].userid].portrait;
              } catch (e) {
                var toPortrait = '/member/tpl_ypmm/images/icon_tou.png';
              }

              $(tplBom).find('.tool-bottom span').show();
              var content = '';
              if (data[i].type <= 2 || data[i].type == 5) {
                if (data[i].topic_id > 0) content =
                  '<font style="color:#7751F2;" onClick="goo(\'indexTopic.html?id=' +
                  data[i].topic_id + '\');event.stopPropagation();">#' + da.topicData[
                    data[i].topic_id].title + '# </font>';
                //字数截取
                if ((data[i].content).length >= 48) {
                  data[i].content = (data[i].content).substring(0, 50);
                  content += '<span class="wenzi">' + data[i].content +
                    '</span><span style="color:#024ddd">...全文</span>';
                } else {
                  content += '<span class="wenzi">' + data[i].content + '</span>';
                }
                //
                var clickfun = 'goo(\'/circleN/contentDetail.php?target=top&type=' + data[
                  i].type + '&id=' + data[i].id + '&cid=' + data[i].cid + '\');';
                //
                if (data[i].type == 2) content =
                  '<img src="images/jingxuanhd.png" style="width:3.9rem;"/> ' + content;
                $(tplBom).find('.dynamic-content').html(content);
                $(tplBom).find('.dynamic-content').find('.wenzi').attr('onclick', clickfun);
                $(tplBom).find('.member-head img').attr('src', this.host+toPortrait);
                $(tplBom).find('.member-info').find('p').eq(0).text(data[i].cn_nickname);
                $(tplBom).find('.member-info').find('p').eq(1).text('');
                $(tplBom).find('.member-info').find('p').eq(0).css('line-height', '3rem');
                $(tplBom).find('.nav-like i').text(data[i].praised_c);
                $(tplBom).find('.nav-comment').text(data[i].comment_c);
                //$(tplBom).find('.tool-bottom font').text(data[i].add_date);
                $(tplBom).find('.tool-bottom font').text('');
                $(tplBom).find('.tool-member').attr('toUid', data[i].userid);
                $(tplBom).find('.saveFollow').attr('toUid', data[i].userid);

                var dfText = 'height:12rem';
                if (this.centerTxt(data[i].imgs).height > this.centerTxt(data[i].imgs).width) dfText =
                  'width:12rem';

                if (data[i].img_count == 1 && data[i].imgs) {
                  //视频
                  var playii = "";
                  if (data[i].imgs.indexOf("video=>") != -1) {
                    data[i].imgs = data[i].imgs.replace("video=>", '');
                    var vvvv = 'http://v.yjxun.cn/circleN/v_115/2%20(2).mp4';
                    clickfun_ = 'goplay(\'' + vvvv + '\')';
                    playii = '<div class="playIco"><i></i></div>';
                  } else {
                    clickfun_ = clickfun;
                  }
                  //图片
                  //设置图片尺寸
                  if (data[i].imgs != '') {
                    var imgsc = this.centerTxt(data[i].imgs);
                    if (imgsc.width && imgsc.height) {
                      if (imgsc.width > imgsc.height) {
                        var w_ = 12 * imgsc.width / imgsc.height;
                        dfText = 'height:12rem';
                        dfText += ';width:' + w_ +
                          'rem;max-width:100%;padding-bottom:unset';
                        $(tplBom).find('.item-atlas ul').append('<li style="width: 66%;' +
                          dfText + '" onclick=' + clickfun_ + '>' + playii +
                          '<div class="zoomImage" style="padding-bottom: 100%;background-position: center center;background-size: cover;background-image:url('+ this.host +
                          data[i].imgs + '); ' + dfText + '"></div></li>');
                      } else {
                        var w_ = 16 * imgsc.width / imgsc.height;
                        dfText = 'height:16rem';
                        dfText += ';width:' + w_ + 'rem;padding-bottom:unset';
                        $(tplBom).find('.item-atlas ul').append('<li style="width: 66%;' +
                          dfText + '" onclick=' + clickfun_ + '>' + playii +
                          '<div class="zoomImage" style="padding-bottom: 100%;background-position: center center;background-size: cover;background-image:url('+ this.host +
                          data[i].imgs + '); ' + dfText + '"></div></li>');
                      }
                    } else {
                      $(tplBom).find('.item-atlas ul').append('<li style="width: 66%;' + dfText +
                        '" onclick=' + clickfun_ + '>' + playii +
                        '<div class="zoomImage" style="padding-bottom: 100%;background-position: center center;background-size: cover;background-image:url(' + this.host +
                        data[i].imgs + ');"></div></li>');
                    }
                  }
                  //
                }
                var imgsArr = (data[i].imgs).split(',');
                if (data[i].img_count == 2) {
                  for (j in imgsArr) {
                    //视频
                    var playii = "";
                    if (imgsArr[j].indexOf("video=>") != -1) {
                      imgsArr[j] = imgsArr[j].replace("video=>", '');
                      var vvvv = 'http://v.yjxun.cn/circleN/v_115/2%20(2).mp4';
                      clickfun_ = 'goplay(\'' + vvvv + '\')';
                      playii = '<div class="playIco"><i></i></div>';
                    } else {
                      clickfun_ = clickfun;
                    }

                    $(tplBom).find('.item-atlas ul').append(
                      '<li style="height: 11rem;width: 46%;float:left;margin-right:3.9%;" onclick=' +
                      clickfun_ + '>' + playii +
                      '<div class="zoomImage" style="background-image:url(' +
                      imgsArr[j] + ');"></div></li>');
                  }
                } else if (data[i].img_count >= 3) {
                  var clickfun_ = '';
                  for (j in imgsArr) {
                    //视频
                    var playii = "";
                    if (imgsArr[j].indexOf("video=>") != -1) {
                      imgsArr[j] = imgsArr[j].replace("video=>", '');
                      var vvvv = 'http://v.yjxun.cn/circleN/v_115/2%20(2).mp4';
                      clickfun_ = 'goplay(\'' + vvvv + '\')';
                      playii = '<div class="playIco"><i></i></div>';
                    } else {
                      clickfun_ = clickfun;
                    }
                    if (j > 2) break;
                    $(tplBom).find('.item-atlas ul').append(
                      '<li style="height: 8rem;width: 32%;float:left;margin-right:1%;" onclick=' +
                      clickfun_ + '>' + playii +
                      '<div class="zoomImage" style="background-image:url(' +
                      imgsArr[j] + ');"></div></li>');
                  }
                }
                $(tplBom).find('#toCircle').text(da.cidData[data[i].cid].name);
                $(tplBom).find('#toCircle').parent().addClass('toCircle');
                $('.m-dynamic').append('<div class="dynamic-item" id="' + data[i].id +
                  '" cid="' + data[i].cid + '" topic_id="' + data[i].topic_id +
                  '"  >' + $(tplBom).html() + '</div>');
              }
            }
            this.bindShare();
           
            $('.nav-comment').click(function () {
              var ids = $(this).parents('.dynamic-item').attr('id');
              var cids = $(this).parents('.dynamic-item').attr('cid');
              goo('/circleN/contentDetail.php?target=top&type=' + data[i].type +
                '&id=' + ids + '&cid=' + cids);
            });
            // console.log();
            //  https://app.yupingmama.com/circleN/contentDetail.php?target=top&type=1&id=1373&cid=5
          } else {
            stopData = 1;
          }


        }).catch(err => {
          console.log(err);
        });
      },
      centerTxt(str) {
        var key1 = '_nw';
        var key2 = '_nh';
        var key3 = '_';
        var m = str.match(new RegExp(key1 + '(.*?)' + key2));
        var m2 = str.match(new RegExp(key2 + '(.*?)' + key3));
        return {
          'width': m ? m[1] : false,
          'height': m2 ? m2[1] : false
        };
      },
      bindShare() {
        $('.dynamic-item').each(function () {
          var id = $(this).attr('id');
          var cid = $(this).attr('cid');
          var _this = this;
          $(this).find('.nav-like').click(function (event) {
            var likeThis = this;
            circleNsetLike(id, 0, likeThis);
            return false;
          })
          $(this).find('.nav-share').click(function (event) {
            if ($(_this).find('.zoomImage').css('background-image')) var bgimg = $(_this).find(
              '.zoomImage').css('background-image').split("\"")[1];
            else var bgimg = '';
            goo('/circleN/set_dynamic.html?view=5&id=' + id + '&cid=' + cid + '&text=' + ($(
                  _this)
                .find('.dynamic-content').text()).replace(new RegExp('#', 'g'), ' ')
              .substr(
                0, 50) + '&img=' + bgimg);
            return false;
          })
        })
      },
      //获取问答 固定 100条 未分页 视为固定
      getDatass() {

        //问答
        var url = process.env.API_ROOT+'/?m=Quiz&a=getDataList';
        this.axios.get(url).then(res => {
          var data = res.data;
          this.answer = data;
        }).catch(err => {
          console.log(err);
        });
      },
      getRecommend() {
        //推荐
        var url = process.env.API_ROOT+'/?m=data&c=da_fun&a=getArtica&page=' + this.pagedd;
        this.axios.get(url).then(res => {
          var data = res.data;
          this.news = this.news.concat(data);
        }).catch(err => {
          console.log(err);
        });
      },
      getRecommendttt() {
        //小视频
        var url = process.env.API_ROOT+'/?m=circleN&c=datas&a=getRecDynamic&ajax=1&video=1';
        if (1 < this.page2) url += '&page=' + this.page2;
        this.axios.get(url).then(res => {
          var data = res;
          if (1 == data.status) {
            var datas = data.data.datas;
            var circle = data.data.circle;
            this.video = datas;
          }
        }).catch(err => {
          console.log(err);
        });
      },
      getAge(strAge) {
        var birArr = strAge.split("-");
        var birYear = birArr[0];
        var birMonth = birArr[1];
        var birDay = birArr[2];

        d = new Date();
        var nowYear = d.getFullYear();
        var nowMonth = d.getMonth() + 1; //记得加1
        var nowDay = d.getDate();
        var returnAge;
        if (birArr == null) {
          return false
        };
        var d = new Date(birYear, birMonth - 1, birDay);
        if (d.getFullYear() == birYear && (d.getMonth() + 1) == birMonth && d.getDate() == birDay) {
          if (nowYear == birYear) {
            returnAge = 0; // 
          } else {
            var ageDiff = nowYear - birYear; // 
            if (ageDiff > 0) {
              if (nowMonth == birMonth) {
                var dayDiff = nowDay - birDay; // 
                if (dayDiff < 0) {
                  returnAge = ageDiff - 1;
                } else {
                  returnAge = ageDiff;
                }
              } else {
                var monthDiff = nowMonth - birMonth; // 
                if (monthDiff < 0) {
                  returnAge = ageDiff - 1;
                } else {
                  returnAge = ageDiff;
                }
              }
            } else {
              return "出生日期晚于今天，数据有误"; //返回-1 表示出生日期输入错误 晚于今天
            }
          }
          return returnAge;
        } else {
          return ("保密！");
        }
      },
      banner1() {


      },
      // 轮播图预览
      Preview_img(images, index) {
        ImagePreview({
          images: this.SwiperImg, //图片数组
          showIndex: true,
          loop: false,
          startPosition: index
        })
      },
      onSroll(){
         var tabs = document.getElementsByClassName('tab_itemst');
         var em = document.getElementById("menu").getBoundingClientRect();
        if (em.top == 0) {
          for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.overflow = 'scroll';
          }
        } else {
          for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.overflow = 'hidden';
          }
        }
        //
        var top = document.getElementById("menu").getBoundingClientRect().top;
        var tab_s = document.getElementById("tab_contianer");
        if (top <= 8) {
          tab_s.setAttribute('overflow-y', 'auto');
        } else {
          tab_s.setAttribute('overflow-y', 'hidden');
        }
      }
    },
    mounted() {

      this.getRecommendttt();
      // this.banner1();
      var k_ = this.$refs.k; //this.$refs.input1  减少获取dom节点的消耗
      var that = this;
      k_.setAttribute("placeholder", this.k_word[this.k_id].word);  //顶部 文字切换
      window.setInterval(function () {
        k_.setAttribute("placeholder", that.k_word[that.k_id].word);
        that.k_id++;
        if (that.k_id >= Object.keys(that.k_word).length) that.k_id = 0;
      }, 3000);
      
      window.addEventListener('scroll', this.onSroll)

    },
    destroyed(){
        window.removeEventListener('scroll', this.onSroll, false);
      }


  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
  @import '../../assets/css/appstyle.less';
  @import './css/index.css';

  .swiper {
    width: 100%;
    height: 9.4rem;

    .van-swipe {
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-radius: .3rem;
    }

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
    }
  }

  .van-tabbar--fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999999 !important;
  }

  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999999;
  }

  body {
    background: @color;
    width: 100vw
  }

  * {
    font-weight: 400
  }

  .option_box .option p {
    font-weight: 400
  }

  .m-head {
    padding: 0 1rem;
    position: fixed;
    color: #333;
    top: 0;
    z-index: 99;
    background: @color;
    height: 3.8rem;
    line-height: 5rem;
    width: 100%
  }

  .m-head .m-head-back {
    position: absolute;
    left: 1rem;
    top: .5rem;
    width: 2rem;
    height: 3rem;
    background: url("@{baseurl}/statics/images/icon/un_color/arrow_l_icon.png") no-repeat left center;
    background-size: 1.5rem
  }

  .m-head .m-head-query {
    overflow: hidden;
    width: 95%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%)
  }

  .query-input {
    padding-left: 4rem;
    height: 2.4rem;
    background: url("@{baseurl}/index1/images/daffe.png") no-repeat 1.5rem .7rem;
    background-size: 1.2rem;
    background-color: #f5f4f7;
    width: 85%;
    float: left;
    border-radius: 500px
  }

  .query-input input {
    width: 85%;
    border: 0;
    height: 100%;
    outline: 0;
    margin: 0;
    font-size: .9rem;
    text-align: left;
    padding: 0;
    background-color: #f5f4f7;
    float: left
  }

  .query-input .query-clear {
    width: 2.5rem;
    height: 3rem;
    background-size: 1.3rem;
    display: none;
    float: right
  }

  .m-head-message {
    position: absolute;
    right: .8rem;
    color: #2cacfc;
    top: 50%;
    transform: translateY(-50%)
  }

  .m-head-message i {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 auto;
    background: url("@{baseurl}/index/style3/images/news.png") no-repeat center;
    background-size: 100%
  }

  .m-head-message .mheadTag {
    position: absolute;
    top: 0;
    right: -.7rem;
    padding: 0 .3rem;
    background: #fd616c;
    border-radius: 1rem;
    color: #fff;
    line-height: 1rem;
    font-size: .75rem
  }

  .h50 {
    height: 4rem
  }

  .listitem1 .zoomImage {
    height: 6rem;
    border-radius: .3rem;
    margin: 0 auto;
    padding-bottom: 0;
    border: 0
  }

  .listitem.listitem1 {
    width: 100%;
    padding: 0 .769231rem;
    display: flex;
    margin-top: 1rem
  }

  .listitem .artic {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: .5rem
  }

  .listitem1 .img {
    padding: 0;
    flex: 1.6
  }

  .piece {
    color: #656565;
    font-size: .9rem;
    bottom: 1rem;
    display: flex;
    justify-content: space-between;
    width: 90%;
    text-align: right;
    position: static;
    margin-top: .3rem; 
    padding-top: .4rem
  }

  .citem_div4 {
    margin-top: 0
  }

  .citem_div4 .cactive0 {
    padding: .2rem .7rem;
    color: #ff8a8a;
    background: #ffefef;
    border-radius: 500px;
    margin-right: .5rem;
    font-size: .88rem
  }

  .citem_div4 .cactive1 {
    padding: .2rem .7rem;
    color: #b38aff;
    background: #f1efff;
    border-radius: 500px;
    margin-right: .5rem;
    font-size: .88rem
  }

  .citem_div4 .cactive2 {
    padding: .2rem .7rem;
    color: #b38aff;
    background: #f1efff;
    border-radius: 500px;
    margin-right: .5rem;
    font-size: .88rem
  }

  .citem_div5 {
    color: #525252;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    font-size: 1rem;
    line-height: unset;
    font-weight: 400;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 0
  }

  .m-dynamic {
    background: #fff;
    padding: 0
  }

  .makefP .maskbox .msttime {
    width: 75%
  }

  .dynamic-item {
    margin: .8rem 0;
    margin-top: 0;
    padding: 1.2rem 1rem 0 1rem;
    background-color: #fff;
    border-radius: .3rem;
    overflow: hidden
  }

  .makecontent {
    padding: .5rem 0
  }

  .title {
    color: #333;
    font-weight: 500
  }

  .m-inner {
    position: relative;
    height: 3rem
  }

  .m-inner .head_bottom {
    position: absolute;
    bottom: 0;
    height: 3.2rem;
    width: 100%;
    left: 50%;
    transform: translateX(-50%)
  }

  .head_bottom img {
    width: 100%;
    height: 100%
  }

  .head_state {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 5.5rem;
    height: 1.8rem;
    line-height: 1.8rem;
    border-radius: .2rem;
    color: #9e791e;
    border: 1px solid #9e791e;
    font-size: .85rem;
    text-align: center
  }

  .ciont_box {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: .5rem;
    margin-top: .5rem
  }

  .ciont_box .ciont_item {
    width: 48%;
    margin-bottom: .6rem
  }

  .ciont_box .ciont_item .cont_img {
    width: 100%;
    height: 7.2rem
  }

  .ciont_box .ciont_item .cont_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: .3rem
  }

  .ciont_box .ciont_item .ciont_bottom {
    display: flex;
    align-items: center;
    margin-top: .3rem
  }

  .ciont_box .ciont_item .ciont_title {
    margin-top: .8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: SourceHanSansSC-Regular;
    font-size: 1.076923rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.461538rem;
    letter-spacing: 0;
    color: #333
  }

  .momey_p {
    font-family: SourceHanSansSC-Regular;
    font-size: .923077rem;
    font-weight: 400;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fe703d
  }

  .icon_demo {
    width: 1.653846rem;
    height: 1.884615rem;
    fill: url(#demo)
  }

  #kangks .option img {
    height: 1.884615rem;
    width: 1.653846rem;
    display: block;
    margin: 0 auto
  }

  .icon_tixing {
    width: 43px;
    height: 1.884615rem;
    fill: url(#demo_tx)
  }

  .ciont_box .ciont_item .ciont_bottom .cin_span1 {
    font-family: Rubik-Regular;
    font-size: 1.307692rem;
    font-weight: 400;
    letter-spacing: 0;
    color: #fe703d
  }

  .ciont_box .ciont_item .ciont_bottom .cin_span2 {
    color: #fff;
    background: #ffefef;
    padding-left: 5px;
    text-align: center;
    letter-spacing: 1px;
    color: #e54a4a;
    border-radius: 500px;
    font-size: .83rem;
    padding: .1rem .5rem;
    margin-left: .5rem
  }

  .refresh {
    width: 6rem;
    height: 2rem;
    color: #ff4c73;
    border-radius: 500px;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-left: .6rem;
    font-size: .93rem;
    border: 1px solid #e4b26d;
    justify-content: center;
    margin: .5rem auto;
    align-items: center
  }

  .refresh img {
    vertical-align: middle;
    margin-left: .3rem;
    width: 1.2rem;
    margin-right: .3rem
  }

  .mtaw_tit {
    font-family: SourceHanSansSC-Bold;
    font-size: 1.230769rem;
    font-weight: 400;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fe703d;
    line-height: 1em
  }

  .mtaw_bor {
    width: calc(100% - 1.538462rem);
    box-sizing: border-box;
    padding: 1.538462rem .961538rem 1.615385rem;
    border-radius: .384615rem;
    margin: 0 auto;
    position: relative;
    background-clip: content-box;
    background: url("@{baseurl}/index1/images/wewewq.png") no-repeat;
    background-size: cover
  }

  .mtaw_div {
    font-size: 1.32rem;
    font-weight: 600;
    margin-top: 1.2rem;
    color: #ff4f4e
  }

  .mtaw_ul {
    list-style-type: none
  }

  .maty_jiantou {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-38%);
    width: 2rem
  }

  .mtaw_info {
    font-family: SourceHanSansSC-Regular;
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fe703d;
    margin-top: .769231rem;
    line-height: 1em;
    text-indent: 2em;
    margin-bottom: 1em
  }

  .maty_jiantou img {
    width: 100%
  }

  .planting ul li {
    border-radius: .4rem;
    padding-left: 0 !important
  }

  .scores {
    width: 100%;
    height: 100%;
    display: flex
  }

  .starts {
    height: 1.923rem;
    align-items: center;
    display: flex;
    line-height: 1.923rem
  }

  .starts img {
    float: left;
    width: 1.1rem;
    height: 1.1rem
  }

  .poster-price {
    margin-top: .1rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .poster-price span:nth-child(1) {
    margin-right: 0
  }

  .poster-price span {
    font-size: .85rem;
    background: #ffefef;
    padding: .2rem .4rem;
    border-radius: 500px;
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
  }

  .planting .poster-thumb {
    height: 8.3rem
  }

  .planting .poster-thumb img {
    height: 8.3rem;
    object-fit: cover;
    border-radius: .4rem
  }

  .m_dbox span:nth-child(1) .wewe {
    font-size: 1.2758rem;
    color: #48474f;
    font-weight: 600
  }

  .citem_div2 {
    font-family: SourceHanSansCN-Regular;
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.153846rem;
    letter-spacing: 0;
    color: #525252;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
    margin-top: .4rem
  }

  #quanli {
    width: 93%;
    margin: 0 auto;
    border-bottom: 1px solid #f1f1f1
  }

  .quanli_item {
    float: left;
    margin-right: .8rem;
    display: flex;
    align-items: center;
    margin-bottom: .5rem
  }

  .quanli_item img {
    width: 1rem;
    height: 1rem;
    border-radius: .2rem
  }

  .quanli_item span {
    font-size: .89rem;
    color: #5e7cbd;
    margin-left: .5rem
  }

  .dynamic-item .dynamic-content {
    text-align: justify;
    line-height: 1.8rem;
    width: 100%
  }

  #J_news_fy .dynamic-item .item-atlas {
    width: 15%;
    margin: .2rem 0 0 0
  }

  .zoomImage {
    border-radius: 5px;
    border: 1px solid #efefef
  }

  .m-dynamic .dynamic-item {
    margin: 0 .8rem 0;
    margin-top: 0;
    padding: .2rem 1rem 0 1rem;
    background-color: #fff;
    border-radius: .3rem;
    overflow: hidden
  }

  #tab_cotes_ad .m-dynamic .dynamic-item {
    padding: .2rem 0 0 0;
    margin-bottom: 1rem
  }

  ul.advert_ul li {
    width: 31% !important;
    padding-left: 0 !important;
    margin-right: 1rem !important;
    background-color: #fff !important
  }

  ul.advert_ul .poster-thumb {
    height: 6.3rem !important;
    padding-top: .9rem
  }

  ul.advert_ul .poster-thumb img {
    height: 5.3rem !important;
    object-fit: contain;
    border-radius: .2rem
  }

  .planting {
    width: 100%;
    overflow: hidden;
    margin-top: .3rem;
    padding-left: 1rem
  }

  #J_bannersu .poster-title {
    font-family: SourceHanSansSC-Regular;
    font-size: .923077rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.153846rem;
    letter-spacing: 0;
    color: #333;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    padding: 0 .576923rem;
    word-wrap: break-all
  }

  #J_bannersu .poster-subtitle {
    font-size: .82rem;
    color: #666;
    margin-top: .3rem;
    padding: 0 .5rem;
    padding-bottom: .5rem
  }

  .m_dbox .mstios {
    color: #999;
    font-weight: 500;
    font-size: .93rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%)
  }

  .m_dbox .mstios .uings img {
    position: relative;
    top: -.1rem
  }

  #menu {
    padding-top: 1rem;
    background: #fff;
    margin-bottom: 1.2rem
  }

  #menu ul {
    justify-content: space-between;
    display: flex;
    width: 100%
  }

  #menu li {
    height: 2.5rem;
    background: #fff;
    width: 20%;
    padding: 0 .8rem;
    line-height: 2rem;
    text-align: center;
    overflow: hidden;
    flex-shrink: 0;
    position: relative;
    font-family: SourceHanSansCN-Regular;
    font-size: 1.230769rem;
    font-weight: 400;
    font-stretch: normal;
    letter-spacing: 0;
    color: #666
  }

  #menu li .pstyle {
    width: 33%;
    height: 3px;
    background: #fe597c;
    position: absolute;
    bottom: .3rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1.5px
  }

  #menu li.on {
    font-family: SourceHanSansSC-Bold;
    font-size: 1.307692rem;
    font-weight: 600;
    font-stretch: normal;
    letter-spacing: 0;
    color: #333;
    background: #fff;
    transition: all .7s linear
  }

  .clear {
    clear: both
  }

  .m_dbox span:nth-child(1) {
    font-size: 1.1488rem;
    color: #48474f;
    font-weight: 700
  }

  .wenzi {
    font-size: 1.1rem;
    color: #48474f;
    font-weight: 400
  }

  .contentsed {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
  }

  .piece .piexe_t {
    font-family: Rubik-Regular;
    font-size: 1.307692rem;
    font-weight: 400;
    letter-spacing: 0;
    color: #fe703d;
    margin-top: 0
  }

  .sm_m {
    font-family: SourceHanSansSC-Regular;
    font-size: .923077rem;
    font-weight: 400;
    font-stretch: normal;
    letter-spacing: 0;
    color: #fe703d
  }

  .piece .piexe_b {
    color: #282828
  }

  .piece .piexe_navs {
    color: #282828;
    font-size: .89rem
  }

  #J_bannersu .hd {
    position: absolute;
    bottom: -1.5rem;
    width: 100%;
    text-align: center !important;
    right: 0
  }

  #J_bannersu .hd ul li {
    display: inline-block;
    width: .5rem;
    height: .5rem;
    background-color: #fff;
    color: transparent;
    border-radius: 500px;
    margin-right: .12rem;
    margin-left: .3rem;
    text-indent: -999px
  }

  #J_bannersu .hd ul li.on {
    background-color: #fe703d;
    width: 1.5rem
  }

  .mas_content {
    position: fixed;
    bottom: 0;
    right: 0;
    display: none
  }

  .mastst_img {
    position: relative;
    top: -4rem;
    width: 100vw;
    right: 0;
    height: 14rem;
    background: url("@{baseurl}/statics/images/wewed.png") no-repeat top right;
    background-size: 100%
  }

  .mastst_img .bottom_but {
    position: absolute;
    top: 2rem;
    right: 3rem;
    width: 5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    border-radius: .5rem;
    background: #ff524e;
    color: #fff;
    font-size: .9rem
  }

  .mastst_img .imsgs {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 0;
    right: 2rem;
    border-radius: 50px;
    background: #fe597c;
    color: #fff;
    padding: .2rem
  }

  .imsgssts {
    position: absolute;
    bottom: 5rem;
    right: 0;
    width: 8.5rem;
    z-index: 88
  }

  #contenteds .listitem1 .img {
    flex: 1.8;
    padding: .5rem;
    padding-right: 0;
    padding-left: 0;
    margin-left: .7rem
  }

  .dynamic-item .item-push {
    width: 100%;
    border-radius: 4px;
    background-color: #fff;
    padding: 0;
    overflow: hidden;
    display: flex
  }

  #kangks li {
    margin-top: .5rem
  }

  .moveup {
    transform: translateY(-2.32rem)
  }

  .tixin {
    height: .962rem;
    line-height: .962rem;
    padding: 0 .327rem;
    font-size: .783rem;
    position: absolute;
    right: revert;
    top: -1%;
    background-color: #fd616c;
    color: #fff;
    border-radius: 15px;
    display: none
  }

  #tab-const .tab_itemst {
    width: 100vw;
    position: relative
  }

  #tab-const {
    display: flex;
    transition: transform .5s ease-in-out;
    transform: translateX(0vw);
    height: calc(100vh - 7.7rem)
  }

  #tab-const .on {
    display: block;
    background-color: #fff;
    width: 10000vh;
  }

  #tab_cotes_ad .m-dynamic .dynamic-item:nth-child(2) {
    display: none
  }

  .m-circle-recommend {
    padding: 0 1rem
  }

  .m-circle-recommend ul {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
  }

  .m-circle-recommend ul li {
    width: 49%;
    margin-bottom: 1rem
  }

  .m-circle-recommend ul li:nth-child(even) {
    float: right
  }

  .m-circle-recommend ul li .dynamic-img {
    height: 19rem;
    overflow: hidden;
    border-radius: .5rem;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    border: 1px #eee solid;
    position: relative
  }

  .m-circle-recommend ul li .dynamic-desc {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: .5rem auto 0;
    width: 90%;
    min-height: 2.4rem;
    font-family: SourceHanSansCN-Normal;
    font-size: 1.1rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.307692rem;
    letter-spacing: 0;
    color: #333
  }

  .m-circle-recommend ul li .circle-data {
    margin: .4rem auto 0;
    width: 90%
  }

  .circle-data .circle-logo {
    width: 2.1rem;
    height: 2.1rem;
    overflow: hidden;
    border-radius: 50%;
    float: left;
    margin-top: .3rem
  }

  .circle-logo img {
    display: block;
    width: 100%
  }

  .circle-data .circle-info {
    margin-left: 2.5rem;
    height: 2.1rem;
    padding-top: .2rem
  }

  .circle-info p {
    line-height: 1.05rem;
    margin-bottom: .2rem
  }

  .circle-info p:last-child {
    font-size: .6rem;
    color: #b8b8b8
  }

  .circle-info p:last-child font {
    color: #f44336
  }

  .content_divs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 1rem
  }

  .content_divs .content_items {
    width: 48%;
    position: relative;
    margin-bottom: 2rem
  }

  .item-atlas ul li {
    height: 12rem;
    border-radius: 5px;
    overflow: hidden
  }

  .content_iteimg {
    width: 100%;
    height: 11rem;
    text-align: center;
    margin: 0 auto
  }

  .content_iteimg img {
    object-fit: cover;
    height: 100%;
    margin: 0 auto
  }

  .content_items .cont-title1 {
    font-size: 1.1rem;
    color: #333;
    margin-top: .8rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    font-weight: 400;
    line-clamp: 2;
    -webkit-box-orient: vertical
  }

  .content_items .cont-title2 {
    font-size: .92rem;
    color: #ff4c73;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical
  }

  .content_items .cont-title3 {
    margin: .5rem 0 0 0;
    font-family: FZYDZHJW--GB1-0;
    font-size: 1.230769rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.230769rem;
    letter-spacing: 0;
    color: #ff4c73
  }

  .content_items .cont-title5 {
    font-size: 1.02rem;
    color: #b1a8a8;
    margin: 0;
    padding-left: .1rem;
    text-decoration: line-through
  }

  .content_items .cont-title4 {
    font-size: .92rem;
    color: #6b8dea;
    margin-top: .8rem
  }

  .content_items .cont-title4 span {
    padding: .4rem .5rem;
    background: #eeecff;
    border-radius: .2rem;
    margin-right: .3rem
  }

  .content_shopping {
    position: absolute;
    bottom: .42rem;
    right: .5rem;
    width: 3.2rem;
    height: 1.6rem;
    text-align: center;
    font-size: .92rem;
    line-height: 1.6rem;
    background: #f53b48;
    color: #fff;
    border-radius: .2rem
  }

  .tab-const .content_shopping img {
    width: 100%
  }

  .cover-channel .cover-content {
    top: 2rem
  }

  .zoomImage img {
    object-fit: cover;
    width: 100%
  }

  .cover .cover-content {
    position: fixed;
    left: 0;
    top: 8rem;
    z-index: 9999999
  }

  .cover-channel .cover-operate {
    color: #fff;
    width: 5.22rem;
    padding: .4rem .6rem .5rem 2rem;
    background: url("@{baseurl}/statics/images/arrow_l_icon.png") no-repeat .25rem center;
    background-size: 1.1rem;
    background-color: rgba(245, 59, 72, .8);
    border-radius: 0 500px 500px 0;
    line-height: normal;
    position: absolute;
    top: 0;
    z-index: 999;
    font-size: .92rem
  }

  #menu {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 999999;
    width: 100vw;
    overflow: auto
  }

  #menu::-webkit-scrollbar {
    display: none
  }

  #tab_contianer {
    width: 100vw;
    height: calc(100vh - 7.7rem);
    overflow-y: hidden;
    overflow-x: hidden
  }

  .tab_itemst {
    min-height: 100%;
    height: calc(100vh - 7.7rem);
    overflow: hidden;
  }

  .tab_itemst:scrollbar {
    display: none
  }

  .store_container {
    width: 100vw;
    overflow: hidden;
    padding: 0 .769231rem
  }

  .store_content_box {
    overflow: scroll
  }

  .store_content_box::-webkit-scrollbar {
    display: none
  }

  .store_content {
    display: flex;
    padding-top: .3rem
  }

  .store_item {
    width: 12.115385rem;
    position: relative;
  }

  .store_item img {
    height: 7.576923rem;
    width: 12.115385rem;
    border-radius: .192308rem
  }

  .store_item img.store_title {
    width: 2.5rem;
    height: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    object-fit: cover;
  }

  .store_content .store_item:nth-child(n+2) {
    margin-left: .769231rem
  }

  .store_name {
    font-family: SourceHanSansSC-Regular;
    font-size: 1.076923rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.461538rem;
    letter-spacing: 0;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .distance {
    font-family: PingFang-SC-Medium;
    font-size: 1rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.538462rem;
    letter-spacing: 0;
    color: #999;
    margin-top: .15rem
  }

  .yhj {
    height: 6.769231rem;
    width: 100%;
    background: #fff;
    margin-top: .5rem
  }

  .yhj img {
    height: 100%;
    width: 100%
  }

  .title {
    font-family: SourceHanSansSC-Regular;
    font-size: 1.2rem;
    font-weight: 400;
    font-stretch: normal;
    line-height: 1.461538rem;
    letter-spacing: 0;
    color: #333;
    margin-top: 0
  }

  .li-rela {
    width: 7.692308rem !important;
    background-color: #fff !important;
    border-radius: .384615rem !important
  }

  .m-quiz {
    padding: 0 1rem;
    background-color: #fff
  }

  .m-quiz ul li {
    padding: 1rem 0 1.5rem;
    position: relative
  }

  .m-quiz ul li:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #e0e0e0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    -webkit-transform-origin: left top;
    transform-origin: left top
  }

  .m-quiz ul li:last-child:after {
    border: 0
  }

  .m-quiz ul li .quiz-content {
    font-size: 1.1rem;
    color: #333;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    font-weight: 400;
    margin-bottom: .8rem
  }

  .m-quiz ul li .quiz-imgs {
    display: flex
  }

  .quiz-imgs .imgs-item {
    flex: 1;
    margin-right: .76rem;
    height: 6.9rem;
    overflow: hidden
  }

  .quiz-imgs .imgs-item:last-child {
    margin-right: 0
  }

  .quiz-imgs .imgs-item .zoomImage {
    display: block;
    width: 100%
  }

  .m-quiz ul li .quiz-data {
    color: #666;
    margin-top: .5rem;
    display: flex;
    justify-content: space-between
  }

  .playIco {
    position: absolute;
    background-color: rgba(0, 0, 0, .37);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto
  }

  .playIco i {
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.5rem solid #fff;
    position: absolute;
    margin: auto;
    left: .4rem;
    right: 0;
    top: 0;
    bottom: 0
  }

  .banner-intelligent .tempWrap ul li,
  .bd .tempWrap ul {
    border-radius: 0;
    padding: 0;
    width: 100%
  }

  ul.advert_ul li {
    margin-right: 0 !important
  }

  .advert_ul {
    display: flex;
    justify-content: space-between
  }

  #advert_ul1,
  #advert_ul2 {
    display: flex;
    justify-content: space-between
  }

  #planting {
    padding: 0
  }

  .planting {
    overflow: visible
  }

  .banner-container .tempWrap ul li,
  .bd .tempWrap ul {
    border-radius: 0
  }

  #plants .li-rela:nth-child(1) {
    margin-left: 0;
  }

  .m-dynamic {
    padding: .8rem 1rem 0 1rem;
  }

  .m-dynamic .dynamic-item {
    margin: 0 .8rem 0;
    margin-top: 0;
    padding: .2rem 1rem 0 1rem;
    background-color: #fff;
    border-radius: .3rem;
    overflow: hidden;
  }
.zoomImage {
    border-radius: 5px;
    border: 1px solid #efefef;
}
.zoomImage {
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    border: 1px solid #eaeaea;
}

</style>
