import React from 'react'
import s from "./Number.module.css"
import { ReactSVG } from 'react-svg'
import phone from "./Vector.svg"

const Number = () => {
    return (
        <div className={s.container}>
            <ReactSVG src={phone} />
            <div className={s.text}>(01) 666 - 693 - 456</div>
        </div>
    )
}

export default Number;