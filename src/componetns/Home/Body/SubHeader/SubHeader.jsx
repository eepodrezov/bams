import React from 'react'
import s from "./SubHeader.module.css"
import { ReactSVG } from 'react-svg'
import arrow from "./Arrow.svg"


const SubHeader = () => {
    return (
        <div className={s.container}>
            <div className={s.text}>Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.</div>
            <div className={s.icon}><ReactSVG src={arrow} /></div>
        </div>
    )
}

export default SubHeader; 