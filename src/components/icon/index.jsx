import React from 'react'
import { Icon } from '@iconify/react'

const index = ({ iconName, className }) => {
  return (
    <Icon icon={iconName} className={` w-6 h-6 ${className}`} />
  )
}

export default index