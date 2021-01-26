import React from 'react'
import s from './Photos.module.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './4.png'
import img5 from './5.png'
import img6 from './6.png'
import img7 from './7.png'
import img8 from './8.png'
import img0 from './0.png'
import full from './full.png'

const Photos = () => {
    return (
        <div className={s.container}>
            <img src={full} alt="" className={s.image}/>
            {/* <img src={img1} alt="" className={s.image1}/>
            <img src={img2} alt="" className={s.image2}/>
            <img src={img3} alt="" className={s.image3}/>
            <img src={img4} alt="" className={s.image4}/>
            <img src={img0} alt="" className={s.image0}/>
            <img src={img5} alt="" className={s.image5}/>
            <img src={img6} alt="" className={s.image6}/>
            <img src={img7} alt="" className={s.image7}/>
            <img src={img8} alt="" className={s.image8}/> */}
        </div>
    )
}

export default Photos;