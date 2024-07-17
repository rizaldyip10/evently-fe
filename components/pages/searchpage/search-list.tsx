"use client"

import React, { useMemo } from 'react'
import EventSearch from '../homepage/event-search'
import MobileSearchFilter from './mobile-search-filter'
import EventList from '../global/event-list'
import useEventList from '@/hooks/useEventList'
import { useSearchParams } from 'next/navigation'
import { SearchQueryType } from '@/constants/type/search-query-type'
import useSearchFilters from '@/hooks/useSearchFilter'
import { Button } from '@/components/ui/button'

const SearchList = () => {
    const { filters, handleFilterChange } = useSearchFilters();
    
    const {
        events,
        error,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
    } = useEventList(filters);

    return (
        <div className='w-full px-6 md:px-10 flex flex-col justify-start gap-5 md:gap-20'>
            <EventSearch />
            <MobileSearchFilter />
            {
                error && <div>Error fetching event list</div>
            }
            {isLoading ? (
                <div>Loading events...</div>
            ) : (
                <EventList data={events} />
            )}
            {
                hasNextPage &&
                    <div className='w-full flex justify-center'>
                        <Button 
                            className='border border-primary-default bg-primary-white rounded-[4px] w-1/4 text-primary-default'
                            onClick={() => fetchNextPage()}
                        >
                            See more
                        </Button>
                    </div>
            }
        </div>
    )
}

export default SearchList;