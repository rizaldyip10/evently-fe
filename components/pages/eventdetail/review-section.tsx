import React from 'react'
import ReviewInput from './review-input'
import UserReview from './user-review'
import { Button } from '@/components/ui/button'

const ReviewSection = () => {
    
    return (
        <div className='w-full flex flex-col gap-4 font-general-sans'>
            <h1 className='text-2xl font-semibold font-general-sans'>Reviews</h1>
            <ReviewInput />
            <UserReview />
        </div>
    )
}

export default ReviewSection