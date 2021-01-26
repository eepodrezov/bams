import React from 'react'
import s from './ResultBlock.module.css'

const ResultBlock = ({number, numberColor, text}) => {
    return (
        <div className={s.container}>
            <div className={s.number} style={{ color: numberColor}}>{number}</div>
            <div className={s.text}>{text}</div>
        </div>
    )
}

export default ResultBlock;