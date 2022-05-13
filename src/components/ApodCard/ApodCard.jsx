import { useState, useEffect } from 'react'
import css from './ApodCard.module.css'
const ApodCard = () => {

    const [data, setData] = useState({})

    let url = 'https://api.nasa.gov/planetary/apod?api_key=LPArlu4Ukbhiv15PcdHR4egCSz987t42gYIdJyBY'

    const callApi = async (url) => {
        const apod = await fetch(url)
        const dataApod = await apod.json()
        setData(dataApod)
        
    }
    useEffect(() => {
        callApi(url)
    }, [])
    console.log(data)
    


    return (
        <div className={css.card}>

            <h1>{data.date}</h1>
            <img src={data.url} className={css.img}/>
            
            
        </div>
    )
}

export default ApodCard 