import React from 'react'
import Div from '../../components/div'
import ContactSectionComp from '../../components/contact-section-comp'


const Contact = () => {
  return (
  <Div id={'contact'} className={' bg-light-black flex justify-center '}>
    <ContactSectionComp/>
  </Div>
  )
}

export default Contact