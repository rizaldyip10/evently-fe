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

interface EventPriceProps {
    tickets: TicketType[]
    eventSlug: string
}

const EventPrice: React.FC<EventPriceProps> = ({ eventSlug, tickets }) => {
    const pathname = usePathname()
    const router = useRouter()
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps

    const onClick = async () => {
        const loadingToast = toast.loading("Loading...")
        try {
            const { data, status } = await axios.post(`/transactions/${eventSlug}`, {}, {
                headers: {
                    Authorization: `Bearer ${ user.token }`
                }
            });
            sessionStorage.setItem("activeTrx", data.data.id)
            toast.dismiss(loadingToast)
            
            if (status == 201) router.push(`${pathname}/tickets`)
        } catch (error) {
            toast.dismiss(loadingToast)
            toast.error("Something went wrong... Cannot go to ticket selection")
        }
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