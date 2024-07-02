import React from 'react'
import NavBar from "../../sections/nav-bar"
import HeroSection from '../../sections/hero-section'
import About from '../../sections/about'
import Hr from '../../components/hr'
import WhyUs from '../../sections/why-us'
import Faqs from '../../sections/faqs'
import Footer from '../../sections/footer'
import Priicng from '../../sections/princing'
import Contact from '../../sections/contact'


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