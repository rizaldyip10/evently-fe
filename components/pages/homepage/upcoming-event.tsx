import React from 'react'
import UpcomingEventFilter from './upcoming-event-filter'
import EventList from '../global/event-list'
import { Button } from '@/components/ui/button'

const UpcomingEvent: React.FC = () => {
  return (
    <div className='mt-20 md:mt-[150px] w-full flex justify-center px-5 md:px-12 xl:px-[120px]'>
        <div className='w-full flex flex-col gap-7'>
            <h1 className='font-bold text-3xl text-default font-cabinet-grotesk'>Upcoming Events</h1>
            <UpcomingEventFilter />
            <div className='w-full mt-5 md:mt-10'>
                <EventList />
            </div>
            <div className='w-full flex justify-center'>
              <div className='w-1/4'>
                <Button variant="outline" className='w-full text-primary-default text-lg h-12'>
                  See more
                </Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvent