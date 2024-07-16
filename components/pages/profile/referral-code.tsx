"use client"

import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import React from 'react'
import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'
import useReferralCode from '@/hooks/useReferralCode'
import axios from '@/utils/axios'
import { useQueryClient } from '@tanstack/react-query'

const ReferralCode = () => {
    const { referralCode, isLoading, error } = useReferralCode()
    const queryClient = useQueryClient()

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error fetching referral code</div>

    const onCopy = (text: string) => {
        copy(text)
        toast.success('Referral code copied!')
    }

    const handleGenerateCode = async () => {
        const loadingToast = toast.loading("Generating your code...")
        try {
            await axios.post("/users/referral-code")
            queryClient.invalidateQueries({ queryKey: ['get-referral-code'] })
            toast.dismiss(loadingToast)
            toast.success("Referral code generated!")
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast)
            toast.error("Failed to generate referral code")
        }
    }

    return (
        <>
            {
                referralCode ?
                    <div className='w-full flex items-center justify-between p-5 text-center bg-gradient-to-br from-primary-dark to-primary-light gap-5 rounded-[8px] shadow-md text-wrap'>
                        <h1 className='text-lg md:text-2xl font-bold text-primary-white max-w-20'>{referralCode}</h1>
                        <Button className='text-primary-white hover:bg-primary-white hover:text-primary-default hover:border hover:border-primary-dark p-2 rounded-[4px]' onClick={() => onCopy(referralCode)}>
                            <Copy />
                        </Button>
                    </div> :
                    <div className='w-full flex flex-col items-center justify-center py-5 px-10 text-center bg-gradient-to-br from-primary-dark to-primary-light gap-5 rounded-[8px] shadow-md'>
                        <h1 className='text-lg font-cabinet-grotesk font-semibold text-primary-white'>
                            You have no referral code. Click button to generate your referral code
                        </h1>
                        <Button 
                            className='bg-primary-white text-primary-default border-primary-default border rounded-[4px] h-10 hover:bg-primary-default hover:text-primary-white'
                            onClick={handleGenerateCode}
                        >
                            Generate Code
                        </Button>
                    </div>
            }
        </>
    )
}

export default ReferralCode