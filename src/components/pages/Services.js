import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

export default function Services(){
    return(
        <>
            <ScrollUpButton />
            <Cards />
            <Footer />
        </>
    )
}