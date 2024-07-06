import { Inter } from 'next/font/google'
import './globals.css'

//context data import
import { MyProvider } from '@/context/MyContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danel Gold Web Application',
  description: 'NFT application',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark:bg-[#000000]`}>
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  )
}


