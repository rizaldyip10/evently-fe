import { Separator } from '@/components/ui/separator'
import React from 'react'
import CheckLabel from '../global/check-label'
import SwitchLabel from '../global/switch-label'

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

const SearchFilter = () => {
  return (
    <div className='w-full flex flex-col pl-16 pr-5'>
        <div className='w-full'>
            <h1 className='text-xl text-default font-semibold font-general-sans'>Filters</h1>
        </div>
        <Separator className='my-3 bg-second-lightest' />
        <div className='flex flex-col gap-4 my-2'>
            <SwitchLabel name='Online' value='online' />
        </div>
        <Separator className='my-3 bg-second-lightest' />
        <div className='flex flex-col gap-4'>
            <h1 className='text-base font-medium text-default'>Price</h1>
            <div className='flex flex-col gap-2'>
                <CheckLabel value='free' label='Free' />
                <CheckLabel value='paid' label='Paid' />
            </div>
        </div>
        <Separator className='my-3 bg-second-lightest' />
        <div className='flex flex-col gap-4'>
            <h1 className='text-base font-medium text-default'>Categories</h1>
            <div className='flex flex-col gap-2'>
                {
                    categories.map((cat, i) => (
                        <CheckLabel key={i} value={cat.name.toLowerCase()} label={cat.name} />
                    ))
                }
            </div>
        </div>
        <Separator className='my-3 bg-second-lightest' />
        <div className='flex flex-col gap-4'>
            <h1 className='text-base font-medium text-default'>Location</h1>
            <div className='flex flex-col gap-2'>
                {
                    locations.map((loc, i) => (
                        <CheckLabel key={i} value={loc.value} label={loc.name} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default SearchFilter