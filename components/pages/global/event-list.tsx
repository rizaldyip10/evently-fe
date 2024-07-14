import React from 'react'
import EventCard from './event-card'
import { EventType } from '@/constants/type/event-list'

interface EventListProps {
  data: EventType[] | undefined
}

const EventList: React.FC<EventListProps> = ({ data }) => {
  console.log(data);
  
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10'>
        {
          data?.map((data, i) => (
            <EventCard key={i} slug={data.slug}/>
          ))
        }
    </div>
  )
}

export default EventList