import { Calendar, Facebook, Instagram, Link as LinkIcon, MapPin, Star, Twitter } from 'lucide-react'
import React from 'react'
import EventPrice from './event-price'
import Link from 'next/link'
import { EventType } from '@/constants/type/event-list'
import { DateFormater } from '@/utils/date-formatter'

interface EventDescProps {
    data: EventType;
}

const EventDesc: React.FC<EventDescProps> = ({ data }) => {
    return (
        <div className='w-full flex flex-col gap-4 font-general-sans'>
            <div className='w-full flex items-start justify-between'>
                <div className='flex flex-col gap-4 max-w-[650px]'>
                    <h1 className='text-3xl font-bold'>{ data.name }</h1>
                    <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-10 items-start md:items-center my-2'>
                        <div className='flex gap-2 items-center'>
                            <Star className='text-[#e7e55c]' />
                            <h1>4.5 ratings</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1>Share:</h1>
                            <div className='flex gap-2'>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <LinkIcon className='w-4 h-4 text-primary-default' />
                                </Link>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <Instagram className='w-4 h-4 text-primary-default' />
                                </Link>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <Twitter className='w-4 h-4 text-primary-default' />
                                </Link>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <Facebook className='w-4 h-4 text-primary-default' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-2 items-center'>
                        <MapPin className='w-4 h-4 font-bold' />
                        <p className='font-bold'>{ data.location }</p>
                    </div>
                    <div className='w-full flex gap-2 items-center'>
                        <Calendar className='w-4 h-4 font-bold' />
                        <p className='font-bold'>{ DateFormater(data.date) } | {data.startTime} - {data.endTime}</p>
                    </div>
                </div>
                <EventPrice tickets={data.tickets} />
            </div>
            <div className='w-full flex flex-col gap-4 mt-5'>
                <h1 className='text-2xl font-semibold font-general-sans'>Description</h1>
                <p className='text-base font-normal font-general-sans'>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

export default EventDesc