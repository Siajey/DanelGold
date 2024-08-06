'use client'

import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function Dashboard() {
    const [token, setToken] = useState('')
    useEffect(() => {
        setToken(Cookies.get('token'))
    }, []);
    return <p className={'text-white'}>{token}</p>
}