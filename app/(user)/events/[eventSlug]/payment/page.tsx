import OrderSummary from '@/components/pages/transaction/order-summary'
import PaymentMethodList from '@/components/pages/transaction/payment-method-list'
import PointPayment from '@/components/pages/transaction/point-payment'
import TransactionBackBtn from '@/components/pages/transaction/transaction-back-btn'
import VoucherSelect from '@/components/pages/transaction/voucher-select'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PaymentPage = ({ params }: { params: { eventSlug: string } }) => {
    return (
        <div className='w-full flex flex-col items-center p-5 mb-20 mt-5 lg:mt-10'>
            <div className='flex w-full flex-col lg:flex-row md:max-w-7xl gap-11'>
                <TransactionBackBtn href={`/events/${params.eventSlug}/tickets`} title='Exit Payment Page' desc='Are you sure you want to go back?'/>
                <div className='w-full lg:w-[95%] flex flex-col gap-14'>
                    <h1 className='text-3xl font-cabinet-grotesk font-bold'>Payment Method</h1>
                    <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-0'>
                        <div className='w-full lg:w-[65%] lg:pr-5'>
                            <PaymentMethodList />
                        </div>
                        <Separator orientation='vertical' className='bg-second-lightest' />
                        <div className='w-full lg:w-[35%] lg:pl-5 flex flex-col gap-5'>
                            <VoucherSelect />
                            <PointPayment />
                            <OrderSummary />
                            <Button className='bg-primary-default text-primary-white hover:text-primary-default hover:bg-primary-lightest'>
                                Pay Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage