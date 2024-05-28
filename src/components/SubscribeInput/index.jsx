import React from 'react'
import Icon from '../../components/Icon'


const SubscribeInput = ({ className }) => {
    return (
        <div className=' flex w-11/12 border border-dark_grey rounded-full'>
            <input type="text" className={`bg-transparent  focus:outline-none placeholder:text-dark_grey text-sm py-2 px-3 grow `} placeholder='Type your Email' />
            <div className=" w-fit rounded-full bg-blue p-3 -mr-3 ">
                <Icon iconName={'mingcute:send-line'} className={''} />
            </div>
        </div>
    )
}

export default SubscribeInput