import React from 'react'

const Input = ({ className, type, placeholder, value }) => {
    return (
        <input type={type} placeholder={placeholder} autoComplete='none' value={value} className={` w-full text-sm sm:text-base tracking-wider focus:outline-none border-b border-dark_grey mb-2 bg-transparent py-2  placeholder:!text-dark_grey  ${className}`} />
    )
}

export default Input