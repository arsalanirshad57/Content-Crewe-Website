import React, { useState } from 'react'
import H3 from '../../typography/h3'
import Paragraph from '../../typography/paragraph'
import MobilePricingTab from './mobile-pricing-tab'
import Icon from '../../icon'
import { NavLink } from 'react-router-dom'


const MobilePricingSection = ({ PricingData }) => {
  console.log(PricingData, PricingData)
  const [PricingIndex, setPricingIndex] = useState(0)
  const handleClick = (index) => {
    setPricingIndex(index)
  }

  return (
    <div className=' flex flex-col  gap-10 w-full'>
      <div className={`flex justify-start items-center w-fit gap-1 flex-wrap bg-light-black px-4 py-3 rounded-full `}>
        {
          PricingData?.map((item, index) => (
            <div key={item?.id} className=' flex justify-center items-center flex-wrap gap-0.5 cursor-pointer' >
              {index !== 3 ? (
                <>
                  {index == 0 ? '' : <Icon iconName={item?.icon} className={'!text-blue '} />}
                  <Paragraph className={`  sm:!text-sm !font-medium  ${PricingIndex === index ? '!text-blue' : '!text-white'} `} onClick={() => handleClick(index)}>{item?.title}</Paragraph>
                </>
              ) : (
                <NavLink to='/chooseTeam' className='flex items-center'>
                  <Icon iconName={item?.icon} className={'!text-blue '} />
                  <Paragraph className={`!text-sm !font-medium ${PricingIndex === index ? '!text-blue' : '!text-white'} `} onClick={() => handleClick(index)}>{item?.title}</Paragraph>
                </NavLink>
              )
              }
            </div>
          ))
        }
      </div>

      <MobilePricingTab singlePricingCompData={PricingData[PricingIndex]} PricingIndex={PricingIndex} />
    </div>
  )
}

export default MobilePricingSection