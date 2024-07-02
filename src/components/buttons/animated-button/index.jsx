import React from 'react'

const AnimatedButton = ({ className, children }) => {
    return (
        <button  className={`group relative cursor-pointer overflow-hidden  border rounded-md border-white px-6 py-2.5 hover:border-blue z-10 ${className} `}>
            <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-gradient transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32 focus:border-none"></span>
            <span className="ease relative transition duration-300  ">{children}</span>
        </button>
    )
}

export default AnimatedButton
