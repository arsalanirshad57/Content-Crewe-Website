import React from 'react'
import Div from '../../components/Div'
import WhyUsSection from '../../components/WhySectionComp'

const WhyUs = () => {
    const data = [
        { icon: "bx:support", title: '24/7 Support', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, labore." },
        { icon: "fluent:people-team-24-regular", title: 'Qualified Team', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, labore." },
        { icon: "uil:upload-alt", title: 'OnTime Delivery', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, labore." },
    ]
    return (
        <Div className={' bg-light-black'}>
            <WhyUsSection data={data} />
        </Div>
    )
}

export default WhyUs