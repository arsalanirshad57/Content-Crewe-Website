import React from 'react'

const index = ({name, className , placeholder, rows}) => {
  return (
    <textarea name={name} rows={rows} placeholder={placeholder} className={` text-15px w-full focus:outline-none border-b border-dark_grey mb-2 bg-transparent py-2  placeholder:!text-dark_grey  ${className}`}/>
  )
}

export default index