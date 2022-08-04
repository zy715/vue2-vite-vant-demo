import axios from 'axios';
import proxy from '../config/host';
import { Toast } from 'vant'

const env = import.meta.env.MODE || 'development';
const API_HOST = env === 'mock' ? '/' : proxy[env].API; // 如果是mock模式 就不配置host 会走本地Mock拦截

// create an axios instance
const service = axios.create({
    baseURL: API_HOST, // url = base api url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
    config => {
        // 不传递默认开启loading
        if (!config.hideloading) {
            // loading
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                loadingType: 'spinner',
                duration: '10000'
            });
        }
        // if (store.getters.token) {
        //     config.headers['X-Token'] = store.getters.token
        // }
        return config
    },
    error => {
        Toast.clear()
        Toast.fail(error.message);
        // do something with request error
        return Promise.reject(error)
    }
)
// respone拦截器
service.interceptors.response.use(
    response => {
        Toast.clear()
        const res = response.data
        if (res?.result == 'ok') {
            return Promise.resolve(res)
        } else {
            if (res.code === 401) {
                // 登录超时,重新登录
                if (res.status === 401) {
                    store.dispatch('user/resetToken').then(() => {
                        location.reload()
                    })
                }
                return Promise.reject(res || 'error')
            }
        }
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求'
                    break;
                case 401:
                    error.message = '未授权，请重新登录'
                    break;
                case 403:
                    error.message = '拒绝访问'
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    error.message = '请求方法未允许'
                    break;
                case 408:
                    error.message = '请求超时'
                    break;
                case 500:
                    error.message = '服务器端出错'
                    break;
                case 501:
                    error.message = '网络未实现'
                    break;
                case 502:
                    error.message = '网络错误'
                    break;
                case 503:
                    error.message = '服务不可用'
                    break;
                case 504:
                    error.message = '网络超时'
                    break;
                case 505:
                    error.message = 'http版本不支持该请求'
                    break;
                default:
                    error.message = `连接错误${error.response.status}`
            }
        } else {
            error.message = "加载失败，请检查网络设置"
        }
        return Promise.reject(error)
    }
)

export default service

