import {useEffect, useState} from "react"
import axios from "axios"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const token = localStorage.getItem("token")

    useEffect(()=>{
        axios.get(url, {
            headers: {
                Authorization:token
            }
        })
        .then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
        .catch((error)=> {
            alert("ocorreu um erro na requisição!")
        })

    }, [url])
    return (data)
}
export default useRequestData
