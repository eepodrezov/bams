import React from 'react'
import s from './Body.module.css'
import SupHeader from "./SupHeader/SupHeader"
import Header1 from "./Headers/Header1"
import Header2 from "./Headers/Header2"
import SubHeader from "./SubHeader/SubHeader"



const Body = () => {
    return (
        <div className={s.container}>
            <SupHeader />
            <Header1 />
            <Header2 />
            <SubHeader />
        </div>
    )
}

export default Body;