'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  // Tự động chuyển hướng đến dashboard
  useEffect(() => {
    router.push('/dashboard')
  }, [router])
  return null
}
