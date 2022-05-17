import React from 'react'
import ContainerCardApod from '../../components/ContainerCardApod/ContainerCardApod'
import ContainerCardApodLeft from '../../components/ContainerCardApodLeft/ContainerCardApodLeft'

import css from './Apod.module.css'
const Apod = () => {
  return (
    <div className={css.apod}>
      <ContainerCardApod/> 
      <ContainerCardApodLeft/>
       

    </div>
  )
}

export default Apod