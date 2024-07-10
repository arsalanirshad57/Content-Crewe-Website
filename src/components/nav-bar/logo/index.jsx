import React from 'react'
import LogoText from "../../../assets/images/Transparent-05.png"
import { Link } from 'react-router-dom'

const Logo = ({ className }) => {
  return (
    <div className=' cursor-pointer w-full   '>
      <Link to={'/'} className='relative w-full'>
        <img src={LogoText} alt='logo' loading="lazy" className={` w-48 sm:w-56 h-[22px] my-5 ${className} `} />
      </Link>
    </div>
  )
}

export default Logo  
