import React from 'react'
import s from './Quote.module.css'
import Photos from './Photos/Photos'
import Quote_1 from './Quote_1/Quote_1'
import Carousel from 'react-bootstrap/Carousel'
import arrowright from './Quote_1/Arrow Right.svg'
import { ReactSVG } from 'react-svg'
import arrowleft from './Quote_1/Arrow Left.svg'


const Quote = () => {
    const next = <ReactSVG src={arrowright}/>;
    const prev = <ReactSVG src={arrowleft}/>;

    return (
        <div className={s.container}>
            <Photos />
            <Carousel nextIcon={next} prevIcon={prev} autoPlay={false}>
                <Carousel.Item style={{'width' : '70%'}}>
                    <Quote_1 
                        text="Lectus arcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
                        name="Kerry Johnes"
                        company="Some Company"

                    />
                        

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item >
                <Carousel.Item style={{'width' : '70%'}}>
                    <Quote_1 
                        text="BLaBlaarcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
                        name="Egor"
                        company="Intel"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'width' : '70%'}}>
                    <Quote_1
                         text="AAAAAAAAAAAAAAAAAAAaBLaBlaarcu bibendum at varius. Adipiscing diam donec adipiscing tristique."
                         name="Igor"
                         company="MIT" 
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            
            
            
        </div>
    )
}

export default Quote;