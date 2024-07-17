import { auth } from '@/auth'
import NavbarAdmin from '@/components/pages/admin/navbar-admin'
import Sidebar from '@/components/pages/admin/sidebar'
import { UserSessionProps } from '@/constants/type/user-session-props'
import Link from 'next/link'
import React from 'react'

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  const user = session?.user as UserSessionProps

  if (user && user.role != "ROLE_ORGANIZER") {
    return (
      <div className='w-full h-screen flex justify-center items-center text-center flex-col gap-5'>
        <h1 className='text-5xl'>403 | FORBIDDEN</h1>
        <p>You are not allowed to access this page</p>
        <Link href="/" className='font-bold'>
          Back to homepage
        </Link>
      </div>
    )
  }
  
  return (
    <div className='w-full flex relative'>
      <div className='w-64 border-r border-[#CFCFCF] h-screen fixed hidden lg:block'>
        <Sidebar />
      </div>
      <div className='w-full lg:ml-64'>
        <div className='w-full h-16 md:h-20 bg-[#FFF] flex items-center border-b border-[#cfcfcf]'>
          <NavbarAdmin />
        </div>
        <div className='bg-[#FAFAFA] w-full min-h-screen'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default AdminLayout