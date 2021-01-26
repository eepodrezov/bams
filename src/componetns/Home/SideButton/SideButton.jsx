import React from 'react'
import s from './SideButton.module.css'
import { ReactSVG } from 'react-svg'
import arrow from "./Arrow.svg"

const SideButton = () => {
    return (
        <div className={s.container}>
            <div className={s.text}>Scroll to see more</div>
            <div className={s.icon}>
                <ReactSVG src={arrow} />
            </div>            
        </div>
    )
}

export default SideButton;