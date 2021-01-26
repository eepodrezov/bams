import React from 'react'
import s from "./Intro.module.css"
import Header from './Header/Header'
import Text from './Text/Text'
import Blocks from './Blocks/Blocks'

const Intro = () => {
    return (
        <div className={s.container}>
            <Header header="What we do?" supheader="Intro"/>
            <Text />
            <Blocks />
        </div>
    )
}

export default Intro;