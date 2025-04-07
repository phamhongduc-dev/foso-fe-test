import { NextResponse } from 'next/server'
import { DUMMY_DATA } from '@/data/dummy-data'

export async function GET() {
  // Giả lập delay 1s
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json({
    message: 'Get production plans successfully',
    data: DUMMY_DATA.productionPlan
  })
}
