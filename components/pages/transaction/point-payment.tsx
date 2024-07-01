import { Input } from '@/components/ui/input'
import { BadgeCent } from 'lucide-react'
import React from 'react'

const PointPayment = () => {
  return (
    <div className='w-full flex flex-col border border-light rounded-[4px] p-3 gap-4 bg-primary-white'>
        <div className='w-full flex items-center gap-2'>
            <BadgeCent />
            <h1 className='text-xl font-general-sans font-medium'>Points</h1>
        </div>
        <label className='w-full flex items-center gap-2'>
            <Input type='checkbox' className='w-4 h-4' />
            <h1 className='text-default'>Use your <span className='font-bold text-primary-default'>IDR 10.000</span> points</h1>
        </label>
    </div>
  )
}

export default PointPayment