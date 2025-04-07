import http from '@/lib/http'
import {
  GetMaterialNeedsResType,
  GetProductionPlansResType,
  GetProductionProgressByGroupResType,
  GetProductionStatusResType,
  GetTopCustomersResType,
  GetTopProductsResType
} from '@/schema/dashboard.schema'

const URL = 'dashboard'

const dashboardApi = {
  getTopProducts: () => http.get<GetTopProductsResType>(`/next-api/${URL}/top-products`, { baseUrl: '' }),
  getProductionPlans: () => http.get<GetProductionPlansResType>(`/next-api/${URL}/production-plans`, { baseUrl: '' }),
  getTopCustomers: () => http.get<GetTopCustomersResType>(`/next-api/${URL}/top-customers`, { baseUrl: '' }),
  getProductionStatus: () =>
    http.get<GetProductionStatusResType>(`/next-api/${URL}/production-status`, { baseUrl: '' }),
  getProductionProgressByGroup: () =>
    http.get<GetProductionProgressByGroupResType>(`/next-api/${URL}/production-progress-by-group`, { baseUrl: '' }),
  getMaterialNeeds: () => http.get<GetMaterialNeedsResType>(`/next-api/${URL}/material-needs`, { baseUrl: '' })
}

export default dashboardApi
