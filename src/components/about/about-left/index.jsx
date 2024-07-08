import React from 'react'
import AboutImg_1 from '../../../assets/images/about_1.png'
import AboutImg_2 from '../../../assets/images/about_2.png'
import AboutImg_3 from '../../../assets/images/about_3.png'


const AboutLeft = () => {
    return (
        <div className=' hidden sm:flex flex-col sm:flex-row justify-center lg:justify-start gap-5 w-full lg:w-1/2'>
            <div className="my-auto ">
                <img src={AboutImg_1} alt="img_2" loading="lazy" className=" w-full sm:w-72 lg:w-52 sm:h-48 rounded-xl object-cover object-center" />
            </div>
            <div className="flex flex-col gap-5 ">
                <img src={AboutImg_2} alt="img_1" loading="lazy" className=" w-full sm:w-96 lg:w-72 sm:h-56 rounded-xl object-cover object-center" />
                <img src={AboutImg_3} alt="img_3" loading="lazy" className=" w-full sm:w-72  lg:w-52 sm:h-48 rounded-xl object-cover object-center" />
            </div>
        </div>
    )
}

export default AboutLeft 