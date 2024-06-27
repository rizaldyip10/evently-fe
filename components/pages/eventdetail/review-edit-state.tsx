import { Form, Formik, FormikValues } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextAreaField from '../global/text-area-field'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import RatingInput from '../global/rating-input'

interface ReviewEditStateProps {
    setEditState: React.Dispatch<React.SetStateAction<boolean>>
}

const ReviewEditState: React.FC<ReviewEditStateProps> = ({ setEditState }) => {
    const reviewSchema = Yup.object().shape({
        review: Yup.string().min(3, "Min 3 characters").max(140, "Max 140 characters").required("Your review is required")
    })

    const initialValue = {
        review: '',
        userId: ''
    }

    const onClick = () => {
        setEditState(false)
    }

    const onReviewSubmit = (value: FormikValues) => {
        console.log(value);
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
                            <Button className='w-full bg-primary-default rounded-[4px] md:w-16' type='submit'>
                                <h1 className='text-primary-white text-sm'>Submit</h1>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ReviewEditState