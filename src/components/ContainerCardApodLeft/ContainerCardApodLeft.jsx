import { useState, useEffect } from 'react'
import css from '../ContainerCardApodLeft/ContainerCardApodLeft.module.css'
const ContainerCardApodLeft = () => {

  const [data, setData] = useState({})
  let url = 'https://api.nasa.gov/planetary/apod?api_key=LPArlu4Ukbhiv15PcdHR4egCSz987t42gYIdJyBY'

  const callApi = async (url) => {
      const apod = await fetch(url)
      const data = await apod.json()
      setData(data)
      
  }
  useEffect(() => {
      callApi(url)
  }, [])
  console.log(data)


  return (
    <div className={css.ContainerCardApodLeft}>
      <div className={css.info}>
        <h1>{data.title}</h1>
        <p className={css.text}>{data.explanation}</p>
      </div>
    </div>
  )
}

export default ContainerCardApodLeft