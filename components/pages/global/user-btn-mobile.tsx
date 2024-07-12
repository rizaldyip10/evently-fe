import useUserProfile from '@/hooks/useUserProfile'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserBtnMobile = () => {
    const router = useRouter()
    const { profile } = useUserProfile()
    return (
        <div className='border rounded-[4px] p-4 flex items-center justify-between hover:cursor-pointer hover:bg-second-lightest' onClick={() => router.push("/profile")}>
            <div className='w-full flex items-center gap-3'>
                <div className='w-16 h-16 rounded-full border flex justify-center items-center'>
                    {
                        profile?.profileImg ?
                            <Image src={profile.profileImg} alt='' /> :
                            'U'
                    }
                </div>
                <h1 className='text-xl font-cabinet-grotesk font-medium'>{ profile?.name }</h1>
            </div>
            <ChevronRight className='text-light' />
        </div>
    )
}

export default UserBtnMobile