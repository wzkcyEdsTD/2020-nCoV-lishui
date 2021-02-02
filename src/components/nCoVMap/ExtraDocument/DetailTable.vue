<template>
  <div :class="{ 'detail-popup': true, fold: isFold }" v-show="title">
    <div class="popup-wrapper" />
    <div class="popup-modal">
      <header>
        <span class="popup-title">{{ title }}</span>
        <a class="popup-close" @click="clearTable">×</a>
        <a class="popup-fold" @click="isFold = !isFold" />
      </header>
      <div class="popup-panel">
        <el-table
          class="detail-popup-table"
          :data="tableData"
          height="100%"
          @cell-click="cellClickHandler"
        >
          <el-table-column type="index" label="序号" width="50" />
          <el-table-column
            v-for="(item, index) in columnList"
            :key="index"
            :prop="item.prop"
            :label="item.label"
          />
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
      isFold: false,
      title: "",
      columnList: [],
      tableData: [],
      currenPage: 0,
      total: 0,
      config: {},
    };
  },
  mounted() {
    this.eventRegister();
  },
  methods: {
    //  事件绑定
    eventRegister() {
      //  更换表格数据
      this.$hub.$off("set-detail-table");
      this.$hub.$on("set-detail-table", async (config) => {
        const { label, table } = config;
        const { tableName, fields } = table;
        this.title = label;
        this.config = config;
        const arr = await fetchTableByApi(tableName);
        this.total = Math.ceil((arr.total || 0) / 10);
        this.fixColumn(fields);
        this.fixData(arr.data ? arr.data.map((v) => v[tableName]) : [], fields);
        this.isFold = false;
      });
      //  收起表格
      this.$hub.$off("set-detail-fold");
      this.$hub.$on("set-detail-fold", (boolean) => {
        this.isFold = boolean;
      });
    },
    /**
     * 点击单个条目，主要用于定位展示pop
     * @param {object} row 当前行数据
     */
    cellClickHandler(row) {
      if (this.config.id.includes("@")) {
        this.$hub.$emit("set-detail-location", { row, config: this.config });
      } else {
        this.$message({ type: "error", message: `[${this.title}] 目前无地图服务` });
      }
    },
    /**
     * 数据处理
     * @param {array} data 返回数据
     * @param {array} fields 别名域
     */
    fixData(data = [], fields) {
      this.tableData = data.map((item) => {
        const obj = {};
        fields.map((field) => {
          const [prop] = field.split("@");
          obj[prop] = item[prop];
        });
        return obj;
      });
    },
    /**
     * 列名处理
     * @param {array} fields 别名域
     */
    fixColumn(fields) {
      this.columnList = fields.map((field) => {
        const [prop, label] = field.split("@");
        return { prop, label };
      });
    },
    /**
     * 点击脚步换页器
     * @param {number} val 页数
     */
    async handleCurrentChange(val) {
      const { tableName, fields } = this.config.table;
      const arr = await fetchTableByApi(tableName, val - 1);
      const data = arr.data ? arr.data.map((v) => v[tableName]) : [];
      this.fixData(data, fields);
      document.querySelector(".el-table__body-wrapper").scrollTop = 0;
    },
    //  清除当前配置信息
    clearTable() {
      this.title = "";
      this.columnList = [];
      this.tableData = [];
      this.currenPage = 0;
      this.total = 0;
      this.config = {};
      this.isFold = false;
    },
  },
};
</script>

<style lang="less" scoped>
.fold {
  > .popup-wrapper {
    display: none !important;
  }
  > .popup-modal {
    height: 50px !important;
    width: 500px !important;
    bottom: 10px !important;
    left: 340px !important;
    .popup-fold {
      transform: rotate(180deg);
    }
  }
}
.detail-popup {
  > div {
    transition: all 0.5s;
  }
  .popup-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }
  .popup-modal {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 80%;
    height: 80%;
    left: 10%;
    bottom: 10%;
    background: rgba(24, 35, 97, 0.9);
    border: 1px solid #04ecff;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 9px 16px 14px;
    z-index: 120;
    > header {
      position: relative;
      padding: 2px 10px 6px;
      .popup-title {
        font-size: 20px;
      }
      .popup-close {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        font-size: 32px;
        cursor: pointer;
      }
      .popup-fold {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 30px;
        font-size: 40px;
        cursor: pointer;
        background-size: 100% 100%;
        background-image: url("~@/components/common/image/fold-up.png");
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
  &/deep/ .detail-popup-table {
    background: transparent !important;
    .el-table__row {
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        background: rgba(255, 255, 255, 0.2) !important;
      }
    }

    * {
      color: #fff;
      background: transparent !important;
    }
  }
}
</style>
