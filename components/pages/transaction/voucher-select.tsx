import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UsedVoucherType } from '@/constants/type/used-voucher-type'
import { TicketPercent } from 'lucide-react'
import useActiveTrxVouchers from '@/hooks/useActiveTrxVouchers'
import React from 'react'

interface VoucherSelectProps {
    eventSlug: string
    handleSelect: (voucher: UsedVoucherType) => void
}

const VoucherSelect: React.FC<VoucherSelectProps> = ({ eventSlug, handleSelect }) => {
    const {
        vouchers,
        isLoading,
        error,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    } = useActiveTrxVouchers(eventSlug)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error fetching voucher list</div>

    return (
        <div className='w-full flex flex-col border border-light rounded-[4px] p-3 bg-primary-white gap-4'>
            <div className='w-full flex items-center gap-2'>
                <TicketPercent />
                <h1 className='text-xl font-general-sans font-medium'>Use your available voucher</h1>
            </div>
            <div className='w-full flex flex-col gap-2'>
                {
                    vouchers.map((voucher, i) => (
                        <label key={i} className='w-full flex p-3 border border-light rounded-[4px] gap-1 data-[state=checked]:bg-primary-lightest items-center justify-between'>
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-sm font-bold text-primary-default'>Discount</h1>
                                <p className='font-bold'>{voucher.name}</p>
                            </div>
                            <Input 
                                type='checkbox' 
                                className='w-4 h-4' 
                                onChange={(e) => handleSelect({ 
                                    name: voucher.name, 
                                    discount: e.target.checked ? Number(voucher.discount) : 0 
                                })}
                            />
                        </label>
                    ))
                }
                {
                    hasNextPage &&
                        <Button 
                            className='bg-primary-white border border-primary-default text-primary-default rounded-[4px]'
                            onClick={() => fetchNextPage()}
                        >
                            See more
                        </Button>
                }
            </div>
        </div>
    )
}

export default VoucherSelect