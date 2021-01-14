/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import {
  lc_xqcrjl,
  lc_xqryxx,
} from "@/api/tableAPI";
export default new Vuex.Store({
  state: {
    // 出入记录
    crjlList: [],
    // 人员信息
    ryxxList: [],
  },
  mutations: {
    updatecrjlList(state, val) {
      state.crjlList = val;
    },
    updateryxxList(state, val) {
      state.ryxxList = val;
    },
  },
  actions: {
    async fetchcrjlList({ state, commit }) {
      const {
        data
      } = await lc_xqcrjl();
      commit('updatecrjlList', data)
    },
    async fetchryxxList({ state, commit }) {
      const {
        data
      } = await lc_xqryxx();
      commit('updateryxxList', data)
    },
  }
});