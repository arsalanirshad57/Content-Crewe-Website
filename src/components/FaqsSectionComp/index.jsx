import React from 'react'
import SingleFaq from './SingleFaq'
import H5 from '../Typography/H5'
import H2 from '../Typography/H2'


const FaqsSectionComp = ({ faqsData }) => {
    return (
        <div className="flex flex-col gap-10 md:gap-16 ">
            <div className=" w-full flex flex-col justify-center items-center text-center">
                <H5>FAQS</H5>
                <H2>Lorem ipsum dolor sit  <br /> amet sit amet.</H2>
            </div>

            <div className=' flex justify-center items-start flex-wrap gap-6 sm:gap-10'>
                {
                    faqsData.map((FaqItem) => (
                        <SingleFaq FaqItem={FaqItem} />
                    ))
                }
            </div>
        </div>

    )
}

export default FaqsSectionComp