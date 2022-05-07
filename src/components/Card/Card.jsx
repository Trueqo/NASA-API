import { useState, useEffect } from "react";
import css from './Card.module.css'
import profile from '../../assets/img/profile.jpg'
const Card = () => {
  const [data, setData] = useState([]);

  let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=LPArlu4Ukbhiv15PcdHR4egCSz987t42gYIdJyBY'

  const callApi = async (url) => {
    const dogos = await fetch(url)
    const dataDogo = await dogos.json()
    setData(dataDogo.photos)
    console.log(data)
  }
  useEffect(() => {
    callApi(url)
  }, [])

 
  return (

    <div className={css.container}>
      {
      data.map(item => (
        <div className={css.card} >
          <img className={css.image} src={item.img_src} alt="" />
          <div className={css.info}>
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      ))
    }
    </div>
    
  )
}

export default Card