import React from 'react'
import UpcomingEventFilter from './upcoming-event-filter'
import EventList from '../global/event-list'

const UpcomingEvent: React.FC = () => {
  return (
    <div className='mt-[150px] w-full flex justify-center px-32'>
        <div className='w-full flex flex-col gap-7'>
            <h1 className='font-bold text-3xl text-default font-cabinet-grotesk'>Upcoming Events</h1>
            <UpcomingEventFilter />
            <div className='w-full'>
                <EventList />
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvent