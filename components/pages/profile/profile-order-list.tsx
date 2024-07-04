import React from 'react'
import OrderCard from './order-card'

const ProfileOrderList = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
    </div>
  )
}

export default ProfileOrderList