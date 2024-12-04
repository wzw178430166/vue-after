<template>
 <div>
 <!-- <text-view></text-view> -->
  <!-- <div style="height:50px"></div> -->
  <div class="contain">
    <div class="header">
      <div class="header_search" @click="toSearchPage">
        <i class="fa fa-search search" aria-hidden="true"></i>
        搜索
      </div>
      <i class="fa fa-qrcode qrcode" aria-hidden="true"></i>
    </div>
    <ul class="nav_wrap">
      <li v-for="(tab,index) in tabs" :key="index" @click="clickTabs(tab.id,index)" :class="{'clickTab':theTabIndex===index}">{{ tab.text }}</li>
    </ul>
    <ul class="content_wrap">
      <li v-for="(item,index) in lists" :key="index" @click="toNewsPage(item.id)">
         <img :src="host+item.img" alt="" v-if="item.img!=''">
         <img src="https://ypmm.yjxun.cn/index/style2/images/sfsadfd.jpg" alt="" v-else>
        <div class="rt_con">
          <p class="con_tit">{{item.english_title}}</p>
          <div class="con_detail">
            <span class="source">{{item.description}}</span>
            <span class="time">{{item.create_time}}</span>
          </div>
        </div>
      </li>
    </ul>

  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Text from '@/components/Text'
export default {
  name: 'Mainpage',
  data (){
    return {
      theTabIndex:0,
      host:this.host
    }
  },
  components:{
   'text-view':Text
  },
  mounted() {
    this.$nextTick(function() {
      this.getCategories();
      this.wen_getCateg();
      this.wen_getNews();
    });
  },
  computed: {
    ...mapGetters("Category", ["ccc"]),
    //...mapGetters("List", ["list"]),
     ...mapGetters("Category", ["wen"]),
      ...mapGetters("List", ["lists"]),
    tabs() {
      return [{"id":0,"text":"全部"}].concat(this.wen['children']);
    },
  },
  methods: {
    ...mapActions("Category", ["getCategories"]),
  //  ...mapActions("List", ["getListByCategroy"]),
     ...mapActions("Category", ["wen_getCateg"]),
     ...mapActions("List", ["wen_getNews"]),
    clickTabs (tab,index) {
      this.theTabIndex = index;
      this.wen_getNews({
        potwords:tab
      })
    },
    toSearchPage(){
      this.$router.push({path:'/searchpage'})
    },
    toNewsPage(params){
      this.$router.push({path:'/newspage', query:{id:params}})
    }
  },
  filters: {
    timeFilter(val){
      return val.substring(0,10);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.contain{
  width:100%;
  height:100%;
  overflow:hidden;
  position: relative;
}

.contain .header{
  background:#d33d3e;
  padding:7px 10px 7px 20px;
}

.contain .header .header_search{
  display:inline-block;
  width:88%;
  line-height:32px;
  vertical-align: middle;
  background:#fff;
  padding-left:8px;
  margin-right:5px;
  border-radius:5px;
}
.contain .header .header_search .search{
  margin-right:6px;
}
.contain .header .qrcode{
  font-size:22px;
  line-height:32px;
  vertical-align: middle;
}

.contain .nav_wrap{
  width:100%;
  line-height:33px;
  height:33px;
  vertical-align:middle;
  border-bottom:1px solid #e8e8e8;
}
.contain .nav_wrap li{
  float:left;
  width:14%;
  text-align:center;
}
.contain .nav_wrap li.clickTab{
  color:red;
}

.contain .content_wrap{
  width:100%;
  height:calc(100% - 80px);
  overflow-y:auto;
}
.contain .content_wrap li{
  height:70px;
  padding:10px;
  border-bottom:1px solid #e8e8e8;
}

.contain .content_wrap li img{
    float: left;
    width: 100px;
    height: 70px;
    object-fit: cover;
    margin-right: 10px;
}

.contain .content_wrap .rt_con{
  width: calc(100% - 110px);
  display:inline-block;
}
.contain .content_wrap .rt_con .con_tit{
  font-weight:400;
	word-wrap: break-word;
	word-break: break-all;
	overflow: hidden;
}

.contain .content_wrap .rt_con .con_detail{
  margin-top:4px;
  line-height:20px;
  vertical-align:middle;
  color:#a9a9a9;
  font-size:12px;
}

.contain .content_wrap .rt_con .con_detail .hot{
  display:inline-block;
  font-size:10px;
  line-height:17px;
  color:red;
  border-radius:6px;
  padding:0 3px;
  border:1px solid red;
  margin-right:4px;
}

.contain .content_wrap .rt_con .con_detail .source{
  margin-right:4px;
}


</style>
