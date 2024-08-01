import React from 'react'
import { Link } from 'react-router-dom'

const AnchorTag = ({ className, children, href, onClick, ...rests }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            {...rests}
            className={`text-base hover:text-blue relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue before:origin-center before:h-1px before:w-0 hover:before:w-50pr before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue after:origin-center after:h-1px after:w-0 hover:after:w-50pr after:bottom-0 after:right-[50%] ${className}`}
        >
            {children}
        </a>
    )
}
export default AnchorTag                  
