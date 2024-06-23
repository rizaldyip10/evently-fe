import EventList from '@/components/pages/global/event-list'
import EventSearch from '@/components/pages/homepage/event-search'
import SearchFilter from '@/components/pages/searchpage/search-filter'
import React from 'react'

const SearchPage = () => {
  return (
    <div className='w-full flex relative my-5 lg:my-14'>
        <div className='w-72 my-10 border-r border-second-lightest absolute'>
          <SearchFilter />
        </div>
        <div className='mx-10 ml-80 flex flex-col gap-20'>
          <EventSearch />
          <EventList />
        </div>
    </div>
  )
}

export default SearchPage