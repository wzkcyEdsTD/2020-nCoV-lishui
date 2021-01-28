/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import {
  fetchTableByApi
} from "@/api/tableAPI";
export default new Vuex.Store({
  state: {
    // 出入记录
    crjlList: [],
    // 人员信息
    ryxxList: [],

    // 医保购药数据
    goodsInsurancePurchaseList: [],
    // 总数
    goodsInsurancePurchaseTotal: 0,

    // 福利院和养老院
    insideLlGnList: [],
    // 总数
    insideLlGnTotal: 0,

    // 福利院和养老院重点人群
    insideLlRyList: [],
    // 总数
    insideLlRyTotal: 0,

    // 宗教活动场所
    insideGlJjList: [],
    // 总数
    insideGlJjTotal: 0,

    // 境外来丽返丽人员
    outsideBackList: [],
    // 总数
    outsideBackTotal: 0,


    // 卡口信息
    barrierList: [],
    // 总数
    barrierTotal: 0,

    // 中大型商超
    supermarketList: [],
    // 总数
    supermarketTotal: 0,

    // 农贸市场
    farmerMarketList: [],
    // 总数
    farmerMarketTotal: 0,

    // 火车站
    stationList: [],
    // 总数
    stationTotal: 0,

    // 学校
    schoolList: [],
    // 总数
    schoolTotal: 0

  },
  mutations: {
    updatecrjlList(state, val) {
      state.crjlList = val;
    },
    updateryxxList(state, val) {
      state.ryxxList = val;
    },

    updateGoodsInsurancePurchaseList(state, val) {
      state.goodsInsurancePurchaseList = val;
    },
    updateGoodsInsurancePurchaseTotal(state, val) {
      state.goodsInsurancePurchaseTotal = val;
    },

    updateInsideLlGnList(state, val) {
      state.insideLlGnList = val;
    },
    updateInsideLlGnTotal(state, val) {
      state.insideLlGnTotal = val;
    },

    updateInsideLlRyList(state, val) {
      state.insideLlRyList = val;
    },
    updateInsideLlRyTotal(state, val) {
      state.insideLlRyTotal = val;
    },

    updateInsideGlJjList(state, val) {
      state.insideGlJjList = val;
    },
    updateInsideGlJjTotal(state, val) {
      state.insideGlJjTotal = val;
    },

    updateOutsideBackList(state, val) {
      state.outsideBackList = val;
    },
    updateOutsideBackTotal(state, val) {
      state.outsideBackTotal = val;
    },

    updateBarrierList(state, val) {
      state.barrierList = val;
    },
    updateBarrierTotal(state, val) {
      state.barrierTotal = val;
    },

    updateSupermarketList(state, val) {
      state.supermarketList = val;
    },
    updateSupermarketTotal(state, val) {
      state.supermarketTotal = val;
    },

    updateFarmerMarketList(state, val) {
      state.farmerMarketList = val;
    },
    updateFarmerMarketTotal(state, val) {
      state.farmerMarketTotal = val;
    },

    updateStationList(state, val) {
      state.stationList = val;
    },
    updateStationTotal(state, val) {
      state.stationTotal = val;
    },

    updateSchoolList(state, val) {
      state.schoolList = val;
    },
    updateSchoolTotal(state, val) {
      state.schoolTotal = val;
    },

  },
  actions: {
    async fetchcrjlList({
      state,
      commit
    }) {
      const table = "CommunityCrjl";
      const arr = await fetchTableByApi(table);
      commit('updatecrjlList', arr ? arr.map(v => v[table]) : [])
    },
    async fetchryxxList({
      state,
      commit
    }) {
      const table = "CommunityRyxx";
      const arr = await fetchTableByApi(table);
      commit('updateryxxList', arr ? arr.map(v => v[table]) : [])
    },

    async fetchGoodsInsurancePurchaseList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhYlbzjYbgmtszkypsjxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateGoodsInsurancePurchaseList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateGoodsInsurancePurchaseTotal', arr.total || 0)
    },

    async fetchInsideLlGnList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhMzjFlyhylyxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateInsideLlGnList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateInsideLlGnTotal', arr.total || 0)
    },

    async fetchInsideLlRyList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhMzjFlyhylygzryxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateInsideLlRyList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateInsideLlRyTotal', arr.total || 0)
    },

    async fetchInsideGlJjList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhSwtzbZjhdcsxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateInsideGlJjList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateInsideGlJjTotal', arr.total || 0)
    },

    async fetchOutsideBackList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhDsjjRjwpcyryxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateOutsideBackList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateOutsideBackTotal', arr.total || 0)
    },

    async fetchBarrierList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhGtbLsgtzkkjryxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateBarrierList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateBarrierTotal', arr.total || 0)
    },

    async fetchSupermarketList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhSwjLsszdxscjbqkxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateSupermarketList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateSupermarketTotal', arr.total || 0)
    },

    async fetchFarmerMarketList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhScjgjNmscxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateFarmerMarketList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateFarmerMarketTotal', arr.total || 0)
    },

    async fetchStationList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhGtbJhcwdlszxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateStationList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateStationTotal', arr.total || 0)
    },

    async fetchSchoolList({
      state,
      commit
    }, page = 0) {
      const table = "SzlsDwSjjhJyjXxxx";
      const arr = await fetchTableByApi(table, page);
      commit('updateSchoolList', arr.data ? arr.data.map(v => v[table]) : [])
      commit('updateSchoolTotal', arr.total || 0)
    },
  }
});