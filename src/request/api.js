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