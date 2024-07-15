"use client"

import React from 'react'
import { Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup'
import TextAreaField from '../global/text-area-field'
import { Button } from '@/components/ui/button'
import ReviewInputWarning from './review-input-warning'
import RatingInput from '../global/rating-input'
import toast from 'react-hot-toast'
import { whiteSpaceRegex } from '@/lib/whitespace-regex'
import axios from '@/utils/axios'
import { useSession } from 'next-auth/react'
import { useQueryClient } from '@tanstack/react-query'

interface ReviewInputProps {
    eventSlug: string
}

const ReviewInput: React.FC<ReviewInputProps> = ({ eventSlug }) => {
    const queryClient = useQueryClient()
    const { data: session } = useSession();
    
    if (!session) return null;

    const reviewSchema = Yup.object().shape({
        review: Yup.string().min(3, "Min 3 characters").max(140, "Max 140 characters").required("Your review is required").matches(whiteSpaceRegex, "Your review is required"),
        rating: Yup.number().min(1, "You have to give rating for the event").max(5, "Max rating is 5").required("Rating is required")
    })

    const initialValue = {
        review: '',
        rating: 0,
    }

    const onReviewSubmit = async (value: FormikValues) => {
        const loadingToast = toast.loading("Submitting review...");
        try {
            const response = await axios.post(`/review/${eventSlug}`, value)
            console.log(response);
            
            toast.dismiss(loadingToast)
            toast.success("Review submitted")
            queryClient.invalidateQueries({ queryKey: ["get-event-reviews"] })
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error("Failed to submit your review")
        }
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
                        <Button className='w-full bg-primary-default text-primary-white rounded-[4px] md:w-16 hover:bg-second-lightest focus:outline-none hover:text-primary-default' type='submit'>
                            <h1 className='text-sm'>Submit</h1>
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
        // <ReviewInputWarning />
    )
}

export default ReviewInput