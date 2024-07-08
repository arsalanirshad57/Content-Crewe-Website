import React from 'react'
import VideoAseLogo from "../../../assets/images/Logo.png"
import LogoText from "../../../assets/images/logo-text.png"
import SSLogoText from "../../../assets/images/ss-logo.png"

import { Link } from 'react-router-dom'

const Logo = ({ className }) => {
  return (
    <div className=' cursor-pointer w-full   '>
      <Link to={'/'} className='relative w-full'>
        <img src={SSLogoText} alt='logo' loading="lazy" className={` w-56 sm:w-72 h-16 sm:h-20 -ml-2  ${className} `} />
        {/* <img src={LogoText} className=" w-64 h-20 bg-red-500   " />    */}
      </Link> 
    </div>
  )
}

export default Logo  
