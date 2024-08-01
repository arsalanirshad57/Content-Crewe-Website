import React from 'react'
import H5 from '../typography/h5'
import H2 from '../typography/h2'
import Input from '../input'
import TextArea from '../text-area'
import AnimatedButton from '../buttons/animated-button'
import { useLocation } from 'react-router-dom'
import FormProvider from '../hook-form/form-provider'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import RHFInput from '../hook-form/rhf-input'
import RHFTextArea from '../hook-form/rhf-text-area'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser';

const CustomTeamComp = () => {
    const location = useLocation()
    console.log(location, 'location')
    const { CatgoryName, SubCategoryName } = location.state || {};

    const continuePackageSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        category_name: Yup.string().optional(),
        package_name: Yup.string().optional(),
        social_media_link: Yup.string().optional(),
        message: Yup.string().optional(),
    })

    const defaultValues = {
        name: '',
        email: '',
        category_name: CatgoryName,
        package_name: SubCategoryName,
        social_media_link: '',
        message: '',
    }

    const methods = useForm({
        resolver: yupResolver(continuePackageSchema),
        defaultValues,
    })

    const { reset, handleSubmit, formState: { errors } } = methods
    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                'service_ns73zh3',
                'template_ylxiivd',
                {
                    name: data?.name,
                    email: data?.email,
                    category_name: data?.category_name,
                    package_name: data?.package_name,
                    social_media_link: data?.social_media_link,
                    message: data?.message,
                },
                "rRd46INl_5iAp_Eay"
            )
            reset()
            toast.success("Message submit Successfully!! ")
        } catch (error) {
            toast.error(error?.text)
        }
    }
    return (
        <div className=' w-full lg:w-9/12 mx-auto flex flex-col  justify-center items-center  '>
            <div className=" flex flex-col my-10 text-center ">
                <H5>Contact Us</H5>
                <H2>Let&apos;s Contact With Us.</H2>
            </div>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 sm:gap-5 w-full">
                    <div className="flex flex-col sm:flex-row gap-5">
                        <RHFInput placeholder={'Name'} type={'name'} name={'name'} />
                        <RHFInput placeholder={'Email'} type={'email'} name={'email'} />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <RHFInput placeholder={'Category Name'} type={'text'} value={CatgoryName} name={'category_name'} className={''} readOnly={true} />
                        <RHFInput placeholder={'Package Name'} type={'text'} value={SubCategoryName} name={'package_name'} readOnly={true} />
                    </div>
                    <div className="flex  flex-col   gap-5">
                        <RHFInput placeholder={' Any Social Media Link'} type={'text'} name={'social_media_link'} />
                        <RHFTextArea placeholder={'Message'} rows={10} name={'message'} />
                    </div>
                    <div className="flex justify-end  ">
                        <AnimatedButton type={'submit'} >Submit</AnimatedButton>
                    </div>
                </div>
            </FormProvider>

        </div>
    )
}

export default CustomTeamComp 