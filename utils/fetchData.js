const fetchData=async(url,option={})=>{
    try {
        const res=await fetch(process.env.NEXT_PUBLIC_JSON_DB+url,option)
        const data=await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

// in client side rendering

// useEffect(()=>{
//     (async()=>{
//         const res=await fetchData('users')
//     })()
// },[])


// in server side rendering

// export default async function name(){
// const res=await fetchData('users')
// }