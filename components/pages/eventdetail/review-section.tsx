import React from 'react'
import ReviewInput from './review-input'
import UserReview from './user-review'
import { Button } from '@/components/ui/button'

interface ReviewSectionProps {
    eventSlug: string
}
const ReviewSection: React.FC<ReviewSectionProps> = ({ eventSlug }) => {

    return (
        <div className='w-full flex flex-col gap-4 font-general-sans'>
            <h1 className='text-2xl font-semibold font-general-sans'>Reviews</h1>
            <ReviewInput eventSlug={eventSlug} />
            <UserReview eventSlug={eventSlug} />
        </div>
    )
}

export default ReviewSection