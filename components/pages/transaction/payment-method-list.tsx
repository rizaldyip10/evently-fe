import { Input } from '@/components/ui/input'
import React from 'react'
import Image from 'next/image'
import { bankVA, emoney } from '@/constants/dummy-data/payment-method'

interface PaymentMethodProps {
    handleSelect: (value: string) => void
}

const PaymentMethodList: React.FC<PaymentMethodProps> = ({ handleSelect }) => {
    return (
        <div className='w-full flex flex-col gap-5 lg:gap-10' role='group' aria-labelledby='radio-group'>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='font-medium text-2xl font-general-sans mb-4'>Credit Card</h1>
                <label htmlFor='creditCard' className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'>
                    <Input
                        name='paymentMethod' 
                        id='creditCard' 
                        type='radio' 
                        className='w-4 h-4'
                        value='Credit/Debit Card'
                        onChange={(e) => handleSelect(e.target.value)}
                    />
                    <h1>Credit/Debit Card</h1>
                </label>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='font-medium text-2xl font-general-sans mb-4'>Virtual Account</h1>
                {
                    bankVA.map((bank, i) => (
                        <label
                            key={i}
                            htmlFor={bank.id}
                            className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'
                        >
                            <Input 
                                name='paymentMethod' 
                                id={bank.id} type='radio' 
                                value={bank.value} 
                                className='w-4 h-4'
                                onChange={(e) => handleSelect(e.target.value)} 
                            />
                            <h1>{bank.name}</h1>
                            <Image src={bank.image} alt='logo' className='ml-auto' />
                        </label>
                    ))
                }
            </div>
            <div className='w-full flex flex-col gap-4'>
                <h1 className='font-medium text-2xl font-general-sans mb-4'>Electronic Money</h1>
                {
                    emoney.map((e, i) => (
                        <label
                            key={i}
                            htmlFor={e.id} 
                            className='w-full flex gap-2 items-center border border-light rounded-[4px] bg-primary-white px-4 py-2 cursor-pointer'
                        >
                            <Input 
                                name='paymentMethod' 
                                id={e.id} type='radio' 
                                value={e.value} 
                                className='w-4 h-4'
                                onChange={(e) => handleSelect(e.target.value)}
                            />
                            <h1>{e.name}</h1>
                            <Image src={e.image} alt='logo' className='ml-auto' />
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

export default PaymentMethodList