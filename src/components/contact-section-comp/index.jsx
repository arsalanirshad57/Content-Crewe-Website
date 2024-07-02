import React from 'react'
import H5 from '../typography/h5'
import H2 from '../typography/h2'
import Input from '../input'
import TextArea from '../text-area'
import AnimatedButton from '../buttons/animated-button'

const ContactSectionComp = () => {
    return (
        <div className=' w-full sm:w-9/12 flex flex-col justify-center gap-10 md:gap-16'>
            <div className="text-center">
                <H5>CONTACT US</H5>
                <H2>Contact us Today and Unlock the Power of Video Content Creation</H2>
            </div>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                    <Input type={'name'} placeholder={'Name'} />
                    <Input type={'email'} placeholder={'Email'} />
                </div>
                <TextArea rows={10} placeholder={'Message'} />
                <div className="flex justify-end">
                    <AnimatedButton className={''}>Send Message</AnimatedButton>
                </div>
            </div>
        </div> 
    )
}

export default ContactSectionComp