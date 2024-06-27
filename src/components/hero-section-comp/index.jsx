import React from 'react'
import H1 from '../typography/h1'
import Paragraph from '../typography/paragraph'
import AnimatedButton from '../buttons/animated-button'

const HeroSectionComp = () => {
    return (
        <div className=''>
            <H1 >Save Your Time <br /> and Money</H1>
            <Paragraph>We help youtubers and entrepreneurs save time, money & grow </Paragraph>
            <Paragraph> their brands with video content </Paragraph>
            <a href="#contact">
                <AnimatedButton className={'mt-5'}>Contact Us </AnimatedButton>
            </a>
        </div>
    )
}

export default HeroSectionComp