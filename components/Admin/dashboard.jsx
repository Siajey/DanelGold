'use client'

import {useEffect, useState} from "react";

export default function Dashboard() {
    const [token, setToken] = useState('')
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, []);
    return <p className={'text-white'}>{token}</p>
}