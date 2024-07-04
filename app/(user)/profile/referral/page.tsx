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
            {/* <div className='w-full lg:w-1/2 flex flex-col items-center justify-center py-5 px-10 text-center bg-gradient-to-br from-primary-dark to-primary-light gap-5 rounded-[8px] shadow-md'>
                <h1 className='text-lg font-cabinet-grotesk font-semibold text-primary-white'>
                    You have no referral code. Click button to generate your referral code
                </h1>
                <Button className='bg-primary-white text-primary-default border-primary-default border rounded-[4px] h-10 hover:bg-primary-default hover:text-primary-white'>
                    Generate Code
                </Button>
            </div> */}
            <ReferralCode />
        </div>
    )
}

export default ReferralPage