import React from 'react'
import LogoImg from "../../../assets/images/Logo.png"

const Logo = () => {
  return (
    <div>
        <img src={LogoImg} alt="" className=" w-52 md:w-56 -ml-3 xl:ml-0 cursor-pointer" />
    </div>
  )
}

export default Logo