import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type MenuItem = {
  name: string
  path: string
}

export const menuItems: MenuItem[] = [
  { name: 'Danh mục', path: '/dashboard/category' },
  { name: 'Bán & Xuất hàng', path: '/dashboard/sales-and-exports' },
  { name: 'Mua & Nhập hàng', path: '/dashboard/purchases-and-imports' },
  { name: 'Kho & Sản xuất', path: '/dashboard/production' },
  { name: 'Kế toán', path: '/dashboard/accounting' },
  { name: 'Báo cáo & Thống kê', path: '/dashboard/reports-and-statistics' },
  { name: 'Tiện ích', path: '/dashboard/utilities' }
]

export default function NavigationBar() {
  return (
    <div className='flex h-[72px] items-center gap-6 self-stretch bg-[#003DA0] px-11 py-0'>
      <Link href='/dashboard'>
        <Image alt='logo' width={'82'} height={'32'} className='aspect-[82/32]' priority src='/assets/logo.svg' />
      </Link>
      {/* Menu items */}
      <div className='flex shrink-0 flex-grow basis-0 items-center'>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <div className='flex items-center justify-center rounded-[12px] px-2 py-1'>
              <div className='flex items-center px-1 py-0'>
                <div className='text-sm leading-[20px] font-normal text-[#F3F4F6] opacity-[0.9]'>{item.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Menu right */}
      <div className='flex items-center gap-6'>
        {/* Search */}
        <div className='flex h-[28px] w-[200px] items-center gap-1 rounded-[8px] bg-white/20 px-1.5 py-1'>
          <Image src='/assets/search.svg' alt='search' width={16} height={16} className='size-4 shrink-0' />
          <input
            className='font-["Lexend_Deca"] text-xs leading-4 font-light tracking-[0.048px] text-white opacity-[0.65]'
            placeholder='Tìm kiếm'
          ></input>
        </div>
        {/* Group button */}
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-4'>
            <Image src='/assets/gear.svg' alt='gear' width={20} height={20} className='opacity-[0.9]' />
            <Image
              src='/assets/convertshape-2.svg'
              alt='convertshape-2'
              width={20}
              height={20}
              className='aspect-[1/1]'
            />
            <Image src='/assets/message-text.svg' alt='message-text' width={20} height={20} className='aspect-[1/1]' />
            <div className='relative flex items-center justify-center rounded-[12px] px-0 py-1'>
              <div className='size-5 opacity-[0.9]'>
                <Image
                  src='/assets/bell-simple.svg'
                  alt='bell-simple'
                  width={14.839}
                  height={16.25}
                  className='shrink-0 fill-white opacity-[0.9]'
                />
                <div className='absolute top-0 right-0 inline-flex h-3 shrink-0 items-center justify-center gap-2.5 rounded-[8px] bg-[#EE1E1E] px-1 py-1.5'>
                  <div className='flex items-center justify-center font-["Lexend_Deca"] text-[8px] leading-[2px] font-medium tracking-[0.08px] text-white'>
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center rounded-[12px] px-0 py-1'>
              <Image src='/assets/question.svg' alt='question' width={20} height={20} className='opacity-[0.9]' />
            </div>
          </div>
        </div>
        {/* Avatar */}
        <div className='flex items-center gap-1'>
          {/* User */}
          <div className='flex items-center gap-2 rounded-[20px] bg-white'>
            {/* bg url: /assets/avatar.jpg */}
            <div
              className='size-10 rounded-[20.8px] bg-cover bg-center'
              style={{ backgroundImage: 'url(/assets/avatar.jpg)' }}
            />
          </div>
          <Image
            src='/assets/arrow-line-down-2.svg'
            alt='arrow-line-down-2'
            width={20}
            height={20}
            className='size-5 text-white'
          />
        </div>
      </div>
    </div>
  )
}
