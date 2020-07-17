/**
 * 统一封装Axios,设置请求拦截器、响应拦截器、请求
 */
import axios from 'axios'
// import { AxiosRequestConfig, AxiosResponse } from 'axios'

const codeMessage = {
  // 200: '服务器成功返回请求的数据。',
  // 201: '新建或修改数据成功。',
  // 202: '一个请求已经进入后台排队（异步任务）。',
  // 204: '删除数据成功。',

  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是服务器访问被禁止。',
  404: '页面或资源不存在，请检查访问的URL。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  501: '服务未实现。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
  505: 'HTTP版本不受支持'
};

const request = axios.create({
  // 联调
  // baseURL: process.env.NODE_ENV,
  baseURL: '',
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      // 'Content-Type': 'application/json;charset=UTF-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  // 是否跨站点访问控制请求
  withCredentials: true,
  timeout: 30000,
  transformRequest: [(data) => {
    data = JSON.stringify(data)
    return data
  }],
  validateStatus () {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true
  },
  transformResponse: [(data) => {
    if (typeof data === 'string' && (data.startsWith('{') || data.startsWith('['))) {
      data = JSON.parse(data)
    }
    return data
  }]
})

// 请求拦截器
request.interceptors.request.use((config) => {
  return config
}, (error) => {
  // 错误抛到业务代码
  error.data = {}
  error.data.msg = '服务器异常，请联系管理员！'
  return Promise.resolve(error)
})

// 响应拦截器
request.interceptors.response.use((response) => {
  const status = response.status;
  if (status >= 200 && status < 300) {
    return response;
  }
  // 服务器返回产生异常时，不返回响应值，抛出异常并在控制台提示信息
  const error = new Error();
  error.code = response.status;
  error.message = codeMessage[status];
  throw error;
}, (error) => {
  // 错误抛到业务代码
  error.data = {}
  error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
  return Promise.resolve(error)
})

export default request