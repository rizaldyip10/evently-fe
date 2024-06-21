import React from 'react'
import EventCard from './event-card'

const EventList = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-10'>
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