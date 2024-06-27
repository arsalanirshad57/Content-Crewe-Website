import React from 'react'
import H5 from "../../components/typography/h5"
import H2 from "../../components/typography/h2"
import SingleWhyUS from './single-why-us'


const WhyUsSection = ({ data }) => {

    return (
        <div className=' flex flex-col gap-10 md:gap-16'>
            <div className="w-full text-center">
                <H5>Why Us</H5>
                <H2>How we apart from <br /> Traditional Agencies</H2>
            </div>

            <div className=" flex flex-col md:flex-row gap-5">
                {
                    data?.map((item) => (
                      <SingleWhyUS key={item?.id} item={item}/>  
                    ))
                }
            </div>
        </div>
    )
}

export default WhyUsSection