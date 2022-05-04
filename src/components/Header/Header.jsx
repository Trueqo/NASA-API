import React from 'react'
import css from './Header.module.css'
import imgTitle from '../../assets/img/NASA.png'
const Header = () => {
  return (
    <div className={css.Header}>
        <img src={imgTitle} className={css.imgTitleNasa} />
    </div>
  )
}

export default Header