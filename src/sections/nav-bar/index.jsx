import React from 'react'
import Logo from "../../components/nav-bar/logo"
import Navigation from "../../components/nav-bar/navigation"
import Div from "../../components/div"

const NavBar = () => {

  const navItems = [
    { id: '1', name: 'Home', link: '/' },
    { id: '2', name: 'About', link: '#about' },
    { id: '3', name: 'Pricing', link: '#pricing' },
    { id: '4', name: 'Faqs', link: '#faqs' },
    { id: '5', name: 'Contact', link: '#contact' },
  ]

  return (
    <Div className='fixed flex justify-between items-center w-full bg-black !py-0 z-50  '>
      <Logo />
      <Navigation navItems={navItems} />
    </Div>
  )
}

export default NavBar