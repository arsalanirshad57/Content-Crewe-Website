import React from 'react'
import LogoImg from "../../../assets/images/Logo.png"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <Link to={'/'}> <img src={LogoImg} alt="" className=" w-52 md:w-56 -ml-3 xl:ml-0 cursor-pointer" /></Link> 
    </div>
  )
}

export default Logo