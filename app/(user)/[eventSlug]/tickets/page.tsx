import EventDetailSection from '@/components/pages/transaction/event-detail'
import TicketList from '@/components/pages/transaction/ticket-list'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const TicketPage = ({ params }: { params: { eventSlug: string } }) => {
    const slugToEventName = params.eventSlug.replace("-", " ")
    return (
        <div className='w-full flex flex-col items-center p-5 mb-20 mt-10'>
            <div className='flex flex-col w-full md:max-w-7xl gap-11'>
                <div className='flex flex-col lg:flex-row items-start gap-8 lg:gap-14'>
                    <Link href={`/${params.eventSlug}`} className='w-11 h-11 flex items-center justify-center border border-primary-default rounded-[4px] bg-primary-white'>
                        <ArrowLeft className='w-5 h-5 text-primary-default' />
                    </Link>
                    <EventDetailSection />
                </div>
                <Separator className='bg-second-lightest' />
                <div className='w-full'>
                    <TicketList />
                </div>
            </div>
        </div>
    )
}

export default TicketPage