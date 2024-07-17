import PaymentForm from '@/components/pages/transaction/payment-form'
import TransactionBackBtn from '@/components/pages/transaction/transaction-back-btn'
import { auth } from '@/auth'
import { USER_DEFAULT_REDIRECT } from '@/constants/routes/web-routes'
import { redirect } from 'next/navigation'

const PaymentPage = async ({ params }: { params: { eventSlug: string } }) => {
    const session = await auth()

    if (!session) {
        return redirect(USER_DEFAULT_REDIRECT)
    }
    return (
        <div className='w-full flex flex-col items-center p-5 mb-20 mt-5 lg:mt-10'>
            <div className='flex w-full flex-col lg:flex-row md:max-w-7xl gap-11'>
                <TransactionBackBtn href={`/events/${params.eventSlug}/tickets`} title='Exit Payment Page' desc='Are you sure you want to go back?' />
                <PaymentForm eventSlug={params.eventSlug} />
            </div>
        </div>
    )
}

export default PaymentPage