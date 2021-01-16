<template>
  <div id="bltjDiv2">
    <header>
      <span :class="{active:tabIndex == 0}" @click="filterItem(0)">增长趋势分析</span>
      <i>/</i>
      <span :class="{active:tabIndex == 1}" @click="filterItem(1)">累计趋势分析</span>
    </header>
    <div id="bqtjChart2"></div>
  </div>
</template>

<script>
/* eslint-disable */
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
export default {
  data() {
    return {
      tabIndex: 0,
      // 温州数据
      ChartDataWZ: [],
      // 鹿城数据
      ChartDataLC: [],
      // 鹿城新增
      ChartDataLC_Add: [],
      // 变化趋势时间
      dataTime: [],
      // 新增时间
      dataTime_add: []
    };
  },
  methods: {
    filterItem(index) {
      this.tabIndex = index;

      // 增长趋势
      if (index == "0") {
        this.$echarts.init(document.getElementById("bqtjChart2")).clear();

        this.xzqs();
      }
      // 累计趋势
      if (index == "1") {
        this.$echarts.init(document.getElementById("bqtjChart2")).clear();
        this.ChartDataWZ = this.dataQS; //累积趋势
        this.ChartDataLC = this.dataLC; //累积趋势

        this.dataTime = this.dataName;
        this.qzqs();
      }
    },
    // 新增趋势
    xzqs() {
      const chart = this.$echarts.init(document.getElementById("bqtjChart2"));
      chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        color: ["#0080ff", "#4cd5ce"],
        grid: {
          left: "3%",
          right: "6%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.dataTime_add,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          },
          axisTick: false,
          axisLine: {
            lineStyle: {
              color: "#9fdbfd",
              width: 2
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            onZero: false,
            lineStyle: {
              width: 2,
              color: "#9fdbfd"
            }
          },
          axisTick: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#17035a"
            }
          }
        },
        series: [
          {
            name: "鹿城确诊人员增长趋势(例)",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgba(254,77,105)", //背景色
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "rgb(254,77,105)"
                },
                label: { show: true, color: "#fff" }
              }
            },
            symbolSize: 5,
            areaStyle: {
              normal: {}
            },
            data: this.ChartDataLC_Add
          }
        ]
      });
    },
    // 确诊趋势
    qzqs() {
      const chart = this.$echarts.init(document.getElementById("bqtjChart2"));
      chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        color: ["#0080ff", "#4cd5ce"],
        grid: {
          left: "3%",
          right: "6%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.dataTime,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          },
          axisTick: false,
          axisLine: {
            lineStyle: {
              color: "#9fdbfd",
              width: 2
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            onZero: false,
            lineStyle: {
              width: 2,
              color: "#9fdbfd"
            }
          },
          axisTick: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#17035a"
            }
          }
        },
        series: [
          {
            name: "温州市确诊人员增长趋势(例)",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgba(14, 255, 216)",
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "#1ff4fa"
                },
                label: { show: true, color: "#fff" }
              }
            },
            symbolSize: 5,
            areaStyle: {
              normal: {}
            },
            data: this.ChartDataWZ
          },
          {
            name: "鹿城确诊人员增长趋势(例)",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgba(254,77,105)", //背景色
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "rgb(254,77,105)"
                },
                label: { show: true, color: "#fff" }
              }
            },
            symbolSize: 5,
            areaStyle: {
              normal: {}
            },
            data: this.ChartDataLC
          }
        ]
      });
    }
  },
  created() {
    const { dataName, dataQS, dataLC } = this.$window.nCov_luchengChart;
    this.dataName = dataName;
    this.dataQS = dataQS;
    this.dataLC = dataLC;
  },
  mounted() {
    const qsArr = [];
    for (var i = 0; i < this.dataLC.length - 1; i++) {
      var num = this.dataLC[i + 1] - this.dataLC[i];
      if (num <= 0) num = 0;
      qsArr.push(num);
    }
    this.ChartDataLC_Add = qsArr;
    this.dataTime_add = this.dataName.filter((item, index) => index > 0);
    this.xzqs();
  }
};
</script>

<style lang="less" scoped>
#bltjDiv2 {
  width: 100%;
  height: 30%;
  background-color: rgba(5, 26, 79, 0.5);
  border: 1px solid #035acd;

  header {
    height: 55px;
    line-height: 55px;
    text-align: left;
    font-size: 20px;
    color: #4cd7ec;
    text-shadow: 0px 0px 4px rgba(76, 215, 236, 0.3);
    padding-left: 20px;
    text-align: center;
    cursor: pointer;

    span {
      padding: 0px 10px;
    }

    .active {
      font-weight: 700;
      color: #fff;
    }
  }

  #bqtjChart2 {
    width: 100%;
    height: 85%;
  }
}
</style>