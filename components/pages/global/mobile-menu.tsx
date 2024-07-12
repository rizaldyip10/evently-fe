"use client"

import React from 'react'
import { Menu } from 'lucide-react'
import NavbarRoutes from './navbar-routes'
import AuthBtnMobile from './auth-btn-mobile'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '../../ui/sheet'
import { useSession } from 'next-auth/react'
import UserBtnMobile from './user-btn-mobile'

const MobileMenu: React.FC = () => {
    const { data: session } = useSession()
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className='bg-primary-lightest w-full flex flex-col justify-between md:w-1/2'>
                <SheetClose>
                    <NavbarRoutes style='flex justify-center items-start flex-col mt-10' />
                </SheetClose>
                <SheetFooter className='w-full'>
                    <SheetClose className='w-full'>
                        {
                            session ?
                                <UserBtnMobile /> :
                                <AuthBtnMobile containerStyle='flex items-center justify-between gap-2 flex-col w-full' />
                        }
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu