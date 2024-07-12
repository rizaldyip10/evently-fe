import React from 'react'
import ProfileSideBarItem from './profile-sidebar-item'
import { BadgeCent, ReceiptText, User } from 'lucide-react'

const routes = [
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Referral', href: '/profile/referral', icon: BadgeCent },
    { label: 'My Orders', href: '/profile/orders', icon: ReceiptText }
]

const ProfileSidebarRoutes = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
        {
            routes.map((item, index) => (
                <ProfileSideBarItem 
                    key={index}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                />
            ))
        }
    </div>
  )
}

export default ProfileSidebarRoutes