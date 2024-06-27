import React from 'react'
import Div from "../../components/div"
import AboutLeft from '../../components/about-sections-comp/about-left'
import AboutRight from '../../components/about-sections-comp/about-right'

const About = () => {
    return (
        <Div  id={'about'} className={'flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 bg-light-black '}>
            <AboutLeft />
            <AboutRight />
        </Div>
    )
}

export default About