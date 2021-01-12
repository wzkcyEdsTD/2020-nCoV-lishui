import {
  getDefaultAxios
} from "@/api/index.js";
const RES = "sql_wzxgfy";

/**
 * [lc_xqcrjl]小区出入记录
 */
export const lc_xqcrjl = async () => {
  const axios = getDefaultAxios();
  const params = ["id", "xm", "dh", "sfzh", "ssxq", "mph", "cmsj", "fhsj", "bz", "cjr"]
  const name = "community_crjl";
  return await axios.post("/dw/ds", option_concat(name, params));
}

/**
 * [lc_xqryxx]小区人员信息
 */
export const lc_xqryxx = async () => {
  const axios = getDefaultAxios();
  const params = ["id", "xm", "dh", "sfzh", "xb", "sfjh", "ssxq", "mph", "cjr", "cjsj", "bz"]
  const name = "community_ryxx";
  return await axios.post("/dw/ds", option_concat(name, params));
}
/**
 * 配置
 * @param {*} name 
 * @param {*} cols 
 * @param {*} where 
 * @param {*} count 
 */
const option_concat = (name, cols, where = "", count) => {
  const option = {
    module: "dwbean",
    action: "001",
    res: RES,
    ds: {
      buffers: [],
      tables: [{
        alias: "f",
        orm: "",
        name,
        updateflag: 1
      }],
      cols: cols.map(item => {
        return {
          name: item,
          raw: `f.${item}`
        }
      }),
      module: RES,
      where,
    }
  };
  count && (option.count = count);
  return option;
}