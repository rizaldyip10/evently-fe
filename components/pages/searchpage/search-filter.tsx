"use client"

import { Separator } from '@/components/ui/separator'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CheckLabel from '../global/check-label'
import useDebounce from '@/hooks/useDebounce'

const categories = [
    { name: "Concerts", value: "concert" },
    { name: "Arts", value: "art" },
    { name: "Conferences", value: "conference" },
    { name: "Movies", value: "movie" },
    { name: "International", value: "international" },
]

const locations = [
    { name: "Jakarta", value: "jakarta" },
    { name: "Batam", value: "batam" },
    { name: "Singapore", value: "singapore" },
    { name: "Kuala Lumpur", value: "kuala lumpur" },
    { name: "Bandung", value: "bandung" },
]

const prices = [
    { name: "Free", value: "free" },
    { name: "Paid", value: "paid" },
]

const SearchFilter = () => {
    const [searchedCategory, setSearchedCategory] = useState<string[]>([])
    const [searchedLocation, setSearchedLocation] = useState<string[]>([])
    const [searchedPrice, setSearchedPrice] = useState<string[]>([])
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const debouncedCategory = useDebounce(searchedCategory, 600)
    const debouncedLocation = useDebounce(searchedLocation, 600)
    const debouncedPrice = useDebounce(searchedPrice, 600)

    useEffect(() => {
        let params = new URLSearchParams(searchParams.toString())

        if (debouncedCategory.length > 0) {
            params.set('category', debouncedCategory.join("%"))

        } else {
            params.delete('category')
        }

        if (debouncedLocation.length > 0) {
            params.set('location', debouncedLocation.join("%"))
        } else {
            params.delete('location')
        }

        if (debouncedPrice.length > 0) {
            params.set('location', debouncedPrice.join("%"))
        } else {
            params.delete('location')
        }

        router.push(`${pathname}?${params.toString()}`)
    }, [debouncedCategory, debouncedLocation, debouncedPrice, pathname, router, searchParams])

    return (
        <div className='w-full flex flex-col pl-8 lg:pl-16 pr-5'>
            <div className='w-full'>
                <h1 className='text-xl text-default font-semibold font-general-sans'>Filters</h1>
            </div>
            <Separator className='my-3 bg-second-lightest' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-base font-medium text-default'>Price</h1>
                <div className='flex flex-col gap-2'>
                    {
                        prices.map((price, i) => (
                            <CheckLabel value={price.value} label={price.name} key={i} onChange={setSearchedPrice} />
                        ))
                    }
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
        </div>
    )
}

export default SearchFilter