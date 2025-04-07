import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'

import AppProvider from '@/components/app-provider'

import './globals.css'

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca'
})

export const metadata: Metadata = {
  title: 'FOSO TEST FE | Phạm Hồng Đức',
  description: 'FOSO TEST FE | Phạm Hồng Đức'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${lexendDeca.variable} antialiased`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
