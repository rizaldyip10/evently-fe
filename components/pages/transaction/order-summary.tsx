import { Separator } from '@/components/ui/separator'
import { TrxDetailType, TrxItemsType } from '@/constants/type/trx-detail-type'
import { UsedVoucherType } from '@/constants/type/used-voucher-type'
import useActiveTrxDetail from '@/hooks/useActiveTrxDetail'
import { currencyFormatter } from '@/utils/currency-formatter'
import React, { useMemo } from 'react'

interface OrderSummaryProps {
    selectedVouchers: UsedVoucherType[]
    isPointUsed: boolean
    userPoint?: number
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ selectedVouchers, isPointUsed, userPoint }) => {
    const trxId = sessionStorage.getItem("activeTrx")
    const { data, isLoading, error } = useActiveTrxDetail(trxId)

    const totalDiscount = useMemo(() => {
        if (!data) return 0;
        
        const trxDetail: Partial<TrxDetailType> = data;
        const totalPrice = trxDetail?.totalPrice ?? 0;
        
        let discount = 0;
        selectedVouchers.forEach(voucher => {
            if (typeof voucher.discount === 'number') {
                if (voucher.discount < 1) {
                    discount += totalPrice * voucher.discount;
                } else {
                    discount += voucher.discount;
                }
            }
        });
        
        if (isPointUsed && userPoint) {
            discount += userPoint;
        }

        return discount;
    }, [data, selectedVouchers, isPointUsed, userPoint]);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error fetching order summary</div>
    if (!data) return <div>No data available</div>

    const trxDetail: Partial<TrxDetailType> = data;
    const trxItems: TrxItemsType[] = data?.trxItems || [];
    const totalPrice = trxDetail?.totalPrice ?? 0;

    let finalPrice = totalPrice - totalDiscount;
    let pointUsed: number = 0;

    if (userPoint && userPoint > finalPrice) {
        pointUsed = finalPrice;
        finalPrice = 0;
    } else if (userPoint && userPoint < finalPrice) {
        pointUsed = userPoint;
        finalPrice = finalPrice - userPoint;
    }

    return (
        <div className='w-full flex flex-col gap-5 mt-3'>
            <h1 className='text-2xl font-general-sans font-medium'>Order Summary</h1>
            <div className='w-full flex justify-between items-start border-b border-dashed border-primary-light pb-3 mt-5'>
                <h1>Event name:</h1>
                <p className='max-w-[40%] font-bold'>{trxDetail?.event?.name}</p>
            </div>
            <div className='w-full flex items-start justify-between border-b border-dashed border-primary-light pb-3'>
                <p className='font-medium font-general-sans'>Ticket Type</p>
                <div className='w-max flex flex-col font-general-sans font-bold'>
                    {
                        trxItems?.map((item, i) => (
                            <p key={i}>
                                {item.amount} x {item.ticket.name}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className='w-full flex items-start justify-between border-b border-dashed border-primary-light pb-3'>
                <p className='font-medium font-general-sans'>Ticket price</p>
                <div className='w-max flex flex-col font-general-sans font-bold'>
                    {
                        trxItems.map((item, i) => (
                            <p key={i}>
                                {item.amount} x {currencyFormatter(item.ticket.price)}
                            </p>
                        ))
                    }
                </div>
            </div>
            {
                selectedVouchers.length > 0 || isPointUsed ?
                    <div className='w-full flex items-start justify-between border-b border-dashed border-primary-light pb-3'>
                        <p className='font-medium font-general-sans'>Discount</p>
                        <div className='w-max flex flex-col font-general-sans font-bold'>
                            {
                                selectedVouchers.map((voucher, i) => (
                                    <p key={i} className='text-error'>
                                        - {currencyFormatter(trxDetail.totalPrice && voucher.discount * trxDetail?.totalPrice)}
                                    </p>
                                ))
                            }
                            {
                                isPointUsed && pointUsed > 0 ?
                                    <p className='text-error'>- { pointUsed }</p> : null
                            }
                        </div>
                    </div> :
                    null
            }
            <div className='w-full flex items-start justify-between pb-3'>
                <h1 className='font-medium font-general-sans'>Total</h1>
                <h1 className='font-general-sans font-bold'>{currencyFormatter(finalPrice)}</h1>
            </div>
        </div>
    )
}

export default OrderSummary