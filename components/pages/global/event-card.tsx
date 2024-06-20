import { cn } from '@/lib/utils'
import React from 'react'

interface EventCardProps {
    classname: string
    image: string
}

const EventCard: React.FC<EventCardProps> = ({ classname, image }) => {
  return (
    <div className={cn()}>
        EventCard
    </div>
  )
}

export default EventCard