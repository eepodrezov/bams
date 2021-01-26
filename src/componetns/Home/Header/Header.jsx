import React from 'react'
import s from './Header.module.css'
import Logo from "./Logo/Logo"
import NavButton from "./NavButton/NavButton"
import Number from "./Number/Number"
import Menu from "./Menu/Menu"

const Header = () => {
    return (
        <div className={s.container}>
            <Logo />
            <div className={s.navContainer}>
                <NavButton text="Home"/>
                <NavButton text="Services"/>
                <NavButton text="Work"/>
                <NavButton text="About"/>
            </div>
            <Number />
            <Menu />
        </div>
    )
}

export default Header;