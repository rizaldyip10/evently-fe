"use client"

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import axios from '@/utils/axios'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { UserSessionProps } from '@/constants/type/user-session-props';
import { useSession } from 'next-auth/react';

interface TransactionBackBtnProps {
    title: string
    desc: string
    href: string
}

const TransactionBackBtn: React.FC<TransactionBackBtnProps> = ({ href, title, desc }) => {
    const router = useRouter()
    const trxId = sessionStorage.getItem("activeTrx")
    const [showBackConfirmation, setShowBackConfirmation] = useState(false);
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            event.preventDefault();
            setShowBackConfirmation(true);
        };

        window.history.pushState(null, '', window.location.pathname);
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const cancelTransaction = async () => {
        const loadingToast = toast.loading("Cancelling transaction...")
        try {
            await axios.delete(`transactions/user/${trxId}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            sessionStorage.removeItem("activeTrx")
            toast.dismiss(loadingToast)
            toast.success("Transaction cancelled successfully")
            router.push(href)
        } catch (error) {
            console.error("Failed to cancel transaction:", error);
            toast.dismiss(loadingToast)
            toast.error("Failed to cancel transaction")
        }
    };

    const handleConfirmBack = () => {
        setShowBackConfirmation(false);
        cancelTransaction();
    };

    const handleCancelBack = () => {
        setShowBackConfirmation(false);
        window.history.pushState(null, '', window.location.pathname);
    };

    return (
        <>
            <Dialog>
                <DialogTrigger className='w-11 h-11 flex items-center justify-center border border-primary-default rounded-[4px] bg-primary-white'>
                    <ArrowLeft className='w-5 h-5 text-primary-default' />
                </DialogTrigger>
                <DialogContent className='bg-primary-white rounded-[4px] flex flex-col gap-5'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl'>{title}</DialogTitle>
                    </DialogHeader>
                    <div className='w-full flex flex-col gap-5'>
                        <h1 className='text-xl'>{desc}</h1>
                        <div className='w-full flex items-center gap-2 justify-end'>
                            <Button className='bg-primary-default text-primary-white rounded-[4px] hover:bg-primary-white hover:text-primary-default hover:border hover:border-primary-default' onClick={cancelTransaction}>
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

            {showBackConfirmation && (
                <Dialog open={showBackConfirmation} onOpenChange={setShowBackConfirmation}>
                    <DialogContent className='bg-primary-white rounded-[4px] flex flex-col gap-5'>
                        <DialogHeader>
                            <DialogTitle className='text-2xl'>Confirm Navigation</DialogTitle>
                        </DialogHeader>
                        <div className='w-full flex flex-col gap-5'>
                            <h1 className='text-xl'>Are you sure you want to go back? Your transaction will be cancelled.</h1>
                            <div className='w-full flex items-center gap-2 justify-end'>
                                <Button className='bg-primary-default text-primary-white rounded-[4px] hover:bg-primary-white hover:text-primary-default hover:border hover:border-primary-default' onClick={handleConfirmBack}>
                                    Yes
                                </Button>
                                <Button className='bg-error text-primary-white rounded-[4px] hover:bg-primary-white hover:text-error hover:border hover:border-error' onClick={handleCancelBack}>
                                    No
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
}

export default TransactionBackBtn