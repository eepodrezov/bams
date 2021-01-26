import React from 'react'
import s from './Header.module.css'
import SupHeader from './SupHeader/SupHeader'
import MainHeader from './MainHeader/MainHeader'

const Header = ({supheader, header, className }) => {
    return (
        <div className={className}>
            <SupHeader text={supheader}/>
            <MainHeader text={header}/>
        </div>
    )
}

export default Header;