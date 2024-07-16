import { Button } from '@/components/ui/button'
import { TicketType } from '@/constants/type/event-list'
import { TicketCartType } from '@/constants/type/ticket-cart-type'
import { cn } from '@/lib/utils'
import { currencyFormatter } from '@/utils/currency-formatter'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

interface TicketTypeCardProps {
    ticket: TicketType
    updateAmount: (amount: number) => void
    ticketCart: TicketCartType
}


const TicketTypeCard: React.FC<TicketTypeCardProps> = ({ ticket, ticketCart, updateAmount }) => {
    const incrementAmount = () => {
        updateAmount(ticketCart.amount + 1)
    }

    const decrementAmount = () => {
        if (ticketCart.amount > 0) {
            updateAmount(ticketCart.amount - 1)
        }
    }
    return (
        <div className='w-full h-80 flex flex-col border border-second-lightest rounded-[4px] items-center gap-8 py-5 px-7 bg-primary-white justify-between'>
            <div className='w-full flex flex-col items-center text-center gap-4'>
                <h1 className='text-2xl font-cabinet-grotesk font-bold'>{ticket.name}</h1>
                <p className='text-sm font-general-sans'>
                    {ticket.description}
                </p>
            </div>
            <h1 className='font-medium text-2xl font-general-sans'>{currencyFormatter(ticket.price)}</h1>
            <div className='w-full flex justify-center items-center gap-7'>
                <Button 
                    className='w-7 h-7 p-0 flex items-center justify-center border border-primary-default rounded-[4px] hover:bg-primary-lightest'
                    disabled={ticketCart?.amount <= 0 ? true : false}
                    onClick={decrementAmount}
                >
                    <Minus className='text-primary-default w-3 h-3' />
                </Button>
                <h1 
                className={cn(
                    'text-2xl font-bold font-cabinet-grotesk',
                    ticketCart?.amount > 0 ? 'text-default' : 'text-second-lightest'
                    )}
                >
                    {ticketCart?.amount}
                </h1>
                <Button 
                    className='w-7 h-7 p-0 flex items-center justify-center border border-primary-default rounded-[4px] hover:bg-primary-lightest'
                    onClick={incrementAmount}
                >
                    <Plus className='text-primary-default w-3 h-3' />
                </Button>
            </div>
        </div>
    )
}

export default TicketTypeCard