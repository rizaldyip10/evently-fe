import { Separator } from '@/components/ui/separator'
import React from 'react'
import ProfileSidebarRoutes from './profile-sidebar-routes'

const ProfileSidebar = () => {
    return (
        <div className='w-full flex flex-col p-5 border border-light rounded-[4px] gap-4'>
            <div className='w-full flex items-center gap-2'>
                <div className='w-10 h-10 border rounded-full flex justify-center items-center'>
                    U
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-base font-medium'>Bang Wawan</h1>
                    <p className='text-xs'>
                        <span className='text-primary-default font-bold'>IDR 10.000</span> points
                    </p>
                </div>
            </div>
            <Separator className='bg-second-lightest' />
            <div>
                <ProfileSidebarRoutes />
            </div>
        </div>
    )
}

export default ProfileSidebar