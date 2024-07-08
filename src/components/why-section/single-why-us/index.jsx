import React from 'react'
import H4 from "../../typography/h4"
import Paragraph from "../../typography/paragraph"
import Icon from '../../icon'


const SingleWhyUS = ({ item }) => {
    return (
        <div className="border border-border_color flex flex-col justify-start items-center w-full py-10 md:min-h-96 gap-4 text-center my-2 sm:my-0 px-2 hover:border-blue transition-all duration-700  ">
            <div className=" flex justify-center items-center rounded-full bg-border_color w-20 h-20 sm:w-24 sm:h-24 ">
                <Icon iconName={item.icon} className={'text-white !w-10 !h-10 sm:!w-12 sm:!h-12 '} />
            </div>
            <H4 >{item.title}</H4>
            <Paragraph>{item.content}</Paragraph>
        </div>
    )
}

export default SingleWhyUS