<template>
  <div id="app">
    <header class="app_header">
      <div class="app_icon">{{ titleHash[current] }}</div>
      <div class="app_toptab_position app_toptab_normal">
        <ul class="app_toptab">
          <li
            v-for="(item, index) in toptab"
            :key="index"
            :class="{ top_active: index == current }"
            @click="selected(index)"
          >
            {{ item.label }}
          </li>
        </ul>

        <div class="tip">
          <div>温州设计集团 <img src="@/components/common/image/group_logo.png" /></div>
          <p>{{ time }}</p>
        </div>

        <el-popover placement="bottom-end" width="70" trigger="hover">
          <ul class="user_list">
            <li>{{ au_username }}</li>
            <!-- <li>
              <a @click="showPassport = true">修改密码</a>
            </li> -->
            <li>
              <a @click="Exit">安全退出</a>
            </li>
          </ul>
          <div class="userBtn" slot="reference">
            <el-avatar size="small" src="libs/img/userAvatar.png"></el-avatar>
          </div>
        </el-popover>
      </div>
    </header>

    <div class="app_container">
      <router-view ref="router" />
      <transition name="frame"></transition>
    </div>

    <!-- <Passport v-if="showPassport" /> -->
  </div>
</template>

<script>
/* eslint-disable */
import router from "./router";
// import Passport from "@/components/common/user/Passport";

export default {
  name: "app",
  data() {
    return {
      toptab: [{ label: "防疫布控", route: "macroscopic" }],
      titleHash: {
        0: "新冠肺炎防控指挥地图",
      },
      current: 0,
      time: "",
      au_username: window.user.au_username,
      showPassport: false,
    };
  },
  // components: { Passport },
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
@import url("~@/components/common/css/arcgis.css");
</style>
