"use client"

import React from 'react'
import { Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup'
import TextAreaField from '../global/text-area-field'
import { Button } from '@/components/ui/button'
import ReviewInputWarning from './review-input-warning'
import RatingInput from '../global/rating-input'

const ReviewInput = () => {
    const reviewSchema = Yup.object().shape({
        review: Yup.string().min(3, "Min 3 characters").max(140, "Max 140 characters").required("Your review is required")
    })

    const initialValue = {
        review: '',
        rating: 0,
        userId: ''
    }

    const onReviewSubmit = (value: FormikValues) => {
        console.log(value);
    }

    return (
        <div className='w-full flex flex-col gap-2'>
            <Formik
                initialValues={initialValue}
                validationSchema={reviewSchema}
                onSubmit={(value, action) => {
                    onReviewSubmit(value)
                    action.resetForm()
                }}
            >
                {() => (
                    <Form className='w-full flex-col flex gap-2'>
                        <div className='flex gap-2 items-center mb-3'>
                            <RatingInput />
                        </div>
                        <TextAreaField name='review' placeholder='Enter your review' />
                        <Button className='w-full bg-primary-default rounded-[4px] md:w-16' type='submit'>
                            <h1 className='text-primary-white text-sm'>Submit</h1>
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
        // <ReviewInputWarning />
    )
}

export default ReviewInput