import React from 'react'
import s from "./NavButton.module.css"

const NavButton = (props) => {
    return (
        <div className={s.container}>
            <div className={s.text}>{props.text}</div>
        </div>
    )
}

export default NavButton;