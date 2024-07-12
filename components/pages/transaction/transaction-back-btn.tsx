"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface TransactionBackBtnProps {
    title: string
    desc: string
    href: string
}

const TransactionBackBtn: React.FC<TransactionBackBtnProps> = ({ href, title, desc }) => {
    const router = useRouter()

    const onClick = () => {
        router.replace(href)
    }
    return (
        <Dialog>
            <DialogTrigger className='w-11 h-11 flex items-center justify-center border border-primary-default rounded-[4px] bg-primary-white'>
                <ArrowLeft className='w-5 h-5 text-primary-default' />
            </DialogTrigger>
            <DialogContent className='bg-primary-white rounded-[4px] flex flex-col gap-5'>
                <DialogHeader>
                    <DialogTitle className='text-2xl'>{ title }</DialogTitle>
                </DialogHeader>
                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-xl'>{ desc }</h1>
                    <div className='w-full flex items-center gap-2 justify-end'>
                        <Button className='bg-primary-default text-primary-white rounded-[4px] hover:bg-primary-white hover:text-primary-default hover:border hover:border-primary-default' onClick={onClick}>
                            Yes
                        </Button>
                        <DialogClose asChild>
                            <Button className='bg-error text-primary-white rounded-[4px] hover:bg-primary-white hover:text-error hover:border hover:border-error'>
                                No
                            </Button>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default TransactionBackBtn