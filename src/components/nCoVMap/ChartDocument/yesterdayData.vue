<template>
  <div class="yesterdayData">
    <div class="titleLine">
      <div class="title">昨日数据</div>
      <div class="lineImg" />
    </div>
    <div class="data">
      <div class="left">
        <div class="leftIcon">
          <div class="text">昨日<br />核酸监测</div>
        </div>
        <div class="textData">{{`${hsjcNum}人`}}</div>
      </div>
      <div class="right">
        <div class="rightIcon">
          <div class="text">昨日<br />就诊人数</div>
        </div>
        <div class="textData">{{`${jzNum}人`}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import test from "@/api/getDataAPI.js";
export default {
  data() {
    return {
        hsjcNum:0,
        jzNum:0,
    };
  },
  methods: {
    yesterdayData() {
    //   debugger
    const that = this;
      const data = test.getDataAxios("/dm/statistics/all");
      data.then(res=>{
        that.$nextTick(()=>{
            res.zrgjcjghsjcrs.forEach(element => {
                that.hsjcNum = that.hsjcNum + element['昨日核酸检测总人数']
            });
            res.zrgyljgmzjzrs.forEach(item=>{
                that.jzNum = that.jzNum + item["昨日门诊就诊人数"]
            })
        })
      })
    },
  },
  created() {},
  mounted() {
    this.yesterdayData();
  },
};
</script>

<style lang="less" scoped>
.yesterdayData {
  width: 100%;
  height: 29%;
  padding-left: 20px;
  .titleLine {
    .title {
      text-align: left;
      font-family: youshebiaotihei;
      font-size: 2.2vh;
      color: #ffffff;
      width: 100%;
      height: 3vh;
    }
    .lineImg {
      background-image: url("~@/components/nCoVMap/img/lineImg.png");
      background-size: 100% 100%;
      width: 90%;
      height: 0.5vh;
    }
  }
  .data {
    display: flex;
    .left {
      display: flex;
      flex-flow: column;
      width: 50%;
      height: 20vh;
      // background-image: url("~@/components/common/image/蓝圆圈.png");
      // background-size: 100%;
      .leftIcon {
        margin-top: 1vh;
        width: 14vh;
        height: 14vh;
        background-image: url("~@/components/common/image/蓝圆圈.png");
        background-size: 100%;
        .text {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: youshebiaotihei;
          font-size: 2vh;
          text-shadow: 0px 2px 4px #000000;
        }
      }
      .textData {
        font-family: youshebiaotihei;
        font-size: 2.1vh;
        text-shadow: 0px 2px 4px #000000;
        position: relative;
        left: -1.5vh;
        bottom: -1vh;
      }
    }
    .right {
      display: flex;
      flex-flow: column;
      .rightIcon {
        margin-top: 1vh;
        width: 14vh;
        height: 14vh;
        background-image: url("~@/components/common/image/橙圆圈.png");
        background-size: 100%;
        .text {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: youshebiaotihei;
          font-size: 2vh;
          text-shadow: 0px 2px 4px #000000;
        }
      }
      .textData {
        font-family: youshebiaotihei;
        font-size: 2.1vh;
        text-shadow: 0px 2px 4px #000000;
        position: relative;
        right: -0.5vh;
        bottom: -1vh;
      }
    }
  }
}
</style>
