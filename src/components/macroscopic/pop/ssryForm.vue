<template>
  <div id="ssyrform" v-if="list.length">
    <div class="head">
      <div class="title">{{ title }}</div>
      <div class="time">{{ time }}</div>
      <a @click="()=>{ list = [] }">×</a>
    </div>
    <div class="content ctn1">
      <el-table height="100%" :data="list" border>
        <el-table-column prop="index" label="序号" sortable></el-table-column>
        <el-table-column prop="name" label="小区名" sortable></el-table-column>
        <el-table-column prop="num_out" label="出去人数" sortable></el-table-column>
        <el-table-column prop="num_in" label="进入人数" sortable></el-table-column>
        <el-table-column label="查看详情">
          <template slot-scope="scope">
            <el-button @click.native.prevent="clickCell(scope.row)" type="text">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const server = "http://172.20.89.88:5001/s";
import { loadModules } from "esri-loader";
import { OPTION } from "@/components/common/Tmap";

import { mapState, mapActions } from "vuex";

export default {
  name: "ssryForm",
  data() {
    return {
      server,
      title: "",
      list: [],
      time: ""
    };
  },
  components: {},
  computed: {
    ...mapState({
      crjlList: state => state.crjlList,
      ryxxList: state => state.ryxxList
    })
  },
  created() {},
  mounted() {
    setInterval(() => {
      this.getTime();
    }, 1000);
    // 定时5分钟，请求人员进出数据
    setInterval(() => {
      this.fetchcrjlList();
      this.fetchryxxList();
    }, 300000);
  },
  methods: {
    ...mapActions(["fetchcrjlList", "fetchryxxList"]),
    goLocation(item) {
      item.geometry && this.$parent.$refs.macroArcgis.goloaction(item);
    },

    getItem() {
      const that = this;

      this.title = `小区出入实时情况`;
      const datetime = this.dateFormat("YYYY-mm-dd", new Date());

      const obj = {};

      this.crjlList.map(item => {
        if (!obj[item.ssxq]) {
          obj[item.ssxq] = {
            name: item.ssxq,
            num_in: 0,
            num_out: 0
          };
        }

        const time_out = this.dateFormat("YYYY-mm-dd", new Date(item.cmsj));
        const time_in = this.dateFormat("YYYY-mm-dd", new Date(item.fhsj));

        if (item.cmsj != "1899-12-30 00:00:00" && time_out == datetime) {
          obj[item.ssxq].num_out++;
        }

        if (item.fhsj != "1899-12-30 00:00:00" && time_in == datetime) {
          obj[item.ssxq].num_in++;
        }
      });

      Object.values(obj).map(item => {
        that.list.push(item);
      });

      // 增加索引
      this.list.map((item, index) => {
        item.index = index + 1;
      });

      if (!that.$parent.$refs.macroArcgis.map.findLayerById("xqd")) {
        const querylist = this.list.map(item => `'${item.name}'`);

        loadModules(
          [
            "esri/tasks/QueryTask",
            "esri/tasks/support/Query",
            "esri/layers/FeatureLayer"
          ],
          OPTION
        ).then(async ([QueryTask, Query, FeatureLayer]) => {
          const layer = new FeatureLayer({
            url:
              "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/19",
            definitionExpression: `MansionName in (${querylist})`,
            id: "xqd",
            renderer: {
              type: "simple",
              symbol: {
                type: "picture-marker",
                url: `${server}/icon/other/小区.png`,
                width: "30px",
                height: "32px"
              },
              label: "小区"
            },
            labelingInfo: [
              {
                symbol: {
                  type: "text",
                  color: "white",
                  haloColor: "black",
                  haloSize: "1px",
                  font: {
                    family: "Arial Unicode MS Regular",
                    size: 12
                  }
                },
                labelPlacement: "below-center",
                labelExpressionInfo: {
                  expression: "$feature.MansionName"
                }
              }
            ]
          });

          that.$parent.$refs.macroArcgis.map.add(layer);

          that.$parent.$refs.macroArcgis.legend.layerInfos.push({
            title: "",
            layer: layer
          });
        });
      }
    },
    // 详情点击事件
    clickCell(row) {
      this.$parent.xqjckShow = true;
      this.$parent.$refs.xqjck.filterItem(row.name);
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
    //获取当前时间
    getTime() {
      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      //以下代码依次是获取当前时间的年月日时分秒
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      var minute = date.getMinutes();
      var hour = date.getHours();
      var second = date.getSeconds();
      //固定时间格式
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
      }
      if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
      }
      if (second >= 0 && second <= 9) {
        second = "0" + second;
      }
      var currentdate =
        year +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        hour +
        seperator2 +
        minute +
        seperator2 +
        second;
      this.time = currentdate;
    }
  }
};
</script>

<style lang="less" scoped>
#ssyrform {
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
      padding: 5px;
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

  .ctn1 {
    height: 86%;
    margin-top: 5%;

    // element-table
    .el-table {
      width: 96%;
      margin: auto;
      background-color: #24386a;
    }

    .el-button--text {
      font-size: 16px;
    }
  }
}
</style>