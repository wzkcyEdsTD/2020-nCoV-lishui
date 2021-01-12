<template>
  <div id="xqjck">
    <div class="head">
      <span>[ {{ title }} ] - 进出人员统计</span>
      <a v-on:click="sbclose">×</a>
    </div>
    <div class="statistics">
      <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td>小区出入人数： {{ crrs }}</td>
            <td>小区登记人数： {{ djrs }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="content">
      <div class="inner-title">
        <span>[ {{ time }} ] - 进出人员详情</span>
      </div>
      <el-table :data="elList" height="560" border>
        <el-table-column prop="index" label="序号" sortable></el-table-column>
        <el-table-column prop="xm" label="姓名" sortable></el-table-column>
        <el-table-column prop="dh" label="电话号码" sortable></el-table-column>
        <el-table-column prop="sfzh" label="身份证号" sortable></el-table-column>
        <el-table-column prop="ssxq" label="所属小区" sortable></el-table-column>
        <el-table-column prop="mph" label="门牌号" sortable></el-table-column>
        <el-table-column prop="cmsj" label="出门时间" sortable></el-table-column>
        <el-table-column prop="fhsj" label="返回时间" sortable></el-table-column>
        <el-table-column prop="bz" label="备注" sortable></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
  name: "xqjck",
  data() {
    return {
      forceData: [],
      title: "",
      elList: [],
      crrs: 0,
      djrs: 0,
      time: null
    };
  },
  created() {},
  mounted() {
    this.time = this.dateFormat("YYYY年mm月dd日", new Date());
  },
  components: {},
  computed: {
    ...mapState({
      crjlList: state => state.crjlList,
      ryxxList: state => state.ryxxList
    })
  },
  methods: {
    filterItem(name) {
      const that = this;
      this.title = name;

      const datetime = this.dateFormat("YYYY-mm-dd", new Date());

      this.forceData = this.crjlList.filter(item => {
        const time_out = that.dateFormat("YYYY-mm-dd", new Date(item.cmsj));
        const time_in = that.dateFormat("YYYY-mm-dd", new Date(item.fhsj));

        if (
          item.ssxq == name &&
          (time_in == datetime || time_out == datetime)
        ) {
          return item;
        }
      });

      this.elList = [];

      this.forceData.map((item, index) => {
        that.elList.push({
          index: index + 1,
          xm: item.xm,
          dh: item.dh,
          sfzh: item.sfzh,
          ssxq: item.ssxq,
          mph: item.mph,
          cmsj: item.cmsj != "1899-12-30 00:00:00" ? item.cmsj : "",
          fhsj: item.fhsj != "1899-12-30 00:00:00" ? item.fhsj : "",
          bz: item.bz
        });
      });

      this.crrs = this.forceData.length;
      this.djrs = this.ryxxList.filter(item => item.ssxq == name).length;
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
    sbclose() {
      this.$parent.xqjckShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
#xqjck {
  position: absolute;
  width: 88%;
  height: 78%;
  background: #24386a;
  border: 1px solid #04ecff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.4),
    0px 0px 44px 0px rgba(16, 146, 236, 0.3);
  border-radius: 5px;
  opacity: 0.95;
  z-index: 31;
  margin: auto;
  left: 6%;
  top: 10%;

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

  .statistics {
    display: flex;
    justify-content: flex-end;

    table {
      width: 26%;
      margin: 0% 2%;

      th,
      td {
        padding: 10px 5px;
      }
    }
  }
  .content {
    height: 80%;
    overflow: auto;

    .inner-title {
      line-height: 40px;
      span {
        font-size: 20px;
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
  }
}
</style>