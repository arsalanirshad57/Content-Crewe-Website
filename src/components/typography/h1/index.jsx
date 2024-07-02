import React from 'react'

const index = ({children , className}) => {
  return (
    <h1 className={` text-4xl sm:text-5xl md:text-65px font-bold leading-50lh sm:leading-70lh md:leading-91lh bg-gradient bg-clip-text text-transparent ${className}`}>{children}</h1>
  )
}

export default index


