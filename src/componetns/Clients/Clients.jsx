import React from 'react'
import s from './Clients.module.css'
import Header from './Header/Header'
import Logo from './Logo/Logo'
import img from './Photo.png'
import logo1 from "./logo1.svg"
import logo2 from "./logo2.svg"

const Clients = () => {
    return (
        <div className={s.container}>
            <div className={s.image_container}>
                <img src={img} alt="" className={s.image}/>
                <div class={s.overlay}></div>
            </div> 
            <div className={s.text}>
                <Header />
                <div className={s.logos}>
                    <Logo svg={logo1}/>
                    <Logo svg={logo2}/>
                    <Logo svg={logo2}/>
                    <Logo svg={logo1}/>
                    <Logo svg={logo1}/>
                    <Logo svg={logo2}/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Clients;