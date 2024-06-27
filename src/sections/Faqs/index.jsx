import React from 'react'
import FaqsSectionComp from '../../components/faqs-section-comp'
import Div from '../../components/div'

const Faqs = () => {
    const faqsData = [
        {label:'01.', question:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates. Veritatis, voluptates.', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. uptates. Veritatis, voluptates.'},
        {label:'02', question:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates. Veritatis, voluptates.', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voates. Veritatis, voluptates.'},
        {label:'03', question:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates. Veritatis, voluptates.', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voates. Veritatis, voluptates.'},
        {label:'04', question:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates. Veritatis, voluptates.', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voates. Veritatis, voluptates.'},
        {label:'05', question:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates. Veritatis, voluptates.', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voates. Veritatis, voluptates.'},
        {label:'06', question:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates. Veritatis, voluptates.', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voates. Veritatis, voluptates.'},
    ]
    return (
        <Div id={'faqs'}>
            <FaqsSectionComp faqsData={faqsData}/> 
        </Div>
    )
}

export default Faqs
