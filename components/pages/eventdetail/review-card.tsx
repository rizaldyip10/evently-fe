"use client"

import { Button } from '@/components/ui/button'
import { EllipsisVertical, Star } from 'lucide-react'
import React, { useState } from 'react'
import ReviewMenu from './review-menu'
import ReviewEditState from './review-edit-state'
import { UserReviewType } from '@/constants/type/user-review-type'
import { DateFormater } from '@/utils/date-formatter'

interface ReviewCardProps {
    eventSlug: string
    review: UserReviewType
}

const ReviewCard: React.FC<ReviewCardProps> = ({ eventSlug, review }) => {
    const [editState, setEditState] = useState<boolean>(false)

    if (editState) {
        return <ReviewEditState review={review} setEditState={setEditState} />
    }
    return (
        <div className='w-full flex items-start gap-5 p-5 border border-second-lightest rounded-[8px] bg-primary-white'>
            <div className='w-10 h-10 rounded-full border flex justify-center items-center'>
                P
            </div>
            <div className='flex flex-col gap-3 w-[80%] md:w-[98%]'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='font-bold font-general-sans text-xl'>{review.user.name}</h1>
                    {
                      review.user.email &&  <ReviewMenu reviewId={review.id} setEditState={setEditState} userEmail={review?.user?.email} /> 
                    }
                </div>
                <div className='flex gap-2 items-center'>
                    <Star className='text-[#e7e55c] w-5 h-5' />
                    <h1 className='text-base font-general-sans font-medium'>{review.rating} ratings</h1>
                    <p className='text-base font-general-sans font-medium ml-3'>{DateFormater(review.createdAt)}</p>
                </div>
                <p className='text-base font-general-sans'>
                    {review.review}
                </p>
            </div>
        </div>
        // <ReviewEditState />
    )
}

export default ReviewCard