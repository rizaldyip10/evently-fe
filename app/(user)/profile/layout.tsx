import ProfileSidebar from '@/components/pages/profile/profile-sidebar'
import React from 'react'

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full flex items-start justify-center lg:px-20 relative my-10'>
            <div className='w-96 h-full flex flex-col items-center justify-center bg-primary-white'>
                <ProfileSidebar />
            </div>
            <div className='w-full pl-14'>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout