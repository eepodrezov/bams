import React from 'react'
import s from "./Block.module.css"
import { ReactSVG } from 'react-svg'

const Block = (props) => {
    return (
        <div className={s.container}>
            <ReactSVG src={props.svg_src}/>
            <div className={s.header}>{props.header}</div>
            <div className={s.text}>{props.text}</div>
            
        </div>
    )
}

export default Block
