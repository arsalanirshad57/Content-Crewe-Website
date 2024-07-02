import React from 'react'
import SingleFaq from './single-faq'
import H5 from '../typography/h5'
import H2 from '../typography/h2'


const FaqsSectionComp = ({ faqsData }) => {
    return ( 
        <div className="flex flex-col gap-10 md:gap-16 w-full ">
            <div className=" w-full flex flex-col justify-center items-center text-center ">
                <H5>FAQS</H5>
                <H2>Browse our FAQ's to find answers  about <br /> our video creation services</H2>
            </div>  

            <div className=' flex justify-center items-start flex-wrap gap-6 sm:gap-8 w-full'>
                {
                    faqsData?.map((FaqItem) => ( 
                        <SingleFaq  FaqItem={FaqItem} />
                    ))
                }
            </div>
        </div>

    )
}

export default FaqsSectionComp