import axios from "axios";
const BASEURL = "http://192.168.54.124:8080";
const serverInstanec = axios.create();
serverInstanec.defaults.baseURL = BASEURL;

/**
 * axios interceptors
 */
serverInstanec.interceptors.request.use(config => {
    config.headers['X-Access-Token'] = window.localStorage.getItem("access_token");
    return config;
});

/**
 * apiJSonGet common
 * @param {*} tableName 
 */
const apiJSonGet = (tableName) => {
    const option = { url: "/commonApijson/get", method: "post" };
    option.data = {
        "[]": {
            [tableName]: {}
        }
    };
    return serverInstanec.request(option).then(res => {
        console.log(res);
        //  status判断登录状态 
        if (res.data.status == 500) {
            return Promise.reject(res.data.message)
        }
        //  code判断业务错误
        if (res.data.code == 200) {
            return Promise.resolve(res.data.result);
        } else {
            return Promise.reject(res.data.message)
        }
    });
};

/**
 * [lc_xqcrjl]小区出入记录
 */
export const lc_xqcrjl = async () => {
    return apiJSonGet("CommunityCrjl")
}

/**
 * [lc_xqryxx]小区人员信息
 */
export const lc_xqryxx = async () => {
    return apiJSonGet("CommunityRyxx")
}