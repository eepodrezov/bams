import React from 'react'
import s from './Block.module.css'

const Block = ({header , text , backgroundColor}) => {
    return (
        <div className={s.container} style={{ backgroundColor: backgroundColor}}>
                <div className={s.header}>{header}</div>
                <div className={s.text}>{text}</div>
            
        </div>
    )
}

export default Block;