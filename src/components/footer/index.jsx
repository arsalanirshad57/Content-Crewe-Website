import React from 'react'
import Paragraph from '../typography/paragraph'
import H5 from '../typography/h5'
import H3 from '../typography/h3'
import AnchorTag from '../typography/anchor-tag'
import Icon from '../icon'
import SubscribeInput from '../subscribe-input'
import Logo from '../nav-bar/logo'
import { footerNav } from '../../data/footer'
import { footerIcons } from '../../data/footer'

const FooterSectionComp = () => {


    return (
        <div className=' grid grid-rows-3 grid-cols-1 sm:grid-rows-2  sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-5 col-span-1 '>
            <div className=" flex flex-col">
                <div className=" -ml-2 sm:-ml-4 -mb-2">
                    <Logo className='mb-5 ml-4' />
                </div>
                <H5 className={'!font-semibold !text-2xl !tracking-normal'}>Level Up Your Content Creation</H5>
                <Paragraph className={'!text-sm mt-2'}>Hire Your Future Video Team Now.</Paragraph>
            </div>
            <div className=" flex ">
                <div className=" flex  flex-col gap-3 sm:mx-auto">
                    <H3 className={'!text-dark_grey !text-2xl tracking-wide'} >UseFul Links</H3>
                    {
                        footerNav?.map((item, index) => (
                            <div key={item?.id} className="group flex items-center gap-2 hover:gap-3 transition-all duration-500 cursor-pointer" >
                                <AnchorTag href={item?.link}>{item?.label}</AnchorTag>
                                <Icon iconName="mingcute:arrow-up-line" className={`!w-5 mt-0.5 rotate-90 group-hover:!text-blue `} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className=" flex flex-col gap-5 sm:gap-8 mt-6 sm:mt-0 ">
                <H3 className={'!text-dark_grey !text-2xl tracking-wide'} >Social Media</H3>
                <div className=" flex gap-3">
                    {
                        footerIcons?.map((item) => (
                            <div key={item?.id} className=" flex justify-center items-center w-12 h-12 border rounded-full border-dark_grey hover:border-blue cursor-pointer group transition-all duration-500  ">
                                <Icon iconName={item?.icon} className={'!w-5 !h-5 group-hover:!text-blue '} />
                            </div> 
                        ))
                    }

                </div>
                <SubscribeInput />
            </div>

        </div>
    )
}

export default FooterSectionComp