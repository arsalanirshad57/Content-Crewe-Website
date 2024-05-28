import React from 'react'
import Div from '../../components/Div'
import HeroSectionComp from '../../components/HeroSectionComp'

const HeroSection = () => {
    return (
        <Div className={'flex flex-col justify-center items-center text-center h-screen py-0 '}>
            <HeroSectionComp />
        </Div>
    )
}

export default HeroSection