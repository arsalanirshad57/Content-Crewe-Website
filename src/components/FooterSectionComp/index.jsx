import React from 'react'
import Logo from '../../assets/images/Logo.png'
import Paragraph from '../../components/Typography/Paragraph'
import H5 from '../../components/Typography/H5'
import H3 from '../../components/Typography/H3'
import AnchorTag from '../../components/Typography/AnchorTag'
import Icon from '../../components/Icon'
import SubscribeInput from '../SubscribeInput'

const Footer = () => {

    const footerNav = [
        { label: 'Home', link: "/" },
        { label: 'About', link: '#about' },
        { label: 'Pricing', link: '#princing' },
        { label: 'Faqs', link: "#faqs" },
        { label: 'Contact', link: "#contact" },
    ]
    const footerIcons = [
        { icon: 'mage:facebook', link: "" },
        { icon: 'bi:instagram', link: '' },
        { icon: 'mdi:youtube', link: '' },
        { icon: 'ri:linkedin-fill', link: "" },
        { icon: 'mdi:twitter', link: "" },
    ]




    return (
        <div className=' grid grid-rows-3 grid-cols-1 sm:grid-rows-2  sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-5 col-span-1 '>
            <div className=" flex flex-col   ">
                <img src={Logo} alt="logo" className="w-52 md:w-56 -ml-4  " />
                <H5 className={'!font-semibold !text-2xl !tracking-normal'}>Save Your TIme and Money</H5>
                <Paragraph className={'!text-sm mt-2'}>We help youtubers and entrepreneurs save time, money & grow their brands with video content</Paragraph>
            </div>
            <div className=" flex  ">
                <div className=" flex  flex-col gap-3 sm:mx-auto">
                <H3 className={'!text-dark_grey !text-2xl tracking-wide'} >UseFul Links</H3>
                {
                    footerNav.map((item, index) => (
                        <div className="group flex items-center gap-2 hover:gap-3 transition-all duration-500" >
                            <AnchorTag href={item.link}>{item.label}</AnchorTag>
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
                        footerIcons.map((item) => (
                            <div className=" flex justify-center items-center w-12 h-12 border rounded-full border-dark_grey hover:border-blue cursor-pointer group transition-all duration-500  ">
                                <Icon iconName={item.icon} className={'!w-5 !h-5 group-hover:!text-blue '} />
                            </div>
                        ))
                    }

                </div>
                <SubscribeInput/>
            </div>

        </div>
    )
}

export default Footer