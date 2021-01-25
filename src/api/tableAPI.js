import axios from "axios";
const BASEURL = "http://10.53.137.235:8080/api";
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
    const option = { url: "/commonApiJson/get", method: "post" };
    option.data = {
        "[]": {
            [tableName]: {}
        }
    };
    return serverInstanec.request(option).then(res => {
        //  status判断登录状态 
        if (res.data.status == 500) {
            doMessage(res.data.message)
            return Promise.reject(res.data.message)
        }
        //  code判断业务错误
        if (res.data.code == 200) {
            return Promise.resolve(res.data["[]"]);
        } else {
            doMessage(res.data.message)
            return Promise.reject(res.data.message)
        }
    });
};

/**
 * 通告
 * @param {*} message 
 * @param {*} isError 
 */
const doMessage = (message, isError = true) => {
    window.indexVue.$message({ type: isError ? 'error' : 'success', message })
}

/**
 * 通用查表
 */
export const fetchTableByApi = async (table) => {
    return apiJSonGet(table)
}