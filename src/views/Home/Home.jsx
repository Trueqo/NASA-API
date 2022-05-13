import React from 'react'
import css from '../Home/Home.module.css'
import data from '../../data/dataHome'
const Home = () => {





    return (

        <div className={css.container} >
            {
                data.map(cards =>
                    <div className={css.contInfo}>
                        <div className={css.card}>
                            <h1 className={css.title}>{cards.title}</h1>
                            <p className={css.des}>{cards.description}</p>
                            <h1 className={css.icon}>{cards.icon}</h1>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Home