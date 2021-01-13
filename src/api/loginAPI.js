import axios from "axios";
const BASEURL = "http://192.168.54.124:8080";
const serverInstanec = axios.create();
serverInstanec.defaults.baseURL = BASEURL;

/**
 * axios default
 * @param {*} url
 * @param {*} data
 */
const getAxios = (url = "", params = {}, method = "post") => {
    const option = { url, method };
    method == 'get' ? option.params = params : option.data = params;
    return serverInstanec.request(option).then(res => {
        if (res.data.code == 200) {
            return Promise.resolve(res.data.result);
        } else {
            return Promise.reject(res.data.message)
        }
    });
};

/**
 *  login without code
 */
export const doLogin = (data) => {
    return getAxios("/sys/loginWithoutCode", data)
}

/**
 *  verify user with token
 */
export const doUserAccess = () => {
    return getAxios("/sys/...")
}