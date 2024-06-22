import React from 'react'
import Badge from '../global/badge'

const filters = [
    {
        label: "All",
        href: "/"
    },
    {
        label: "Today",
        href: "/"
    },
    {
        label: "Tomorrow",
        href: "/"
    },
    {
        label: "This Weekend",
        href: "/"
    },
    {
        label: "Free",
        href: "/"
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
                    label={item.label} 
                />
            ))
        }
    </div>
  )
}

export default UpcomingEventFilter