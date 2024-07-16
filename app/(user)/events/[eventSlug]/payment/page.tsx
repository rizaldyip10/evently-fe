import OrderSummary from '@/components/pages/transaction/order-summary'
import PaymentForm from '@/components/pages/transaction/payment-form'
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
                <PaymentForm eventSlug={params.eventSlug} />
            </div>
        </div>
    )
}

export default PaymentPage