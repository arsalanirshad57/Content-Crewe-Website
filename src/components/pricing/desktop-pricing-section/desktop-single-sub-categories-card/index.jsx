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

const DesktopSingleSubCategoriesCard = ({ key, PricingDataSubCat, compPricingData, index }) => {
    return (
        <div key={key} className={` flex flex-col gap-3 w-full p-5 border border-border_color hover:border-blue rounded-2xl transition-all duration-700 ${index === 1 ? '!border-blue shadow-lg shadow-blue ' : ''}`}>
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
                    <Link to="/ContinuePackage" state={{ CatgoryName: compPricingData?.title, SubCategoryName: PricingDataSubCat?.title }} >
                        <Button>Get Started</Button>
                    </Link>
                    <a href="#contact">
                        <OutlineButton>Chat With Us</OutlineButton>
                    </a>
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
        </div>
    )
}

export default DesktopSingleSubCategoriesCard