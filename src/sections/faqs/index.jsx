import React from 'react'
import FaqsSectionComp from '../../components/faqs-section-comp'
import Div from '../../components/div'
import { faqsData } from '../../data/faqs'


const Faqs = () => {
   
    return (
        <Div id={'faqs'}>
            <FaqsSectionComp faqsData={faqsData}/> 
        </Div>
    )
}

export default Faqs
