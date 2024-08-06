'use client'


import axios from "axios";
import {useRouter} from "next/navigation";
import Cookies from 'js-cookie'

export default function Login() {
    const router = useRouter()
    const send = async () => {
        const username = document.getElementById('username')
        const pass = document.getElementById('password')
        const res = await axios.post('http://localhost:8080/admin/login', {
            username: username.value,
            password: pass.value
        })
        Cookies.set('token', res.data.token, {expires: 1})
        router.push('/admin/dashboard')
    }

    const onEnter = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            await send()
        }
    }
    return <div className={'flex flex-col w-1/6'}>
        <label htmlFor={'username'} className={'text-white'}>Username</label>
        <input onKeyDown={onEnter} id={'username'} type={'text'} className={'p-1 mt-1 rounded '}/>
        <label htmlFor={'password'} className={'text-white mt-2'}>Password</label>
        <input onKeyDown={onEnter} id={'password'} name={'password'} type={'password'} className={'p-1 mt-1 rounded'}/>
        <input onClick={send} onKeyDown={onEnter} type={'button'} value={'Submit'}
               className={'bg-sky-500 rounded p-1 mt-4 w-1/4 text-white'}/>
    </div>
}
