import {
    getDefaultAxios
} from '@/api/index.js'

export async function auth_token(params, axios) {
    axios = axios || getDefaultAxios();
    const {
        data
    } = await axios.post('/api/au/token', params)
    sessionStorage.setItem('access_token', data.data[0].access_token);
    return data.data[0].access_token;
}

export async function getTokenInfo(params = {}, axios) {
    axios = axios || getDefaultAxios();
    return await axios.get('/api/au/token/info', {
        params
    });
}