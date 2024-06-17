import Navbar from '@/components/pages/navbar'
import React from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <div className='w-full h-20 absolute flex justify-center items-center border-b border-[#e8e8e8]'>
        <Navbar />
      </div>
      <div className='w-full pt-20'>
        { children }
      </div>
      {/* Footer di sini */}
    </div>
  )
}

export default UserLayout