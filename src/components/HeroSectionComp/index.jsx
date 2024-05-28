import React from 'react'
import H1 from '../Typography/H1'
import Paragraph from '../Typography/Paragraph'
import AnimatedButton from '../Buttons/AnimatedButton'

const HeroSectionComp = () => {
    return (
        <div className=''>
            <H1 >Save Your Time <br /> and Money</H1>
            <Paragraph>We help youtubers and entrepreneurs save time, money & grow </Paragraph>
            <Paragraph> their brands with video content </Paragraph>
            <AnimatedButton className={'mt-5'}>Contact Us</AnimatedButton>
        </div>
    )
}

export default HeroSectionComp