import React from 'react'
import H5 from '../typography/h5'
import H2 from '../typography/h2'
import Input from '../input'
import TextArea from '../text-area'
import AnimatedButton from '../buttons/animated-button'


const CustomTeamComp = () => {

  
    return (
        <div className=' w-full lg:w-9/12 mx-auto flex flex-col  justify-center items-center  '>
            <div className=" flex flex-col my-10 text-center ">
                <H5>Contact Us</H5>
                <H2>Let&apos;s Contact With Us.</H2>
            </div>
            <div className="flex flex-col gap-3 sm:gap-5 w-full">
                <div className="flex flex-col sm:flex-row gap-5">
                    <Input placeholder={'Name'} type={'name'} />
                    <Input placeholder={'Email'} type={'email'} />
                </div>
                <div className="flex  flex-col   gap-5">
                    <Input placeholder={' Any Social Media Link'} type={'text'} />
                    <TextArea placeholder={'Message'} rows={10} />
                </div>
                <div className="flex justify-end  ">
                    <AnimatedButton >Submit</AnimatedButton>
                </div>
            </div>
        </div>
    )
}

export default CustomTeamComp