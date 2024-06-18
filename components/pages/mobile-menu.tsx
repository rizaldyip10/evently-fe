import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import NavbarRoutes from './navbar-routes'
import AuthBtnMobile from './auth-btn-mobile'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={cn(
        "flex-col w-full h-screen bg-primary-lightest absolute top-0 z-50 p-6 justify-between -mx-8",
        isOpen ? "flex animate-slide-in-right" : "hidden animate-slide-out-right"
        )}>
        <div className='w-full flex-col'>
            <div className='w-full flex justify-end'>
                <Button variant='ghost' onClick={onClose}>
                    <X />
                </Button>
            </div>
            <div className='w-full'>
                <NavbarRoutes style='flex justify-center items-start gap-3 flex-col' />
            </div>
        </div>
        <div className='w-full'>
            <AuthBtnMobile containerStyle='flex items-center justify-between gap-2 flex-col' />
        </div>
    </div>
  )
}

export default MobileMenu