import React, { useState } from 'react';
import SinglePricingCategoryCard from '../single-pricing-category-card';
import DesktopSingleSubCategoriesCard from './desktop-single-sub-categories-card'

import { Link } from 'react-router-dom';

const DesktopPricingSection = ({ PricingData }) => {
    const [categoryOpen, setCategoryOpen] = useState(null);

    const singleSubCategoryOpen = (index) => {
        setCategoryOpen((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <div className="w-full ">
            <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-5">
                {PricingData?.map((singlePricingData, index) => (
                    index === 3 ? (
                        <Link to={'/chooseTeam'}>
                            <SinglePricingCategoryCard
                                icon={singlePricingData.icon}
                                title={singlePricingData.title}
                                onClick={() => singleSubCategoryOpen(index)}
                                className={`${categoryOpen === index ? '!border-blue' : ''}`}
                            />
                        </Link>
                    ) : (
                        <SinglePricingCategoryCard
                            icon={singlePricingData.icon}
                            title={singlePricingData.title}
                            onClick={() => singleSubCategoryOpen(index)}
                            className={`${categoryOpen === index ? '!border-blue' : ''}`}
                        />
                    )
                ))}
            </div>
            <div className={`flex justify-center flex-wrap mt-4 xl:grid xl:grid-rows-1 xl:grid-cols-3 gap-5 w-full `}>
                {
                    PricingData[categoryOpen]?.subCategories?.map((PricingDataSubCat, index) => {
                        return (
                            < DesktopSingleSubCategoriesCard
                                PricingDataSubCat={PricingDataSubCat}
                                index={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DesktopPricingSection;
