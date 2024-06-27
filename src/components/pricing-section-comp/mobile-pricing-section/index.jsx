import React, { useState } from 'react'
import H3 from '../../typography/h3'
import Paragraph from '../../typography/paragraph'
import MobilePricingTab from './mobile-pricing-tab'
import Icon from '../../icon'

const MobilePricingSection = ({ PricingData }) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [activeValue, setActiveValue] = useState('Select Category')
  const [PricingIndex, setPricingIndex] = useState(null)

  console.log(PricingIndex , 'PricingData');
  
  const handleClick = (value, index) => {
    setActiveValue(value)
    setPricingIndex(index)
    setOpenDropdown(!openDropdown)
  }
  document.addEventListener('click', function (e) {
    const target = e.target
    if (target.closest('#dropdown')) {
      setOpenDropdown(true)
    } else {
      setOpenDropdown(false)
    }
  })

  return (
    <div className=' flex flex-col gap-10 w-full'>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 w-full px-2 sm:px-6">
        <H3 className={' !text-xl sm:!text-2xl text-nowrap'}>Select Category :</H3>
        <div id='dropdown' className={` group relative w-full border-2 border-border_color hover:border-blue grow px-1.5 sm:px-2 py-1.5 cursor-pointer transition-all duration-500 ${openDropdown ? 'border-blue' : ''} `} onClick={() => (setOpenDropdown(!openDropdown))}>
          <div className="flex items-center px-1">
            <Paragraph className={'!text-15px grow '}>{activeValue}</Paragraph>
            <Icon iconName={'solar:alt-arrow-down-linear'} className={` group-hover:text-blue transition-all duration-500 -rotate-180 ${openDropdown ? 'rotate-0  !text-blue' : ''}`} />
          </div>
          {
            openDropdown &&
            <div className=" group  absolute top-12 w-full border-2 border-border_color py-2 divide-y divide-border_color -ml-2 bg-light-black z-20">
              {PricingData?.map((singlePricingData, index) => (
                <Paragraph className={`!text-15px w-full py-1 px-3 hover:!text-blue ${activeValue === singlePricingData?.title ? '!text-blue' : ''}`} onClick={(e) => handleClick(e.target.innerText, index)} >
                  {singlePricingData?.title}
                </Paragraph>
              ))}
            </div>
          }
        </div>
      </div>
        <MobilePricingTab singlePricingCompData={PricingData[PricingIndex]} PricingIndex={PricingIndex}  />
    </div>
  )
}

export default MobilePricingSection