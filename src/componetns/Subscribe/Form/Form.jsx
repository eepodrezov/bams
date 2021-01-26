import React from 'react'
import s from './Form.module.css'
import { ReactSVG } from 'react-svg'
import arrow from './Arrow.svg'

const Form = () => {
    return (
        <div className={s.container}>
            <div className={s.email}>Enter email</div>
            <div className={s.button}>
                <div className={s.text}>Subscribe</div>
                <div className={s.icon}><ReactSVG src={arrow}/></div>
            </div>
        </div>
    )
}

export default Form;