import React, { useState } from 'react'
import AnchorTag from '../../Typography/AnchorTag'
import Icon from '../../Icon'


const Navigation = ({ navItems }) => {
    const [navAtive, setNavActive] = useState(false)

    return (
        <div>
            <div className='hidden md:flex gap-5 lg:gap-7'>
                {
                    navItems.map((item) => (
                        <AnchorTag href={item.link}>{item.name}</AnchorTag>
                    ))
                }
            </div>
            <div className=" flex md:hidden cursor-pointer" onClick={() => setNavActive(!navAtive)}>
                {!navAtive ? <Icon iconName={'mi:menu'} className={'!w-9 !h-9'} /> : <Icon iconName={'radix-icons:cross-2'} className={'!w-8 !h-8 !z-[999]'} />}
            </div>
            <div className={`md:hidden fixed top-0 left-0 h-screen bg-black w-screen transition-transform duration-700 z-[998]  ${navAtive ? ' translate-x-0' : ' -translate-x-full'} `}>
                <div className='flex flex-col justify-center items-center h-screen gap-8'>
                    {
                        navItems.map((item) => (
                            <AnchorTag href={item.link} className={'!text-xl'} onClick={()=>{setNavActive(!navAtive)}}>{item.name}</AnchorTag>
                        ))
                    }
                </div>
            </div>  
        </div>
    )
}

export default Navigation