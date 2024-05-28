import React from 'react'

const index = ({className, children}) => {
  return (
    <button className={`!bg-blue hover:!scale-[1.02] transition-all duration-500 w-full !border-blue py-2.5 flex justify-center items-center rounded-md mt-3 !font-medium ${className}`}>{children}</button>
    )
}

export default index