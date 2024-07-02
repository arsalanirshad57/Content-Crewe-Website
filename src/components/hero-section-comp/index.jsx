import React from 'react'
import H1 from '../typography/h1'
import Paragraph from '../typography/paragraph'
import AnimatedButton from '../buttons/animated-button'

const HeroSectionComp = () => {
    return (
        <div className=''>
            <H1 > Level Up Your <br /> Content Creation </H1>
            <Paragraph>Hire Your Future Video Team Now </Paragraph>
            <a href="#pricing">
                <AnimatedButton className={'mt-5'}>Hire Now</AnimatedButton>
            </a>
        </div>
    )
}

export default HeroSectionComp  