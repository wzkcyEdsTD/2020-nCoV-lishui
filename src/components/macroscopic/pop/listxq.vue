<template>
  <div id="listxq">
    <div class="head">
      <span>[ {{title}} ] - 详情列表</span>
      <a @click="()=>{ this.$parent.listShow = false }">×</a>
    </div>
    <div class="search" v-if="sArr.length && sArr[0].Country">
      <select id="select" @change="selectCountry($event)" v-if="sArr.length && sArr[0].Country">
        <option value="0">全部</option>
        <option
          v-for="(citem,cindex) in sArr"
          :key="cindex"
          :value="citem.Country"
        >{{ citem.Country }}</option>
      </select>
      <input type="text" v-model="text" placeholder="请输入查询" />
      <button @click="filteItem">查询</button>
    </div>

    <el-table :data="elList" height="510" border @row-click="clickTr">
      <el-table-column
        v-for="(item,index) in keyList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        sortable
      ></el-table-column>
      <el-table-column v-if="qzflag && forceData.length" label="关系图谱">
        <template slot-scope="scope">
          <el-button @click.native.prevent="clickCell(scope.$index)" type="text">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="content">
      <table border="0" cellpadding="0" cellspacing="0" v-if="sArr.length && sArr[0].Country">
        <thead>
          <tr>
            <th>街道</th>
            <th v-for="(citem,cindex) in sArr" :key="cindex">{{citem.Country}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>合计</td>
            <td v-for="(citem,cindex) in sArr" :key="cindex">{{citem.count}}例</td>
          </tr>
        </tbody>
      </table>
    </div>
    <relation ref="relation" v-show="relationShow" />
  </div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";
import { OPTION } from "@/components/common/Tmap";
import { leftOptions } from "../config/enums";
import { sbFields } from "../config/field";

import relation from "./relation";

export default {
  name: "listxq",
  data() {
    return {
      text: undefined,
      data: [],
      forceData: [],
      fieldList: [],
      title: "",
      qzflag: false,
      relationShow: false,
      selectValue: 0,
      sObj: {},
      sArr: [],
      keyList: [],
      elList: [],
      countryHash: {
        山福: 1,
        藤桥: 2,
        仰义: 3,
        丰门: 4,
        双屿: 5,
        广化: 6,
        五马: 7,
        松台: 8,
        大南: 9,
        南郊: 10,
        南汇: 11,
        蒲鞋市: 12,
        滨江: 13,
        七都: 14,
        区直设: 15
      }
    };
  },
  created() {},
  mounted() {
    // this.getItem(leftOptions[0].children[0], leftOptions[0].label);
  },
  components: { relation },
  watch: {
    forceData(newV, oldV) {
      const that = this;

      this.keyList = [];
      this.elList = [];

      if (this.forceData.length) {
        this.keyList.push({
          prop: "index",
          label: "序号"
        });

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
                "隔离名单"
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
      }
    }
  },
  methods: {
    filteItem() {
      const data = this.data;
      const forceData = [];
      data.map(item => {
        const { attributes } = item;

        const cTag = attributes.Country || attributes.Community;

        const cv = this.selectValue != 0 ? this.selectValue : "";

        const ntag =
          attributes.name ||
          attributes.Name ||
          attributes.NAME ||
          attributes.Address ||
          attributes.short_name ||
          attributes.姓名;

        ntag &&
          ~ntag.indexOf(this.text) &&
          cTag &&
          ~cTag.indexOf(cv) &&
          forceData.push(item);
      });
      this.forceData = forceData;
    },
    selectCountry(event) {
      this.selectValue = event.target.value;
      const data = this.data;
      const forceData = [];
      data.map(item => {
        const { attributes } = item;

        const cTag = attributes.Country;
        const cv = this.selectValue != 0 ? this.selectValue : "";
        cTag && ~cTag.indexOf(cv) && forceData.push(item);
      });
      this.forceData = forceData;
    },
    getItem(
      { url, sublayers, id, name, definitionExpression, ytname, ytd },
      label
    ) {
      this.relationShow = false;
      const d = [];
      this.sObj = {};
      this.sArr = [];
      definitionExpression && d.push(definitionExpression);
      this.$parent.$refs.leftOptions.tabIndex == 1 && ytd && d.push(ytd);
      this.title =
        name != "-1" ? `${name}`.split(" ")[0] : `${ytname}`.split(" ")[0];
      this.title == "确诊病例" ? (this.qzflag = true) : (this.qzflag = false);
      loadModules(
        ["esri/tasks/QueryTask", "esri/tasks/support/Query"],
        OPTION
      ).then(async ([QueryTask, Query]) => {
        const queryTask = new QueryTask({ url: `${url}/${sublayers}` });
        const query = new Query();
        query.outFields = "*";
        query.where = d.length ? d.join(" and ") : "1=1";
        query.returnGeometry = true;
        query.start = 0;
        query.num = 20;
        const { fields, features } = await queryTask.execute(query);
        let fieldAliases = {};
        if (id == "ytyg") {
          fieldAliases = {
            Name: "姓名",
            Phone: "电话",
            Country: "街道",
            Address: "地址"
          };
        } else {
          fields.map(item => {
            fieldAliases[item.name] = item.alias;
          });
        }

        const list = features.map(item => {
          item.fieldAliases = fieldAliases;
          return item;
        });

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
        this.data = list;
        list.map(({ attributes }) => {
          const { Country } = attributes;

          let newCountry = (Country ? Country.trim() : "无")
            .replace("街道", "")
            .replace("镇", "");

          newCountry == "蒲鞋" ? (newCountry = "蒲鞋市") : newCountry;

          if (this.countryHash[newCountry]) {
            if (!newCountry) return false;
            if (!this.sObj[newCountry]) {
              this.sObj[newCountry] = { Country: newCountry, count: 0 };
            }
            this.sObj[newCountry].count++;
          }
        });
        for (let k in this.sObj) {
          this.sArr.push(this.sObj[k]);
        }

        this.sArr.sort((a, b) => {
          const count1 = a.count;
          const count2 = b.count;

          if (count1 == count2) {
            return (
              this.countryHash[b.Country.trim()] -
              this.countryHash[a.Country.trim()]
            );
          }

          return count2 - count1;
        });

        if (id == "qzbl") {
          this.forceData = list;
        } else {
          const itemId = id;
          this.forceData = list
            .sort((a, b) => {
              let country1 = (a.attributes.Country
                ? a.attributes.Country.trim()
                : "无"
              )
                .replace("街道", "")
                .replace("镇", "");
              let country2 = (b.attributes.Country
                ? b.attributes.Country.trim()
                : "无"
              )
                .replace("街道", "")
                .replace("镇", "");

              country1 == "蒲鞋" ? (country1 = "蒲鞋市") : country1;
              country2 == "蒲鞋" ? (country2 = "蒲鞋市") : country2;

              const count1 = this.sObj[country1]
                ? this.sObj[country1].count
                : 0;
              const count2 = this.sObj[country2]
                ? this.sObj[country2].count
                : 0;

              if (count1 == count2) {
                return (
                  this.countryHash[country2 ? country2.trim() : "无"] -
                  this.countryHash[country1 ? country1.trim() : "无"]
                );
              }

              return count2 - count1;
            })
            .map(item => {
              item.id = itemId;
              return item;
            });
        }

        this.fieldList =
          this.forceData[0] &&
          Object.keys(this.forceData[0].fieldAliases).filter(k => {
            return ~sbFields[id].indexOf(k);
          });

        this.text = undefined;
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
    goLocation(item) {
      this.$parent.$refs.macroArcgis.goloaction(item);
      this.$parent.listShow = false;
    },
    showrelation(item) {
      this.relationShow = true;
      this.$refs.relation.list = item.mjList;
      this.$refs.relation.title = item.attributes.Name;
    },
    // 详情点击事件
    clickCell(index) {
      const item = this.forceData[index];
      this.showrelation(item);
    },
    // 表格行点击事件
    clickTr(row, column, event) {
      if (event.target.innerText != "详情") {
        const item = this.forceData[row.index - 1];
        item.id =
          this.title == "确诊病例"
            ? "qzbl"
            : this.title == "集中医学观察点"
            ? "gld"
            : item.id;

        this.$parent.$refs.macroArcgis.goloaction(item);
        this.$parent.listShow = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
#listxq {
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

  .search {
    height: 60px;
    select {
      background-color: #0c7cd2;
      border: none;
      color: #fff;
      padding: 7px 7px;
      margin-right: 5px;
    }

    input {
      width: 15%;
      margin-top: 10px;
      margin-right: 5px;
      background-color: #162449;
      border: 1px solid #75c8f4;
      border-radius: 8px;
      padding: 8px 9px;
      color: #fff;
    }

    button {
      background-color: #162449;
      border: 1px solid #75c8f4;
      border-radius: 8px;
      padding: 7px 9px;
      color: #fff;
      margin-right: 4px;
    }
  }

  // element-table
  .el-table {
    width: 96%;
    margin: auto;
    background-color: #24386a;
  }

  .el-button--text {
    font-size: 16px;
  }

  .content {
    height: 90px;

    table {
      border: 1px solid #ccc;
      width: 96%;
      margin: 0% 2%;

      th,
      td {
        border-bottom: 1px solid #ccc;
        padding: 10px 5px;
      }
    }
  }
}
</style>