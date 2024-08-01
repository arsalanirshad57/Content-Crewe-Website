import React from 'react'
import Logo from "../../components/nav-bar/logo"
import Navigation from "../../components/nav-bar/navigation"
import Div from "../../components/div"

const NavBar = () => {

  

  return (
    <Div className='fixed flex justify-between items-center w-full bg-black !py-2 z-50'>
      <Logo />
      <Navigation />
    </Div>
  )
}

export default NavBar