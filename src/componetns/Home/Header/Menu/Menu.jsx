import React from 'react'
import s from "./Menu.module.css"
import { ReactSVG } from 'react-svg'
import menu from "./Menu.svg"

const Menu = () => {
    return (
        <div className={s.container}>
            <ReactSVG src={menu} />
        </div>
    )
}

export default Menu;