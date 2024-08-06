import {Inter} from 'next/font/google'
import './globals.css'

//navbar and footer layout

//context data import

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Danel Gold Web Application',
    description: 'NFT application',
}

export default function RootLayout({children}) {
    return (
        <html lang='en'>
        <body className={`${inter.className} dark:bg-[#000000]`}>
        {children}
        </body>
        </html>
    )
}