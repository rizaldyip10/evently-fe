import ProfileNavMobile from '@/components/pages/profile/profile-nav-mobile'
import ProfileSidebar from '@/components/pages/profile/profile-sidebar'
import React from 'react'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
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