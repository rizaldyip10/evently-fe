"use client"

import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import React, { useState } from 'react'
import DatePicker from './date-picker'
import searchIcon from '@/assets/icons/icons8-search-50.png'
import Image from 'next/image'

const EventSearch: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const urlSearchValue = searchParams.get("event") || ""
  const urlSearchDate = searchParams.get("date")

  const initialDate = urlSearchDate ? new Date(urlSearchDate) : undefined

  const [search, setSearch] = useState<string>(urlSearchValue)
  const [date, setDate] = useState<Date | undefined>(initialDate)

  const onSearch = () => {
    let params = new URLSearchParams(searchParams.toString())

    if (search.length > 0) {
      if (search.includes(" ")) {
        params.set('event', search.replace(" ", "+"))
      }
      params.set('event', search)
    } else {
      params.delete('event')
    }

    if (date && date.toDateString().length > 0) {
      params.set('date', format(date, "yyyy-MM-dd"))
    } else {
      params.delete('date')
    }

    router.replace(`/events?${params.toString()}`)
  }
  
  return (
    <div className='w-full border-default border md:h-16 flex items-center bg-[#fff] rounded-[2px]'>
      <div className='w-1/2'>
        <Input
          className='border-none text-[10px] md:text-lg placeholder:text-[10px] md:placeholder:text-lg'
          placeholder='Search by events, name, etc.'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Separator orientation='vertical' className='bg-second-lightest h-5 md:h-8' />
      <div className='w-1/2 flex items-center md:pr-5'>
        <DatePicker date={date} setDate={setDate} />
        <Button
          className={cn('w-10 h-10 md:w-10 lg:w-24 bg-primary-default text-[#fff] rounded-[2px] ml-auto p-0 lg:px-3 hover:bg-primary-lightest hover:text-primary-default')}
          onClick={onSearch}
        >
          <Image src={searchIcon} alt='' className='w-3 h-3 md:w-5 md:h-5 hover:text-primary-default object-cover' />
          <p className='hidden lg:block text-sm ml-1'>Search</p>
        </Button>
      </div>
    </div>
  )
}

export default EventSearch