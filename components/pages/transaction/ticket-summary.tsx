import React from 'react'
import TicketCartList from './ticket-cart-list'
import { Button } from '@/components/ui/button'
import { TicketCartType } from '@/constants/type/ticket-cart-type'
import toast from 'react-hot-toast'
import axios from '@/utils/axios'
import { useRouter } from 'next/navigation'

interface TicketSummaryProps {
    ticketCart: TicketCartType[]
    eventSlug: string
}

const TicketSummary: React.FC<TicketSummaryProps> = ({ ticketCart, eventSlug }) => {
    const router = useRouter()

    const filteredTicketCart = ticketCart.filter(ticket => ticket.amount > 0)
    const trxId = sessionStorage.getItem("activeTrx")

    if (filteredTicketCart.length === 0) {
        return (
            <div className='w-full bg-primary-light flex justify-center items-center py-8'>
                <h1 className='text-2xl font-medium text-primary-white font-general-sans'>Choose your ticket now!</h1>
            </div>
        )
    }

    const onSubmit = async () => {
        const loadingToast = toast.loading("Submitting your tickets...")
        try {
            const { data, status } = await axios.put(`/transactions/${eventSlug}/${trxId}`, {
                ticketList: filteredTicketCart
            })
            console.log(data);
            
            if (status !== 200) throw new Error("Failed to submit tickets")

            toast.dismiss(loadingToast)
            toast.success("Your tickets have been submitted!")
            router.push(`/events/${eventSlug}/payment`)
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast)
            toast.error("Failed to submit your ticket")
        }
    }
    return (
        <div className='w-full bg-primary-light flex flex-col md:flex-row gap-7 md:gap-0 items-center justify-between px-8 py-4'>
            <div className='flex flex-col w-max'>
                <TicketCartList ticketCart={ticketCart} />
            </div>
            <Button 
                className='bg-primary-white text-primary-default border border-primary-default rounded-[4px] hover:bg-primary-lightest'
                onClick={onSubmit}
            >
                Buy Tickets
            </Button>
        </div>
    )
}

export default TicketSummary