import EventList from '@/components/pages/global/event-list'
import EventSearch from '@/components/pages/homepage/event-search'
import MobileSearchFilter from '@/components/pages/searchpage/mobile-search-filter'
import SearchFilter from '@/components/pages/searchpage/search-filter'
import React from 'react'

const SearchPage = () => {
  return (
    <div className='w-full flex relative my-5 lg:my-14'>
        <div className='hidden md:block md:w-52 lg:w-72 my-10 border-r border-second-lightest md:absolute'>
          <SearchFilter />
        </div>
        <div className=' mx-6 md:mx-10 md:ml-56 lg:ml-80 flex flex-col gap-5 md:gap-20'>
          <EventSearch />
          <MobileSearchFilter />
          <EventList />
        </div>
    </div>
  )
}

export default SearchPage