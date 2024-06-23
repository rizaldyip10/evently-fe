"use client"

import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import React, { useCallback, useState } from 'react'
import DatePicker from './date-picker'
import searchIcon from '@/assets/icons/icons8-search-50.png'
import Image from 'next/image'

const EventSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("")
  const [date, setDate] = useState<Date>()
  const router = useRouter()
  const searchParams = useSearchParams()

  // const createQueryString = useCallback((name: string, value: string) => {
  //   const params = new URLSearchParams(searchParams.toString())
  //   if (value.includes(" ")) {
  //     value.replace(" ", "+")
  //   }
  //   params.set(name, value)

  //   return params.toString()
  // }, [searchParams])

  // let searchQuery: string = createQueryString("event", search) + "&" + createQueryString("date", date ? date.toDateString() : '')

  // // if (search && date) {
  // //   searchQuery = createQueryString("event", search) + "&" + createQueryString("date", date.toDateString())
  // // } else if (search) {
  // //   searchQuery = createQueryString("event", search)
  // // } else if (date) {
  // //   createQueryString("date", date.toDateString())
  // // }

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
      params.set('date', date.toDateString())
    } else {
      params.delete('date')
    }

    router.replace(`/search?${params.toString()}`)
  }

  return (
    <div className='w-full border-default border h-9 md:h-16 flex items-center bg-[#fff] rounded-[2px]'>
      <div className='w-1/2'>
        <Input
          className='border-none text-[10px] md:text-lg placeholder:text-[10px] md:placeholder:text-lg'
          placeholder='Search by events, name, etc.'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Separator orientation='vertical' className='bg-second-lightest h-5 md:h-8' />
      <div className='w-1/2 flex items-center pr-5'>
        <DatePicker date={date} setDate={setDate} />
        <Button
          className={cn('w-5 h-5 md:w-10 lg:w-24 md:h-10 bg-primary-default text-[#fff] rounded-[2px] ml-auto p-0')}
          onClick={onSearch}
        >
          <Image src={searchIcon} alt='' className='w-3 h-3 md:w-5 md:h-5 object-cover' />
          <p className='hidden lg:block text-sm ml-1'>Search</p>
        </Button>
      </div>
    </div>
  )
}

export default EventSearch