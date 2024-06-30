import Image from 'next/image'
import React from 'react'
import completeImg from '@/assets/image/pablita-915 1.png'
import { Button } from '@/components/ui/button'

const CompletePaymentPage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center h-screen gap-10'>
        <div className='w-max flex flex-col'>
            <div className='w-full border-[2px] border-primary-default rounded-[4px] px-10 p-2 flex justify-center'>
                <h1 className='text-5xl font-bold font-cabinet-grotesk text-primary-default'>Completed!</h1>
            </div>
            <Image src={completeImg} alt='' />
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-2xl font-medium font-general-sans'>Tickets have been sent to</h1>
          <p className='text-xl font-medium font-general-sans text-primary-default'>banggedung@gmail.com</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1>Haven&apos;t recieved ticket yet?</h1>
          <Button className='border border-primary-default rounded-[4px] text-primary-default bg-primary-white'>
            Resend Ticket
          </Button>
        </div>
    </div>
  )
}

export default CompletePaymentPage