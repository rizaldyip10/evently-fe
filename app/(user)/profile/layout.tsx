import { auth } from '@/auth'
import ProfileNavMobile from '@/components/pages/profile/profile-nav-mobile'
import ProfileSidebar from '@/components/pages/profile/profile-sidebar'
import { USER_DEFAULT_REDIRECT } from '@/constants/routes/web-routes'
import { redirect } from 'next/navigation'
import React from 'react'

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth()

    if (!session) {
        return redirect(USER_DEFAULT_REDIRECT)
    }
    return (
        <div className='w-full flex flex-col lg:flex-row items-start justify-center lg:px-20 relative my-5 lg:my-10'>
            <div className='w-96 h-full lg:flex flex-col items-center justify-center bg-primary-white hidden'>
                <ProfileSidebar />
            </div>
            <div className='w-full px-5 lg:hidden'>
                <ProfileNavMobile />
            </div>
            <div className='w-full lg:pl-14'>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout