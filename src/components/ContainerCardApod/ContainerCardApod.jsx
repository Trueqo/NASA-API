import React from 'react'
import ApodCard from '../ApodCard/ApodCard'
import ccs from './ContainerCardApod.module.css'
const ContainerCardApod = () => {
  
  return (
    <div className={ccs.containercard}>
      <ApodCard/>
    </div>
  )
}

export default ContainerCardApod