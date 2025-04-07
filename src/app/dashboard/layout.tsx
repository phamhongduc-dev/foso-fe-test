import React from 'react'
import NavigationBar from './navigation-bar'
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-[1920px] shrink-0 flex-col items-start gap-6'>
      <NavigationBar />
      {children}
    </div>
  )
}
