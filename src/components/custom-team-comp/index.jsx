
import React from 'react'
import H5 from '../typography/h5'
import H2 from '../typography/h2'
import Input from '../input'
import TextArea from '../text-area'
import InputDropdown from '../input-dropdown'
import AnimatedButton from '../buttons/animated-button'

const CustomTeamComp = () => {

    const contStrategyData = [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
    ]
    const VideoEditorData = [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: '10' },
    ]
    const GraphicDesignerData = [
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: '10' },
    ]
    return (
        <div className=' w-full lg:w-9/12 mx-auto flex flex-col  justify-center items-center  '>
            <div className=" flex flex-col my-10 text-center ">
                <H5>Contact Us</H5>
                <H2>Let&apos;s Build Your Custom <br /> Team With Us.</H2>
            </div>
            <div className="flex flex-col gap-3 sm:gap-5 w-full">
                <div className="flex flex-col sm:flex-row gap-5">
                    <Input placeholder={'Name'} type={'name'} />
                    <Input placeholder={'Email'} type={'email'} />
                </div>
                <div className="flex  flex-col sm:flex-row gap-5">
                    <Input placeholder={'Category'} type={'text'} />
                    <InputDropdown options={VideoEditorData} initialValue={'No of Video Editors'} />
                </div>
                <div className="flex  flex-col sm:flex-row gap-5">
                    <InputDropdown options={GraphicDesignerData} initialValue={'No of Graphic Designers'} />
                    <InputDropdown options={contStrategyData} initialValue={'No of Content strategists'} />
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