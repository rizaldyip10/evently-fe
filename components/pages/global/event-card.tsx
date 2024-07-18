"use client"

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import eventImage from '@/assets/image/image 2.png'
import { useRouter } from 'next/navigation'
import { EventType, TicketType } from '@/constants/type/event-list'
import { monthList } from '@/constants/dummy-data/month'
import { currencyFormatter } from '@/utils/currency-formatter'

interface EventCardProps {
    classname?: string
    image?: string
    slug: string
    data: EventType
}

const EventCard: React.FC<EventCardProps> = ({ classname, image, slug, data }) => {
  const router = useRouter();
  const tickets = data.tickets as TicketType[]
  
  const month = new Date(data.date).getMonth()
  const day = new Date(data.date).getDate()
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
            <p className='font-semibold text-xl text-primary-default'>{monthList[month]}</p>
            <h1 className='font-bold text-2xl text-default'>{day}</h1>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-xl text-default '>
              {data.name}
            </h1>
            <p className='font-semibold text-base text-light '>
              {data.location}
            </p>
            <p className='text-base text-light'>{data.startTime} - {data.endTime}</p>
            <p className='text-base text-light'>
              {
                currencyFormatter(tickets[0]?.price || 0)
              }
            </p>
          </div>
        </div>
    </div>
  )
}

export default EventCard