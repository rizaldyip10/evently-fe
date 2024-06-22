import React from 'react'
import promoVisa from '@/assets/image/promo-visa.png'
import promoOvo from '@/assets/image/promo-ovo.png'
import Image from 'next/image'

const HotPromo: React.FC = () => {
    return (
        <div className='w-full flex flex-col justify-center px-5 md:px-12 xl:px-[120px] gap-8 mt-24 mb-10'>
            <div className='w-full'>
                <h1 className='font-bold text-3xl text-default font-cabinet-grotesk'>Hot Promo</h1>
            </div>
            <div className='w-full flex overflow-x-scroll no-scrollbar items-center justify-between gap-8'>
                <Image alt='' src={promoOvo} className='w-[48%] h-full object-cover' />
                <Image alt='' src={promoVisa} className='w-[48%] h-full object-cover' />
            </div>
        </div>
    )
}

export default HotPromo