import React from 'react'
import Badge from '../global/badge'

const filters = [
    {
        name: "Concerts",
        href: "/events?category=concerts"
    },
    {
        name: "Arts",
        href: "/events?category=arts"
    },
    {
        name: "Conferences",
        href: "/events?category=conference"
    },
    {
        name: "Movies",
        href: "/events?category=movies"
    },
    {
        name: "International",
        href: "/events?category=international"
    },
]

const UpcomingEventFilter = () => {
  return (
    <div className='w-full flex items-center gap-3 whitespace-nowrap overflow-x-scroll no-scrollbar'>
        {
            filters.map((item, index) => (
                <Badge 
                    classname='border border-primary-default text-primary-default w-max h-max p-3 rounded-[4px] text-xs md:text-base hover:bg-second-lightest cursor-pointer' 
                    key={index}
                    label={item.name} 
                />
            ))
        }
    </div>
  )
}

export default UpcomingEventFilter