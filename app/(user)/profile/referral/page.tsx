import ReferralCode from '@/components/pages/profile/referral-code'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import React from 'react'

const ReferralPage = () => {
    return (
        <div className='w-full flex flex-col gap-10 px-5 lg:p-0'>
            <h1 className='text-xl font-semibold'>Referral Code</h1>
            <div className='w-full flex flex-col gap-2'>
                <h1 className='text-lg font-medium'>Your Referral Code</h1>
                <p>Share your referral code and gain IDR 10.000 points</p>
            </div>
            <ReferralCode />
        </div>
    )
}

export default ReferralPage