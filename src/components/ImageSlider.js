import React,{ useState, useRef, useEffect } from 'react'
import './ImageSlider.css'
import {SliderData1} from './SliderData1'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'



const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 3000)

        return function(){
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    },[current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide}  />
            {SliderData1.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="smooth" className="image" />)}
                        
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider
