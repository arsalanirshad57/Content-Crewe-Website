import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={`!bg-blue w-full !border-blue py-2.5 flex justify-center items-center rounded-md mt-3 !font-medium ${className}`}>{children}</button>
    )
}

export default Button