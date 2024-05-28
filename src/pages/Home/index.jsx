import React from 'react'
import NavBar from "../../sections/NavBar"
import HeroSection from '../../sections/HeroSection'
import About from '../../sections/About'
import Hr from '../../components/Hr'
import WhyUs from '../../sections/WhyUs'
import Faqs from '../../sections/Faqs'
import Contact from '../../sections/Contact'
import Footer from '../../sections/Footer'
import Priicng from '../../sections/Princing'


const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Hr />
      <About />
      <Hr className={'absolute top-0 right-0 '} />
      <Priicng/>
      <Hr />
      <WhyUs />
      <Hr className={'absolute top-0 right-0 '} />
      <Faqs />
      <Hr />
      <Contact />
      <Hr className={'absolute top-0 right-0 '} />
      <Footer />
    </div>
  )
}

export default Home