import React, { useState } from 'react'
import Span from '../../Typography/Span'
import Paragraph from '../../Typography/Paragraph'
import Icon from '../../Icon'

const SingleFaq = ({ FaqItem }) => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className=' xl:w-48pr flex flex-col gap-3 border border-border_color py-4 px-3 '>
            
            <div className="flex gap-3 justify-center items-start cursor-pointer" onClick={() => setOpen(!open)}>
                <Span className={'!font-semibold '}>{FaqItem.label}</Span>
                <Paragraph className={"!text-white !leading-5 grow"}>{FaqItem.question}</Paragraph>
                <Icon iconName={'solar:alt-arrow-down-linear'} className={` !w-10  sm:!w-7 sm:!h-7  xl:w-9 xl:h-9 hover:text-blue transition-all duration-500 cursor-pointer -mt-0.5 ${open ? 'text-blue' : '-rotate-180'}`} />
            </div>
            
            {open &&
                <div className='flex items-start gap-1'>
                    <Span className={'!font-semibold '}>Ans: </Span>
                    <Paragraph className={"!leading-5 grow mt-0.5"}>{FaqItem.answer}</Paragraph>

                </div>
            }
        </div>
    )
}

export default SingleFaq