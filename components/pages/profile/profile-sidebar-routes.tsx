import React from 'react'
import ProfileSideBarItem from './profile-sidebar-item'
import { BadgeCent, ReceiptText, Ticket, User } from 'lucide-react'

const routes = [
    { label: 'Profile', href: '/profile', icon: User },
    { label: 'Referral', href: '/profile/referral', icon: BadgeCent },
    { label: 'My Ticket', href: '/profile/ticket', icon: Ticket },
    { label: 'Transactions', href: '/profile/transactions', icon: ReceiptText }
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