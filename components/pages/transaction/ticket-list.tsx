"use client"

import React, { useEffect, useState } from 'react'
import TicketTypeCard from './ticket-type-card'
import TicketSummary from './ticket-summary'
import useTicketList from '@/hooks/useTicketList'
import { TicketType } from '@/constants/type/event-list'
import { TicketCartType } from '@/constants/type/ticket-cart-type'

interface TicketListProps {
    eventSlug: string
}


const TicketList: React.FC<TicketListProps> = ({ eventSlug }) => {
    const { ticketList, isLoading, error } = useTicketList(eventSlug)
    const tickets: TicketType[] = ticketList
    
    const [ticketCart, setTicketCart] = useState<TicketCartType[]>([])

    useEffect(() => {
        if (tickets) {
            setTicketCart(tickets.map(ticket => ({
                id: ticket.id,
                name: ticket.name,
                price: ticket.price,
                amount: 0
            })))
        }
    }, [tickets])

    const updateTicketCart = (id: number, amount: number) => {
        setTicketCart(prevTicketCart => 
            prevTicketCart.map(ticket => 
                ticket.id === id ? { ...ticket, amount } : ticket
            )
        )
    }
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    isLoading && <div>Loading...</div>
                }
                {
                    error && <div>Error fetching ticket list</div>
                }
                {
                    tickets?.map((ticket, i) => (
                        <TicketTypeCard 
                            ticket={ticket}
                            ticketCart={ticketCart[i]} 
                            key={i}
                            updateAmount={(amount) => updateTicketCart(ticket.id, amount)}
                        />
                    ))
                }
            </div>
            <TicketSummary ticketCart={ticketCart} eventSlug={eventSlug} />
        </div>
    )
}

export default TicketList