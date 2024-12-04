<template>
  <div class="contain">
    <div class="header">
      <i class="fa fa-chevron-left left" aria-hidden="true" @click="toMainPage"></i>
      <div class="header_search">
        <i class="fa fa-search searchicon" aria-hidden="true"></i>
        <input type="text" placeholder="请输入关键字..." v-model="searchword">
      </div>
      <span class="searchbtn" @click="toSearch">搜索</span>
    </div>

    <div id="content">
      <div class="searchchose">
        <div class="history content" v-if="searcharr.length">
          <div class="tit">
            历史记录
            <div class="tit_right">
              <i class="fa fa-trash-o" aria-hidden="true" @click="deleteHistory"></i>
            </div>
          </div>
          <ul class="con_main">
            <li v-for="(item,index) in searcharr" :key="index" @click="toResultPage(item)">{{item}}</li>
          </ul>
        </div>

        <div class="history content">
          <div class="tit">
            猜你想搜的
            <div class="tit_right">
              <i class="fa" :class="{'fa-eye':showwant,'fa-eye-slash':!showwant}" aria-hidden="true" @click="showWant"></i>
            </div>
          </div>
          <ul class="con_main" v-if="showwant">
            <li v-for="(item,index) in youwant" :key="index" @click="toResultPage(item)">{{item}}</li>
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
      layer:null,
      showdefault:true,
      showwant:true,
      searchword:'',
      searcharr:[] ,
      youwant:['5G','华为新机','滴滴','恒大全面大降价','中国最厉','德安东尼','应采儿','黄磊','冯绍峰','赵丽颖','地中海']
    }
  },
  created(){
    const _this = this;
    layui.use(['layer'],function(){
      _this.layer = layui.layer
    })
  },
  mounted() {
    this.$nextTick(function() {
      this.getHistory();
    });
  },
  methods: {
    toMainPage(){
      this.$router.push({path:'/mainpage'})
    },
    showWant(){
      this.showwant = !this.showwant
    },
    toSearch(){
      if(this.searchword == ''){
        this.layer.msg('请输入搜索内容',{
          time:2000
        });
      }else{
        let history = [];
        let getitem = JSON.parse( localStorage.getItem('thehistory') );

        if(getitem == null){
          history.push(this.searchword);
        }else{
          if(getitem.indexOf(this.searchword) == -1){
            getitem.push(this.searchword);
          }
          history = getitem;
        }


        localStorage.setItem('thehistory',JSON.stringify(history));
        this.$router.push({path:'/resultpage',query:{searchword:this.searchword}})
      }
    },
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
  width:calc(100% - 80px);
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
.contain #content .content .tit{
  line-height:25px;
  height:25px;
  vertical-align: middle;
  font-size:15px;
  color:#707070;
  padding:0 15px;
}
.contain #content .content .tit_right{
  float:right;
}
.contain #content .content .tit_right i{
  font-size:16px;
  color:#707070;
}


.contain #content .content .con_main{
  width:100%;
  margin-top:5px;
}

.contain #content .content .con_main li{
  box-sizing: border-box;
  width:50%;
  display:inline-block;
  line-height:30px;
  border-bottom:1px solid #e8e8e8;
  padding-left:15px;
}
.contain #content .content .con_main li:nth-child(1){
border-top:1px solid #e8e8e8;
}
.contain #content .content .con_main li:nth-child(2){
border-top:1px solid #e8e8e8;
}
.contain #content .content .con_main li:nth-child(odd){
border-right:1px solid #e8e8e8;
}

</style>
