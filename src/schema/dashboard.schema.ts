import { z } from 'zod'

// Get top products
export const GetTopProductsRes = z.object({
  message: z.string(),
  data: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
      growth: z.number()
    })
  )
})
export type GetTopProductsResType = z.infer<typeof GetTopProductsRes>

// Get production plans
export const GetProductionPlansRes = z.object({
  message: z.string(),
  data: z.array(z.object({ name: z.string(), planned: z.number(), actual: z.number() }))
})
export type GetProductionPlansResType = z.infer<typeof GetProductionPlansRes>

// Get top customers
export const GetTopCustomersRes = z.object({
  message: z.string(),
  data: z.array(z.object({ name: z.string(), quantity: z.number() }))
})
export type GetTopCustomersResType = z.infer<typeof GetTopCustomersRes>

// Get production status
export const GetProductionStatusRes = z.object({
  message: z.string(),
  data: z.array(z.object({ status: z.string(), value: z.number(), fill: z.string() }))
})
export type GetProductionStatusResType = z.infer<typeof GetProductionStatusRes>

// Get production progress by group
export const GetProductionProgressByGroupRes = z.object({
  message: z.string(),
  data: z.array(z.object({ name: z.string(), quantity: z.number(), percentage: z.number() }))
})
export type GetProductionProgressByGroupResType = z.infer<typeof GetProductionProgressByGroupRes>

// Get material needs
export const GetMaterialNeedsRes = z.object({
  message: z.string(),
  data: z.array(
    z.object({ id: z.number(), material: z.string(), code: z.string(), unit: z.string(), quantity: z.number() })
  )
})
export type GetMaterialNeedsResType = z.infer<typeof GetMaterialNeedsRes>
