"use client"

import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import React from 'react'
import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'

const ReferralCode = () => {
    const referralCode = 'EventlyBangWawan072024'

    const onCopy = (text: string) => {
        copy(text)
        toast.success('Referral code copied!')
    }
    
    return (
        <div className='w-1/2 flex items-center justify-between p-5 text-center bg-gradient-to-br from-primary-dark to-primary-light gap-5 rounded-[8px] shadow-md'>
            <h1 className='text-2xl font-bold text-primary-white'>{referralCode}</h1>
            <Button className='text-primary-white hover:bg-primary-white hover:text-primary-default hover:border hover:border-primary-dark p-2 rounded-[4px]' onClick={() => onCopy(referralCode)}>
                <Copy />
            </Button>
        </div>
    )
}

export default ReferralCode