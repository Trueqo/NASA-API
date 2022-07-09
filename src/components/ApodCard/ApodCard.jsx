import { useState, useEffect } from 'react'
import css from './ApodCard.module.css'



const ApodCard = () => {
    
    const [data, setData] = useState({})
    const [fecha, setFecha] = useState('')
    const [fecha2, setFecha2] = useState({})

    console.log(fecha + 'soy el string')

    let url = 'https://api.nasa.gov/planetary/apod?api_key=LPArlu4Ukbhiv15PcdHR4egCSz987t42gYIdJyBY'
    let urlP = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fecha}&concept_tags=True`

    const callApiDate = async (urlP) => {
        const response = await fetch(urlP)
        const date = await response.json()
        setData(date)
        console.log(date)   
    }
    useEffect(() => {
        callApiDate(urlP)
    }, [])
    
        

    const callApi = async (url) => {
        const apod = await fetch(url)
        const dataApod = await apod.json()
        setData(dataApod)
        
    }
    useEffect(() => {
        callApi(url)
    }, [])
    // console.log(data)
    


    return (
        <div className={css.card}>
            {/* <div>
                <h1 className={css.titlePicture}>{data.title}</h1>
                <img src={data.url} className={css.img}/>
                <input type="date" className={css.date} onChange={(e) => setFecha(e.target.value)}/>
            </div> */}
            <div>
            <h1 className={css.titlePicture}>{fecha.title}</h1>
                <img src={fecha.url} className={css.img}/>
                <input type="date" className={css.date} onChange={(e) => setFecha(e.target.value)}/>
            </div>
        </div>
    )
}

export default ApodCard 