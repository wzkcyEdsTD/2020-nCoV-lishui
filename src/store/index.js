/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import {
  lc_xqcrjl,
  lc_xqryxx,
  lc_zdjzxx,
  lc_dkjbxx,
  lc_zdzbsj,
  lc_zdfasj
} from "@/api/beans/fetch";
export default new Vuex.Store({
  state: {
    // 出入记录
    crjlList: [],
    // 人员信息
    ryxxList: [],
    // 做地进展
    zdjzList: [],
    // 地块基本信息
    dkxxList: [],
    // 做地专班数据
    zdzbList: [],
    // 做地方案数据
    zdfaList: []
  },
  mutations: {
    updatecrjlList(state, val) {
      state.crjlList = val;
    },
    updateryxxList(state, val) {
      state.ryxxList = val;
    },
    updatezdjzList(state, val) {
      state.zdjzList = val;
    },
    updatedkxxList(state, val) {
      state.dkxxList = val;
    },
    updatezdzbList(state, val) {
      state.zdzbList = val;
    },
    updatezdfaList(state, val) {
      state.zdfaList = val;
    },
  },
  actions: {
    async fetchcrjlList({
      state,
      commit
    }, option) {
      const {
        data
      } = await lc_xqcrjl();
      commit('updatecrjlList', data)
    },
    async fetchryxxList({
      state,
      commit
    }, option) {
      const {
        data
      } = await lc_xqryxx();
      commit('updateryxxList', data)
    },
    async fetchzdjzList({
      state,
      commit
    }, option) {
      const {
        data
      } = await lc_zdjzxx();
      commit('updatezdjzList', data)
    },
    async fetchdkxxList({
      state,
      commit
    }, option) {
      const {
        data
      } = await lc_dkjbxx();
      commit('updatedkxxList', data)
    },
    async fetchzdzbList({
      state,
      commit
    }, option) {
      const {
        data
      } = await lc_zdzbsj();
      commit('updatezdzbList', data)
    },
    async fetchzdfaList({
      state,
      commit
    }, option) {
      const {
        data
      } = await lc_zdfasj();
      commit('updatezdfaList', data)
    }
  }
});