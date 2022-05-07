import React from 'react'
import ContainerCardApod from '../../../components/ContainerCardApod/ContainerCardApod'

import css from './Apod.module.css'
const Apod = () => {
  return (
    <div className={css.apod} >
      <ContainerCardApod/>
    </div>
  )
}

export default Apod