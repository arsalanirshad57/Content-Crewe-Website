import React, { useState, useRef, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Paragraph from '../typography/paragraph';
import Icon from '../icon'

const RHFInputDropdown = ({ name, initialValue, options }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const dropDownRef = useRef(null);
    const { control } = useFormContext();

    // FUNCTIONS
    const handleClick = (value, onChange) => {
        onChange(value);
        setOpenDropdown(false);
    };

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setOpenDropdown(!openDropdown);
    };

    const handleOptionClick = (e, value, onChange) => {
        e.stopPropagation();
        handleClick(value, onChange);
    };

    // CLOSE DROPDOWN ON OUTSIDE CLICK
    useEffect(() => {
        const OutsideClickHandler = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpenDropdown(false);
            }
        };
        document.addEventListener('mousedown', OutsideClickHandler);
        return () => {
            document.removeEventListener('mousedown', OutsideClickHandler);
        };
    }, []);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, formState: { errors } }) => (
                <div className='flex flex-col gap-2 w-full'>
                    <div className="relative w-full mb-1" ref={dropDownRef}>
                        <div
                            className="group relative w-full border-b border-dark_grey cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <div className="flex items-center sm:mt-1.5 pb-1.5 sm:pb-0">
                                <Paragraph className={`!text-15px grow ${field.value ? '!text-white' : '!text-dark_grey'}`}>
                                    {field.value    && `${initialValue}: ${field.value}` || `Choose ${initialValue}`}
                                </Paragraph>
                                <Icon iconName={'solar:alt-arrow-down-linear'} className={`!w-5 !h-5 group-hover:text-blue transition-all duration-500 ${openDropdown ? 'rotate-180 !text-blue' : ''}`} />
                            </div>
                        </div>
                        {openDropdown && (
                            <div className="hide-scrollbar absolute top-12 w-full border-2 border-border_color bg-light-black z-20 max-h-56 overflow-auto">
                                {options?.map((option, index) => (
                                    <Paragraph
                                        key={index}
                                        className={`w-full py-0.5 px-3 hover:!text-blue cursor-pointer border-b border-border_color ${field.value === option.label ? '!text-blue' : ''}`}
                                        onClick={(e) => handleOptionClick(e, option.label, field.onChange)}
                                    >
                                        {option.label}
                                    </Paragraph>
                                ))}
                            </div>
                        )}
                    </div>
                    {errors[name] && <p className='text-sm text-red-600 transition-all duration-500'>{errors[name]?.message}</p>}
                </div>
            )}
        />
    );
};

export default RHFInputDropdown;
