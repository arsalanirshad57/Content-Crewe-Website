import React from 'react'

const index = ({ children, className }) => {
    return (
        <h5 className={` text-15px md:text-17px leading-6 font-light tracking-7tr  ${className}`}>{children}</h5>
    )
}

export default index