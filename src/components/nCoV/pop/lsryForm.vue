<template>
  <div id="lsyrform" v-if="sArr.length">
    <div class="head">
      <div class="title">{{ title }}</div>
      <a @click="()=>{sArr = []}">×</a>
    </div>
    <div class="choose_div">
      <span>起始时间 {{ time_start }}</span>
      <img src="../../common/image/日历.png" @click="()=>{ calShow1 = !calShow1; calShow2 = false; }" />
      <Calendar ref="calendar1" @choseDay="clickDay1" :futureDayHide="future" v-show="calShow1"></Calendar>

      <span>结束时间 {{ time_end }}</span>
      <img src="../../common/image/日历.png" @click="()=>{ calShow2 = !calShow2; calShow1 = false; }" />
      <Calendar
        ref="calendar2"
        @choseDay="clickDay2"
        :agoDayHide="ago"
        :futureDayHide="now"
        v-show="calShow2"
      ></Calendar>
    </div>
    <div class="content ctn2">
      <div class="chart" v-for="(item, index) in sArr" :key="index" :id="`chart${index}`"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Calendar from "vue-calendar-component";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";

import { mapState } from "vuex";

export default {
  name: "lsryForm",
  data() {
    return {
      title: "",
      calShow1: false,
      calShow2: false,
      time_start: "",
      time_end: "",
      ago: "",
      future: "",
      now: "",
      time: "",
      charts: [],
      sArr: []
    };
  },
  components: { Calendar },
  computed: {
    ...mapState({
      crjlList: state => state.crjlList,
      ryxxList: state => state.ryxxList
    })
  },
  created() {
    this.future = this.now = new Date()
      .valueOf()
      .toString()
      .substr(0, 10);
    this.time_start = this.dateFormat(
      "YYYY/mm/dd",
      new Date(new Date() - 7 * 24 * 60 * 60 * 1000)
    );
    this.time_end = this.dateFormat("YYYY/mm/dd", new Date());
  },
  mounted() {},
  methods: {
    getItem() {
      const that = this;
      const datetime = this.dateFormat("YYYY-mm-dd", new Date());
      this.time = `截至 ${datetime}`;
      this.title = `小区出入情况历史统计`;

      const obj = {};

      this.crjlList.map(item => {
        !obj[item.ssxq] && (obj[item.ssxq] = {});

        const time_out = this.dateFormat("YYYY-mm-dd", new Date(item.cmsj));
        const time_in = this.dateFormat("YYYY-mm-dd", new Date(item.fhsj));

        if (item.cmsj != "1899-12-30 00:00:00") {
          !obj[item.ssxq][time_out] &&
            (obj[item.ssxq][time_out] = {
              num_in: 0,
              num_out: 0
            });

          obj[item.ssxq][time_out].num_out++;
        }

        if (item.fhsj != "1899-12-30 00:00:00") {
          !obj[item.ssxq][time_in] &&
            (obj[item.ssxq][time_in] = {
              num_in: 0,
              num_out: 0
            });

          obj[item.ssxq][time_in].num_in++;
        }
      });

      const arr = [];

      Object.keys(obj).map(item => {
        const _arr = [];
        Object.keys(obj[item]).map(_item => {
          _arr.push({
            time: _item,
            num_in: obj[item][_item].num_in,
            num_out: obj[item][_item].num_out
          });
        });

        arr.push({ name: item, value: _arr });
      });

      arr.map(item => {
        item.value.sort((a, b) => {
          return new Date(a.time).valueOf() - new Date(b.time).valueOf();
        });

        that.sArr.push({
          name: item.name,
          time: item.value.map(item => item.time),
          in_value: item.value.map(item => item.num_in),
          out_value: item.value.map(item => item.num_out)
        });
      });
    },
    doChart() {
      const list = this.getList();

      list.map((item, index) => {
        const chart = this.$echarts.init(
          document.getElementById(`chart${index}`)
        );

        chart.setOption({
          title: {
            text: `${item.name}`,
            left: "20px",
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            show: true,
            right: "8%",
            textStyle: {
              color: "#fff"
            }
          },
          tooltip: {
            show: true,
            trigger: "axis"
          },
          grid: {
            bottom: "10%",
            left: "5%",
            right: "4%",
            containLabel: true
          },
          xAxis: {
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              show: false
            },
            data: item.time || []
          },
          yAxis: {
            axisLine: {
              lineStyle: {
                color: "#fff"
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
              name: "进入人数",
              type: "line",
              itemStyle: {
                color: "#fd344b"
              },
              data: item.in_value || []
            },
            {
              name: "出去人数",
              type: "line",
              itemStyle: {
                color: "#00ffff"
              },
              data: item.out_value || []
            }
          ]
        });

        this.charts.push(chart);
      });
    },
    // 更新图表
    updateChart() {
      const list = this.getList();

      this.charts.map((item, index) => {
        item.setOption({
          xAxis: {
            data: list[index].time || []
          },
          series: [
            {
              name: "进入人数",
              type: "line",
              itemStyle: {
                color: "#fd344b"
              },
              data: list[index].in_value || []
            },
            {
              name: "出去人数",
              type: "line",
              itemStyle: {
                color: "#00ffff"
              },
              data: list[index].out_value || []
            }
          ]
        });
      });
    },
    // [calendar1]点击事件
    clickDay1(data) {
      this.calShow1 = false;
      this.time_start = data;
      this.ago = new Date(data)
        .valueOf()
        .toString()
        .substr(0, 10);

      this.updateChart();
    },
    // [calendar2]点击事件
    clickDay2(data) {
      this.calShow2 = false;
      this.time_end = data;
      this.future = new Date(data)
        .valueOf()
        .toString()
        .substr(0, 10);

      this.updateChart();
    },
    // 日期格式化
    dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString()
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(
            ret[1],
            ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
          );
        }
      }
      return fmt;
    },
    getList() {
      const list = [];
      const that = this;
      this.sArr.map((item, index) => {
        const obj = {};

        item.time.map((_item, _index) => {
          if (
            new Date(_item).valueOf() >= new Date(that.time_start).valueOf() &&
            new Date(_item).valueOf() <=
              new Date(that.time_end).valueOf() + 24 * 60 * 60 * 1000
          ) {
            !obj["time"] && (obj["time"] = []);
            !obj["num"] && (obj["num"] = []);

            obj["time"].push(_item);
            obj["num"].push(_index);
          }
        });

        item.in_value.map((_item, _index) => {
          if (obj.num && ~obj.num.indexOf(_index)) {
            !obj["in_value"] && (obj["in_value"] = []);

            obj["in_value"].push(_item);
          }
        });

        item.out_value.map((_item, _index) => {
          if (obj.num && ~obj.num.indexOf(_index)) {
            !obj["out_value"] && (obj["out_value"] = []);

            obj["out_value"].push(_item);
          }
        });

        obj["name"] = item.name;

        list.push(obj);
      });

      return list;
    }
  },
  watch: {
    sArr(newV, oldV) {
      this.$nextTick(() => {
        newV.length && this.doChart();
      });
    }
  }
};
</script>

<style lang="less" scoped>
#lsyrform {
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

    .time {
      font-size: 16px;
    }

    a {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 30px;
      cursor: pointer;
    }
  }

  .choose_div {
    margin: 2%;
    padding: 2% 0%;

    .wh_container {
      position: absolute;
      right: 0px;
      z-index: 30;
    }

    span {
      font-size: 16px;
    }

    img {
      width: 16px;
      height: 16px;
      margin-left: 10px;
      margin-right: 30px;
      cursor: pointer;
    }
  }

  .ctn2 {
    height: 85%;
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