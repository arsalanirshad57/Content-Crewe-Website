import React from 'react'

import H5 from '../typography/h5'
import H2 from '../typography/h2'
import AnimatedButton from '../buttons/animated-button'

import RHFInput from '../hook-form/rhf-input'
import RHFTextArea from '../hook-form/rhf-text-area'
import FormProvider from '../hook-form/form-provider'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const ContactSectionComp = () => {

    const messageSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Email is required'),
        message: Yup.string().required('Please write your Message')
    })

    const defaultVlaues = {
        name: '',
        email: '',
        message: '',
    }

    const methods = useForm({
        resolver: yupResolver(messageSchema),
        defaultVlaues,
    })

    const { reset, handleSubmit, formState: { errors } } = methods
    const onSubmit = (data) => {
        reset()
        console.log(data, 'data');
        console.log(errors, 'errors');
    }
    return (
        <div className=' w-full sm:w-9/12 flex flex-col justify-center gap-10 md:gap-16'>
            <div className="text-center">
                <H5>CONTACT US</H5>
                <H2>Contact us Today and Unlock the Power of Video Content Creation</H2>
            </div>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-7 w-full ">
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 w-full">
                        <RHFInput type={'text'} name={'name'} placeholder={'Name'} />
                        <RHFInput type={'email'} name={'email'} placeholder={'Email'} />
                    </div>
                    <RHFTextArea name={'message'} rows={10} placeholder={'Message'} />
                    <div className="flex justify-end">
                        <AnimatedButton type={'submit'} className={''}>Send Message</AnimatedButton>
                    </div>
                </div>
            </FormProvider>

        </div>
    )
}

export default ContactSectionComp