import Image from 'next/image'
import React from 'react'
import eventImage from '@/assets/image/image 3.png'
import { Calendar, MapPin } from 'lucide-react'

const EventDetailSection = () => {
    return (
        <div className='flex flex-col w-full lg:w-[95%] gap-14'>
            <h1 className='text-3xl font-bold font-cabinet-grotesk text-default'>
                Ticket Options
            </h1>
            <div className='flex flex-col lg:flex-row gap-11'>
                <Image src={eventImage} alt='' className='w-[507px] h-60 object-cover' />
                <div className='flex flex-col gap-5'>
                    <h1 className='text-2xl font-medium text-default font-general-sans'>Drive in Senja: Back to The Future</h1>
                    <div className='flex items-center gap-2'>
                        <Calendar />
                        <p>22 September 2024</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MapPin />
                        <p>Parkiran Utama Mall @ Alam Sutera</p>
                    </div>
                    <p>
                        Marty travels back in time using an eccentric scientist&apos;s time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EventDetailSection