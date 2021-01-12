<template>
  <div id="fgxqform" v-if="list.length">
    <div class="head">
      <div class="title">{{ title }}</div>
      <a @click="()=>{ list = [] }">×</a>
    </div>
    <div class="content ctn1">
      <el-table
        height="100%"
        :data="tableData"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        border
        @row-click="clickTr"
      >
        <el-table-column prop="index" label="街道" sortable></el-table-column>
        <el-table-column prop="project" label="项目" sortable></el-table-column>
        <el-table-column prop="num" label="返工人数" sortable></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";
import { OPTION } from "@/components/common/Tmap";

export default {
  name: "fgxqForm",
  data() {
    return {
      title: "",
      list: [],
      tableData: [],
      forceData: []
    };
  },
  components: {},
  mounted() {
    const that = this;

    const sObj = {};
    const sArr = [];

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
      const fieldAliases = {};
      fields.map(item => {
        fieldAliases[item.name] = item.alias;
      });
      const list = features.map(item => {
        item.fieldAliases = fieldAliases;
        return item;
      });

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
          sObj[JD] = { Country: JD, count: 0 };
        }

        [
          YJFGHJSDWRYSL,
          YJFGHJSDWHBYGSL,
          YJFGSGDWRYSL,
          YJFGHSGDWHBYGSL,
          YJFGHJLDWRYSL,
          YJFGHJLDWHBYGSL
        ].map(item => {
          item = item || 0;

          sObj[JD].count = sObj[JD].count + item;
        });
      });

      Object.keys(sObj).map((item, index) => {
        sArr.push({
          id: index + 1,
          index: item,
          num: sObj[item].count
        });
      });

      sArr.map((item, index) => {
        item["children"] = [];
        list
          .filter(({ attributes }) => attributes.JD == item.index)
          .map((_item, _index) => {
            item["children"].push({
              id: (index + 1) * 1000 + (_index + 1),
              index: `${index + 1}-${_index + 1}`,
              project: _item.attributes.ProjectName,
              objid: _item.attributes.OBJECTID,
              num:
                _item.attributes.YJFGHJSDWRYSL +
                _item.attributes.YJFGHJSDWHBYGSL +
                _item.attributes.YJFGSGDWRYSL +
                _item.attributes.YJFGHSGDWHBYGSL +
                _item.attributes.YJFGHJLDWRYSL +
                _item.attributes.YJFGHJLDWHBYGSL
            });
          });
      });
    });

    this.tableData = sArr;
  },
  methods: {
    getItem() {
      this.title = `工地返工详情`;
      this.list = [1, 2, 3];
    },
    // 表格行点击事件
    clickTr(row, column, event) {
      if (!row.children) {
        const item = this.forceData.filter(
          item => item.attributes.OBJECTID == row.objid
        )[0];

        this.$parent.$refs.macroArcgis.goloaction(item);
      }
    }
  }
};
</script>

<style lang="less" scoped>
#fgxqform {
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

  .ctn1 {
    height: 88%;
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