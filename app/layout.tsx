import { GLOBAL } from 'dealer-studio'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { ThemeToggle } from 'component/theme'

import 'dealer-studio.css'

const inter = Inter({
  variable: '--font-inter',
  subsets : ['latin'],
})

export const metadata: Metadata = {
  title      : GLOBAL.APP_NAME,
  description: GLOBAL.APP_DESC,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster position={'top-center'} className={'rounded-none'} richColors />
        <ThemeToggle />
      </body>
    </html>
  )
}
