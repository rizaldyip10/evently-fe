import Image from 'next/image'
import React from 'react'
import eventImg from '@/assets/image/image 3 (1).png'
import { ChevronRight } from 'lucide-react'

const OrderCard = () => {
  return (
    <div className='w-full flex border items-center border-light rounded-[6px] p-5 bg-primary-white hover:shadow-md'>
        <div className='w-full flex flex-col gap-3'>
            <h1 className='text-base font-medium'>3 July 2024</h1>
            <div className='w-full flex items-center'>
                <div className='flex flex-col md:flex-row gap-5'>
                    <Image src={eventImg} alt='' />
                    <div className='flex flex-col'>
                        <h1 className='text-lg font-semibold'>Drive in Senja: Back to The Future</h1>
                        <p>22 September 2024</p>
                        <p>Parkiran Utama Mall @ Alam Sutera</p>
                    </div>
                </div>
            </div>
        </div>
        <ChevronRight />
    </div>
  )
}

export default OrderCard