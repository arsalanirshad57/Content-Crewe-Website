import React from 'react'
import Icon from '../../components/icon'


const SubscribeInput = ({ className }) => {
    return (
        <div className=' flex w-11/12 border border-dark_grey rounded-full relative'>
            <input type="text" className={`bg-transparent  focus:outline-none placeholder:text-dark_grey text-sm py-2.5 sm:py-3  px-3 grow `} placeholder='Type your Email' />
            <div className=" absolute -right-2 -top-0.5 w-fit rounded-full bg-blue p-2.5 sm:p-3  ">
                <Icon iconName={'mingcute:send-line'} className={''} />
            </div>
        </div>
    )
}

export default SubscribeInput