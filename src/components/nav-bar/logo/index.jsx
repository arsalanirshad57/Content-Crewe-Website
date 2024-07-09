import React from 'react'
import LogoText from "../../../assets/images/Transparent-05.png"
import { Link } from 'react-router-dom'

const Logo = ({ className }) => {
  return (
    <div className=' cursor-pointer w-full   '>
      <Link to={'/'} className='relative w-full'>
        <img src={LogoText} alt='logo' loading="lazy" className={` w-48 sm:w-56 h-6 my-5 -ml-2  ${className} `} />
        {/* <img src={LogoText} className=" w-64 h-20 bg-red-500   " />    */}
      </Link>
    </div>
  )
}

export default Logo  
