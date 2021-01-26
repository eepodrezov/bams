import React from 'react'
import s from './Work.module.css'
import Header from './Header/Header'
import Block from './Block/Block'
import img from './Photo.png'

const Work = () => {
    return (
        <div className={s.container}>
            <Header className={`${s.header_container}`} header="Make it easy with us" supheader="What we do"/>
            <div className={s.main_container}>
                <div className={s.blocks}>
                    <Block backgroundColor="#5E239D" header="We build great business" text="Id consectetur purus ut faucibus pulvinar elementum integer enim. A arcu cursus vitae congue mauris rhoncus aenean."/>
                    <Block backgroundColor="#30124E" header="We build great business" text="Enim neque volutpat ac tincidunt vitae. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. "/>
                    <Block backgroundColor="#150433" header="We build great business" text="Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eleifend donec pretium vulputate sapien nec sagittis."/>
                </div>
                <div class={s.image_container}>
                    <img className={s.image} src={img} alt=""/>
                    <div class={s.overlay}></div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Work;
