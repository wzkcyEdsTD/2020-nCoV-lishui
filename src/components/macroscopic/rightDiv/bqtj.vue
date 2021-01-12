<template>
  <div id="bltjDiv">
    <h3 id="selectDiv">
      - 鹿城区病例统计 -
      <select id="select" @change="bqSelect($event)">
        <option value="qzbl">确诊病例</option>
        <option value="zzbl">疑似病例</option>
        <option value="gld">集中医学观察点</option>
        <option value="gld_list">集中医学观察点人员名单</option>
        <option value="mj">密切接触者</option>
        <option value="jjgl">居家隔离人员</option>
        <option value="hbhw">湖北回鹿人员/信令</option>
      </select>
    </h3>
    <div id="bqtjChart"></div>
  </div>
</template>

<script>
/* eslint-disable */
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import util from "../widget/util";
export default {
  data() {
    return {
      dataTime: " ",
      children: " "
    };
  },
  methods: {
    getItem(children, label) {
      if (
        label == "疫情分布" &&
        !~[
          "ytyg",
          "hmgld",
          "hmgld_list",
          "hqgld",
          "hqgld_list",
          "kfgld",
          "kfgld_list"
        ].indexOf(children.id)
      ) {
        this.dataAge = this.dataHash[children.id];
        document.getElementById("select").value = children.id;
        this.$echarts.init(document.getElementById("bqtjChart")).clear();
        this.children = children;
        this.zqzb();
      }
    },
    // 确诊病例
    zqzb() {
      const chart = this.$echarts.init(document.getElementById("bqtjChart"));
      chart.setOption({
        grid: {
          left: "8%",
          right: "5%",
          top: "14%"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          show: true,
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 15,
            color: "#FFF",
            formatter: function(val) {
              return val.split("").join("\n");
            }
          },
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          },
          data: this.dataAge
            .sort((a, b) => b.value - a.value)
            .map(item => item.name)
        },
        yAxis: {
          type: "value",
          name: "",
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "合计确诊",
            type: "bar",
            barWidth: "20px",

            stack: "sum",
            label: {
              normal: {
                show: true,
                position: "inside",
                color: "#fff",
                fontSize: 14
              }
            },
            itemStyle: {
              color: "#f41e1e"
            },
            data: this.dataAge
          },
          {
            name: "新增确诊",
            type: "bar",
            stack: "sum",
            barWidth: "20px",
            color: "#f9c401",
            data: this.dataAge.map(item => item.xzdate)
          }
        ],
        label: {
          normal: {
            show: true,
            position: "inside",
            textStyle: {
              color: "#FFF"
            },
            formatter: function(params) {
              return params.value + this.dataAge[params.dataIndex];
            }
          }
        }
      });
    },
    bqSelect: function(event) {
      this.dataAge = this.dataHash[event.target.value];
      this.$echarts.init(document.getElementById("bqtjChart")).clear();
      this.zqzb();
    }
  },
  created() {
    const {
      dataAge,
      YTdataAge,
      ysblDate,
      jzglDate,
      glryDate,
      mqzDate,
      jjglDate,
      hbhlDate
    } = this.$window.nCov_luchengChart;
    this.dataAge = dataAge;
    this.YTdataAge = YTdataAge;

    this.dataHash = {
      qzbl: dataAge,
      zzbl: ysblDate,
      gld: jzglDate,
      gld_list: glryDate,
      mj: mqzDate,
      jjgl: jjglDate,
      hbhw: hbhlDate
    };
  },
  mounted() {
    this.zqzb();
  }
};
</script>

<style lang="less" scoped>
#bltjDiv {
  width: 100%;
  height: 34%;
  background-color: rgba(5, 26, 79, 0.5);
  border: 1px solid #035acd;

  h3 {
    color: #23c9f3;
    margin-top: 10px;

    select {
      background-color: #0c7cd2;
      border: none;
      color: #fff;
      padding: 7px 7px;
      margin-left: 5px;
    }
  }

  #bqtjChart {
    width: 100%;
    height: 85%;
  }
}
</style>