import Image from 'next/image'
import React from 'react'
import eventImage from '@/assets/image/image 2.png'
import EventPriceMobile from '@/components/pages/eventdetail/event-price-mobile'
import EventDesc from '@/components/pages/eventdetail/event-desc'
import ReviewSection from '@/components/pages/eventdetail/review-section'

const EventDetailPage = ({ params }: { params: { eventSlug: string } }) => {
    const slugToEventName = params.eventSlug.replace("-", " ")
    return (
        <div className='w-full flex flex-col items-center p-5 mb-20'>
            <div className='flex flex-col w-full md:max-w-6xl gap-8 md:gap-11'>
                <div className='bg-primary-lightest p-5 h-52 md:h-auto rounded-[4px]'>
                    <Image src={eventImage} alt='' className='w-full h-full object-cover rounded-[6px]' />
                </div>
                <div className='w-full flex flex-col gap-10'>
                    <EventDesc />
                    <EventPriceMobile />
                </div>
                <ReviewSection />
            </div>
        </div>
    )
}

export default EventDetailPage