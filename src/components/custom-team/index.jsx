import React from 'react'
import H5 from '../typography/h5'
import H2 from '../typography/h2'
import Input from '../input'
import TextArea from '../text-area'
import InputDropdown from '../input-dropdown'
import AnimatedButton from '../buttons/animated-button'
import { contStrategyData, VideoEditorData, GraphicDesignerData } from '../../data/custom-team'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import RHFInput from '../hook-form/rhf-input'
import RHFTextArea from '../hook-form/rhf-text-area'
import RHFInputDropdown from '../hook-form/rhf-input-dropdown'

const CustomTeamComp = () => {
    const continuePackageSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        category: Yup.string().optional(),
        video_editors: Yup.string().required('Must choose an option'),
        graphic_designer: Yup.string().required('Must choose an option'),
        content_strategist: Yup.string().required('Must choose an option'),
        social_media_link: Yup.string().optional().url('Must be a valid URL'),
        message: Yup.string().optional(),
    })

    const defaultValues = {
        name: '',
        email: '',
        category: '',
        video_editors: '',
        graphic_designer: '',
        content_strategist: '',
        social_media_link: '',
        message: '',
    }

    const methods = useForm({
        resolver: yupResolver(continuePackageSchema),
        defaultValues,
    })

    const { reset, handleSubmit, formState: { errors } } = methods

    const onSubmit = (data) => {
        console.log(data, 'data')
        console.log(errors, 'errors')
        reset()
    }

    return (
        <div className='w-full lg:w-9/12 mx-auto flex flex-col justify-center items-center'>
            <div className="flex flex-col my-10 text-center">
                <H5>Contact Us</H5>
                <H2>Let&apos;s Build Your Custom <br /> Team With Us.</H2>
            </div>

            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:gap-5 w-full">
                    <div className="flex flex-col sm:flex-row gap-5">
                        <RHFInput placeholder={'Name'} type={'text'} name={'name'} />
                        <RHFInput placeholder={'Email'} type={'email'} name={'email'} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <RHFInput placeholder={'Category'} type={'text'} name={'category'} />
                        <RHFInputDropdown options={VideoEditorData} initialValue={'No of Video Editors'} name={'video_editors'} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <RHFInputDropdown options={GraphicDesignerData} initialValue={'No of Graphic Designers'} name={'graphic_designer'} />
                        <RHFInputDropdown options={contStrategyData} initialValue={'No of Content Strategists'} name={'content_strategist'} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <RHFInput placeholder={'Any Social Media Link'} type={'url'} name={'social_media_link'} />
                        <RHFTextArea className={'mt-2'} placeholder={'Message'} rows={10} name={'message'} />
                    </div>
                    <div className="flex justify-end">
                        <AnimatedButton type={'submit'}>Submit</AnimatedButton>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default CustomTeamComp
