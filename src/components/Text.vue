<template>
  <div class="contain">
      <!-- <h3 style="line-height: 50px;text-align: center">vue文字滚动</h3> -->
<div class="vueBox">
    <div class="marquee">
        <div class="marquee_title">
            <span>最新公告</span>
        </div>
        <div class="marquee_box">
            <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="(item, index) in marqueeList">
                    <span>{{item.name}}</span>
                    <span>-</span>
                    <span class="red"> {{item.city}}</span>
                    <span>销售</span>
                    <span class="red"> {{item.amount}}</span>
                    <span>万</span>
                </li>
            </ul>
        </div>
    </div>
</div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex"
// import $ from 'jquery'
export default {
  name: 'Searchpage',
  data (){
    return {
           animate: false,
            marqueeList: [
                {
                    name: '开心果',
                    city: '北京',
                    amount: '320'
                },
                {
                    name: '芒果干',
                    city: '上海',
                    amount: '470'
                },
                {
                    name: '草莓干',
                    city: '广州',
                    amount: '970'
                },
                {
                    name: '无核白葡萄干 ',
                    city: '重庆',
                    amount: '10'
                }
            ]
    }
  },
  created(){
    setInterval(this.showMarquee, 2000)
  },
  mounted() {
    this.$nextTick(function() {
      this.getHistory();
    });
  },
  methods: {
       showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            },500)},
    getHistory(){
      if(localStorage.getItem('thehistory')){
        this.searcharr = JSON.parse( localStorage.getItem('thehistory') )
      }
    },
    deleteHistory(){
      localStorage.removeItem('thehistory');
      this.searcharr = []
    },
    toResultPage(item){
      this.$router.push({path:'/resultpage',query:{searchword:item}})
    }
  },

}
</script>

<style scoped>
div, ul, li, span, img {
	margin: 0;
	padding: 0;
	display: flex;
	box-sizing: border-box;
}
.vueBox{width: 100%;}
.marquee {
    position: fixed;
    top: 0;
    left: 0;z-index: 99;
	width: 100%;
	height: 50px;
	align-items: center;
	color: #3A3A3A;
	background-color: #ffe4ca;
	display: flex;
	box-sizing: border-box;
}

.marquee_title {
	padding: 0 20px;
	height: 30px;
	font-size: 14px;
	border-right: 1px solid #fff;
	align-items: center;
}

.marquee_box {
	display: block;
	position: relative;
	width: 60%;
	height: 30px;
	overflow: hidden;
}

.marquee_list {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
}
.marquee_top {
	transition: all 0.5s;
	margin-top: -30px
}

.marquee_list li {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding-left: 20px;
}

.marquee_list li span {
	padding: 0 2px;
}

.red {
	color: #FF0101;
}

</style>
