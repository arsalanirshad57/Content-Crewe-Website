import React from 'react'
import H4 from '../../typography/h4'
import Icon from '../../icon'

const AboutCard = ({ item, key }) => {
    return (
        <div key={key} className="border border-border_color flex flex-col justify-center items-center w-full h-40 gap-4 text-center my-2 sm:my-0 hover:border-blue transition-all duration-700 ">
            <div className=" flex justify-center items-center rounded-full bg-border_color w-16 h-16">
                <Icon iconName={item.icon} className={' text-white !w-9 !h-9 '} />
            </div>
            <H4 className={'!text-base  '}>{item.conent}</H4>
        </div>)
}

export default AboutCard 