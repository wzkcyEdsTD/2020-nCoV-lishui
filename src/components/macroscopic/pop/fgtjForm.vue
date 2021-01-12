<template>
  <div id="fgtjform" v-if="list.length">
    <div class="head">
      <div class="title">{{ title }}</div>
      <a @click="()=>{ list = [] }">×</a>
    </div>
    <div class="content ctn2">
      <div class="chart" id="chart0"></div>
      <div class="chart" id="chart1"></div>
      <div class="chart" id="chart2"></div>
      <div class="chart" id="chart3"></div>
      <div class="chart" id="chart4"></div>
      <div class="chart" id="chart5"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";
import { OPTION } from "@/components/common/Tmap";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";

export default {
  name: "fgtjForm",
  data() {
    return {
      title: "",
      list: [],
      sArr: []
    };
  },
  components: {},
  created() {
    const that = this;

    const sObj = {};

    loadModules(
      ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
      OPTION
    ).then(async ([QueryTask, Query]) => {
      const queryTask = new QueryTask({
        url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/fgfc/MapServer/0`
      });
      const query = new Query();
      query.outFields = ["*"];
      query.returnGeometry = true;
      query.where = `1=1`;
      const { fields, features } = await queryTask.execute(query);

      const list = features;

      that.forceData = list;

      list.map(({ attributes }) => {
        const {
          JD,
          YJFGHJSDWRYSL,
          YJFGHJSDWHBYGSL,
          YJFGSGDWRYSL,
          YJFGHSGDWHBYGSL,
          YJFGHJLDWRYSL,
          YJFGHJLDWHBYGSL
        } = attributes;
        if (!JD) return false;
        if (!sObj[JD]) {
          sObj[JD] = {
            Country: JD,
            YJFGHJSDWRYSL: 0,
            YJFGHJSDWHBYGSL: 0,
            YJFGSGDWRYSL: 0,
            YJFGHSGDWHBYGSL: 0,
            YJFGHJLDWRYSL: 0,
            YJFGHJLDWHBYGSL: 0
          };
        }
        sObj[JD].YJFGHJSDWRYSL += YJFGHJSDWRYSL || 0;
        sObj[JD].YJFGHJSDWHBYGSL += YJFGHJSDWHBYGSL || 0;
        sObj[JD].YJFGSGDWRYSL += YJFGSGDWRYSL || 0;
        sObj[JD].YJFGHSGDWHBYGSL += YJFGHSGDWHBYGSL || 0;
        sObj[JD].YJFGHJLDWRYSL += YJFGHJLDWRYSL || 0;
        sObj[JD].YJFGHJLDWHBYGSL += YJFGHJLDWHBYGSL || 0;
      });
      for (let k in sObj) {
        that.sArr.push(sObj[k]);
      }
    });
  },
  /* mounted() {
    const that = this;

    const sObj = {};

    loadModules(
      ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
      OPTION
    ).then(async ([QueryTask, Query]) => {
      const queryTask = new QueryTask({
        url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/fgfc/MapServer/0`
      });
      const query = new Query();
      query.outFields = ["*"];
      query.returnGeometry = true;
      query.where = `1=1`;
      const { fields, features } = await queryTask.execute(query);

      const list = features;

      that.forceData = list;

      list.map(({ attributes }) => {
        const {
          JD,
          YJFGHJSDWRYSL,
          YJFGHJSDWHBYGSL,
          YJFGSGDWRYSL,
          YJFGHSGDWHBYGSL,
          YJFGHJLDWRYSL,
          YJFGHJLDWHBYGSL
        } = attributes;
        if (!JD) return false;
        if (!sObj[JD]) {
          sObj[JD] = {
            Country: JD,
            YJFGHJSDWRYSL: 0,
            YJFGHJSDWHBYGSL: 0,
            YJFGSGDWRYSL: 0,
            YJFGHSGDWHBYGSL: 0,
            YJFGHJLDWRYSL: 0,
            YJFGHJLDWHBYGSL: 0
          };
        }
        sObj[JD].YJFGHJSDWRYSL += YJFGHJSDWRYSL || 0;
        sObj[JD].YJFGHJSDWHBYGSL += YJFGHJSDWHBYGSL || 0;
        sObj[JD].YJFGSGDWRYSL += YJFGSGDWRYSL || 0;
        sObj[JD].YJFGHSGDWHBYGSL += YJFGHSGDWHBYGSL || 0;
        sObj[JD].YJFGHJLDWRYSL += YJFGHJLDWRYSL || 0;
        sObj[JD].YJFGHJLDWHBYGSL += YJFGHJLDWHBYGSL || 0;
      });
      for (let k in sObj) {
        that.sArr.push(sObj[k]);
      }
    });
  }, */
  methods: {
    getItem() {
      this.title = `工地返工统计`;
      this.list = [1, 2, 3, 4];
    },
    doChart() {
      const that = this;

      const list = [
        { field: "YJFGHJSDWRYSL", label: "预计复工后建设单位人员数量" },
        {
          field: "YJFGHJSDWHBYGSL",
          label: "预计复工后建设单位湖北籍员工数量"
        },
        { field: "YJFGSGDWRYSL", label: "预计复工后施工单位人员数量" },
        {
          field: "YJFGHSGDWHBYGSL",
          label: "预计复工后施工单位湖北籍员工数量"
        },
        { field: "YJFGHJLDWRYSL", label: "预计复工后监理单位人员数量" },
        {
          field: "YJFGHJLDWHBYGSL",
          label: "预计复工后监理单位湖北籍员工数量"
        }
      ];

      // 通用配置项
      const baseOption = {
        title: {
          left: "20px",
          textStyle: {
            color: "#fff"
          }
        },
        grid: {
          bottom: "10%",
          left: "5%",
          right: "4%",
          containLabel: true
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
          }
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
            name: "人数",
            type: "bar",
            barWidth: "20px",

            stack: "sum",
            label: {
              normal: {
                show: true,
                position: "top",
                color: "#fff",
                fontSize: 12
              }
            },
            itemStyle: {
              color: "#f41e1e"
            }
          }
        ]
      };

      list.map((item, index) => {
        const chart = this.$echarts.init(
          document.getElementById(`chart${index}`)
        );

        const option = baseOption;
        option.title.text = `${item.label}`;
        option.xAxis.data = that.sArr
          .sort((a, b) => b[item.field] - a[item.field])
          .map(_item => _item.Country);

        option.series[0].data = that.sArr.map(_item => {
          return _item[item.field];
        });

        chart.setOption(option);
      });
    }
  },
  watch: {
    list(newV, oldV) {
      this.$nextTick(() => {
        newV.length && this.doChart();
      });
    }
  }
};
</script>

<style lang="less" scoped>
#fgtjform {
  position: absolute;
  width: 450px;
  height: 720px;
  background: #24386a;
  border: 1px solid #04ecff;
  border-radius: 6px;
  z-index: 30;
  top: 18%;
  margin: auto;
  box-sizing: border-box;
  transition: all 1s;

  .head {
    margin-top: 1%;

    .title {
      font-size: 22px;
    }

    a {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 30px;
      cursor: pointer;
    }
  }

  .ctn2 {
    height: 90%;
    margin-top: 5%;
    overflow: auto;

    .chart {
      width: 100%;
      height: 230px;
      margin: 10px 0px;
    }
  }

  .content::-webkit-scrollbar {
    display: block;
    width: 10px;
    background-color: rgb(107, 134, 223);
    border-radius: 3px;
  }
  .content::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: rgb(14, 10, 247);
    border-radius: 3px;
  }
}
</style>