"use client"

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AlignRight } from 'lucide-react'
import React, { useState } from 'react'
import ProfileMenuMobile from './profile-menu-mobile'
import { usePathname } from 'next/navigation'

const ProfileNavMobile = () => {
    const pathname = usePathname()
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const onMenuButton = () => {
        setMenuOpen(!isMenuOpen)
    }

    let pageName: string = pathname == '/profile' ? 'Profile' : pathname == '/profile/referral' ?  'Referral' : 'My Orders'

    return (
        <div className='w-full flex flex-col mb-5'>
            <div className='flex items-center gap-2'>
                <Button className='p-0' onClick={onMenuButton}>
                    <AlignRight className='text-light w-5 h-5' />
                </Button>
                <Separator orientation='vertical' className='bg-light h-5' />
                <p className='text-light text-sm'>{ pageName }</p>
            </div>
            <ProfileMenuMobile isOpen={isMenuOpen} onButton={onMenuButton} />
        </div>
    )
}

export default ProfileNavMobile