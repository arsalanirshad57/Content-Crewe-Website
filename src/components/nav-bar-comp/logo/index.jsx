import React from 'react'
import LogoImg from "../../../assets/images/Logo.png"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className=' w-52 md:w-56 -ml-3 xl:ml-0 h-20'>
      <Link to={'/'}> <img src={LogoImg} className=" cursor-pointer " /></Link> 
    </div>
  )
}

export default Logo