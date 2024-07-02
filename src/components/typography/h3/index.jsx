import React from 'react'

const index = ({ className, children ,onClick}) => {
    return (
        <h3 className={` text-2xl sm:text-3xl lg:text-40px leading-9 sm:leading-10  lg:leading-56lh font-bold ${className}`} onClick={onClick}>{children}</h3>
    )
}

export default index