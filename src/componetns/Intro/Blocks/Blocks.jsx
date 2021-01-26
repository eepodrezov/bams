import React from 'react'
import s from "./Blocks.module.css"
import Block from './Block/Block'
import svg1 from "./1.svg"
import svg2 from "./2.svg"
import svg3 from "./3.svg"

const Blocks = () => {
    return (
        <div className={s.container}>
            <Block svg_src={svg1} header="Webdesign" text="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. "/>
            <Block svg_src={svg2} header="Webdevelopment" text="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. "/>
            <Block svg_src={svg3} header="Marketing" text="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. "/>
            
        </div>
    )
}

export default Blocks;