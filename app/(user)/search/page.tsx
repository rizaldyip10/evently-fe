import EventList from '@/components/pages/global/event-list'
import SearchFilter from '@/components/pages/searchpage/search-filter'
import React from 'react'

const SearchPage = () => {
  return (
    <div className='w-full flex relative'>
        <div className='w-72 my-20 border-r border-second-lightest absolute'>
          <SearchFilter />
        </div>
        <div className='min-h-screen mt-20 mx-10 ml-80'>
          <EventList />
        </div>
    </div>
  )
}

export default SearchPage