import React from 'react'

const OutlineButton = ({ className, children }) => {
    return (
        <button className={` w-full border border-grey hover:!border-blue py-2.5 flex justify-center items-center rounded-md mt-3 !font-medium ${className}`}>{children}</button>
    )
}

export default OutlineButton