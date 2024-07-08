import React, { useState } from 'react'
import Span from '../../typography/span'
import Paragraph from '../../typography/paragraph'
import Icon from '../../icon'
 
const SingleFaq = ({ FaqItem, key }) => {
    const [open, setOpen] = useState(false)

    return (
        <div key={key} className=' w-full  sm-md:w-48pr flex flex-col gap-3 border border-border_color py-4 px-3 transition-all duration-800 '>
            <div className="flex gap-1.5 justify-center items-start xl:items-center cursor-pointer w-full" onClick={() => setOpen(!open)}>
                <Span className={'!font-semibold -mt-0.5 xl:-mt-0'}>{FaqItem?.label}</Span>
                <Paragraph className={"!text-white !leading-5 grow"}>{FaqItem.question}</Paragraph>
                <Icon iconName={'solar:alt-arrow-down-linear'} className={` hover:text-blue transition-all duration-500 cursor-pointer -mt-0.5 ${open ? 'text-blue' : '-rotate-180'}`} />
            </div>
            {open && 
                <div className='flex items-start gap-1 transition-all duration-500 w-full '>
                    <Paragraph className={"!leading-5 grow mt-0.5"}>{FaqItem.answer}</Paragraph>
                </div>
            }
        </div>  
    )
} 

export default SingleFaq