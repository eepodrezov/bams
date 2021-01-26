import React from 'react'
import s from "./MainHeader.module.css"

const MainHeader = (props) => {
    return (
        <div className={s.container}>
            <div className={s.text}>{props.text}</div>
        </div>
    )
}

export default MainHeader;