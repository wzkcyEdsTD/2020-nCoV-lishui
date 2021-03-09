<template>
  <div
    class="chart-document animated"
    :class="[hideVisible ? 'slideOutRight' : 'slideInRight']"
  >
    <yesterdayData/>
    <hsjcfb/>
    <rjry/>
    <bqtj />
    <bqtj2 />
    <!-- <sbdata /> -->
    <span class="hide_button" @click="hideSide"></span>
  </div>
</template>

<script>
/* eslint-disable */
import bqtj from "./bqtj";
import bqtj2 from "./bqtj2";
import hsjcfb from "./hsjcfb"
import yesterdayData from "./yesterdayData"
import sbdata from "./sbDate";
import rjry from "./rjry"
export default {
  data() {
    return {
      hideVisible: false,
    };
  },
  components: { bqtj, bqtj2, sbdata, yesterdayData, hsjcfb, rjry},
  methods: {
    tabsPaneClickHandler(val) {},
    hideSide() {
      this.hideVisible = !this.hideVisible;
      this.$hub.$emit("hide_click", this.hideVisible);
    },
  },
};
</script>
<style lang="less">
.chart-document {
  position: fixed;
  top: 80px !important;
  bottom: 10px !important;
  width: 400px;
  right: 8px;
  background: url(../img/rightDiv_bg.png) 0 0 no-repeat;
  background-size: 100% 100%;
  padding: 30px 16px 20px 26px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  .hide_button {
    transform: rotateY(180deg);
    position: absolute;
    top: 40%;
    right: 98%;
    height: 126px;
    width: 27px;
    background: url("../img/hide_button.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .gqx {
    height: 100%;
    border-bottom: 1px solid #86c9e1;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}
.my-tabs .el-tabs__active-bar {
  height: 4px;
  background-color: #eeaa19;
} /**.el-tabs__active-bar */
.my-tabs .el-tabs__item {
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  padding: 0 10px !important;
  color: #409eff;
}
.my-tabs .el-input__inner {
  font-size: 16px;
}
.my-tabs .is-active {
  color: #eeaa19 !important;
}
.my-tabs .el-tabs__nav-wrap::after {
  height: 1px;
}
.my-tabs .el-tabs__item.is-disabled {
  cursor: not-allowed !important;
}
.el-select {
  margin-top: 10px;
}
.el-select .el-input__inner {
  font-size: 16px;
  height: 36px;
  line-height: 36px;
}
.el-select-dropdown__item {
  font-size: 16px !important;
}
</style>
