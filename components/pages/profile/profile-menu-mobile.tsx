import React from 'react'
import ProfileSidebarRoutes from './profile-sidebar-routes'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface ProfileMenuMobileProps {
    isOpen: boolean
    onButton: () => void
}

const ProfileMenuMobile: React.FC<ProfileMenuMobileProps> = ({ isOpen, onButton }) => {
    const router = useRouter()

    const onClick = (href: string) => {
        router.push(href)
        onButton()
    }
    return (
        <div className={cn('w-full flex-col gap-1 text-light', isOpen ? 'flex' : 'hidden')}>
            <Button onClick={() => onClick('/profile')} variant='link' className='p-0 text-start w-max'>
                Profile
            </Button>
            <Button onClick={() => onClick('/profile/referral')} variant='link' className='p-0 text-start w-max'>
                Referral
            </Button>
            <Button onClick={() => onClick('/profile/orders')} variant='link' className='p-0 text-start w-max'>
               My Orders
            </Button>
        </div>
    )
}

export default ProfileMenuMobile