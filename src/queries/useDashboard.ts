import { useQuery } from '@tanstack/react-query'

import dashboardApi from '@/apiRequests/dashboard.api'

export const useGetTopProductsQuery = () => {
  return useQuery({
    queryKey: ['top-products'],
    queryFn: dashboardApi.getTopProducts
  })
}

export const useGetProductionPlansQuery = () => {
  return useQuery({
    queryKey: ['production-plans'],
    queryFn: dashboardApi.getProductionPlans
  })
}

export const useGetTopCustomersQuery = () => {
  return useQuery({
    queryKey: ['top-customers'],
    queryFn: dashboardApi.getTopCustomers
  })
}

export const useGetProductionStatusQuery = () => {
  return useQuery({
    queryKey: ['production-status'],
    queryFn: dashboardApi.getProductionStatus
  })
}

export const useGetProductionProgressByGroupQuery = () => {
  return useQuery({
    queryKey: ['production-progress-by-group'],
    queryFn: dashboardApi.getProductionProgressByGroup
  })
}

export const useGetMaterialNeedsQuery = () => {
  return useQuery({
    queryKey: ['material-needs'],
    queryFn: dashboardApi.getMaterialNeeds
  })
}
