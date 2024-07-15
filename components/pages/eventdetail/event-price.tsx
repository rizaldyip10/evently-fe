"use client"

import { Button } from '@/components/ui/button'
import { TicketType } from '@/constants/type/event-list'
import { currencyFormatter } from '@/utils/currency-formatter'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface EventPriceProps {
    tickets: TicketType[]
}

const EventPrice: React.FC<EventPriceProps> = ({ tickets }) => {
    const pathname = usePathname()
    const router = useRouter()

    const onClick = () => {
        router.push(`${pathname}/tickets`)
    }

    const lowestPrice = Math.min(...tickets.map(ticket => ticket.price))
    
    return (
        <div className='hidden w-72 lg:flex flex-col py-5 px-8 border border-light items-center rounded-[8px] gap-4 font-general-sans'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h1 className='text-base font-medium text-light'>Ticket starting at</h1>
                <h1 className='font-bold text-xl'>{currencyFormatter(lowestPrice)}</h1>
            </div>
            <Button className='w-full p-0 flex justify-center items-center bg-primary-default rounded-[4px] text-primary-white hover:bg-primary-lightest hover:text-primary-default' onClick={onClick}>
                <h1 className='text-sm font-medium'>Buy tickets</h1>
            </Button>
        </div>
    )
}

export default EventPrice