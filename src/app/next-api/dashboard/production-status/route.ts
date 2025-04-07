import { NextResponse } from 'next/server'
import { getSharedData } from '@/data/dummy-data'

export async function GET() {
  // Giả lập delay 1s
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json({
    message: 'Get production status successfully',
    data: getSharedData().productionStatus
  })
}
