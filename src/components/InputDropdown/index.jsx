import React, { useState } from 'react';
import Paragraph from '../Typography/Paragraph';
import Icon from '../Icon';

const InputDropdown = ({ options, initialValue }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [activeValue, setActiveValue] = useState(initialValue);

    const handleClick = (value) => {
        setActiveValue(value);
        setOpenDropdown(false);
    };

    const toggleDropdown = (e) => {
        e.stopPropagation(); 
        setOpenDropdown(!openDropdown);
    };

    const handleOptionClick = (e, value) => {
        e.stopPropagation(); 
        handleClick(value);
    };

    return (
        <div className="relative w-full mb-2">
            <div className={`group relative w-full border-b border-dark_grey cursor-pointer`} onClick={toggleDropdown}>
                <div className="flex items-center sm:mt-1.5 pb-1.5 sm:pb-0 ">
                    <Paragraph className={'grow !text-dark_grey'}>{activeValue}</Paragraph>
                    <Icon iconName={'solar:alt-arrow-down-linear'} className={`w-5 h-5 sm:w-6 sm:h-6 group-hover:text-blue transition-all duration-500 ${openDropdown ? 'rotate-180 !text-blue' : ''}`} />
                </div>
            </div>
            {openDropdown && (
                <div className="absolute top-12 w-full border-2 border-border_color bg-light-black z-20">
                    {options.map((option, index) => (
                        <Paragraph
                            key={index}
                            className={` w-full py-0.5 px-3 hover:!text-blue cursor-pointer border-b border-border_color  ${activeValue === option.label ? '!text-blue' : ''}`}
                            onClick={(e) => handleOptionClick(e, option.label)}
                        >
                            {option.label}
                        </Paragraph>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InputDropdown;
