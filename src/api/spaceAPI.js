/* eslint-disable */
import axios from "axios";
const instance = axios.create();
instance.defaults.headers.get["Content-Type"] = "multipart/form-data";/**
 * 更新\插入空间信息
 * @param {*} sql SQL语句
 */
export async function updateDataStores(sql) {
    console.log("[sql]", sql);
    return await instance.post("/etl/sql_all", {
        sql
    });
}
/**
 * 获取空间信息
 * @param {*} param0 
 */
export async function fetchArcgisServer({ where = "1=1", url, resultRecordCount }) {
    return await instance.get(`${url}/query`, {
        params: {
            f: "json",
            outFields: "*",
            spatialRel: "esriSpatialRelIntersects",
            where,
            relationParameter: (+new Date()).toString(),
            ...resultRecordCount ? { resultRecordCount } : {}
        }
    });
}
