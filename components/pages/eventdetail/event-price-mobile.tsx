"use client"

import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const EventPriceMobile = () => {
    const pathname = usePathname()
    const router = useRouter()

    const onClick = () => {
        router.push(`${pathname}/tickets`)
    }

    return (
        <div className='fixed w-full flex items-center justify-between -mx-5 bottom-0 bg-primary-white p-5 border-t border-second-lightest lg:hidden'>
            <div className='flex flex-col'>
                <h1 className='font-normal'>Ticket starting at</h1>
                <h1 className='font-semibold text-lg'>IDR 212.000</h1>
            </div>
            <Button className='flex justify-center items-center bg-primary-default text-[#fff] rounded-[4px] hover:bg-primary-lightest hover:text-primary-default hover:border hover:border-primary-default' onClick={onClick}>
                <h1>Buy Ticket</h1>
            </Button>
        </div>
    )
}

export default EventPriceMobile