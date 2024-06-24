"use client"

import { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Filter } from 'lucide-react'
import React, { useState } from 'react'
import SwitchLabel from '../global/switch-label'
import { Separator } from '@radix-ui/react-separator'
import CheckLabel from '../global/check-label'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'

const categories = [
  {
    name: "Concerts"
  },
  {
    name: "Arts",
  },
  {
    name: "Conferences",
  },
  {
    name: "Movies",
  },
  {
    name: "International",
  },
]

const locations = [
  {
    name: "Jakarta",
    value: "jakarta"
  },
  {
    name: "Batam",
    value: "batam"
  },
  {
    name: "Singapore",
    value: "singapore"
  },
  {
    name: "Kuala Lumpur",
    value: "kuala lumpur"
  },
  {
    name: "Bandung",
    value: "bandung"
  },
]

const MobileSearchFilter = () => {
  const [searchedCategory, setSearchedCategory] = useState<string[]>([])
  const [searchedLocation, setSearchedLocation] = useState<string[]>([])
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const onFilterHandle = () => {
    let params = new URLSearchParams(searchParams.toString())

    if (searchedCategory.length > 0) {
      params.set('category', searchedCategory.join("%"))
    } else {
      params.delete('category')
    }

    if (searchedLocation.length > 0) {
      params.set('location', searchedLocation.join("%"))
    } else {
      params.delete('location')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }
  return (
    <Drawer>
      <DrawerTrigger className='w-full md:hidden bg-[#fff] border border-primary-default rounded-[4px] p-2'>
        <div className='flex items-center gap-x-2'>
          <Filter className='text-primary-default w-4 h-4' />
          <h1 className='text-primary-default text-sm'>Filter</h1>
        </div>
      </DrawerTrigger>
      <DrawerContent className='bg-[#fff] p-5'>
        <DrawerTitle>Filter</DrawerTitle>
        <DrawerDescription></DrawerDescription>
        <Separator className='my-3 bg-second-lightest' />
        <div className='flex flex-col gap-4'>
          <h1 className='text-base font-medium text-default'>Price</h1>
          <div className='flex gap-2'>
            <CheckLabel value='free' label='Free' />
            <CheckLabel value='paid' label='Paid' />
          </div>
        </div>
        <Separator className='my-3 bg-second-lightest' />
        <div className='flex flex-col gap-4'>
          <h1 className='text-base font-medium text-default'>Categories</h1>
          <div className='flex flex-wrap gap-x-2 gap-y-3'>
            {
              categories.map((cat, i) => (
                <CheckLabel key={i} value={cat.name.toLowerCase()} label={cat.name} onChange={setSearchedCategory} />
              ))
            }
          </div>
        </div>
        <Separator className='my-3 bg-second-lightest' />
        <div className='flex flex-col gap-4'>
          <h1 className='text-base font-medium text-default'>Location</h1>
          <div className='flex flex-wrap gap-x-2 gap-y-3'>
            {
              locations.map((loc, i) => (
                <CheckLabel key={i} value={loc.value} label={loc.name} onChange={setSearchedLocation} />
              ))
            }
          </div>
        </div>
        <Button className='w-full bg-primary-default text-[#fff] mt-5 rounded-[2px] hover:bg-primary-lightest hover:text-primary-default' onClick={onFilterHandle}>
          Apply Filter
        </Button>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileSearchFilter