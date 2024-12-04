<template>
  <div class="tabbar">
    <van-tabbar v-model="tabbarTempValue" @change="onChange">
      <van-tabbar-item icon="wap-home" url="/">首页</van-tabbar-item>
        <van-tabbar-item icon="comment">社区</van-tabbar-item>
      <van-tabbar-item icon="todo-list">工单</van-tabbar-item>
      <van-tabbar-item icon="column">课程</van-tabbar-item>
      <van-tabbar-item icon="setting-o">
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
     <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <div style="height:100px;"></div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Notify } from 'vant';
export default {
  props: {
    active: Number,
  },
  data() {
    return {
      tabbarTempValue: this.active,
       icon: {
        active: 'https://ypmm.yjxun.cn/tv/tv_app/members/style1/images/huiyuan1.png',
        inactive: 'https://ypmm.yjxun.cn/tv/tv_app/member/style1/images/huiyuan.png',
      },
    }
  },
  components: {
  [Tabbar.name]: Tabbar,
  [TabbarItem.name]: TabbarItem,
   },
  methods: {
    onChange(index) {
      const routerArray = [
        "/",
        "/community",
         "/system_list",
        "/system_list",
        "/system_inner"
      ];
      this.$router.push(routerArray[index])
    }
  }
}
</script>