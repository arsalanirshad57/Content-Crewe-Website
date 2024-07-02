import React from 'react'
import H4 from "../../typography/h4";
import Paragraph from '../../typography/paragraph'
import Icon from '../../icon';
import { NavLink } from 'react-router-dom';


const PricingNavigation = ({ data, onClick, className, categoryOpen, setCategoryOpen, ...others }) => {
    console.log(categoryOpen, 'categoryOpen');
    return (
        <div
            className={`flex justify-center items-center w-fit bg-light-black px-8 py-3 rounded-full lg:mb-5 ${className}`}
            {...others}
        >
            { 
                data?.map((item, index) => (
                    <div className=' flex justify-center items-center gap-2 cursor-pointer' >
                        {index !== 3 ? (
                            <> 
                                <Paragraph className={`!text-sm !font-medium !text-nowrap hover:!text-blue transition-all duration-500 ${categoryOpen === index ? '!text-blue' : '!text-white'} `} onClick={() => onClick(index)}>{item?.title}</Paragraph>
                                <Icon iconName={item?.icon} className={'!text-blue'} />
                            </>
                        ) : (
                            <NavLink to='/chooseTeam'>
                                <Paragraph className={`!text-sm !font-medium !text-nowrap hover:!text-blue transition-all duration-500  ${categoryOpen === index ? '!text-blue' : '!text-white'} `} onClick={() => onClick(index)}>{item?.title}</Paragraph>
                            </NavLink> 
                        )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default PricingNavigation 