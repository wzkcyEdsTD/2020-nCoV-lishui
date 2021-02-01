<template>
  <div class="detail-popup" v-show="popupShow">
    <div class="popup-wrapper"></div>
    <div class="popup-modal">
      <header>
        <span class="popup-title">[ {{ title }} ] - 详情列表</span>
        <a class="popup-close" @click="popupShow = false">×</a>
      </header>
      <div class="popup-panel">
        <el-table class="detail-popup-table" :data="tableData" height="100%">
          <el-table-column
            type="index"
            label="序号"
            width="50"
          ></el-table-column>
          <el-table-column
            v-for="(item, index) in columnList"
            :key="index"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="popup-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page.sync="currenPage"
          :total="total"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchTableByApi } from "@/api/tableAPI";
export default {
  data() {
    return {
      popupShow: false,
      title: "",

      // 列名
      columnList: [],

      // 表格数据
      tableData: [],

      // 当前页
      currenPage: 0,

      // 总页数
      total: 0,

      // 当前数据参数
      currenData: {},
    };
  },

  mounted() {
    this.eventRegister();
  },

  methods: {
    eventRegister() {
      this.$hub.$off("set-detail-popup");
      this.$hub.$on("set-detail-popup", async ({ label, table }) => {
        this.title = label;
        const { tableName, fields } = table;
        this.currenData = table;
        this.currenPage = 0;

        const arr = await fetchTableByApi(tableName);
        const total = arr.total || 0;
        this.total = Math.ceil(total / 10);

        const data = arr.data ? arr.data.map((v) => v[tableName]) : [];

        this.fixData(data, fields);
        this.fixColumn(fields);

        this.popupShow = true;
      });
    },

    // 数据
    fixData(data, fields) {
      this.tableData = [];
      data &&
        data.map((item) => {
          const obj = {};

          fields.map((field) => {
            const prop = field.split("@")[0];
            obj[prop] = item[prop];
          });

          this.tableData.push(obj);
        });
    },

    // 列名
    fixColumn(fields) {
      this.columnList = [];
      fields.map((field) => {
        const [prop, label] = field.split("@");
        this.columnList.push({ prop, label });
      });
    },

    // 切换页
    async handleCurrentChange(val) {
      const { tableName, fields } = this.currenData;
      const arr = await fetchTableByApi(tableName, val - 1);
      const data = arr.data ? arr.data.map((v) => v[tableName]) : [];
      this.fixData(data, fields);

      // 返回顶端
      document.querySelector(".el-table__body-wrapper").scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.detail-popup {
  .popup-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.5;
    z-index: 100;
  }

  .popup-modal {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    background: #24386a;
    border: 1px solid #04ecff;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 9px 16px 14px;
    z-index: 120;

    > header {
      position: relative;
      padding: 10px 10px 15px;

      .popup-title {
        font-size: 24px;
      }

      .popup-close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 40px;
        cursor: pointer;
      }
    }

    .popup-panel {
      flex: 1;
      height: 0;
    }

    .popup-pagination {
      padding: 8px;
    }
  }
}
</style>
<style lang="less">
.detail-popup-table {
  background: transparent !important;

  * {
    color: #fff;
    background: transparent !important;
  }
}
</style>