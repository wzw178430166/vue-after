<template>
  <div id="app">
    <router-view v-if="showmobile"></router-view>
    <div v-else>
      请调整至移动端模式
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
   data () {
      return {
        isLogin:null,
      }
    },
  computed:{
    showmobile(){
      return document.body.clientWidth <500;
    },
   ...mapState('Login', {
      state: state => state
    })
  },
  created(){
   //在页面加载时读取sessionStorage里的状态信息 如果有的话就存进vuex里面
      if (sessionStorage.getItem("token") ) {
          this.state.token=sessionStorage.getItem("token");
          this.state.isLogin=sessionStorage.getItem("isLogin");
          this.state.nickname=sessionStorage.getItem("nickname");
          this.state.portrait=sessionStorage.getItem("portrait");
          this.state.userid=sessionStorage.getItem("userid");
          this.state.username=sessionStorage.getItem("username");
          this.state.groupid=sessionStorage.getItem("groupid");
          this.state.synloginstr=sessionStorage.getItem("synloginstr");
          // this.$store.replaceState(Object.assign({},             
          // this.$store.state,JSON.parse(sessionStorage.getItem("infodata"))))
      }
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
          this.state.token=sessionStorage.getItem("token");
          this.state.isLogin=sessionStorage.getItem("isLogin");
          this.state.nickname=sessionStorage.getItem("nickname");
          this.state.portrait=sessionStorage.getItem("portrait");
          this.state.userid=sessionStorage.getItem("userid");
          this.state.username=sessionStorage.getItem("username");
          this.state.groupid=sessionStorage.getItem("groupid");
          this.state.synloginstr=sessionStorage.getItem("synloginstr");
      });
      // 兼容iphone手机
      window.addEventListener("pagehide",()=>{
         // sessionStorage.setItem("storedata",JSON.stringify(this.$store.state))
          this.state.token=sessionStorage.getItem("token");
          this.state.isLogin=sessionStorage.getItem("isLogin");
          this.state.nickname=sessionStorage.getItem("nickname");
          this.state.portrait=sessionStorage.getItem("portrait");
          this.state.userid=sessionStorage.getItem("userid");
          this.state.username=sessionStorage.getItem("username");
          this.state.groupid=sessionStorage.getItem("groupid");
          this.state.synloginstr=sessionStorage.getItem("synloginstr");
      });
        //如果页面加载的时候sessionstorage没有的话 就从vuex中取
      //  sessionStorage.setItem("isLogin",this.state.isLogin)
      //  sessionStorage.setItem("nickname",this.state.nickname)
      //  sessionStorage.setItem("token",this.state.token)
      //  sessionStorage.setItem("userid",this.state.userid)
      //  sessionStorage.setItem("portrait",this.state.portrait)
      //  sessionStorage.setItem("username",this.state.username)
  },
  mounted(){
    // console.log(process.env.API_ROOT, "VUE_APP_URL");
    // console.log(process.env.NODE_ENV === 'development')
  }
}
</script>

<style scoped>
.contain {
  height:100%;
  overflow:hidden;

}
.mobilepage{
  position:relative;
}
.mobilepage{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  width:100%;
  height:100%;
  overflow:hidden;
  /* background:url('./assets/images/index.gif') no-repeat center/cover; */
}
img{
  width:100%;
}
</style>
