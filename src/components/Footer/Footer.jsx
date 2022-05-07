import React from 'react'
import css from './Footer.module.css'
import nasaLogo from '../../assets/img/Nasa-Logo.png'
const Footer = () => {
  return (
    <div className={css.Footer}>
        <img className={css.nasaLogo} src={nasaLogo} />
        <label className={css.text}>“I didn’t feel like a giant. I felt very, very small.”</label>
        
    </div>
  )
}

export default Footer