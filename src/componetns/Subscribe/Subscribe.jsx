import React from 'react'
import s from './Subscribe.module.css'
import Form from './Form/Form'

const Subscribe = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>Subscribe to our newsletter</div>
            <div className={s.subheader}>Cras pulvinar mattis nunc sed blandit.</div>
            <Form />
        </div>
    )
}

export default Subscribe;