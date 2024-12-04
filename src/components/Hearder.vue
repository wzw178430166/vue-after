<template>
<div>
  <div class="header_box">
        <img src="../assets/images/goback_b.png" class="left" id="props" @click="$router.back(-1)">
        <p class="midden">{{ this.head_name }}</p>
    </div>
    <div class="h50"></div>
  </div>
</template>

<script>

export default {
    props: {
      head_name: {
        type:String,
        default:'接单平台'
      }
    },
  
   data() {
        return {
            name : this.myName    // 把传过来的值赋值给新的变量
        }
    },
    watch: {
        myName(newVal) {
            this.name = newVal //对父组件传过来的值进行监听，如果改变也对子组件内部的值进行改变
        }
    },
    methods: {
        changeName() {  
            this.name = 'Lily'  // 这里修改的只是自己内部的值，就不会报错了
        },
    }
}
</script>
<style>
@import '../assets/css/header_common.css'; 
</style>
  
