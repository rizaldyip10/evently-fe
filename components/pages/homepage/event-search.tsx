import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import DatePicker from './date-picker'
import { Button } from '@/components/ui/button'
import searchIcon from '@/assets/icons/icons8-search-50.png'
import Image from 'next/image'

const EventSearch: React.FC = () => {
  return (
    <div className='w-full border-default border h-9 md:h-16 flex items-center bg-[#fff] rounded-[2px]'>
      <div className='w-1/2'>
        <Input 
          className='border-none placeholder:text-[10px] md:placeholder:text-base' 
          placeholder='Search by events, name, etc.'
        />
      </div>
      <Separator orientation='vertical' className='bg-second-lightest h-5 md:h-8' />
      <div className='w-1/2 flex items-center pr-5'>
        <DatePicker />
        <Button className='w-5 h-5 md:w-10 lg:w-24 md:h-10 bg-primary-default text-[#fff] rounded-[2px] ml-auto p-0'>
          <Image src={searchIcon} alt='' className='w-3 h-3 md:w-5 md:h-5 object-cover' />
          <p className='hidden lg:block text-sm ml-1'>Search</p>
        </Button>
      </div>
    </div>  
  )
}

export default EventSearch