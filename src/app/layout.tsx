import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/lib/Provider'
import Dropd from './../components/shared/dropd';
import Collabofooter from '@/components/shared/collabofooter';
import Footer from '@/components/shared/footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Collabo-Hub',
  description: 'A Platform For Community Collaboration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
    <html lang="en">
      
      <body className={inter.className}>
        <Dropd/>
        {children}
        <Footer/>
        </body>
         
    </html>
    </Providers>
  )
}
