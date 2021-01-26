import React from 'react'
import s from './Home.module.css'
import Header from "./Header/Header"
import Body from "./Body/Body"
import SideButton from "./SideButton/SideButton"

const Home = () => {
    return (
        <div className={s.container}>
            <Header />
            <div className={s.body}>
                <Body />
                <SideButton />
            </div>
            
        </div>
    )
}

export default Home;