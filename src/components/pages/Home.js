import React from 'react'
import '../../App.css'
import Cards from '../Cards'
import Footer from '../Footer'
// import HeroSection from '../HeroSection'
// import Hero from '../HeroHome'
// import {SliderData} from '../data/SliderData'
import ImageSlider from '../ImageSlider'
import { SliderData1 } from '../SliderData1'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";


export default function Home() {
    
    return(
        <>
            <ScrollUpButton />
            {/* <Hero slides={SliderData} /> */}
            <ImageSlider slides={SliderData1} />
            {/* <HeroSection /> */}
            <Cards />
            <Footer />
        </>
    )
}
