import React from 'react'
import H5 from '../../components/typography/h5'
import H2 from '../../components/typography/h2'
import DesktopPricingSection from './desktop-pricing-section'
import MobilePricingSection from './mobile-pricing-section'
import { PricingData } from '../../data/pricing'

const PricingSectionComp = () => {
  
    return (
        <div className='flex flex-col gap-10 md:gap-16 '>
            <div className="text-center ">
                <H5 className={'uppercase'}>Pricing</H5> 
                <H2>Fuel Your Growth with <br /> Powerful Video Packages </H2>
            </div>
            <div className=" hidden md:flex justify-center gap-5 ">
                <DesktopPricingSection PricingData={PricingData} />
            </div>
            <div className=" flex md:hidden justify-center">
                <MobilePricingSection PricingData={PricingData} />
            </div>
        </div>
    )
}

export default PricingSectionComp