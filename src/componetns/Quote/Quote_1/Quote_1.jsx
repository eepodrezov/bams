import React from 'react'
import s from './Quote_1.module.css'
import { ReactSVG } from 'react-svg'
import left from './Arrow Left.svg'
import right from './Arrow Right.svg'

const Quote_1 = ({text , name, company}) => {
    return (
        <div className={s.container}>
            
            <div className={s.text}>
                {text}
            </div>
            <div className={s.author}>
                <div className={s.name}>{name}</div>
                <div className={s.dash}> - </div>
                <div className={s.company}>{company}</div>
            </div>
        </div>
    )
}

export default Quote_1;