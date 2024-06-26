import Image from 'next/image'
import React from 'react'
import eventImage from '@/assets/image/image 2.png'
import { Facebook, Instagram, Link as LinkIcon, Twitter } from 'lucide-react'
import Link from 'next/link'
import EventPrice from '@/components/pages/eventdetail/event-price-mobile'
import EventDesc from '@/components/pages/eventdetail/event-desc'
import EventInfo from '@/components/pages/eventdetail/event-info'

const EventDetailPage = ({ params }: { params: { eventSlug: string } }) => {

    return (
        <div className='w-full flex flex-col items-center p-5'>
            <div className='flex flex-col w-full md:max-w-6xl gap-8 md:gap-11'>
                <div className='bg-primary-lightest p-5 h-52 md:h-auto'>
                    <Image src={eventImage} alt='' className='w-full h-full object-cover' />
                </div>
                <div className='w-full flex flex-col gap-10'>
                    <EventDesc />
                    <EventPrice />
                </div>
            </div>
        </div>
    )
}

export default EventDetailPage