import { Separator } from '@/components/ui/separator'
import React from 'react'

const OrderSummary = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
        <h1 className='text-2xl font-general-sans font-medium'>Order Summary</h1>
        <div className='w-full flex items-start justify-between border-b border-dashed border-primary-light pb-3 mt-5'>
            <p className='font-medium font-general-sans'>Ticket Type</p>
            <div className='w-max flex flex-col font-general-sans font-bold'>
                <p>2 x Paket VIP</p>
                <p>2 x Paket Reguler</p>
            </div>
        </div>
        <div className='w-full flex items-start justify-between border-b border-dashed border-primary-light pb-3'>
            <p className='font-medium font-general-sans'>Ticket price</p>
            <div className='w-max flex flex-col font-general-sans font-bold'>
                <p>2 x 371.000</p>
                <p>2 x 80.000</p>
            </div>
        </div>
        <div className='w-full flex items-start justify-between pb-3'>
            <h1 className='font-medium font-general-sans'>Total</h1>
            <h1 className='font-general-sans font-bold'>IDR 902.000</h1>
        </div>
    </div>
  )
}

export default OrderSummary