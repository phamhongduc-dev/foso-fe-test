import { NextResponse } from 'next/server'
import { DUMMY_DATA } from '@/data/dummy-data'

export async function GET() {
  // Giả lập delay 3s
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return NextResponse.json({
    message: 'Get production plans successfully',
    data: DUMMY_DATA.productionPlan
  })
}
