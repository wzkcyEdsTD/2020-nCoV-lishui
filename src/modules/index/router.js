/**
 * vue-cli router config
 * add by eds 2019/7/6
 */
import Vue from "vue";
import Router from "vue-router";
// pages modules
import nCoVMap from "@/components/nCoVMap/nCoVMap.vue";
Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [{
    path: "/",
    name: "nCoVMap",
    component: nCoVMap
  }]
});