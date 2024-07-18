"use client"

import React from 'react'
import ReviewCard from './review-card'
import UseEventReviews from '@/hooks/useEventReviews'
import { Button } from '@/components/ui/button'

interface UserReviewProps {
  eventSlug: string
}

const UserReview: React.FC<UserReviewProps> = ({ eventSlug }) => {
  const {
    reviews,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = UseEventReviews(eventSlug);
  console.log(reviews);
  
  return (
    <div className='w-full gap-5 mt-8 flex flex-col'>
      {
        isLoading && <div>Loading...</div>
      }
      {
        error && <div>Error fetching user review</div>
      }
      {
        reviews && reviews.map((review, i) => (
          <ReviewCard key={i} eventSlug={eventSlug} review={review} />
        ))
      }
      {
        hasNextPage &&
          <div className='w-full flex justify-center'>
            <Button
              className='border border-primary-default rounded-[4px] text-primary-default w-1/5'
              onClick={() => fetchNextPage()}
            >
              See more
            </Button>
          </div>
      }
    </div>
  )
}

export default UserReview