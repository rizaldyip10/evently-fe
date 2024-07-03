"use client"

import { Form, Formik, FormikValues } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import InputField from '../global/inputfield'
import { Button } from '@/components/ui/button'

const ProfileBio = () => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const initialValue = {
        name: '',
        email: '',
        phone: ''
    }

    const profileSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Min 3 characters').required('Please enter your name'),
        email: Yup.string().email('Please enter valid email').required('Please enter your email'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Please enter your phone number')
    })

    const onProfileSubmit = (value: FormikValues) => {
        console.log();
    }

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={profileSchema}
            onSubmit={(value, action) => {
                onProfileSubmit(value)
                action.resetForm()
            }}
        >
            {() => (
                <Form className='flex flex-col w-[60%] gap-5'>
                    <InputField 
                        name='name'
                        placeholder='Your name'
                        type='text'
                        label='Name'
                    />
                    <InputField 
                        name='email'
                        placeholder='Your email'
                        type='email'
                        label='Email'
                    />
                    <InputField
                        name='phone'
                        placeholder='Your phone number'
                        type='text'
                        label='Phone number'
                    />
                    <div className='w-full flex'>
                        <Button className='bg-primary-default text-primary-white hover:bg-primary-lightest hover:text-primary-default rounded-[4px]' type='submit'>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ProfileBio