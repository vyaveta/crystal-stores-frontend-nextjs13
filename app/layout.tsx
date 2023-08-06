
import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
// import { useMediaQuery } from 'react-responsive'


const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crystal Inizio',
  description: 'Crystal Group of Companies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const max_w_600_px = useMediaQuery({
  //   query: '(max-width: 600px)'
  // })

  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar max_w_600_px={true} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
