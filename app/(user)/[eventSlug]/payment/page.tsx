import OrderSummary from '@/components/pages/transaction/order-summary'
import PaymentMethodList from '@/components/pages/transaction/payment-method-list'
import VoucherSelect from '@/components/pages/transaction/voucher-select'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PaymentPage = ({ params }: { params: { eventSlug: string } }) => {
    return (
        <div className='w-full flex flex-col items-center p-5 mb-20 mt-10'>
            <div className='flex w-full md:max-w-7xl gap-11'>
                <Link href={`/${params.eventSlug}/tickets`} className='w-11 h-11 flex items-center justify-center border border-primary-default rounded-[4px] bg-primary-white'>
                    <ArrowLeft className='w-5 h-5 text-primary-default' />
                </Link>
                <div className='w-full lg:w-[95%] flex flex-col gap-14'>
                    <h1 className='text-3xl font-cabinet-grotesk font-bold'>Payment Method</h1>
                    <div className='w-full flex'>
                        <div className='w-[65%] pr-5'>
                            <PaymentMethodList />
                        </div>
                        <Separator orientation='vertical' className='bg-second-lightest' />
                        <div className='w-[35%] pl-5 flex flex-col gap-5'>
                            <VoucherSelect />
                            <OrderSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage