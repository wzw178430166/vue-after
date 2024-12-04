<template>
  <div class="contain">


    <div class="header">
      <i class="fa fa-angle-left lefticon" @click="toMain"></i>
      <div class="pull_right">
        <i class="fa fa-search icon-header" @click="toSearch"></i>
        <i class="fa fa-share-alt icon-header"></i>
      </div>
    </div>

    <div id="main">
      <h2>{{ news.title }}</h2>
      <div class="detail">
        <span>{{ news.source }}</span>
        <span>{{ news.time }}</span>
      </div>
      <div class="main" v-html="news.content"></div>
      <div class="tips">
        <i class="fa fa-key key"></i>
        <span v-for="(item,index) in news.keywords" :key="index">{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'Newspage',
  data (){
    return {
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.getNews({id:this.$route.query.id})

    });
  },
  computed: {
    ...mapGetters("News", ["news"]),

  },
  methods: {
    ...mapActions("News", ["getNews"]),
    toMain(){
      this.$router.push({path:'/mainpage'})
    },
    toSearch(){
      this.$router.push({path:'/searchpage'})
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
  height:32px;
  padding:0 10px;
  border-bottom:1px solid #e8e8e8;
}

.contain .header .lefticon{
  line-height:32px;
  vertical-align: middle;
  font-size:20px;

}

.contain .header .pull_right{
  float:right;
}

.contain .header .pull_right i{
  line-height:32px;
  vertical-align: middle;
}

.contain .header .pull_right i.icon-header{
  margin-left:10px;
}
.contain #main{
  padding:20px 15px 10px 15px;
  height:calc(100% - 68px);
  overflow-y: auto;
}

.contain #main h2{
  font-weight:bold;
  color:#222;
}

.contain #main .detail{
  margin-top:10px;
  margin-bottom:10px;
  color:#666;
}


.contain #main .tips{
  margin-top:5px;
}

.contain #main .tips .key{
  line-height:30px;
  vertical-align: middle;
  color:#4095d8;

}
.contain #main .tips span{
  display:inline-block;
  margin-right:8px;
  font-size:13px;
  color:#4095d8;
  line-height:30px;
  vertical-align: middle;
}


</style>
