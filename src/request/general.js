import request from "@/utils/request";

export function getApisByApiId (parameter) {
  const diToken = parameter.queryParam.diToken
  const apiID = parameter.queryParam.apiID
  return request({
    url: `http://localhost:9000/di/apimgatewayconsole/ws/gateway/service/getApisByApiId?diToken=${diToken}&apiId=${apiID}`,
    method: 'post',
    data: parameter.body
  })
}

/**
 * 该方法用于加载JSON文件
 * @param {方法} method
 */
export const getJson = function (method) {
  /*return new Promise((resolve, reject) => {
    request({
      // baseURL:'',
      headers: {'Content-type': 'multipart/form-data'},
      method: 'get',
      url: method,
      dataType: "json",
      crossDomain: true,
      cache: false
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })*/

  return request({
    // baseURL:'',
    headers: {'Content-type': 'multipart/form-data'},
    method: 'get',
    url: method,
    dataType: "json",
    // crossDomain: true,
    cache: false
  }).then(res => {
    console.log(res)
  })

}
