import { TriangleAlert } from 'lucide-react'
import React from 'react'

const ReviewInputWarning = () => {
  return (
    <div className='w-full flex gap-2 items-center justify-center p-5 bg-warning border border-[#9a9316]'>
        <TriangleAlert className='w-8 h-8' />
        <p className='md:text-xl font-bold font-general-sans'>Only user who attends the event can review</p>
    </div>
  )
}

export default ReviewInputWarning