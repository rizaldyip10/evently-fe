import React from 'react'
import TicketTypeCard from './ticket-type-card'
import TicketSummary from './ticket-summary'

const TicketList = () => {
    return (
        <div className='w-full flex flex-col gap-10'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <TicketTypeCard />
                <TicketTypeCard />
                <TicketTypeCard />
                <TicketTypeCard />
                <TicketTypeCard />
                <TicketTypeCard />
            </div>
            <TicketSummary />
        </div>
    )
}

export default TicketList