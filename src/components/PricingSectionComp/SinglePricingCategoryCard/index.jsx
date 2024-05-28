import React from 'react'
import H4 from "../../Typography/H4";
import Icon from '../../Icon';


const index = ({ icon, title, onClick, className }) => {
    return (
        <div
            className={`flex border border-border_color  flex-col justify-center items-center w-full py-10 md:h-80 gap-4 text-center my-2 px-2 hover:border-blue transition-all duration-700 cursor-pointer  ${className } `}
            onClick={onClick}
        >
            <div className="flex justify-center items-center rounded-full bg-border_color w-20 h-20 sm:w-24 sm:h-24">
                <Icon iconName={icon} className='text-white !w-10 !h-10 sm:!w-11 sm:!h-11' />
            </div>
            <H4>{title}</H4>
        </div>)
}

export default index