import React from 'react'
import { FormProvider as Form } from 'react-hook-form'


const FormProvider = ({ methods, onSubmit, children, ref }) => {
    return (
        <Form {...methods}>
            <form ref={ref} onSubmit={onSubmit} className='w-full'>{children}</form>
        </Form>
    )
}

export default FormProvider