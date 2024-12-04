<template>
  <div class="contain">
    <span class="intomain" @click="intomain">点击进入</span>
    <img src="../assets/images/index.gif" alt="">


  </div>
</template>

<script>
export default {
  name: 'Index',
  methods:{
    intomain(){
      this.$router.push({path:'/mainpage'});
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{list-style:none;}
.contain{
  height:100%;
  overflow:hidden;
  position: relative;
}

.contain .intomain{
  position:absolute;
  right:0;
  top:0;
  z-index:2;
  background:#ccc;
  padding:4px;
  cursor: pointer;

}
.contain img{
  width:100%;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  z-index:1;
}

</style>
