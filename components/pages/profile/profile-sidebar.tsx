"use client"

import { Separator } from '@/components/ui/separator'
import React from 'react'
import ProfileSidebarRoutes from './profile-sidebar-routes'
import { CircleDollarSign } from 'lucide-react'
import useUserProfile from '@/hooks/useUserProfile'
import { currencyFormatter } from '@/utils/currency-formatter'

const ProfileSidebar = () => {
    const { profile } = useUserProfile()
    return (
        <div className='w-full flex flex-col p-5 border border-light rounded-[4px] gap-4'>
            <div className='w-full flex items-center gap-4'>
                <div className='w-11 h-11 border rounded-full flex justify-center items-center'>
                    U
                </div>
                <h1 className='text-xl font-medium'>Bang Wawan</h1>
            </div>
            <div className='w-full flex flex-col border border-second-lightest rounded-[10px] py-5 px-4 gap-5 bg-gradient-to-r from-primary-darkest to-primary-light text-primary-white shadow-md'>
                <div className='w-full flex items-center gap-2'>
                    <CircleDollarSign className='w-5 h-5' />
                    <h1 className='text-sm'>Your Points</h1>
                </div>
                <div className='w-full flex flex-col'>
                    <h1 className='text-lg font-bold'>
                        {
                            profile?.points ? 
                                currencyFormatter(profile.points.points) :
                                currencyFormatter(0)
                        }
                    </h1>
                    <p className='text-xs'>Expired at 31 Decemeber 2024</p>
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