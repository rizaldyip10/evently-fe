import React from 'react'
import { Menu } from 'lucide-react'
import NavbarRoutes from './navbar-routes'
import AuthBtnMobile from './auth-btn-mobile'
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '../../ui/sheet'

const MobileMenu: React.FC = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent className='bg-primary-lightest w-full md:w-1/2'>
                <NavbarRoutes style='flex justify-center items-start flex-col mt-10' />
                <SheetFooter className='mt-5'>
                    <AuthBtnMobile containerStyle='flex items-center justify-between gap-2 flex-col' />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu