import React from 'react'

const index = ({children , className}) => {
    return (
        <h4 className={` text-base md:text-lg leading-8 font-medium ${className} `}>{children}</h4>
    )
}

export default index