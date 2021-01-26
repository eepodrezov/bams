import React from 'react'
import s from './Logo.module.css'
import { ReactSVG } from 'react-svg'

const Logo = ({svg}) => {
    return (
        <div className={s.container}>
            <ReactSVG src={svg}/>
        </div>
    )
}

export default Logo;