'use client'

import {Inter} from 'next/font/google'
import './globals.css'
import {useState} from "react";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({children}) {
    const [token, setToken] = useState('')
    return (
        <html lang='en'>
        <body className={`${inter.className} dark:bg-[#000000]`}>
        {children}
        </body>
        </html>
    )
}