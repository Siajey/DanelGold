'use client'


import axios from "axios";

export default function Login() {
    return <form className={'flex flex-col w-1/6'}>
        <label htmlFor={'username'} className={'text-white'}>Username</label>
        <input id={'username'} type={'text'} className={'p-1 mt-1 rounded '}/>
        <label htmlFor={'password'} className={'text-white mt-2'}>Password</label>
        <input id={'password'} name={'password'} type={'password'} className={'p-1 mt-1 rounded'}/>
        <input onClick={Send} type={'submit'} className={'bg-sky-500 rounded p-1 mt-4 w-1/4 text-white'}/>
    </form>
}

async function Send() {
    const username = document.getElementById('username')
    const pass = document.getElementById('password')
    const res = await axios.post('http://localhost:8080/admin/login', {username: username.value, password: pass.value})
    alert(res.data.message)
}