import React from 'react'
import Logo from "../../components/NavBarComp/Logo"
import Navigation from "../../components/NavBarComp/Navigation"
import Div from "../../components/Div"

const NavBar = () => {

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#about' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'Faqs', link: '#faqs' },
    { name: 'Contact', link: '#contact' },
  ]

  return (
    <Div className='fixed flex justify-between items-center w-full bg-black !py-0 z-50'>
        <Logo />
        <Navigation navItems={navItems} />
    </Div>
  )
}

export default NavBar