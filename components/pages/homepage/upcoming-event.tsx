"use client"

import React from 'react'
import UpcomingEventFilter from './upcoming-event-filter'
import EventList from '../global/event-list'
import { Button } from '@/components/ui/button'
import useEventList from '@/hooks/useEventList'
import { useRouter } from 'next/navigation'
import useSearchFilters from '@/hooks/useSearchFilter'

const UpcomingEvent: React.FC = () => {
  const { filters } = useSearchFilters();
  const { events } = useEventList(filters);

  const router = useRouter();
  return (
    <div className='mt-20 md:mt-[150px] w-full flex justify-center px-5 md:px-12 xl:px-[120px]'>
      <div className='w-full flex flex-col gap-7'>
        <h1 className='font-bold text-3xl text-default font-cabinet-grotesk'>Upcoming Events</h1>
        <UpcomingEventFilter />
        <div className='w-full mt-5 md:mt-10'>
          <EventList data={events} />
        </div>
        <div className='w-full flex justify-center'>
          <div className='w-full md:w-1/4'>
            <Button
              variant="outline"
              className='w-full text-primary-default text-lg h-12 rounded-[4px]'
              onClick={() => router.push('/events')}
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvent