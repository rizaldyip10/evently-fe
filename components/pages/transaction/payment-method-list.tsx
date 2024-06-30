import { Input } from '@/components/ui/input'
import React from 'react'
import logoMandiri from '@/assets/image/mandiri.png'
import logoBCA from '@/assets/image/bca.png'
import logoBNI from '@/assets/image/bni.png'
import logoGopay from '@/assets/image/gopay.png'
import logoOvo from '@/assets/image/ovo.png'
import logoShopee from '@/assets/image/shopeepay.png'
import Image from 'next/image'

const PaymentMethodList = () => {
    return (
        <div className='w-full flex flex-col gap-10' role='group' aria-labelledby='radio-group'>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='font-medium text-2xl font-general-sans mb-4'>Credit Card</h1>
                <label htmlFor='creditCard' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input name='paymentMethod' id='creditCard' type='radio' className='w-4 h-4' />
                    <h1>Credit/Debit Card</h1>
                </label>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='font-medium text-2xl font-general-sans mb-4'>Virtual Account</h1>
                <label htmlFor='mandiriVA' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input name='paymentMethod' id='mandiriVA' type='radio' className='w-4 h-4' />
                    <h1>Mandiri Virtual Account</h1>
                    <Image src={logoMandiri} alt='' className='ml-auto' />
                </label>
                <label htmlFor='bcaVA' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input name='paymentMethod' id='bcaVA' type='radio' className='w-4 h-4' />
                    <h1>BCA Virtual Account</h1>
                    <Image src={logoBCA} alt='' className='ml-auto' />
                </label>
                <label htmlFor='bniVA' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input name='paymentMethod' id='bniVA' type='radio' className='w-4 h-4' />
                    <h1>BNI Virtual Account</h1>
                    <Image src={logoBNI} alt='' className='ml-auto' />
                </label>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='font-medium text-2xl font-general-sans mb-4'>Electronic Money</h1>
                <label htmlFor='gopay' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input name='paymentMethod' id='gopay' type='radio' className='w-4 h-4' />
                    <h1>Gopay</h1>
                    <Image src={logoGopay} alt='' className='ml-auto' />
                </label>
                <label htmlFor='ovo' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input name='paymentMethod' id='ovo' type='radio' className='w-4 h-4' />
                    <h1>OVO</h1>
                    <Image src={logoOvo} alt='' className='ml-auto' />
                </label>
                <label htmlFor='shopee' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input name='paymentMethod' id='shopee' type='radio' className='w-4 h-4' />
                    <h1>Shopee pay</h1>
                    <Image src={logoShopee} alt='' className='ml-auto' />
                </label>
            </div>
        </div>
    )
}

export default PaymentMethodList