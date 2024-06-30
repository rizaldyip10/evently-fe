import { Input } from '@/components/ui/input'
import { TicketPercent } from 'lucide-react'
import React from 'react'

const promos = [
    {name: "IDR 15.000 Discount", discount: 15000},
    {name: "25% Discount", discount: 0.15}
]

const VoucherSelect = () => {
    
    return (
        <div className='w-full flex flex-col border border-light rounded-[4px] p-3 bg-primary-white gap-4'>
            <div className='w-full flex items-center gap-2'>
                <TicketPercent />
                <h1 className='text-xl font-general-sans font-medium'>Use your available voucher</h1>
            </div>
            <div className='w-full flex flex-col gap-2'>
                {
                    promos.map((promo, i) => (
                        <label key={i} className='w-full flex flex-col p-3 border border-light rounded-[4px] gap-1 data-[state=checked]:bg-primary-lightest'>
                            <Input type='checkbox' value={promo.discount} className='hidden data-[state=checked]:bg-primary-lightest' />
                            <h1 className='text-sm font-bold text-primary-default'>Discount</h1>
                            <p className='font-bold'>{ promo.name }</p>
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

export default VoucherSelect