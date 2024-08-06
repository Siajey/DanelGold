'use client'

import {Inter} from 'next/font/google'
import './globals.css'
import {createContext, useState} from "react";

const inter = Inter({subsets: ['latin']})


export const TokenContext = createContext({})

export default function RootLayout({children}) {
    const [token, setToken] = useState('1321546')
    return (
        <html lang='en'>
        <body className={`${inter.className} dark:bg-[#000000]`}>
        <TokenContext.Provider value={[token, setToken]}>
            {children}
        </TokenContext.Provider>
        </body>
        </html>
    )
}