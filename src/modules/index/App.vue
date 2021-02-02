<template>
  <div id="app">
    <header class="app_header">
      <div class="app_icon">{{ titleHash[current] }}</div>
      <div class="app_toptab_position app_toptab_normal">
        <div class="tip">
          <div v-show="false">中国电信丽水分公司 & 温州设计集团</div>
          <div>{{ time }}</div>
        </div>
        <!-- <el-popover placement="bottom-end" width="70" trigger="hover">
          <ul class="user_list">
            <li>{{ au_username }}</li>
            <li>
              <a @click="Exit">安全退出</a>
            </li>
          </ul>
          <div class="userBtn" slot="reference">
            <el-avatar size="small" src="libs/img/userAvatar.png"></el-avatar>
          </div>
        </el-popover> -->
      </div>
    </header>
    <div class="app_container">
      <router-view ref="router" />
      <transition name="frame"></transition>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import router from "./router";
export default {
  name: "app",
  data() {
    return {
      toptab: [{ label: "防疫布控", route: "macroscopic" }],
      titleHash: {
        0: "丽水市新冠肺炎防控指挥地图",
      },
      current: 0,
      time: "",
      au_username: window.userInfo.username,
      showPassport: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
    selected(index) {
      this.current = index;
    },
    //获取当前时间
    getTime() {
      this.time = this.$util.getTime();
    },
    Exit() {
      this.$util.removeStorage("access_token");
      window.location.href = "/login.html";
    },
  },
};
</script>

<style lang="less">
@import url("~@/components/common/css/common.less");
@import url("~@/components/common/css/animate.css");
@import url("~@/components/common/css/frame.less");
</style>
