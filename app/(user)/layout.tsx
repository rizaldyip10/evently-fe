import { auth } from '@/auth'
import Footer from '@/components/pages/global/footer'
import Navbar from '@/components/pages/global/navbar'
import { ORGANIZER_DEFAULT_REDIRECT } from '@/constants/routes/web-routes'
import { UserSessionProps } from '@/constants/type/user-session-props'
import { redirect } from 'next/navigation'
import React from 'react'

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth()
  const user = session?.user as UserSessionProps

  if (user?.role == "ROLE_ORGANIZER") {
    return redirect(ORGANIZER_DEFAULT_REDIRECT)
  }
  
  return (
    <div className='min-h-screen bg-[#FAFAFA]'>
      <div className='w-full h-16 md:h-20 fixed bg-primary-white flex justify-center items-center border-b border-[#e8e8e8] z-50'>
        <Navbar />
      </div>
      <div className='w-full pt-16 md:pt-20'>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout