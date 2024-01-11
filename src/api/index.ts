import request from '@/config/axios'

// 设备echart图表1
export const deviceEchartCountApi = () => {
    return request.get({ url: `/customer/stat/orgDevice` })
}
// 订单联合统计
export const orderStatisticApi = (params) => {
  return request.get({ url: `/customer/core/orderKanbanData`, params })
}
// 设备联合统计
export const deviceStatisticApi = () => {
  return request.get({ url: `/customer/device/deviceKanbanData` })
}
// 设备品牌
export const deviceBrandsList = () => {
  return request.get({ url: '/customer/brand/select' })
}
// 获取机构树
export const getOrgTreeApi = () => {
  return request.get({ url: `/customer/organ/tree` })
}
// 获取项目列表
export const projectList = (): Promise<any> => {
  return request.get({ url: '/customer/common/project' })
}

// 获取设备位置信息
export const getDeviceLocationsApi = (data) => {
  return request.post({ url: `/customer/device/deviceLocation`, data })
}
// // 区域中心以及设备超市数量
// export const marketAreaListApi = (params?: { nationFlag: number | string }) => {
//   return request.get({ url: `/customer/supermarket/list`, params })
// }

/****
 * 
 * @description MOCK-data
 * 
 */
// 订单-mock
export const orderKanbanDataApi = () => {
  return request.get({ url: `/mock/api/orderKanbanApi` })
}
// 设备-mock
export const deviceKanbanDataApi = () => {
  return request.get({ url: `/mock/api/deviceKanbanApi` })
}
// 需求单-mock
export const remandOrderDataApi  =() => {
  return request.get({ url: `/mock/api/remandOrderApi` })
}
// 本地json文件 
export const getChinaGeoJson = () => {
  return request.get({ url: `/mock/api/chinaGeoApi` })
}