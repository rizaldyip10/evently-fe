import EventDetailSection from '@/components/pages/transaction/event-detail'
import TicketList from '@/components/pages/transaction/ticket-list'
import TransactionBackBtn from '@/components/pages/transaction/transaction-back-btn'
import { Separator } from '@/components/ui/separator'
import axios from '@/utils/axios'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import toast from 'react-hot-toast'


const TicketPage = ({ params }: { params: { eventSlug: string } }) => {
    
    return (
        <div className='w-full flex flex-col items-center p-5 mb-20 mt-10'>
            <div className='flex flex-col w-full md:max-w-7xl gap-11'>
                <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-14'>
                    <TransactionBackBtn href={`/events/${params.eventSlug}`} title='Exit the ticket page' desc='Are you sure you want to leave the page? Your ticket choice will not be saved' />
                    <EventDetailSection />
                </div>
                <Separator className='bg-second-lightest' />
                <div className='w-full'>
                    <TicketList eventSlug={params.eventSlug} />
                </div>
            </div>
        </div>
    )
}

export default TicketPage