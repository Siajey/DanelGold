'use client'

import {useEffect, useState} from "react";

export default function page() {
    const [token, setToken] = useState('')
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, []);
    return <div
        className={'grid grid-cols-9 grid-rows-9 items-center justify-stretch grid-flow-row  bg-neutral-900 w-full h-[100vh]'}>
        <div
            className={'flex flex-row bg-neutral-800 h-5/6 mx-2 row-start-1 row-span-1 col-start-1 col-span-9 rounded-md items-center justify-start '}>
            <span className={'ml-3 text-white text-2xl'}>Admin Dashboard</span>
        </div>
        
    </div>
}