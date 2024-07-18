import React from 'react'
import ReviewCard from '../eventdetail/review-card'
import ReviewCardAdmin from './reviewcard-admin'

const EventDetailContent = () => {
  return (
    <div className='w-full'>

        {/* Event description */}
        <div className='w-full gap-4 flex flex-col'>
            <h1 className='text-lg font-semibold w-full'>
                Event Description
            </h1>
            <p className='text-base font-normal w-full'>
                Drive-In Senja memberikan retro drive-in experience yang dikemas secara modern. Penggunaan transmisi radio kit, mengintegrasikan suara film ke dalam radio mobil, ditambah proyektor resolusi tinggi yang menyediakan pengalaman visual terbaik. Acara ini merupakan sarana yang aman untuk menghabiskan waktu bersama keluarga, pasangan, maupun komunitas
            </p>
        </div>

        {/* Event reviews */}
        <div className='w-full gap-4 bg-primary-white mt-4 flex flex-col h-[400px] overflow-scroll'>
            <h1 className='w-full text-lg font-semibold sticky top-0 bg-primary-white '>
                Event reviews
            </h1>
            <ReviewCardAdmin />
            <ReviewCardAdmin />
            <ReviewCardAdmin />
            

        </div>
    
      
    </div>
  )
}

export default EventDetailContent
