import React from 'react'
import H5 from '../typography/h5'

const BgTypo = ({ className, divClasss, children }) => {
  return (
    <div className={`flex justify-center items-center w-fit rounded-10br bg-gradient px-2 sm:px-2.5 h-8 sm:h-9 ${divClasss}`}>
      <H5 className={`uppercase ${className} `}>{children}</H5> 
    </div>
  )
}

export default BgTypo