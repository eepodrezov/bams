import React from 'react'
import s from "./SupHeader.module.css"

const SupHeader = (props) => {
    return (
        <div className={s.container}>
            <div className={s.text}>{props.text}</div>
        </div>
    )
}

export default SupHeader;