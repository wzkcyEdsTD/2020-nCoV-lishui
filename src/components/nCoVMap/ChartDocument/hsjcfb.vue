<template>
  <div class="hsjcfbData">
    <div class="titleLine">
      <div class="title">核酸检测点分布情况</div>
      <div class="lineImg" />
    </div>
    <div class="data">
      <div class="unit">单位：个</div>
      <div id="hsjcCharts" />
    </div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";
import { OPTION } from "@/components/common/Tmap";
// import Loading from "@/components/common/loading";
export default {
  data() {
    return {
      hsfb: {
        "莲都区": 0,
        "经开区": 0,
        "龙泉市": 0,
        "青田县": 0,
        "缙云县": 0,
        "遂昌县": 0,
        "松阳县": 0,
        "云和县": 0,
        "庆元县": 0,
        "景宁县": 0,
        "景宁畲族自治县":0
      },
    };
  },
  // components: { Loading },
  methods: {
    getData() {
      const that = this;
      loadModules(
        ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
        OPTION
      ).then(async ([QueryTask, Query]) => {
        const queryTask = new QueryTask({
          url: `http://10.53.137.59:6080/arcgis/rest/services/lsyq/theme_data/MapServer/9`,
        });
        const query = new Query();
        query.outFields = "*";
        query.where = "1=1";
        query.returnGeometry = true;
        const { features } = await queryTask.execute(query);

        features.map((v) => {
          // debugger
          that.hsfb[v.attributes.szqx] = that.hsfb[v.attributes.szqx] + 1
        });

        that.$echarts.init(document.getElementById("hsjcCharts")).clear();
        that.hsjcfb();

      });
    },
    // 核酸检测分布
    hsjcfb() {
      const that = this;
      const chart = this.$echarts.init(document.getElementById("hsjcCharts"));
      chart.setOption({
        grid: {
          top: "0%",
          left: "15%",
          //   right: '4%',
          bottom: "20%",
          height: "83%",
        },
        xAxis: {
          type: "value",
          max: 10,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
            fontFamily: "youshebiaotihei",
            fontSize: 14,
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
        yAxis: {
          type: "category",
          data: [
            "景宁县",
            "庆元县",
            "云和县",
            "松阳县",
            "遂昌县",
            "缙云县",
            "青田县",
            "龙泉市",
            "经开区",
            "莲都区",
          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
            fontFamily: "PingFang",
            fontSize: 14,
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
        dataZoom: [
          {
            type: "inside",
            show: true,
            yAxisIndex: 0,
            start: 100,
            end: 60,
            width: "3%",
            height: "80%",
            left: "0%",
            borderColor: "#fff",
            fillerColor: "#fff",
            textStyle: false,
            zoomOnMouseWheel: false, //滚轮是否触发缩放
            moveOnMouseMove: true, //鼠标滚轮触发滚动
            moveOnMouseWheel: true,
          },
        ],
        series: [
          {
            name: "hsjcfb",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              position: "right",
              textStyle: {
                color: "#fff",
              },
              fontFamily: "PingFang",
              fontSize: 14,
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  if (params.name == name) {
                    return new that.$echarts.graphic.LinearGradient(
                      1,
                      0,
                      0,
                      0,
                      [
                        { offset: 0, color: "#FF8C4C" },
                        { offset: 1, color: "#FEDB76" },
                      ]
                    );
                  } else {
                    return new that.$echarts.graphic.LinearGradient(
                      1,
                      0,
                      0,
                      0,
                      [
                        { offset: 1, color: "#16DCE9" },
                        { offset: 0, color: "#00B7FC" },
                      ]
                    );
                  }
                },
              },
              // color: "#00B7FC",
            },
            // barGap:'80%',
            // barCategoryGap:'50%',
            barWidth: 25, //柱图宽度
            data: [that.hsfb['景宁县'], that.hsfb['庆元县'], that.hsfb['云和县'], that.hsfb['松阳县'], that.hsfb['遂昌县'], that.hsfb['缙云县'], that.hsfb['青田县'], that.hsfb['龙泉市'], that.hsfb['经开区'], that.hsfb['莲都区']],
          },
        ],
      });

      // chart.on("click", function (params) {
      //   let name = params.name;
      //   chart.setOption({
      //     grid: {
      //       top: "0%",
      //       left: "15%",
      //       //   right: '4%',
      //       bottom: "20%",
      //       height: "83%",
      //     },
      //     xAxis: {
      //       type: "value",
      //       max: 600,
      //       axisLabel: {
      //         show: true,
      //         textStyle: {
      //           color: "#fff",
      //         },
      //         fontFamily: "youshebiaotihei",
      //         fontSize: 14,
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           color: "#9fdbfd",
      //           width: 2,
      //         },
      //       },
      //       axisTick: {
      //         //刻度线
      //         show: false,
      //       },
      //       splitLine: {
      //         //网格线
      //         show: false,
      //       },
      //     },
      //     yAxis: {
      //       type: "category",
      //       data: [
      //         "景宁县",
      //         "庆元县",
      //         "云和县",
      //         "松阳县",
      //         "遂昌县",
      //         "缙云县",
      //         "青田县",
      //         "龙泉市",
      //         "经开区",
      //         "莲都区",
      //       ],
      //       axisLabel: {
      //         show: true,
      //         textStyle: {
      //           color: "#fff",
      //         },
      //         fontFamily: "PingFang",
      //         fontSize: 14,
      //       },
      //       axisLine: {
      //         lineStyle: {
      //           color: "#9fdbfd",
      //           width: 2,
      //         },
      //       },
      //       axisTick: {
      //         //刻度线
      //         show: false,
      //       },
      //     },
      //     dataZoom: [
      //       {
      //         type: "inside",
      //         show: true,
      //         yAxisIndex: 0,
      //         // start: 0,
      //         // end: 20,
      //         width: "3%",
      //         height: "80%",
      //         left: "0%",
      //         borderColor: "#fff",
      //         fillerColor: "#fff",
      //         textStyle: false,
      //         zoomOnMouseWheel: false, //滚轮是否触发缩放
      //         moveOnMouseMove: true, //鼠标滚轮触发滚动
      //         moveOnMouseWheel: true,
      //       },
      //     ],
      //     series: [
      //       {
      //         name: "hsjcfb",
      //         type: "bar",
      //         stack: "total",
      //         label: {
      //           show: true,
      //           position: "right",
      //           textStyle: {
      //             color: "#fff",
      //           },
      //           fontFamily: "PingFang",
      //           fontSize: 14,
      //           // backgroundColor:{
      //           //   image:"http://localhost:8080/libs/img/rightDiv_bg.a80d9d2a.png"
      //           //   }
      //         },
      //         rich: {},
      //         itemStyle: {
      //           normal: {
      //             color: function (params) {
      //               if (params.name == name) {
      //                 return new that.$echarts.graphic.LinearGradient(
      //                   1,
      //                   0,
      //                   0,
      //                   0,
      //                   [
      //                     { offset: 0, color: "#FF8C4C" },
      //                     { offset: 1, color: "#FEDB76" },
      //                   ]
      //                 );
      //               } else {
      //                 return new that.$echarts.graphic.LinearGradient(
      //                   1,
      //                   0,
      //                   0,
      //                   0,
      //                   [
      //                     { offset: 1, color: "#16DCE9" },
      //                     { offset: 0, color: "#00B7FC" },
      //                   ]
      //                 );
      //               }
      //             },
      //           },
      //           // color: "#00B7FC",
      //         },
      //         // barGap:'80%',
      //         // barCategoryGap:'50%',
      //         barWidth: 25, //柱图宽度
      //         data: [that.hsfb['景宁县'], that.hsfb['庆元县'], that.hsfb['云和县'], that.hsfb['松阳县'], that.hsfb['遂昌县'], that.hsfb['缙云县'], that.hsfb['青田县'], that.hsfb['龙泉市'], that.hsfb['经开区'], that.hsfb['莲都区']],
      //       },
      //     ],
      //   });
      // });
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
  },
  created() {},
  mounted() {
    const that = this;
    that.getData();

  },
};
</script>

<style lang="less" scoped>
.hsjcfbData {
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

    #hsjcCharts {
      width: 37vh;
      height: 25vh;
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
