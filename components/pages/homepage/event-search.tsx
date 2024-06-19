import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import DatePicker from './date-picker'

const EventSearch: React.FC = () => {
  return (
    <div className='w-full border-default border h-9 flex items-center bg-[#fff] rounded-[2px]'>
      <div className='w-1/2'>
        <Input 
          className='border-none placeholder:text-[10px]' 
          placeholder='Search by events, name, etc.'
        />
      </div>
      <Separator orientation='vertical' className='bg-second-lightest h-5' />
      <div className='w-1/2 flex'>
        <DatePicker />
      </div>
    </div>
  )
}

export default EventSearch