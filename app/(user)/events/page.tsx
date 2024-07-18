import EventList from '@/components/pages/global/event-list'
import EventSearch from '@/components/pages/homepage/event-search'
import MobileSearchFilter from '@/components/pages/searchpage/mobile-search-filter'
import SearchFilter from '@/components/pages/searchpage/search-filter'
import SearchList from '@/components/pages/searchpage/search-list'
import React, { Suspense } from 'react'

const SearchPage = () => {
  return (
    <div className='w-full flex relative my-5 lg:my-14'>
      <Suspense fallback={<p>Loading...</p>}>
        <div className='hidden md:block md:w-52 lg:w-72 border-r border-second-lightest'>
          <SearchFilter />
        </div>
        <div className='w-full md:w-[80%] lg:w-[85%]'>
          <SearchList />
        </div>
      </Suspense>
    </div>
  )
}

export default SearchPage