import React from 'react'

const index = ({className, children}) => {
    return (
        <span className={` text-base text-blue   ${className} `}>{children}</span>
    )
}

export default index