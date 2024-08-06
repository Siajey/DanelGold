'use client'
import {useContext} from "react";
import {TokenContext} from "@/app/layout";

export default function Dashboard() {
    const [token, setToken] = useContext(TokenContext)
    return <p className={'text-white'}>{token}</p>
}