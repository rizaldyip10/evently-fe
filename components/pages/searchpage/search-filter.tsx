"use client"

import { Separator } from '@/components/ui/separator'
import React, { useCallback, useState } from 'react'
import CheckLabel from '../global/check-label'
import SwitchLabel from '../global/switch-label'
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

const SearchFilter = () => {
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
        <div className='w-full flex flex-col pl-8 lg:pl-16 pr-5'>
            <div className='w-full'>
                <h1 className='text-xl text-default font-semibold font-general-sans'>Filters</h1>
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
                            <CheckLabel key={i} value={cat.name.toLowerCase()} label={cat.name} onChange={setSearchedCategory} />
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
                            <CheckLabel key={i} value={loc.value} label={loc.name} onChange={setSearchedLocation} />
                        ))
                    }
                </div>
            </div>
            <Button className='w-full bg-primary-default text-[#fff] mt-5 rounded-[2px] hover:bg-primary-lightest hover:text-primary-default' onClick={onFilterHandle}>
                Apply Filter
            </Button>
        </div>
    )
}

export default SearchFilter