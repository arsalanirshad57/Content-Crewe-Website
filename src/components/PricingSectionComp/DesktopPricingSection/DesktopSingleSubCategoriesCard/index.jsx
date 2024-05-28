import React from 'react'
import H4 from "../../../Typography/H4";
import Paragraph from "../../../Typography/Paragraph";
import Circle from '../../../Circle'

const DesktopSingleSubCategoriesCard = ({ PricingDataSubCat, index }) => {

    return (
        <div className={` flex flex-col gap-3 w-full p-5 border border-border_color hover:border-blue transition-all duration-700 ${index === 2 ? '' : ''}`}>
            <H4 className={' !text-2xl text-center !text-blue '}>{PricingDataSubCat.title}</H4>
            <Paragraph className={" !text-15px !leading-5 mt-4"}>{PricingDataSubCat.description}</Paragraph>
            <div className=' relative pb-14 h-full mt-2'>
                {PricingDataSubCat.team.map((teamData) => (
                    <div className="flex gap-2 items-start">
                        <Circle />
                        <H4 className={'!text-base my-auto text-nowrap'}>{teamData.name} :</H4>
                        <Paragraph className={'!text-15px !leading-5 mt-2'}>{teamData.teamQuantity}</Paragraph>
                    </div>
                ))}
                {PricingDataSubCat.videoOutPut.map((teamData) => (
                    <div className="flex gap-2  align-text-top ">
                        <Circle />
                        <H4 className={' !text-base my-auto text-nowrap'}>{teamData.name} :</H4>
                        <Paragraph className={'!text-15px !leading-5 grow mt-2'}>{teamData.content}</Paragraph>
                    </div>
                ))}
                {PricingDataSubCat.services?.map((serviceData) => (
                    <div className='my-2'>
                        <H4 className={'!text-base my-auto text-nowrap'}>{serviceData.name}</H4>
                        <div className="flex flex-col -mt-0.5">
                            {
                                serviceData.points?.map((item) => (
                                    <div className=' flex gap-2 items-start justify-start'>
                                        <Circle />
                                        <Paragraph className={'!text-15px !leading-5 mt-2'}>{item}</Paragraph>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                ))}
                <div className=" absolute bottom-0 w-full">
                    <button className={'!bg-blue hover:!scale-[1.02] transition-all duration-500 w-full !border-blue py-2.5 flex justify-center items-center rounded-md mt-3 !font-medium'}> Continue with ({PricingDataSubCat.price})</button>
                </div>
            </div>
        </div >
    )
}

export default DesktopSingleSubCategoriesCard