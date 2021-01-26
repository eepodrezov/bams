import React from 'react'
import s from './Results.module.css'
import Header from './Header/Header'
import ResultBlock from './ResultBlock/ResultBlock'

const Results = () => {
    return (
        <div className={s.container}>
            <Header className={`${s.header}`} supheader="What we do" header="What we do more than you can imangine, belive us."/>
            <div className={s.result_block}>
                <ResultBlock number="15+" numberColor="#F61067" text="Nobel prizes"/>
                <ResultBlock number="33" numberColor="#5E239D" text="Nobel prizes" />
                <ResultBlock number="12" numberColor="#00F0B5" text="Nobel prizes" />
            </div>
        </div>
    )
}

export default Results;