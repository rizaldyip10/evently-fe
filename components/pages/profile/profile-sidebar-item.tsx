import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ProfileSideBarItemProps {
    label: string
    href: string
    icon: LucideIcon
}

const ProfileSideBarItem: React.FC<ProfileSideBarItemProps> = ({ label, href, icon: Icon }) => {
    return (
        <Link href={href} className={cn('w-full flex items-center gap-2 py-3 hover:font-bold')}>
            <Icon />
            <h1>{ label }</h1>
        </Link>
    )
}

export default ProfileSideBarItem