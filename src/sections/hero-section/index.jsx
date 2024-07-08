import React from 'react'
import Div from '../../components/div'
import HeroSectionComp from '../../components/hero-section'

const HeroSection = () => {
    return (
        <Div className={'flex flex-col justify-center items-center text-center h-screen py-0 '}>
            <HeroSectionComp />
        </Div>
    )
}

export default HeroSection