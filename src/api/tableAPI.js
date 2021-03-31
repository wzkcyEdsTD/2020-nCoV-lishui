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
const apiJSonGet = (tableName, page) => {
    const option = { url: "/commonApiJson/get", method: "post" };
    if (tableName != 'SzlsDwSjjhSwjwHsjcxx') {
        option.data = {
            "[]": {
                [tableName]: {},
                "count": 100,
                "page": page,
                "query": 2
            },
            "total@": "/[]/total"
        };
    } else {
        option.data = {
            "[]": {
                [tableName]: {
                    "@order": "jcsj-",
                },
                "count": 100,
                "page": page,
                "query": 2
            },
            "total@": "/[]/total"
        };
    }

    return serverInstanec.request(option).then(res => {
        //  status判断登录状态 
        if (res.data.status == 500) {
            doMessage(res.data.message)
            return Promise.reject(res.data.message)
        }
        //  code判断业务错误
        if (res.data.code == 200) {
            return Promise.resolve({ data: res.data["[]"], total: res.data.total });
        } else {
            doMessage(res.data.message)
            return Promise.reject(res.data.message)
        }
    });
};


const apiJSonGetRelation = (tableName, key, page) => {
    const option = { url: "/commonApiJson/get", method: "post" };
    if (tableName == 'SzlsDwSjjhSwjwHsjcxx') {
        option.data = {
            "[]": {
                [tableName]: {
                    "jcjg{}":[key],
                    "@order": "jcsj-",
                },
                "count": 100,
                "page": page,
                "query": 2
            },
            "total@": "/[]/total"
        };
    }else if(tableName == 'SzlsDwSjjhJyjXsjkqkdkxx'){
        //学生打卡信息
        option.data = {
            "[]": {
                [tableName]: {
                    "xxmc{}":[key],
                },
                "count": 100,
                "page": page,
                "query": 2
            },
            "total@": "/[]/total"
        };
    }else {
        option.data = {
            "[]": {
                [tableName]: {
                },
                "count": 100,
                "page": page,
                "query": 2
            },
            "total@": "/[]/total"
        };
    }
    return serverInstanec.request(option).then(res => {
        //  status判断登录状态 
        if (res.data.status == 500) {
            doMessage(res.data.message)
            return Promise.reject(res.data.message)
        }
        //  code判断业务错误
        if (res.data.code == 200) {
            return Promise.resolve({ data: res.data["[]"], total: res.data.total });
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
export const fetchTableByApi = async (table, page) => {
    return apiJSonGet(table, page)
}

/**
 * 关联查表
 */
export const relationTableByApi = async (table, key, page) => {
    // debugger
    return apiJSonGetRelation(table, key , page)
}