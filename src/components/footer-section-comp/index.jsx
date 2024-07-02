import React from 'react'
import Paragraph from '../../components/typography/paragraph'
import H5 from '../../components/typography/h5'
import H3 from '../../components/typography/h3'
import AnchorTag from '../../components/typography/anchor-tag'
import Icon from '../../components/icon'
import SubscribeInput from '../subscribe-input'
import Logo from '../nav-bar-comp/logo'

const FooterSectionComp = () => {

    const footerNav = [
        { id: '1', label: 'Home', link: "/" },
        { id: '2', label: 'About', link: '#about' },
        { id: '3', label: 'Pricing', link: '#pricing' },
        { id: '4', label: 'Faqs', link: "#faqs" },
        { id: '5', label: 'Contact', link: "#contact" },
    ]
    const footerIcons = [
        { id: '1', icon: 'mage:facebook', link: "" },
        { id: '2', icon: 'bi:instagram', link: '' },
        { id: '3', icon: 'mdi:youtube', link: '' },
        { id: '4', icon: 'ri:linkedin-fill', link: "" },
        { id: '5', icon: 'mdi:twitter', link: "" },
    ]

    return (
        <div className=' grid grid-rows-3 grid-cols-1 sm:grid-rows-2  sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-5 col-span-1 '>
            <div className=" flex flex-col   ">
                <div className=" -ml-2 sm:-ml-4 -mb-2">
                    {/* <Logo /> */}
                </div>
                <H5 className={'!font-semibold !text-2xl !tracking-normal'}>Save Your TIme and Money</H5>
                <Paragraph className={'!text-sm mt-2'}>We help youtubers and entrepreneurs save time, money & grow their brands with video content</Paragraph>
            </div>
            <div className=" flex  ">
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