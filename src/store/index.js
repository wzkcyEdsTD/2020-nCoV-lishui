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
      const table = "CommunityCrjl";
      const arr = await fetchTableByApi(table);
      commit('updatecrjlList', arr ? arr.map(v => v[table]) : [])
    },
    async fetchryxxList({ state, commit }) {
      const table = "CommunityRyxx";
      const arr = await fetchTableByApi(table);
      commit('updateryxxList', arr ? arr.map(v => v[table]) : [])
    },
  }
});