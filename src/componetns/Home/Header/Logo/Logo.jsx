import React from 'react'
import s from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={s.container}>
            <div className={s.text}>Looper</div>
        </div>
    )
}

export default Logo;