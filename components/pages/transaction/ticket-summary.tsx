import React from 'react'
import TicketCartList from './ticket-cart-list'
import { Button } from '@/components/ui/button'

const TicketSummary = () => {
    return (
        // <div className='w-full bg-primary-light flex justify-center items-center py-8'>
        //     <h1 className='text-2xl font-medium text-primary-white font-general-sans'>Choose your ticket and quantity</h1>
        // </div>
        <div className='w-full bg-primary-light flex flex-col md:flex-row gap-7 md:gap-0 items-center justify-between px-8 py-4'>
            <div className='flex flex-col w-max'>
                <TicketCartList />
            </div>
            <Button className='bg-primary-white text-primary-default border border-primary-default rounded-[4px] hover:bg-primary-lightest'>
                Buy Tickets
            </Button>
        </div>
    )
}

export default TicketSummary