import React from 'react'

const index = ({className, children , id}) => {
  
  return (
    <div id={id} className={` px-4 md:px-10  xl:px-16 2xl:px-28 py-12 sm:py-20 md:py-28  ${className}`}>{children}</div>
  )
}

export default index