/**
 * http api interface url config
 * get env by domain
 * update by eds 2019/8/20
 */
import Vue from "vue";
/**
 * 环境配置获取
 * [dev]      本地  自动登录admin
 * [prod]     生产  需token严重
 * [outside]  对外  自动登录游客
 */
const isDev = location.host.includes("localhost")
window.env = isDev ? "prod" : "prod";
Vue.prototype.$env = window.env;
/**
 * 是否需要登录
 * 1.需要登录    直接通过js登录获取token 用于本地调试、对外用户 无需跳转重登
 * 2.不需要登录  通过外部登录的session获取token 若失效需跳转重登
 */
window.shallLogin = isDev;
//  此console不删
console.log(`[env]${window.env}`, `[shallLogin]${window.shallLogin}`);

//  生产环境配置
const CONFIG_PROVIDE = {
  ARCGIS_API_URL: "http://10.53.129.97/arcgis/arcgis_js_api/library/4.15/dojo/dojo.js",
  LOCAL_HOST: "http://172.20.89.59/server/rest/services",
  OTHER_HOST: "https://services.wzmap.gov.cn/server/rest/services",
  SERVER_HOST: "http://172.20.89.88:5001/s/lc",
  API_HOST: "http://172.20.89.88:5001",
  LOGIN_HOST: "/login.html"
};
//  环境变量 配置信息获取
const {
  ARCGIS_API_URL,
  LOCAL_HOST,
  OTHER_HOST,
  SERVER_HOST,
  API_HOST,
  LOGIN_HOST
} = CONFIG_PROVIDE;

//  api/apibean config
export const WRT_config = {
  server: SERVER_HOST,
  serverCompatible: API_HOST,
  etag: "+mOUb1hDtJA=",
  token: "",
  login: LOGIN_HOST
};
//  ARCGIS FOR JS库本地地址
export const OPTION = {
  url: ARCGIS_API_URL,
  dojoConfig: {
    parseOnLoad: true,
    packages: [{
      location: `${SERVER_HOST}/libs/plugin`,
      name: "plugin"
    },
    {
      name: "src",
      location: location.pathname.replace(/\/[^/]+$/, "") + "../src"
    }
    ]
  }
};
/******** 2019/10/16 new config ********/
// 鹿城区疫情
export const LCYQ = `http://10.53.137.59:6080/arcgis/rest/services/weijian/fangkong/MapServer`;
// 乡镇街道
export const XZJD = `http://10.53.137.59:6080/arcgis/rest/services/weijian/xzjd/MapServer`;
/******** ********/
export const IMAGELAYER = "https://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer";
//  行政区划
export const SZQH = "http://10.53.137.59:6080/arcgis/rest/services/lsyq/d_region/MapServer"
//  天地图-大数据
export const TDTDSJ = `${LOCAL_HOST}/Hosted/kfq_WGS84/VectorTileServer`;
//  天地图浙江
export const TDTZJ_cva = {
  urlTemplate: "http://t0.tianditu.gov.cn/DataServer?T=cva_w&tk=2e6919cbe2122200fa172aaea99742e0&x={col}&y={row}&l={level}",
  subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
}
export const TDTZJ_vec = {
  urlTemplate: "http://t0.tianditu.gov.cn/DataServer?T=vec_w&tk=2e6919cbe2122200fa172aaea99742e0&x={col}&y={row}&l={level}",
  subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
}
//  天地图-招商-影像图2017
export const TDTIMAGE2017 = `${OTHER_HOST}/TDT/YX2017/MapServer`;
//  spatialReference
export const spatialReference = {
  wkid: 4326
};