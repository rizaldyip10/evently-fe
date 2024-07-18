import React from 'react'
import { EllipsisVertical, Star } from 'lucide-react'

const ReviewCardAdmin = () => {
  return (
    <div className='w-full flex items-start gap-5 p-2 bg-blue-50'>
            <div className='w-10 h-10 rounded-full border flex justify-center items-center'>
                P
            </div>
            <div className='flex flex-col gap-3 w-[80%] md:w-[98%]'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className='font-bold font-general-sans text-xl'>Purwa Widodo</h1>
                </div>
                <div className='flex gap-2 items-center'>
                    <Star className='text-[#e7e55c] w-5 h-5' />
                    <h1 className='text-base font-general-sans font-medium'>4 ratings</h1>
                    <p className='text-base font-general-sans font-medium ml-3'>27 Jun 2024</p>
                </div>
                <p className='text-base font-general-sans'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, qui nobis a asperiores aperiam excepturi. Nostrum, adipisci quod quisquam expedita exercitationem magni distinctio neque. Assumenda quasi obcaecati magni ratione adipisci.
                </p>
            </div>
        </div>
  )
}

export default ReviewCardAdmin
