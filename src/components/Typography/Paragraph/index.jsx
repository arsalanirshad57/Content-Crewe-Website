import React from 'react'

const Paragraph = ({ children, className, onClick }) => {
    return (
        <p className={`text-sm sm:text-15px md:text-base leading-6 sm:leading-7 md:leading-8 text-grey ${className}`} onClick={onClick}>{children}</p>
    )
}

export default Paragraph