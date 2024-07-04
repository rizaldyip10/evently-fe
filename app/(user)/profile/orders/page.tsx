import ProfileOrderFilter from '@/components/pages/profile/profile-order-filter'
import ProfileOrderList from '@/components/pages/profile/profile-order-list'
import React from 'react'

const TransactionPage = () => {
  return (
    <div className='w-full flex flex-col gap-10 px-5 lg:px-0'>
      <h1 className='text-xl font-semibold'>Your Order History</h1>
      <div className='w-full flex flex-col gap-5'>
        <ProfileOrderFilter />
        <ProfileOrderList />
      </div>
    </div>
  )
}

export default TransactionPage