import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'
import { SideBar } from '@/components/sideBar'
import { ThemeProvider } from '@/provider/themeProvider'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Blog Dr Universo',
  description: 'Blog de astronomia e curiosidades sobre o universo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={
          cn(
            'min-h-screen bg-background font-sans antialiased',
            geistMono.variable,
            geistSans.variable
          )
        }
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
        >
          <SideBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
