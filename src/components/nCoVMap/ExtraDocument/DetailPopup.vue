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
import { mapState, mapActions } from "vuex";
import { DETAIL_PARAMS } from "./hash";
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

  computed: {
    ...mapState([
      "goodsInsurancePurchaseList",
      "goodsInsurancePurchaseTotal",
      "insideLlGnList",
      "insideLlGnTotal",
      "insideGlJjList",
      "insideGlJjTotal",
      "outsideBackList",
      "outsideBackTotal",
      "insideLlRyList",
      "insideLlRyTotal",
      "barrierList",
      "barrierTotal",
      "supermarketList",
      "supermarketTotal",
      "farmerMarketList",
      "farmerMarketTotal",
      "stationList",
      "stationTotal",
      "schoolList",
      "schoolTotal"
    ]),
  },

  mounted() {
    this.eventRegister();
  },

  methods: {
    ...mapActions([
      "fetchGoodsInsurancePurchaseList",
      "fetchInsideLlGnList",
      "fetchInsideGlJjList",
      "fetchOutsideBackList",
      "fetchInsideLlRyList",
      "fetchBarrierList",
      "fetchSupermarketList",
      "fetchFarmerMarketList",
      "fetchStationList",
      "fetchSchoolList"
    ]),

    eventRegister() {
      this.$hub.$off("set-detail-popup");
      this.$hub.$on("set-detail-popup", async (res) => {
        if (!(res.id in DETAIL_PARAMS)) return;

        this.title = res.label;
        const { fetchList, list, total, fields } = DETAIL_PARAMS[res.id];
        this.currenData = { fetchList, list, fields };
        this.currenPage = 0;

        if (!this[list].length) {
          await this[fetchList]();
        }

        this.total = Math.ceil(this[total] / 10);

        this.fixData(this[list], fields);
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
      const { fetchList, list, fields } = this.currenData;
      await this[fetchList](val - 1);
      this.fixData(this[list], fields);

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