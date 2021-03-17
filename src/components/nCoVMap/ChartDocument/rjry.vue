<template>
  <div class="rjryData">
    <div class="titleLine">
      <div class="title">入境物品从业人员分布情况</div>
      <div class="lineImg" />
    </div>
    <div class="data">
      <div class="unit">单位：人</div>
      <div id="rjryCharts" />
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      res:null,
    };
  },
  methods: {
    // 核酸检测分布
    rjry() {
      const that = this;
      const chart = this.$echarts.init(document.getElementById("rjryCharts"));
      let list = that.res.gxzrjwbcyryzsParent;
      const ylist = {};
      list.forEach(element => {
        var nameTemp = element['区县'];
        ylist[nameTemp]=element['各区县入境物品从业人员数']
      });
      // console.log("入境物品",ylist);
      const option = {
        grid: {
          top: "3%",
          left: "10%",
          //   right: '4%',
          bottom: "30%",
          height:"70%"
        },
        yAxis: {
          type: "value",
          max: 600,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          fontFamily:"youshebiaotihei",
          fontSize:14
          },
          axisLine: {
            lineStyle: {
              color: "#9fdbfd",
              width: 2,
            },
          },
          axisTick: {
            //刻度线
            show: false,
          },
          splitLine: {
            //网格线
            show: false,
          },
        },
        xAxis: {
          type: "category",

          data: [
            "莲都区",
            "经开区",
            "龙泉市",
            "青田县",
            "缙云县",
            "遂昌县",
            "松阳县",
            "云和县",
            "庆元县",
            "景宁县",
          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
            rotate:45,
            fontFamily:"PingFang",
            fontSize:14
          },
          axisLine: {
            lineStyle: {
              color: "#9fdbfd",
              width: 2,
            },
          },
          axisTick: {
            //刻度线
            show: false,
          },
        },
        series: [
          {
            name: "rjry",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              position:"top",
              color:"#FFF",
              fontFamily:"PingFang",
              fontSize:14
            },
            itemStyle: {
              normal:{
                color: 
                    new that.$echarts.graphic.LinearGradient(
                      0,0,0,1,
                      [
                            {offset: 1, color: '#16DCE9'},
                            {offset: 0, color: '#00B7FC'},
                      ]
                    )
              },
            },
            barWidth: 20, //柱图宽度
            //莲都区.经开区.龙泉市.青田县.缙云县.遂昌县.松阳县.云和县.庆元县.景宁县
            data: [ylist['莲都区'], ylist['经开区'], ylist['龙泉市'], ylist['青田县'], ylist['缙云县'], ylist['遂昌县'], ylist['松阳县'], ylist['云和县'], ylist['庆元县'],ylist['景宁县']],
          },
        ],
      };
      chart.setOption(option);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
  },
  created() {},
  mounted() {
    const that = this;
    that.$hub.$on("allData", res=>{
      that.$nextTick(()=>{
        that.res = res;
        that.$echarts.init(document.getElementById("rjryCharts")).clear();
        that.rjry();
      })
    });

  },
  beforeDestroy(){
    const that = this;
    that.$hub.$off("allData")
  }
};
</script>

<style lang="less" scoped>
.rjryData {
  width: 100%;
  height: 30vh;
  padding-left: 20px;
  .titleLine {
    .title {
      text-align: left;
      font-family: youshebiaotihei;
      font-size: 2.2vh;
      color: #ffffff;
      width: 100%;
      height: 3vh;
      text-shadow: 0px 3px 6px #000000;
    }
    .lineImg {
      background-image: url("~@/components/nCoVMap/img/lineImg.png");
      background-size: 100% 100%;
      width: 90%;
      height: 0.5vh;
    }
  }
  .data {
    // display: flex;

    #rjryCharts {
      width: 37vh;
      height: 29vh;
    }
  }
  .unit {
    font-family: PingFang;
    color: #ffffff;
    position: relative;
    right: 2vh;
    top: 1vh;
    font-size: 1.2vh;
    text-align: right;
  }
}
</style>
