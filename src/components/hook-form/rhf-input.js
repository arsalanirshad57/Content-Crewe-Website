import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const RHFInput = ({ name, type, placeholder, className, readOnly }) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, formState: { errors } }) => (
                <div className='mb-2 flex flex-col gap-2 w-full'>
                    <input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                        readOnly={readOnly}
                        autoComplete='off'
                        className={` w-full text-sm sm:text-base tracking-wider focus:outline-none border-b border-dark_grey  bg-transparent py-2  placeholder:!text-dark_grey autofill:not-sr-only  ${className}`}
                    />
                    {errors[name] && <p className='text-sm text-red-500 transition-all duration-500 '>{errors[name]?.message}</p>}
                </div>
            )}
        />
    )
}

export default RHFInput