import React from 'react'
import VideoAseLogo from "../../../assets/images/Logo.png"
import LogoText from "../../../assets/images/logos/logo-text.png"
import SvgLogo from '../../../assets/images/logos/Transparent-01.svg'

import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='  -ml-3 xl:ml-0  cursor-pointer w-full   '>
      <Link to={'/'} className='relative w-full'>
        <img src={VideoAseLogo} className=" w-56 -ml-4  border " />
         {/* <img src={LogoText} className=" w-56 border  " />    */}
      </Link> 
    </div>
  )
}

export default Logo  