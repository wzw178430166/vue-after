<template>
  <div class="contain">
    <div class="header">
      <i class="fa fa-chevron-left left" aria-hidden="true" @click="toMainPage"></i>
      <div class="header_search">
        <i class="fa fa-search searchicon" aria-hidden="true"></i>
        <input type="text" placeholder="请输入关键字..." @click='toSearchPage' v-model="showreseach">
      </div>
    </div>

    <div id="content">

      <ul class="content_wrap" v-if="list.length">
        <li v-for="(item,index) in list" :key="index" @click="toNewsPage(item.id)">
          <img :src="item.thumbnail" alt="">
          <div class="rt_con">
            <p class="con_tit">{{item.title}}</p>
            <div class="con_detail">
              <span class="hot" v-if="item.isHot">热点</span>
              <span class="source">{{item.source}}</span>
              <span class="time">{{item.time | timeFilter}}</span>
            </div>
          </div>
        </li>
      </ul>
      <p v-else>抱歉，没有搜索到你要的内容</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'Resultpage',
  data (){
    return {
      showreseach:''

    }
  },
  mounted() {
    this.$nextTick(function() {
      this.getListBySearch({
        searchword:this.$route.query.searchword
      });
      this.showreseach = this.$route.query.searchword
    });
  },
  computed: {
    ...mapGetters("List", ["list"]),
  },
  methods: {
    ...mapActions("List", ["getListBySearch"]),
    toMainPage(){
      this.$router.push({path:'/mainpage'})
    },
    toSearchPage(){
      this.$router.push({path:'/searchpage'})
    },
    toNewsPage(params){
      this.$router.push({path:'/newspage', query:{id:params}})
    }
  },
  filters:{
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
  padding:7px 10px;
}

.contain .header .left{
  color:#fff;
  line-height:32px;
  vertical-align:middle;
  margin-right:10px;
}

.contain .header .header_search{
  display:inline-block;
  width:calc(100% - 40px);
  line-height:32px;
  vertical-align:middle;
  margin-right:10px;
  background: #fff;
  border-radius: 5px;
}

.contain .header .header_search .searchicon{
  color:#707070;
  margin:0 5px 0 5px;
}
.contain .header .header_search input{
  border:none;
  outline:none;
  width:calc(100% - 30px);
}

.contain .header .searchbtn{
  display:inline-block;
  width:30px;
  line-height:32px;
  vertical-align: middle;
  color:#fff;
  font-weight:600;
  font-size:15px;
}

.contain #content{
  width:100%;
}

.contain #content .content{
  margin-top:20px;


}
.contain .content_wrap li{
  height:70px;
  padding:10px;
  border-bottom:1px solid #e8e8e8;
}

.contain .content_wrap li img{
  float:left;
  width:100px;
  margin-right:10px;
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
