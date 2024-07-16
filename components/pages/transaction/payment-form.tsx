"use client"

import React, { useState } from 'react'
import PaymentMethodList from './payment-method-list'
import { Separator } from '@radix-ui/react-separator'
import VoucherSelect from './voucher-select'
import PointPayment from './point-payment'
import OrderSummary from './order-summary'
import { UsedVoucherType } from '@/constants/type/used-voucher-type'
import toast from 'react-hot-toast'
import axios from '@/utils/axios'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import useUserProfile from '@/hooks/useUserProfile'

interface PaymentFormProps {
    eventSlug: string
}

const PaymentForm: React.FC<PaymentFormProps> = ({ eventSlug }) => {
    const [selectedVoucher, setSelectedVoucher] = useState<UsedVoucherType[]>([])
    const [paymentMethod, setPaymentMethod] = useState<string>('')
    const [isPointUsed, setIsPointUsed] = useState<boolean>(false)
    const { profile } = useUserProfile()
    console.log('data', {
        paymentMethod,
        isPointUsed,
        selectedVoucher
    });

    const userPoint = profile?.points && profile?.points.points
    
    
    const router = useRouter()
    const trxId = sessionStorage.getItem("activeTrx")

    const handleVoucherSelect = (voucher: UsedVoucherType) => {
        setSelectedVoucher(prev => {
            const existingVoucherIndex = prev.findIndex(v => v.name === voucher.name);
            if (existingVoucherIndex !== -1) {
                if (voucher.discount === 0) {
                    // Remove the voucher if the discount is 0 (unchecked)
                    return prev.filter(v => v.name !== voucher.name);
                } else {
                    // Update the existing voucher
                    const newVouchers = [...prev];
                    newVouchers[existingVoucherIndex] = voucher;
                    return newVouchers;
                }
            } else {
                // Add the new voucher
                return [...prev, voucher];
            }
        });
    }

    const handlePayment = async () => {
        const loadingToast = toast.loading("Completing your payment...")
        try {
            const dataToSend = {
                paymentMethod,
                isPointUsed,
                vouchers: selectedVoucher
            }

            const response = await axios.patch(`/transactions/${eventSlug}/${trxId}`, dataToSend)
            console.log(response);
            toast.dismiss(loadingToast)
            toast.success("Payment complete!")
            router.push("/complete")
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast)
            toast.error("Payment failed, something went wrong")
        }
    }
    return (
        <div className='w-full lg:w-[95%] flex flex-col gap-14'>
            <h1 className='text-3xl font-cabinet-grotesk font-bold'>Payment Method</h1>
            <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-0'>
                <div className='w-full lg:w-[65%] lg:pr-5'>
                    <PaymentMethodList handleSelect={setPaymentMethod} />
                </div>
                <Separator orientation='vertical' className='bg-second-lightest' />
                <div className='w-full lg:w-[35%] lg:pl-5 flex flex-col gap-5'>
                    <VoucherSelect eventSlug={eventSlug} handleSelect={handleVoucherSelect} />
                    <PointPayment handleSelect={setIsPointUsed} userPoint={userPoint} />
                    <OrderSummary
                        selectedVouchers={selectedVoucher}
                        isPointUsed={isPointUsed}

                    />
                    <Button 
                        className='bg-primary-default text-primary-white hover:text-primary-default hover:bg-primary-lightest'
                        onClick={handlePayment}
                    >
                        Pay Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm