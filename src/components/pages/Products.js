import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

export default function Products(){
    return(
        <>
            <ScrollUpButton />
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}