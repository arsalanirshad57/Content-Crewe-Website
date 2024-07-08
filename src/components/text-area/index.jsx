import React from 'react'

const TextArea = ({name, className , placeholder, rows}) => {
  return (
    <textarea name={name} rows={rows} placeholder={placeholder} className={` text-sm sm:text-base w-full focus:outline-none border border-dark_grey mb-2 bg-transparent p-2  placeholder:!text-dark_grey ${className}`}/>
  )
}

export default TextArea