import React from 'react'
import s from "./Text.module.css"

const Text = (props) => {
    return (
        <div className={s.container}>
            <div className={s.text}>
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
            </div>
        </div>
    )
}

export default Text;