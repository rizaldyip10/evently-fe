"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import eventImage from '@/assets/image/image 2.png'
import { useRouter } from 'next/navigation'

interface EventCardProps {
    classname?: string
    image?: string
    slug: string
}

const EventCard: React.FC<EventCardProps> = ({ classname, image, slug }) => {
  const router = useRouter();
  return (
    <div 
      className={cn("w-full flex flex-col justify-center border bg-primary-white border-second-lightest rounded-[8px] cursor-pointer")}
      onClick={() => router.push(`/events/${slug}`)}
    >
        <div className='w-full'>
          <Image alt='' src={eventImage} className='w-full h-32 object-cover' />
        </div>
        <div className='w-full flex p-5 justify-center gap-4'>
          <div className='flex flex-col items-center'>
            <p className='font-semibold text-xl text-primary-default'>SEPT</p>
            <h1 className='font-bold text-2xl text-default'>22</h1>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-xl text-default '>
              Drive in Senja: Back to The Future
            </h1>
            <p className='font-semibold text-base text-light '>
              Parkiran Utama Mall @ Alam Sutra
            </p>
            <p className='text-base text-light'>20:00 - 21:56</p>
            <p className='text-base text-light'>IDR 212.000</p>
          </div>
        </div>
    </div>
  )
}

export default EventCard