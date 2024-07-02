import React from 'react'
import H4 from "../../../typography/h4";
import H2 from "../../../typography/h2";
import Paragraph from "../../../typography/paragraph";
import BgTypo from '../../../typo-with-bg'
import Span from "../../../typography/span";
import Circle from '../../../circle'
import Button from '../../../buttons/button'
import OutlineButton from '../../../buttons/outline-button'
import { Link } from 'react-router-dom';
import Icon from '../../../icon';

const DesktopSingleSubCategoriesCard = ({ PricingDataSubCat, index }) => {

    return (
        <div className={` flex flex-col gap-3 w-full p-5 border border-border_color hover:border-blue rounded-2xl transition-all duration-700 ${index === 1 ? '!border-blue shadow-lg shadow-blue ' : ''}`}>
            {/* top  */}
            <div className="w-full flex flex-col gap-5 ">
                <div className="flex justify-between grow">
                    <H4>{PricingDataSubCat?.title}</H4>
                    {
                        index === 1 && (
                            <BgTypo className={'!w-fit !text-xs !tracking-wider !text-nowrap  '} divClasss='!h-6'>Most Popular</BgTypo>
                        )
                    }
                </div>

                <div className="flex items-end gap-2">
                    <H2 className={'!font-bold'}>{PricingDataSubCat?.price}</H2>
                    <Span className={'mb-3 !text-grey'}>/months</Span>
                </div>

            </div>
            {/* description  */}
            <div className="">
                <Paragraph className={" !text-15px !leading-5 my-4"}>{PricingDataSubCat?.description}</Paragraph>
                <div className="flex flex-col">
                    <Button>Get Started</Button>
                    <OutlineButton>Chat With Us</OutlineButton>
                </div>
            </div>
            {/* Feature  */}
            <H4 className={'mt-2'}>Features</H4>
            <div className='flex flex-col gap-2'>
                {PricingDataSubCat?.team?.map((teamData) => ( 
                    <div className="flex flex-col "> 
                    <H4 className={'!text-15px my-auto text-nowrap !inline-flex'}>{teamData?.name}</H4>
                        <Paragraph className={'!text-sm !leading-4 '}>{teamData.teamQuantity}</Paragraph>
                    </div>
                ))} 
                {PricingDataSubCat?.videoOutPut?.map((teamData) => (
                    <div className="flex flex-col ">
                        <H4 className={' !text-15px my-auto text-nowrap'}>{teamData?.name}</H4>
                        <Paragraph className={'!text-sm !leading-5 grow'}>{teamData?.content}</Paragraph>
                    </div>
                ))}
                {PricingDataSubCat?.services?.map((serviceData) => (
                    <div className=''>
                        <H4 className={'!text-base my-auto text-nowrap'}>{serviceData.name}</H4>
                        {
                            serviceData?.points?.map((item) => (
                                <div className='flex items-center gap-2 h-fit mb-2.5  '>
                                    <div className=" flex justify-center items-center w-5 h-5 bg-blue rounded-full p-1">
                                        <Icon iconName={'fa6-solid:check'} className={'!w-3.5 !h-3.5'} />
                                    </div>
                                    <Paragraph className={'!text-sm !leading-5 '}>{item}</Paragraph>
                                </div>
                            ))
                        }
                    </div>
                ))}
            </div>
            {/* <H4 className={' !text-2xl text-center !text-blue '}>{PricingDataSubCat?.title}</H4>
            <Paragraph className={" !text-15px !leading-5 mt-4"}>{PricingDataSubCat?.description}</Paragraph>
            <div className=' relative pb-14 h-full mt-2'>
                {PricingDataSubCat?.team?.map((teamData) => (
                    <div className="flex gap-2 items-start">
                        <Circle />
                        <H4 className={'!text-base my-auto text-nowrap'}>{teamData?.name} :</H4>
                        <Paragraph className={'!text-15px !leading-5 mt-2'}>{teamData.teamQuantity}</Paragraph>
                    </div>
                ))}
                {PricingDataSubCat?.videoOutPut?.map((teamData) => (
                    <div className="flex gap-2  align-text-top ">
                        <Circle />
                        <H4 className={' !text-base my-auto text-nowrap'}>{teamData?.name} :</H4>
                        <Paragraph className={'!text-15px !leading-5 grow mt-2'}>{teamData?.content}</Paragraph>
                    </div>
                ))}
                {PricingDataSubCat?.services?.map((serviceData) => (
                    <div className='my-2'>
                        <H4 className={'!text-base my-auto text-nowrap'}>{serviceData.name}</H4>
                        <div className="flex flex-col -mt-0.5">
                            {
                                serviceData?.points?.map((item) => (
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

                    <Link to={'/continuePackage'}>
                        <Button>Continue with ({PricingDataSubCat?.price})</Button>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default DesktopSingleSubCategoriesCard