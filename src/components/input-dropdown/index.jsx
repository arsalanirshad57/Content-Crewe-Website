import React, { useRef, useState, useEffect } from 'react';
import Paragraph from '../typography/paragraph';
import Icon from '../icon';

const InputDropdown = ({ options, initialValue }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [activeValue, setActiveValue] = useState(`Choose ${initialValue}`);
    const dropDownRef = useRef(null)
    // FUNCTIONS 
    const handleClick = (value) => {
        setActiveValue(`${initialValue}: ${value}`);
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

    // CLOSE DROPDOWN ON OUTSIDE CLICK

    useEffect(() => {
        const OutsideClickHandler = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpenDropdown(false)
            }
        }
        document.addEventListener('mousedown', OutsideClickHandler)
        return () => {
            document.removeEventListener('mousedown', OutsideClickHandler)
        }
    }, []);

    return (
        <div className="relative w-full mb-2">
            <div className={`group relative w-full border-b border-dark_grey cursor-pointer`} onClick={toggleDropdown}>
                <div className="flex items-center sm:mt-1.5 pb-1.5 sm:pb-0 ">
                    <Paragraph className={' !text-15px grow !text-dark_grey'}>{activeValue}</Paragraph>
                    <Icon iconName={'solar:alt-arrow-down-linear'} className={` w-5 h-5 sm:w-6 sm:h-6 group-hover:text-blue transition-all duration-500 ${openDropdown ? 'rotate-180 !text-blue' : ''}`} />
                </div>
            </div>
            {openDropdown && (
                <div ref={dropDownRef} className=" hide-scrollbar absolute top-12 w-full border-2 border-border_color bg-light-black z-20 max-h-56 overflow-auto">
                    {options?.map((option, index) => {
                        const activeOpt = `${initialValue}: ${option.label}`
                        return (
                            <Paragraph
                                key={index}
                                className={` w-full py-0.5 px-3 hover:!text-blue cursor-pointer border-b border-border_color  ${activeValue === activeOpt ? '!text-blue' : ''}`}
                                onClick={(e) => handleOptionClick(e, option.label)}
                            >
                                {option.label}
                            </Paragraph>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default InputDropdown;
