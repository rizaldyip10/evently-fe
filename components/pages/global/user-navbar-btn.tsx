import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import useUserProfile from '@/hooks/useUserProfile'
import { removeCookieClient } from '@/utils/client-cookies'
import { BadgeCent, ReceiptText, User } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserNavbarBtn = () => {
    const router = useRouter()
    const onLogout = () => {
        removeCookieClient("sid")
        signOut({ callbackUrl: '/' })
    }
    const { profile } = useUserProfile()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='w-10 h-10 border rounded-full'>
                {profile?.profileImg ? (
                    <Image src={profile.profileImg} alt={profile.name ?? 'User'} width={40} height={40} className='rounded-full object-cover' />
                ) : (
                    'U'
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-48 bg-primary-white mr-5'>
                <DropdownMenuLabel>{ profile?.name }</DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-second-lightest' />
                <DropdownMenuGroup className='flex flex-col gap-1 py-2'>
                    <DropdownMenuItem className='flex items-center gap-2 hover:cursor-pointer hover:bg-primary-lightest' onClick={() => router.push("/profile")}>
                        <User className='w-4 h-4' />
                        <p className='text-sm'>Profile</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex items-center gap-2 hover:cursor-pointer hover:bg-primary-lightest' onClick={() => router.push("/profile/referral")}>
                        <BadgeCent className='w-4 h-4' />
                        <p className='text-sm'>Referral Code</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex items-center gap-2 hover:cursor-pointer hover:bg-primary-lightest' onClick={() => router.push("/profile/orders")}>
                        <ReceiptText className='w-4 h-4' />
                        <p className='text-sm'>My Orders</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-error hover:cursor-pointer hover:bg-primary-lightest hover:text-error' onClick={onLogout}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserNavbarBtn