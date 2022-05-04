import React from 'react'
import css from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={css.navbar}>
        <ul className={css.ul}>
            <li className={css.li}>Rovers</li>
            <li className={css.li}>Exoplanet</li>
            <li className={css.li}>APOD</li>
            <li className={css.li}>EPIC</li>
        </ul>
    </div>
  )
}

export default Navbar