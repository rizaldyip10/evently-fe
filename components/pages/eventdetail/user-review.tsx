import React from 'react'
import ReviewCard from './review-card'

const UserReview = () => {
  return (
    <div className='w-full gap-5 mt-8 flex flex-col'>
        <ReviewCard />
        <ReviewCard />
    </div>
  )
}

export default UserReview