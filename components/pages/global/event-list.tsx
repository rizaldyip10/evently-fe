import React from 'react'
import EventCard from './event-card'

const EventList = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
    </div>
  )
}

export default EventList