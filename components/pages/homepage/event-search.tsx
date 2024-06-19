import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import DatePicker from './date-picker'
import { Button } from '@/components/ui/button'
import searchIcon from '@/assets/icons/icons8-search-50.png'
import Image from 'next/image'

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
      <div className='w-1/2 flex items-center pr-5'>
        <DatePicker />
        <Button className='w-5 h-5 bg-primary-default text-[#fff] rounded-[2px] ml-auto p-0'>
          <Image src={searchIcon} alt='' className='w-3 h-3 object-cover' />
        </Button>
      </div>
    </div>  
  )
}

export default EventSearch