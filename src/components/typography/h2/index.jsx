import React from 'react'

const index = ({ children, className }) => {
    return (
        <h2 className={` text-3xl sm:text-4xl md:text-5xl font-medium !leading-40lh md:!leading-64lh bg-gradient bg-clip-text text-transparent  ${className}`}>{children}</h2>
    )
}

export default index