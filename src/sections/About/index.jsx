import React from 'react'
import Div from "../../components/Div"
import AboutLeft from '../../components/AboutSectionComp/AboutLeft'
import AboutRight from '../../components/AboutSectionComp/AboutRight'

const About = () => {
    return (
        <Div  id={'about'} className={'flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 bg-light-black '}>
            <AboutLeft />
            <AboutRight />
        </Div>
    )
}

export default About