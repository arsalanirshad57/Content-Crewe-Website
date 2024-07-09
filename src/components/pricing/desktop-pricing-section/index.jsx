import React, { useState } from 'react';
import PricingNavigation from '../pricing-navigation';
import DesktopSingleSubCategoriesCard from './desktop-single-sub-categories-card'

import { Link } from 'react-router-dom';

const DesktopPricingSection = ({ PricingData }) => {
    const [categoryOpen, setCategoryOpen] = useState(0);

    const singleSubCategoryOpen = (index) => {
        setCategoryOpen(index);
    };
    return (
        <div className="w-full ">
            <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 lg:gap-5">
                <PricingNavigation
                    data={PricingData}
                    onClick={singleSubCategoryOpen}
                    categoryOpen={categoryOpen}
                    setCategoryOpen={setCategoryOpen}
                />
            </div>
            <div className={` lg:mt-4 grid grid-rows-3 grid-cols-1 xl:grid-rows-1 xl:grid-cols-3 gap-5 w-full `}>
                {
                    PricingData[categoryOpen]?.subCategories?.map((PricingDataSubCat, index) => {
                        return (
                            < DesktopSingleSubCategoriesCard
                                PricingDataSubCat={PricingDataSubCat}
                                index={index}
                                key={index}
                                compPricingData={PricingData[categoryOpen]}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DesktopPricingSection;
