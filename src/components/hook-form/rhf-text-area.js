import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const RHFTextArea = ({ name, rows, placeholder, className }) => {
    const { control } = useFormContext()
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, formState: { errors } }) => (
                <div className='mb-2 flex flex-col gap-2'>
                    <textarea
                        {...field}
                        name={name}
                        rows={rows}
                        placeholder={placeholder}
                        className={` text-sm sm:text-base w-full focus:outline-none border border-dark_grey mb-2 bg-transparent p-2  placeholder:!text-dark_grey ${className}`}
                    />
                    {errors[name] && <p className='text-sm text-red-600 transition-all duration-500 '>{errors[name]?.message}</p>}
                </div>
            )}
        />
    )
}

export default RHFTextArea