import React from 'react'
import Div from '../../components/div'
import WhyUsSection from '../../components/why-section'
import { WhyUsData } from '../../data/why-us'
const WhyUs = () => {

    return (
        <Div className={' bg-light-black'}>
            <WhyUsSection data={WhyUsData} />
        </Div>
    )
}

export default WhyUs