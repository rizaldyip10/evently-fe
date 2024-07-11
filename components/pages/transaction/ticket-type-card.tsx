import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

const TicketTypeCard = () => {
    return (
        <div className='w-full h-80 flex flex-col border border-second-lightest rounded-[4px] items-center gap-8 pt-5 px-7 bg-primary-white'>
            <div className='w-full flex flex-col items-center text-center gap-4'>
                <h1 className='text-2xl font-cabinet-grotesk font-bold'>Paket VIP</h1>
                <p className='text-sm font-general-sans'>
                    1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto
                </p>
            </div>
            <h1 className='font-medium text-2xl font-general-sans'>IDR 371.000</h1>
            <div className='w-full flex justify-center items-center gap-7'>
                <Button className='w-7 h-7 p-0 flex items-center justify-center border border-primary-default rounded-[4px] hover:bg-primary-lightest'>
                    <Minus className='text-primary-default w-3 h-3' />
                </Button>
                <h1 className='text-2xl font-bold font-cabinet-grotesk text-second-lightest'>0</h1>
                <Button className='w-7 h-7 p-0 flex items-center justify-center border border-primary-default rounded-[4px] hover:bg-primary-lightest'>
                    <Plus className='text-primary-default w-3 h-3' />
                </Button>
            </div>
        </div>
    )
}

export default TicketTypeCard