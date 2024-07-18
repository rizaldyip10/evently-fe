import Image from 'next/image'
import React from 'react'
import eventImage from '@/assets/image/image 2.png'
import EventPriceMobile from '@/components/pages/eventdetail/event-price-mobile'
import EventDesc from '@/components/pages/eventdetail/event-desc'
import ReviewSection from '@/components/pages/eventdetail/review-section'
import axios from '@/utils/axios'
import { EventType } from '@/constants/type/event-list'

const EventDetailPage = async ({ params }: { params: { eventSlug: string } }) => {
    const { data } = await axios.get(`/event/${params.eventSlug}`);
    const eventData: EventType = data.data;
    console.log(eventData);
    
    return (
        <div className='w-full flex flex-col items-center p-5 mb-20'>
            <div className='flex flex-col w-full md:max-w-6xl gap-8 md:gap-11'>
                <div className='bg-primary-lightest p-5 h-52 md:h-auto rounded-[4px]'>
                    <Image src={eventImage} alt='' className='w-full h-full object-cover rounded-[6px]' />
                </div>
                <div className='w-full flex flex-col gap-10'>
                    <EventDesc data={eventData} />
                    <EventPriceMobile tickets={eventData.tickets} eventSlug={params.eventSlug} />
                </div>
                <ReviewSection eventSlug={params.eventSlug} />
            </div>
        </div>
    )
}

export default EventDetailPage