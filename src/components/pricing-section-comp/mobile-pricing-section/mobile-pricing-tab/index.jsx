import React, { useState } from 'react'
import H3 from '../../../typography/h3'
import Paragraph from '../../../typography/paragraph'
import H4 from "../../../typography/h4";
import Circle from '../../../circle'
import Button from '../../../buttons/button'
import SinglePricingCategoryCard from '../../pricing-navigation'
import { Link } from 'react-router-dom';

const MobilePricingTab = ({ singlePricingCompData, PricingIndex }) => {

  const [subCatgIndex, setSubCatgindex] = useState(0)
  const isSpecialCategory = PricingIndex === 3;

  const handleTabChange = (index) => {
    setSubCatgindex(index)
  }
  if (!singlePricingCompData) {
    return null;
  }
  return (
    isSpecialCategory ? (
      <Link to={'/chooseTeam'}>
        <SinglePricingCategoryCard icon={singlePricingCompData?.icon} title={singlePricingCompData?.title} />
      </Link>
    ) : (
      <div className=' relative flex flex-col gap-6 border border-border_color pb-20'>
        <div className=" grid grid-cols-3 grid-rows-1 col-span-1 w-full divide-x divide-border_color">
          {singlePricingCompData?.subCategories?.map((item, index) => (
            <div className={`flex items-center px-2 py-3 sm:p-3 border-border_color cursor-pointer   ${subCatgIndex === index ? ' border-b-2 !border-b-blue ' : 'border-b '}`} onClick={() => handleTabChange(index)}>
              <H3 className={` !text-15px  sm:!text-lg !text-center w-full !leading-normal `} >{item.title}</H3>
            </div>
          ))} 
        </div>
        <div className=" flex flex-col mt-2 px-2">
          <Paragraph className={"!text-sm !leading-5"}>{singlePricingCompData?.subCategories[subCatgIndex]?.description}</Paragraph>
          {singlePricingCompData?.subCategories &&
            <div className='   h-full mt-2'>
              {singlePricingCompData?.subCategories[subCatgIndex]?.team?.map((teamData) => (
                <div className=" flex flex-col sm:flex-row gap-1 sm:gap-2 items-start mt-2">
                  <Circle className={' hidden sm:block'} />
                  <H4 className={'!text-base my-auto text-nowrap'}>{teamData.name}</H4>
                  <Paragraph className={'!text-sm !leading-5 sm:mt-2'}>{teamData.teamQuantity}</Paragraph>
                </div>
              ))}
              {singlePricingCompData?.subCategories[subCatgIndex]?.videoOutPut?.map((teamData) => (
                <div className=" flex flex-col sm:flex-row gap-1 sm:gap-2 items-start mt-3 sm:mt-2">
                  <Circle className={' hidden sm:block'} />
                  <H4 className={' !text-base my-auto text-nowrap'}>{teamData.name}</H4>
                  <Paragraph className={'!text-sm !leading-5 grow sm:mt-2'}>{teamData.content}</Paragraph>
                </div>
              ))}
              {singlePricingCompData?.subCategories[subCatgIndex]?.services?.map((serviceData) => (
                <>
                  <H4 className={'!text-base my-auto text-nowrap mt-3 '}>{serviceData.name}</H4>
                  <div className="flex flex-col gap-0 ">
                    {
                      serviceData?.points?.map((item) => (
                        <div className=' flex gap-2 items-center justify-start -mt-1'>
                          <Circle />
                          <Paragraph className={'!text-sm !leading-5 '}>{item}</Paragraph>
                        </div>
                      ))
                    }
                  </div>
                </>
              ))}
              {
                singlePricingCompData?.subCategories[subCatgIndex]?.price &&
                <div className=" absolute bottom-4 w-11/12 mx-auto left-3">
                  <Link to={'/continuePackage'}>
                    <Button>Continue with ({singlePricingCompData?.subCategories[subCatgIndex]?.price})</Button>
                  </Link>
                </div>
              }
            </div>
          }
        </div>
      </div>
    )
  )
}

export default MobilePricingTab 