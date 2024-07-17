"use client"

import { Button } from '@/components/ui/button'
import { TicketType } from '@/constants/type/event-list'
import { currencyFormatter } from '@/utils/currency-formatter'
import { usePathname, useRouter } from 'next/navigation'
import axios from '@/utils/axios'
import React from 'react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { UserSessionProps } from '@/constants/type/user-session-props'

interface EventPriceMobileProps {
    tickets: TicketType[]
    eventSlug: string
}

const EventPriceMobile: React.FC<EventPriceMobileProps> = ({ eventSlug, tickets }) => {
    const pathname = usePathname()
    const router = useRouter()
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps

    const onClick = async () => {
        const loadingToast = toast.loading("Loading...")
        try {
            const { data, status } = await axios.post(`/transactions/${eventSlug}`, {}, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            sessionStorage.setItem("activeTrx", data.data.id)
            toast.dismiss(loadingToast)
            
            if (status == 201) router.push(`${pathname}/tickets`)
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast)
            toast.error("Something went wrong... Cannot go to ticket selection")
        }
    }

    const lowestPrice = Math.min(...tickets.map(ticket => ticket.price))

    return (
        <div className='fixed w-full flex items-center justify-between -mx-5 bottom-0 bg-primary-white p-5 border-t border-second-lightest lg:hidden'>
            <div className='flex flex-col'>
                <h1 className='font-normal'>Ticket starting at</h1>
                <h1 className='font-semibold text-lg'>{currencyFormatter(lowestPrice)}</h1>
            </div>
            <Button className='flex justify-center items-center bg-primary-default text-[#fff] rounded-[4px] hover:bg-primary-lightest hover:text-primary-default hover:border hover:border-primary-default' onClick={onClick}>
                <h1>Buy Ticket</h1>
            </Button>
        </div>
    )
}

export default EventPriceMobile