<template>
  <div id="sbxqDateDiv">
    <div class="head">
      <span>[ {{ title }} ] - 详情列表</span>
      <a @click="()=>{ this.$parent.xqShow = false }">×</a>
    </div>

    <el-table :data="elList" height="660" border @row-click="clickTr">
      <el-table-column
        v-for="(item,index) in keyList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        sortable
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";
import { OPTION } from "@/components/common/Tmap";
import { leftOptions } from "../config/enums";
import { sbFields } from "../config/field";

export default {
  name: "sbxq",
  data() {
    return {
      title: "",
      forceData: [],
      fieldList: [],
      keyList: [],
      elList: [],
      countryHash: {
        山福镇: 0,
        藤桥镇: 1,
        仰义街道: 2,
        丰门街道: 3,
        双屿街道: 4,
        广化街道: 5,
        五马街道: 6,
        松台街道: 7,
        大南街道: 8,
        南郊街道: 9,
        南汇街道: 10,
        蒲鞋市街道: 11,
        滨江街道: 12,
        七都街道: 13
      }
    };
  },
  created() {},
  mounted() {
    this.getItem(leftOptions[0].children[0], leftOptions[0].label);
  },
  components: {},
  methods: {
    getItem(
      { url, sublayers, id, name, ytname, definitionExpression, ytd },
      label
    ) {
      const d = [];
      definitionExpression && d.push(definitionExpression);
      this.$parent.$refs.leftOptions.tabIndex == 1 && ytd && d.push(ytd);
      this.title =
        name != "-1" ? `${name}`.split(" ")[0] : `${ytname}`.split(" ")[0];
      loadModules(
        ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
        OPTION
      ).then(async ([QueryTask, Query]) => {
        const queryTask = new QueryTask({ url: `${url}/${sublayers}` });
        const query = new Query();
        query.outFields = "*";
        query.where = d.length ? d.join(" and ") : "1=1";
        query.returnGeometry = true;
        const { fields, features } = await queryTask.execute(query);
        const fieldAliases = {};
        fields.map(item => {
          fieldAliases[item.name] = item.alias;
        });
        const list = features.map(item => {
          item.fieldAliases = fieldAliases;
          return item;
        });
        //  高速额外请求个服务
        if (id == "highway_type_1") {
          const highWayList = await this.getHighWay(url);
          const highWayObject = {};
          highWayList.map(item => {
            if (!highWayObject[item.attributes.Expressway]) {
              highWayObject[item.attributes.Expressway] = [];
            }
            highWayObject[item.attributes.Expressway].push(item);
          });
          list.map(item => {
            highWayObject[item.attributes.Name] &&
              (item.highWayList = highWayObject[item.attributes.Name]);
            return item;
          });
        }
        // 密接关联
        if (id == "qzbl") {
          const mjList = await this.getMj(url);
          const mjObject = {};
          mjList.map(item => {
            if (
              item.attributes.RelatingCodes != "" &&
              (item.attributes.RelatingCodes != null) &
                !mjObject[item.attributes.RelatingCodes]
            ) {
              mjObject[item.attributes.RelatingCodes] = [];
            }
            if (
              item.attributes.RelatingCodes != "" &&
              item.attributes.RelatingCodes != null
            ) {
              mjObject[item.attributes.RelatingCodes].push(item);
            }
          });
          list.map(item => {
            mjObject[item.attributes.Bid] &&
              (item.mjList = mjObject[item.attributes.Bid]);
            return item;
          });
        }

        if (id == "qzbl") {
          this.forceData = list;
        } else {
          this.forceData = list.sort((a, b) => {
            return (
              this.countryHash[b.attributes.Country] -
              this.countryHash[a.attributes.Country]
            );
          });
        }

        this.fieldList =
          this.forceData[0] &&
          Object.keys(this.forceData[0].fieldAliases).filter(k => {
            return ~sbFields[id].indexOf(k);
          });

        const that = this;

        this.keyList = [];
        this.elList = [];

        this.keyList.push({
          prop: "index",
          label: "序号"
        });

        this.fieldList &&
          this.fieldList.length &&
          this.fieldList.map(k => {
            this.keyList.push({
              prop: k,
              label: that.forceData[0].fieldAliases[k]
            });
          });

        this.forceData.map((item, index) => {
          const obj = {};
          that.keyList.map((_item, i) => {
            if (_item.prop == "index") {
              obj[_item.prop] = index + 1;
            } else if (
              ~["Name", "NAME"].indexOf(_item.prop) &&
              ~[
                "确诊病例",
                "疑似病例",
                "集中医学观察点人员名单",
                "密切接触者",
                "居家隔离人员",
                "湖北回鹿人员/信令",
                "银泰员工",
                "隔离名单",
                "红码隔离点人员名单",
                "华侨隔离点人员名单"
              ].indexOf(that.title)
            ) {
              obj[_item.prop] = `${item.attributes[_item.prop] &&
                item.attributes[_item.prop].trim().substr(0, 1)}*${item
                .attributes[_item.prop] &&
                item.attributes[_item.prop].trim().substr(-1, 1)}`;
            } else {
              obj[_item.prop] = item.attributes[_item.prop];
            }
          });

          that.elList.push(obj);
        });
      });
    },
    // 高速口详情
    getHighWay(url) {
      return new Promise((resolve, reject) => {
        loadModules(
          ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
          OPTION
        ).then(async ([QueryTask, Query]) => {
          const queryTask = new QueryTask({ url: `${url}/1` });
          const query = new Query();
          query.outFields = ["*"];
          query.where = `1=1`;
          const { fields, features } = await queryTask.execute(query);
          const fieldAliases = {};
          fields.map(item => {
            fieldAliases[item.name] = item.alias;
          });
          const list = features.map(item => {
            item.fieldAliases = fieldAliases;
            return item;
          });
          resolve(list);
        });
      });
    },
    // 密接详情
    getMj(url) {
      return new Promise((resolve, reject) => {
        loadModules(
          ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
          OPTION
        ).then(async ([QueryTask, Query]) => {
          const queryTask = new QueryTask({
            url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/4`
          });
          const query = new Query();
          query.outFields = ["*"];
          query.where = `1=1`;
          const { fields, features } = await queryTask.execute(query);
          const fieldAliases = {};
          fields.map(item => {
            fieldAliases[item.name] = item.alias;
          });
          const list = features.map(item => {
            item.fieldAliases = fieldAliases;
            return item;
          });
          resolve(list);
        });
      });
    },
    // 表格行点击事件
    clickTr(row, column, event) {
      const item = this.forceData[row.index - 1];
      item["id"] =
        this.title == "确诊病例"
          ? "qzbl"
          : this.title == "集中医学观察点"
          ? "gld"
          : null;
      this.$parent.$refs.macroArcgis.goloaction(item);
      this.$parent.xqShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
#sbxqDateDiv {
  position: absolute;
  top: 10%;
  left: 6%;
  width: 88%;
  height: 78%;
  background: #24386a;
  border: 1px solid #04ecff;
  z-index: 31;

  .head {
    height: 7%;
    margin-top: 1%;

    span {
      font-size: 30px;
    }

    a {
      position: absolute;
      top: 5px;
      right: 10px;
      font-size: 40px;
      cursor: pointer;
    }
  }

  // element-table
  .el-table {
    width: 96%;
    margin: auto;
    background-color: #24386a;
  }
}
</style>