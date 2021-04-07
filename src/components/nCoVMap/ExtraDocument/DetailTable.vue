<template>
  <div :class="{ 'detail-popup': true, fold: isFold }" v-show="title">
    <div class="popup-wrapper" />
    <div class="popup-modal">
      <header>
        <div style="padding-bottom:1.5vh">
          <span class="popup-title">{{ title }}</span>
          <a class="popup-close" @click="clearTable">×</a>
          <a class="popup-fold" @click="isFold = !isFold" />
        </div>
        <div style="">
          <div class="popup-img"/>
        </div>

      </header>
      <div class="popup-panel">
        <el-table
          class="detail-popup-table"
          :data="tableData"
          :row-class-name="tableRowClassName"
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
import { fetchTableByApi,relationTableByApi } from "@/api/tableAPI";
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
      isRelation:false,
      key:undefined,
    };
  },
  mounted() {
    this.eventRegister();
  },
  methods: {
    //表格斑马线
    /* eslint-disable */
    tableRowClassName({ row, rowIndex }) {
        if ((rowIndex + 1) % 2 === 1) {
            return "warning-row";
        }
    },
    //  事件绑定
    eventRegister() {
      //  更换表格数据
      this.$hub.$off("set-detail-table");
      this.$hub.$on("set-detail-table", async (config) => {
        const { label, table, relation ,key} = config;
        // debugger
        const { tableName, fields } = table;
        this.relation = relation
        this.title = label;
        this.config = config;
        let arr = {};
        this.key = key;
        if (!relation) {
          arr = await fetchTableByApi(tableName);
        }else{
          arr = await relationTableByApi(tableName,key);
        }
        // debugger
        this.total = Math.ceil((arr.total || 0) / 10);
        this.fixColumn(fields);
        this.fixData(arr.data ? arr.data.map((v) => v[tableName]) : [], config.foreignKey || false);
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
    fixData(data = [], foreignKey) {
      if (foreignKey == false) {
        this.tableData = data;
      } else {   
        this.tableData = data.filter(item => item.glbm == foreignKey);
      }      
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
      const { tableName } = this.config.table;
      if (!this.config.relation) {
        this.relation = false
        this.key = null
      }
      let arr = {}
      if (!this.relation) {        
        arr = await fetchTableByApi(tableName, val - 1);
      }else if (this.relation && this.key) {
        arr = await relationTableByApi(tableName,this.key ,val - 1);
      }
      const data = arr.data ? arr.data.map((v) => v[tableName]) : [];
      this.fixData(data);
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
      this.isRelation = false;
      this.key = undefined;
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
    padding: 9px 16px 14px !important;
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
    // background: rgba(24, 35, 97, 0.9);
    background: url("~@/components/common/image/框.png");
    background-size: 100% 100%;
    // border: 1px solid #04ecff;
    // border-radius: 8px;
    box-sizing: border-box;
    padding: 20px 16px 14px;
    z-index: 120;
    > header {
      position: relative;
      padding: 2px 10px 6px;
      top: 0vh;
      width: 95%;
      margin: 0 auto;
      .popup-title {
        font-size: 20px;
        font-family: "YouSheBiaoTiHei";
      }
      .popup-close {
        position: absolute;
        top: 0;
        right: 1vh;
        height: 100%;
        font-size: 32px;
        cursor: pointer;
      }
      .popup-fold {
        position: absolute;
        top: -0.5vh;
        left: 1vh;
        height: 85%;
        width: 30px;
        font-size: 40px;
        cursor: pointer;
        background-size: 100% 100%;
        background-image: url("~@/components/common/image/fold-up.png");
      }
      .popup-img{
        width: 97%;
        height: 0.4vh;
        margin: 0 auto;
        background: url("~@/components/common/image/横线.png");
        background-size: 100% 100%;
      }
    }
    .popup-panel {
      flex: 1;
      height: 0;
      width: 92%;
      margin: 0 auto;
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
    .el-table__header-wrapper .cell{
      color: #00FFEB;
      font-family: "PingFang";
    }
    .el-table__body-wrapper {
      min-height: 551px !important;
      .cell{
        font-family: "PingFang";
      }
    }

    .el-table__row>td{
      border: none;
    }


    * {
      color: #fff;
      background: transparent !important;
      border-bottom: none;
    }
  }

  /deep/.warning-row{
      background: #082C5D !important;
  }
  //最底部的横线
  /deep/.el-table::before {
      height: 0px;
  }

  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color:transparent;
    background: url("~@/components/common/image/选中.png");
    background-size: 100% 100%;
    min-width: 2.8vh;
    height: 2.8vh;
  }
  /deep/.el-pager li{
    background-color:transparent;
    background: url("~@/components/common/image/未选中.png");
    background-size: 100% 100%;
    min-width: 2.8vh;
    height: 2.8vh;
    color: #FFFFFF;
  }
  /deep/.btn-prev{
    background-color:transparent;
    background: url("~@/components/common/image/左键.png");
    background-size: 100% 100%;
    width: 4vh;
    height: 5vh;
    ::before{
      content: "";
    }
  }
  /deep/.btn-next{
    background-color:transparent;
    background: url("~@/components/common/image/右键.png");
    background-size: 100% 100%;
    width: 4vh;
    height: 5vh;
    ::before{
      content: "";
    }
  }

  /deep/.el-pager{
    margin-top: 1.1vh;
  }

}
</style>

