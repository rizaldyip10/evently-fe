import { Form, Formik, FormikValues } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextAreaField from '../global/text-area-field'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import RatingInput from '../global/rating-input'
import axios from '@/utils/axios'
import toast from 'react-hot-toast'
import { UserReviewType } from '@/constants/type/user-review-type'
import { useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { UserSessionProps } from '@/constants/type/user-session-props'

interface ReviewEditStateProps {
    setEditState: React.Dispatch<React.SetStateAction<boolean>>
    review: UserReviewType
}

const ReviewEditState: React.FC<ReviewEditStateProps> = ({ review, setEditState }) => {
    const queryClient = useQueryClient()
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps

    const reviewSchema = Yup.object().shape({
        review: Yup.string().min(3, "Min 3 characters").max(140, "Max 140 characters").required("Your review is required"),
        rating: Yup.number().min(1, "You have to give rating for the event").max(5, "Max rating is 5").required("Rating is required")
    })

    const initialValue = {
        review: review.review,
        rating: review.rating,
    }

    const onClick = () => {
        setEditState(false)
    }

    const onReviewSubmit = async (value: FormikValues) => {
        const loadingToast = toast.loading("Updating your review...")
        try {
            const response = await axios.put(`/review/user-review/${review.id}`, value, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            console.log(response);
            toast.dismiss(loadingToast)
            toast.success("Review updated")
            queryClient.invalidateQueries({ queryKey: ["get-event-reviews"] })
            onClick()
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast)
            toast.error("Failed to update your review")
        }
    }
    return (
        <div className='w-full flex items-start gap-5 pb-8 border-b border-second-lightest'>
            <div className='w-10 h-10 rounded-full border flex justify-center items-center'>
                P
            </div>
            <div className='flex flex-col gap-3 w-[80%] md:w-[98%]'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='font-bold font-general-sans text-xl'>Purwa Widodo</h1>
                    <Button className='w-5 h-5 p-0 hover:bg-second-lightest focus:outline-none' onClick={onClick}>
                        <X className='w-5 h-5' />
                    </Button>
                </div>
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
                            <div className='flex gap-2 items-center'>
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
        </div>
    )
}

export default ReviewEditState